#!/usr/bin/env node

/**
 * 🔥 NAZCAMEDIA-ECO Working Web Scraper
 * Scraping funcional usando JavaScript puro
 */

const fs = require('fs').promises;
const path = require('path');

console.log('🔥 NAZCAMEDIA-ECO Working Web Scraper');
console.log('📍 Iniciando scraping de PRILABSA...');
console.log('─'.repeat(60));

async function main() {
  try {
    console.log('🐶 Importando Puppeteer...');
    const puppeteer = require('puppeteer');
    
    console.log('🚀 Lanzando navegador...');
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
    });

    const page = await browser.newPage();
    await page.setViewport({ width: 1920, height: 1080 });

    const OUTPUT_DIR = path.join(__dirname, '../scraping-data');
    
    // Crear directorios
    console.log('📁 Creando directorios...');
    await fs.mkdir(path.join(OUTPUT_DIR, 'content/html'), { recursive: true });
    await fs.mkdir(path.join(OUTPUT_DIR, 'content/text'), { recursive: true });
    await fs.mkdir(path.join(OUTPUT_DIR, 'images/screenshots'), { recursive: true });
    await fs.mkdir(path.join(OUTPUT_DIR, 'structure'), { recursive: true });

    const urls = [
      { url: 'https://prilabsa.com', name: 'inicio' },
      { url: 'https://prilabsa.com/productos/', name: 'productos' },
      { url: 'https://prilabsa.com/productos/page/2/', name: 'productos-p2' },
      { url: 'https://prilabsa.com/productos/page/3/', name: 'productos-p3' },
      { url: 'https://prilabsa.com/quienes-somos', name: 'quienes-somos' },
      { url: 'https://prilabsa.com/oficinas', name: 'oficinas' },
      { url: 'https://prilabsa.com/contactanos', name: 'contactanos' }
    ];

    const allData = [];

    for (const { url, name } of urls) {
      try {
        console.log(`📄 Procesando: ${name} (${url})`);
        
        await page.goto(url, { 
          waitUntil: 'networkidle2',
          timeout: 30000
        });
        
        await new Promise(resolve => setTimeout(resolve, 2000));

        const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
        const filename = `${name}-${timestamp}`;

        // Extraer contenido
        const result = await page.evaluate(() => {
          return {
            title: document.title,
            url: window.location.href,
            html: document.documentElement.outerHTML,
            text: document.body.innerText,
            links: Array.from(document.querySelectorAll('a')).map(a => ({
              text: (a.textContent || '').trim(),
              href: a.href
            })).filter(link => link.text && link.href).slice(0, 50), // Limitar para evitar archivos muy grandes
            images: Array.from(document.querySelectorAll('img')).map(img => ({
              src: img.src,
              alt: img.alt || ''
            })).filter(img => img.src),
            headings: Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6')).map(h => ({
              level: h.tagName.toLowerCase(),
              text: (h.textContent || '').trim()
            })).filter(h => h.text)
          };
        });

        // Guardar HTML
        await fs.writeFile(
          path.join(OUTPUT_DIR, 'content/html', `${filename}.html`),
          result.html
        );

        // Guardar texto
        await fs.writeFile(
          path.join(OUTPUT_DIR, 'content/text', `${filename}.txt`),
          result.text
        );

        // Screenshot
        await page.screenshot({
          path: path.join(OUTPUT_DIR, 'images/screenshots', `${filename}.png`),
          fullPage: true
        });

        const pageData = {
          name,
          url: result.url,
          title: result.title,
          timestamp,
          stats: {
            linksCount: result.links.length,
            imagesCount: result.images.length,
            headingsCount: result.headings.length,
            textLength: result.text.length,
            htmlLength: result.html.length
          },
          links: result.links,
          images: result.images,
          headings: result.headings
        };

        allData.push(pageData);

        console.log(`  ✅ ${name}: ${result.images.length} imágenes, ${result.links.length} enlaces, ${result.headings.length} encabezados`);

      } catch (error) {
        console.error(`❌ Error procesando ${name}:`, error.message);
      }
    }

    await browser.close();

    // Generar reporte final
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const totalImages = allData.reduce((sum, page) => sum + page.stats.imagesCount, 0);
    const totalLinks = allData.reduce((sum, page) => sum + page.stats.linksCount, 0);

    const report = `# 📊 Reporte de Web Scraping - PRILABSA

## 🎯 Resumen Ejecutivo

**NAZCAMEDIA-ECO Working Web Scraper** ha completado la extracción del sitio web de PRILABSA.

## 📈 Estadísticas Generales

- **📄 Páginas procesadas**: ${allData.length}
- **🖼️ Imágenes totales**: ${totalImages}
- **🔗 Enlaces totales**: ${totalLinks}

## 📄 Páginas Extraídas

${allData.map((page, index) => 
  `${index + 1}. **${page.title}**\n   - URL: ${page.url}\n   - Imágenes: ${page.stats.imagesCount}\n   - Enlaces: ${page.stats.linksCount}\n   - Encabezados: ${page.stats.headingsCount}`
).join('\n\n')}

## 🔧 Archivos Generados

\`\`\`
scraping-data/
├── content/
│   ├── html/ (${allData.length} archivos HTML)
│   └── text/ (${allData.length} archivos de texto)
├── images/
│   └── screenshots/ (${allData.length} capturas)
└── structure/ (datos estructurados)
\`\`\`

## ✅ Estado del Proyecto

- [x] **Páginas principales extraídas**
- [x] **Catálogo de productos mapeado**
- [x] **Contenido listo para migración**

---
*Reporte generado por NAZCAMEDIA-ECO Working Web Scraper*  
*Fecha: ${new Date().toLocaleDateString()}*  
*Timestamp: ${timestamp}*
`;

    await fs.writeFile(
      path.join(OUTPUT_DIR, `working-scraping-report-${timestamp}.md`),
      report
    );

    await fs.writeFile(
      path.join(OUTPUT_DIR, 'structure', `working-data-${timestamp}.json`),
      JSON.stringify(allData, null, 2)
    );

    console.log('✅ Scraping completado exitosamente');
    console.log(`📊 Páginas procesadas: ${allData.length}`);
    console.log(`🖼️ Imágenes totales: ${totalImages}`);
    console.log(`🔗 Enlaces totales: ${totalLinks}`);
    console.log(`📁 Archivos guardados en: ${OUTPUT_DIR}`);
    console.log(`📊 Reporte: working-scraping-report-${timestamp}.md`);

  } catch (error) {
    console.error('❌ Error en scraping:', error);
  }
}

main();