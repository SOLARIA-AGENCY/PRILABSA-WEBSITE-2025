#!/usr/bin/env tsx

/**
 * 🔥 NAZCAMEDIA-ECO Content Analyzer
 * Analiza el contenido extraído del sitio de PRILABSA
 */

import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const SCRAPING_DIR = path.join(__dirname, '../scraping-data');

interface ScrapedData {
  title: string;
  links: Array<{ text: string; href: string }>;
  images: Array<{ src: string; alt: string }>;
  headings: Array<{ level: string; text: string }>;
}

class ContentAnalyzer {
  async run(): Promise<void> {
    console.log('🔥 NAZCAMEDIA-ECO Content Analyzer');
    console.log('─'.repeat(50));

    // Buscar el archivo JSON más reciente
    const structureFiles = await fs.readdir(path.join(SCRAPING_DIR, 'structure'));
    const jsonFiles = structureFiles.filter(f => f.endsWith('.json'));
    
    if (jsonFiles.length === 0) {
      console.log('❌ No se encontraron archivos de estructura');
      return;
    }

    const latestFile = jsonFiles.sort().pop()!;
    console.log(`📄 Analizando: ${latestFile}`);

    const data: ScrapedData = JSON.parse(
      await fs.readFile(path.join(SCRAPING_DIR, 'structure', latestFile), 'utf-8')
    );

    await this.analyzeContent(data);
    await this.generateReport(data, latestFile);
    
    console.log('✅ Análisis completado');
  }

  private async analyzeContent(data: ScrapedData): Promise<void> {
    console.log('\n📊 ANÁLISIS DE CONTENIDO');
    console.log('─'.repeat(30));
    
    // Análisis básico
    console.log(`📝 Título: ${data.title}`);
    console.log(`🔗 Enlaces: ${data.links.length}`);
    console.log(`🖼️  Imágenes: ${data.images.length}`);
    console.log(`📋 Encabezados: ${data.headings.length}`);

    // Análisis de navegación
    const uniqueLinks = [...new Set(data.links.map(l => l.href))];
    const internalLinks = uniqueLinks.filter(href => href.includes('prilabsa.com'));
    const externalLinks = uniqueLinks.filter(href => !href.includes('prilabsa.com') && !href.startsWith('#') && !href.startsWith('javascript:'));
    
    console.log(`\n🧭 NAVEGACIÓN`);
    console.log(`├─ Enlaces únicos: ${uniqueLinks.length}`);
    console.log(`├─ Enlaces internos: ${internalLinks.length}`);
    console.log(`└─ Enlaces externos: ${externalLinks.length}`);

    // Análisis de secciones principales
    const mainSections = data.links
      .filter(l => l.href.includes('prilabsa.com/') && !l.href.includes('#'))
      .map(l => l.href.split('/').filter(p => p).pop())
      .filter(s => s && s !== 'prilabsa.com');

    const uniqueSections = [...new Set(mainSections)];
    
    console.log(`\n📂 SECCIONES PRINCIPALES`);
    uniqueSections.forEach(section => {
      console.log(`├─ ${section}`);
    });

    // Análisis de marcas/partners
    const brandImages = data.images.filter(img => 
      img.alt && (
        img.alt.includes('logo') || 
        img.alt.includes('brand') ||
        img.src.includes('logo')
      )
    );

    console.log(`\n🏢 MARCAS Y PARTNERS`);
    console.log(`├─ Logos identificados: ${brandImages.length}`);
    brandImages.slice(0, 10).forEach(brand => {
      console.log(`├─ ${brand.alt || 'Logo sin descripción'}`);
    });
  }

