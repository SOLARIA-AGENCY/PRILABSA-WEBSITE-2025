#!/usr/bin/env tsx

/**
 * 🔥 NAZCAMEDIA-ECO Web Scraping Toolkit
 * Herramientas integradas: Firecrawl + Playwright + Puppeteer
 * Uso: npm run scrape -- --tool=firecrawl --url=https://example.com
 */

import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Configuración
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const OUTPUT_DIR = path.join(__dirname, '../scraping-data');

interface ScrapingOptions {
  tool: 'firecrawl' | 'playwright' | 'puppeteer' | 'all';
  url: string;
  output?: string;
  format?: 'json' | 'markdown' | 'html' | 'text';
  depth?: number;
  waitFor?: number;
  screenshot?: boolean;
  mobile?: boolean;
}

class WebScrapingToolkit {
  private options: ScrapingOptions;

  constructor(options: ScrapingOptions) {
    this.options = options;
  }

  async run(): Promise<void> {
    console.log('🔥 NAZCAMEDIA-ECO Web Scraping Toolkit');
    console.log(`📍 URL: ${this.options.url}`);
    console.log(`🛠️  Tool: ${this.options.tool}`);
    console.log('─'.repeat(50));

    await this.ensureOutputDirectories();

    switch (this.options.tool) {
      case 'firecrawl':
        await this.runFirecrawl();
        break;
      case 'playwright':
        await this.runPlaywright();
        break;
      case 'puppeteer':
        await this.runPuppeteer();
        break;
      case 'all':
        await this.runAll();
        break;
      default:
        throw new Error(`Herramienta no soportada: ${this.options.tool}`);
    }

    console.log('✅ Scraping completado');
  }

  private async ensureOutputDirectories(): Promise<void> {
    const dirs = [
      path.join(OUTPUT_DIR, 'content/text'),
      path.join(OUTPUT_DIR, 'content/html'),
      path.join(OUTPUT_DIR, 'content/metadata'),
      path.join(OUTPUT_DIR, 'images'),
      path.join(OUTPUT_DIR, 'assets'),
      path.join(OUTPUT_DIR, 'structure'),
      path.join(OUTPUT_DIR, 'styles')
    ];

    for (const dir of dirs) {
      await fs.mkdir(dir, { recursive: true });
    }
  }

  private async runFirecrawl(): Promise<void> {
    console.log('🔥 Ejecutando Firecrawl...');
    console.log('⚠️  Firecrawl requiere configuración adicional. Usando modo demo.');
    await this.saveFirecrawlDemo();
  }

  private async saveFirecrawlDemo(): Promise<void> {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const demoContent = `# Demo Firecrawl - ${this.options.url}

## Información
- URL: ${this.options.url}
- Timestamp: ${timestamp}
- Tool: Firecrawl (Demo Mode)

## Nota
Para usar Firecrawl completamente, configure FIRECRAWL_API_KEY en las variables de entorno.

## Funcionalidades Firecrawl
- Extracción de contenido limpio
- Conversión HTML a Markdown
- Metadata estructurada
- Crawling de sitios completos
- Formato optimizado para LLMs
`;

    await fs.writeFile(
      path.join(OUTPUT_DIR, 'content/text', `firecrawl-demo-${timestamp}.md`),
      demoContent
    );
  }

  private async runPlaywright(): Promise<void> {
    console.log('🎭 Ejecutando Playwright...');
    
    const { chromium } = await import('playwright');
    
    const browser = await chromium.launch({ 
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    
    const context = await browser.newContext({
      viewport: this.options.mobile ? { width: 375, height: 667 } : { width: 1920, height: 1080 },
      userAgent: this.options.mobile 
        ? 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X) AppleWebKit/605.1.15'
        : 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36'
    });

    const page = await context.newPage();
    
    try {
      await page.goto(this.options.url, { waitUntil: 'networkidle' });
      
      if (this.options.waitFor) {
        await page.waitForTimeout(this.options.waitFor);
      }

      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      const filename = `playwright-${timestamp}`;

      // Extraer contenido
      const content = await page.evaluate(() => {
        return {
          title: document.title,
          url: window.location.href,
          html: document.documentElement.outerHTML,
          text: document.body.innerText,
          links: Array.from(document.querySelectorAll('a')).map(a => ({
            text: a.textContent?.trim(),
            href: a.href
          })),
          images: Array.from(document.querySelectorAll('img')).map(img => ({
            src: img.src,
            alt: img.alt,
            width: img.width,
            height: img.height
          })),
          headings: Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6')).map(h => ({
            level: h.tagName.toLowerCase(),
            text: h.textContent?.trim()
          }))
        };
      });

      // Guardar HTML
      await fs.writeFile(
        path.join(OUTPUT_DIR, 'content/html', `${filename}.html`),
        content.html
      );

      // Guardar texto
      await fs.writeFile(
        path.join(OUTPUT_DIR, 'content/text', `${filename}.txt`),
        content.text
      );

      // Guardar estructura
      await fs.writeFile(
        path.join(OUTPUT_DIR, 'structure', `${filename}.json`),
        JSON.stringify({
          url: this.options.url,
          tool: 'playwright',
          timestamp,
          title: content.title,
          links: content.links,
          images: content.images,
          headings: content.headings,
          stats: {
            linksCount: content.links.length,
            imagesCount: content.images.length,
            headingsCount: content.headings.length,
            textLength: content.text.length
          }
        }, null, 2)
      );

