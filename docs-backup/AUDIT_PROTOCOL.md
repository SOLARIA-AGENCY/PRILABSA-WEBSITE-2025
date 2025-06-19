# ⚡ PROMPT ECO-Λ: AUDITORÍA GENERAL AUTOMATIZADA – FRAMEWORK SOLARIA.AGENCY

**Solaria Agency – Auditoría Interna Integral**  
**Versión Protocolo:** v1.2  
**Fecha de Ejecución:** [autogenerado]  
**Auditor:** ECO-Λ Lambda

---

## 1. REVISIÓN DE SEGURIDAD

### 1.1 Análisis de Dependencias
- Ejecuta:
  ```bash
  npm audit
  npm outdated
  ```
- Corrige cualquier vulnerabilidad o dependencia desactualizada.

### 1.2 Validación de Configuración Sensible
- Revisa archivos `.gitignore`, `env.example` y `.env`:
  - Verifica que `.env*` y archivos sensibles NO estén versionados.
  - Confirma presencia y actualización de `env.example`.

### 1.3 Revisión de Código Fuente
- Busca:
  - Credenciales hardcodeadas.
  - Usos inseguros de `any` en TypeScript.
  - Sanitización de entradas de usuario.
  - Firma interna Solaria.agency en encabezados de archivos/README.

### 1.4 Headers y Configuración de Seguridad
- Revisa configuración de Vite/servidor para asegurar headers:
  - Content-Security-Policy
  - Strict-Transport-Security
  - X-Frame-Options
  - X-Content-Type-Options
  - Referrer-Policy
  - Eliminación de X-Powered-By y otros headers de versión.
  - Verifica que HTTPS sea obligatorio.

---

## 2. REVISIÓN DE PERFORMANCE Y OPTIMIZACIÓN

### 2.1 Análisis de Bundle y Carga
- Ejecuta:
  ```bash
  npm run build
  ```
- Analiza tamaño final, code splitting, y lazy loading.

### 2.2 Testing y Cobertura
- Ejecuta:
  ```bash
  npm run test
  ```
- Evalúa cobertura:
  - Unitarios, integración y E2E.
  - Objetivo: >=80%.

### 2.3 Linting y Calidad de Código
- Ejecuta:
  ```bash
  npm run lint
  ```
- Resuelve todos los errores/warnings.

### 2.4 Accesibilidad, SEO y Buenas Prácticas
- Audita con Lighthouse y Axe:
  - Accesibilidad (alt, contraste, navegación teclado)
  - SEO (meta, sitemap, robots.txt)
  - Performance (LCP, CLS, FID)
  - Security headers (report only)

---

## 3. METADATOS, FIRMA Y CUMPLIMIENTO INTERNO
- Asegura que cada archivo y README tengan:
  - Firma Solaria.agency (en comentario, nunca en UI)
  - Fecha y autoría interna.
  - Incluye metadatos en package.json, manifest y robots.txt SOLO para crawling/auditoría.
  - Confirma branding interno y copyright.

---

## 4. REPORTE AUTOMATIZADO
- Genera informe con:
  - **Hallazgos Críticos**: Vulnerabilidades, headers faltantes, archivos sensibles versionados, cobertura <80%, etc.
  - **Hallazgos Menores**: Deprecaciones, mejoras de optimización, assets no óptimos.
  - **Positivos**: Seguridad OK, tests OK, arquitectura modular, compliance branding.
  - **Resumen ejecutivo**, tabla de score y estado por categoría:

| Aspecto | Estado | Score |
|---------|--------|-------|
| Seguridad | ✅/🟡/🔴 | x/10 |
| Testing | ✅/🟡/🔴 | x/10 |
| Performance | ✅/🟡/🔴 | x/10 |
| Accesibilidad | ✅/🟡/🔴 | x/10 |
| Branding | ✅/🟡/🔴 | x/10 |

---

## 5. RECOMENDACIONES Y ACCIONES
- Lista priorizada de acciones correctivas (críticas > altas > medias).
- Sugerencias técnicas detalladas.
- Check de cumplimiento tras cada corrección.

---

## 6. DOCUMENTACIÓN DE CIERRE
- Registro en `SECURITY_AUDIT.md` con versión, fecha, autor, acciones aplicadas y score final.
- Commit firmado:
  ```bash
  git add . && git commit -m "audit: [resumen] [score] [fecha]" && git push
  ```

---

**Nota:**
- Ningún deploy debe ser considerado "Go-Live" si no hay score final >=8/10 y cumplimiento al 100% de puntos críticos.
- Esta auditoría debe ejecutarse tras cada gran release y periódicamente en CI/CD.

---

**¿Ejecutar auditoría automatizada ahora?**  
**¿Desea un reporte resumen o detallado, Comandante?**

---

*Documento de Auditoría Interna - Solaria.agency*  
*Creado: 2024 - ECO-Λ Lambda* 