  private async generateReport(data: ScrapedData, filename: string): Promise<void> {
    const timestamp = new Date().toISOString();
    
    // Análisis de enlaces
    const uniqueLinks = [...new Set(data.links.map(l => l.href))];
    const internalLinks = uniqueLinks.filter(href => href.includes('prilabsa.com'));
    const externalLinks = uniqueLinks.filter(href => !href.includes('prilabsa.com') && !href.startsWith('#') && !href.startsWith('javascript:'));
    
    // Análisis de secciones
    const mainSections = data.links
      .filter(l => l.href.includes('prilabsa.com/') && !l.href.includes('#'))
      .map(l => {
        const parts = l.href.split('/').filter(p => p);
        return parts[parts.length - 1] || parts[parts.length - 2];
      })
      .filter(s => s && s !== 'prilabsa.com');

    const uniqueSections = [...new Set(mainSections)];

    // Análisis de productos
    const productCategories = data.links
      .filter(l => l.href.includes('categoria-producto'))
      .map(l => ({
        name: l.text,
        url: l.href,
        category: l.href.split('/').pop()
      }));

    // Análisis de marcas
    const brandImages = data.images.filter(img => 
      img.alt && (
        img.alt.includes('logo') || 
        img.src.includes('logo') ||
        img.alt.includes('brand')
      )
    );

    const report = `# 📊 Análisis de Contenido - PRILABSA Website

## 🎯 Resumen Ejecutivo
**Fecha de análisis**: ${timestamp}  
**Archivo fuente**: ${filename}  
**Sitio web**: https://prilabsa.com

## 📈 Métricas Generales
- **Título del sitio**: ${data.title}
- **Total de enlaces**: ${data.links.length}
- **Enlaces únicos**: ${uniqueLinks.length}
- **Enlaces internos**: ${internalLinks.length}
- **Enlaces externos**: ${externalLinks.length}
- **Total de imágenes**: ${data.images.length}
- **Total de encabezados**: ${data.headings.length}

## 🧭 Estructura de Navegación

### Secciones Principales
${uniqueSections.map(section => `- **${section}**`).join('\n')}

### Enlaces Internos Principales
${internalLinks.slice(0, 10).map(link => `- [${link}](${link})`).join('\n')}

## 🛍️ Categorías de Productos
${productCategories.map(cat => `- **${cat.name}**: \`${cat.category}\``).join('\n')}

## 🏢 Marcas y Partners
**Total de logos identificados**: ${brandImages.length}

${brandImages.slice(0, 15).map(brand => `- ${brand.alt || 'Logo sin descripción'}`).join('\n')}
${brandImages.length > 15 ? `\n... y ${brandImages.length - 15} marcas más` : ''}

## 📋 Estructura de Encabezados
${data.headings.map(h => `- **${h.level.toUpperCase()}**: ${h.text}`).join('\n')}

## 🔍 Análisis de Contenido

### Fortalezas Identificadas
- ✅ Sitio web multiidioma (ES, EN, PT)
- ✅ Amplio portafolio de productos (Alimentos, Probióticos, Aditivos, Químicos, Equipos)
- ✅ Presencia internacional (múltiples países en América)
- ✅ Más de 32 años de experiencia
- ✅ Enfoque en sector acuícola
- ✅ Múltiples marcas y partners internacionales

### Oportunidades de Mejora
- 🔄 Optimización de estructura de enlaces (algunos duplicados)
- 🔄 Mejora en descripciones alt de imágenes
- 🔄 Consolidación de navegación principal

## 📊 Recomendaciones para el Nuevo Sitio

### 1. Estructura de Navegación
\`\`\`
INICIO
├── QUIENES SOMOS
├── PRODUCTOS
│   ├── Alimentos
│   ├── Probióticos  
│   ├── Aditivos
│   ├── Químicos
│   └── Equipos
├── OFICINAS/AGENCIAS
├── MARCAS Y PARTNERS
├── CONTACTO
└── TRABAJA CON NOSOTROS
\`\`\`

### 2. Contenido Clave a Migrar
- Historia y experiencia (32+ años)
- Presencia internacional
- Catálogo completo de productos
- Información de contacto por región
- Galería de marcas y partners

### 3. Mejoras Técnicas
- Optimización SEO por categoría de producto
- Implementación de schema markup para productos
- Mejora en velocidad de carga
- Responsive design optimizado
- Integración con sistemas de gestión

## 🎯 Próximos Pasos

1. **Migración de Contenido**: Usar este análisis para estructurar el nuevo sitio
2. **Optimización SEO**: Implementar mejores prácticas basadas en la estructura actual
3. **UX/UI**: Mejorar la experiencia de usuario manteniendo la funcionalidad existente
4. **Testing**: Validar que toda la funcionalidad crítica esté presente

---
*Análisis generado por NAZCAMEDIA-ECO Content Analyzer*
*Datos extraídos de: ${filename}*
`;

    await fs.writeFile(
      path.join(SCRAPING_DIR, `content-analysis-${timestamp.replace(/[:.]/g, '-')}.md`),
      report
    );

    console.log(`\n📄 Reporte generado: content-analysis-${timestamp.replace(/[:.]/g, '-')}.md`);
  }
}

// CLI Interface
async function main() {
  const analyzer = new ContentAnalyzer();
  await analyzer.run();
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch(console.error);
}

export { ContentAnalyzer }; 