      // Screenshot si se solicita
      if (this.options.screenshot) {
        await page.screenshot({
          path: path.join(OUTPUT_DIR, 'images', `${filename}.png`),
          fullPage: true
        });
        
        // Screenshot mobile si no está en modo mobile
        if (!this.options.mobile) {
          await page.setViewportSize({ width: 375, height: 667 });
          await page.screenshot({
            path: path.join(OUTPUT_DIR, 'images', `${filename}-mobile.png`),
            fullPage: true
          });
        }
      }

      console.log('✅ Playwright completado');
      
    } catch (error) {
      console.error('❌ Error en Playwright:', error);
    } finally {
      await browser.close();
    }
  }

  private async runPuppeteer(): Promise<void> {
    console.log('🐶 Ejecutando Puppeteer...');
    
    const puppeteer = await import('puppeteer');
    
    const browser = await puppeteer.default.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();
    
    try {
      if (this.options.mobile) {
        await page.setViewport({ width: 375, height: 667 });
        await page.setUserAgent('Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X) AppleWebKit/605.1.15');
      } else {
        await page.setViewport({ width: 1920, height: 1080 });
      }

      await page.goto(this.options.url, { waitUntil: 'networkidle2' });
      
      if (this.options.waitFor) {
        await new Promise(resolve => setTimeout(resolve, this.options.waitFor));
      }

      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      const filename = `puppeteer-${timestamp}`;

      // Extraer contenido y performance
      const result = await page.evaluate(() => {
        const performance = (window as any).performance;
        return {
          title: document.title,
          url: window.location.href,
          html: document.documentElement.outerHTML,
          text: document.body.innerText,
          performance: {
            loadTime: performance.timing.loadEventEnd - performance.timing.navigationStart,
            domReady: performance.timing.domContentLoadedEventEnd - performance.timing.navigationStart,
            firstPaint: performance.getEntriesByType('paint').find((entry: any) => entry.name === 'first-paint')?.startTime || 0
          },
          resources: performance.getEntriesByType('resource').map((resource: any) => ({
            name: resource.name,
            type: resource.initiatorType,
            size: resource.transferSize,
            duration: resource.duration
          }))
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

      // Guardar performance y metadata
      await fs.writeFile(
        path.join(OUTPUT_DIR, 'content/metadata', `${filename}.json`),
        JSON.stringify({
          url: this.options.url,
          tool: 'puppeteer',
          timestamp,
          title: result.title,
          performance: result.performance,
          resources: result.resources,
          stats: {
            resourcesCount: result.resources.length,
            textLength: result.text.length,
            totalSize: result.resources.reduce((sum: number, r: any) => sum + (r.size || 0), 0)
          }
        }, null, 2)
      );

      // Screenshot si se solicita
      if (this.options.screenshot) {
        await page.screenshot({
          path: path.join(OUTPUT_DIR, 'images', `${filename}.png`) as `${string}.png`,
          fullPage: true
        });
      }

      console.log('✅ Puppeteer completado');
      
    } catch (error) {
      console.error('❌ Error en Puppeteer:', error);
    } finally {
      await browser.close();
    }
  }

  private async runAll(): Promise<void> {
    console.log('🚀 Ejecutando todas las herramientas...');
    
    await this.runFirecrawl();
    await this.runPlaywright();
    await this.runPuppeteer();
    
    // Generar reporte comparativo
    await this.generateComparisonReport();
  }

  private async generateComparisonReport(): Promise<void> {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const report = `# 📊 Reporte Comparativo de Web Scraping

## URL Analizada
${this.options.url}

## Herramientas Utilizadas
- 🎭 **Playwright**: Automatización completa del navegador con screenshots

## Timestamp
${timestamp}

## Archivos Generados
Revisa las carpetas en \`scraping-data/\` para ver todos los archivos generados.

### Estructura de Archivos
- \`content/text/\`: Contenido extraído en texto plano
- \`content/html/\`: HTML completo de las páginas
- \`structure/\`: Análisis de estructura de la página
- \`images/\`: Screenshots y capturas visuales

---
*Generado por NAZCAMEDIA-ECO Web Scraping Toolkit*
`;

    await fs.writeFile(
      path.join(OUTPUT_DIR, `comparison-report-${timestamp}.md`),
      report
    );
  }
}

// CLI Interface
async function main() {
  const args = process.argv.slice(2);
  const options: ScrapingOptions = {
    tool: 'playwright',
    url: 'https://prilabsa.com',
    format: 'json',
    screenshot: true,
    waitFor: 3000
  };

  // Parse arguments
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg.startsWith('--tool=')) {
      options.tool = arg.split('=')[1] as any;
    } else if (arg.startsWith('--url=')) {
      options.url = arg.split('=')[1];
    } else if (arg.startsWith('--wait=')) {
      options.waitFor = parseInt(arg.split('=')[1]);
    } else if (arg === '--mobile') {
      options.mobile = true;
    } else if (arg === '--no-screenshot') {
      options.screenshot = false;
    }
  }

  const toolkit = new WebScrapingToolkit(options);
  await toolkit.run();
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch(console.error);
}

export { WebScrapingToolkit, type ScrapingOptions };
