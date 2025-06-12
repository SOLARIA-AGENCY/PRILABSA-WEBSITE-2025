# PLAN DE IMPLEMENTACIÓN Y DESARROLLO – PRILABSA-WEBSITE-2025

**Fecha de creación:** 2025-01-27  
**Responsable:** NAZCAMEDIA-ECO  
**Ubicación:** `.temp-docs/planning/plan-implementacion-desarrollo-2025-01-27.md`  

> Este documento consolida la estrategia técnica, operativa y de despliegue para la recreación completa del sitio web corporativo de PRILABSA en un nuevo stack React 19 + Vite, garantizando cero impacto en la instalación WordPress existente.

---

## 1. Contexto del Proyecto

| Aspecto | Detalle |
|---------|---------|
| Sitio actual | https://www.prilabsa.com (WordPress, sin acceso interno) |
| Riesgo | Alto – instalación desactualizada e inestable |
| Restricción | No modificar la instancia WordPress (downtime prohibido) |
| Destino final | Hosting GoDaddy del cliente (dominio principal) |
| Respaldo | Servidores SOLARIA → `prilabsa.solaria.agency` |
| Legacy | WordPress actual migrará a `legacy.prilabsa.com` |

---

## 2. Objetivos Específicos

1. **Extracción Visual y Estructural Segura**  
   – Firecrawl para assets estáticos (CSS • JS • imágenes)  
   – Scraping DOM público → mapeo de jerarquía y contenido  
   – Exportación de capturas completas a Figma ⇒ *Master Concept Page (MCP)*  
2. **Implementación Limpia en Vite + React**  
   – Stack SOLARIA-AGENCY-FRAMEWORK (React 19 / TS 5.8+ / TailwindCSS 4.x)  
   – Componentización modular y accesible  
   – Calidad estricta: Vitest ≥ 90 % • Cypress E2E • ESLint 0 err.  
3. **Observabilidad en Tiempo Real**  
   – API REST/GraphQL bidireccional  
   – Métricas de disponibilidad y rendimiento → SOLARIA Dashboard  
4. **Despliegue Seguro**  
   – CI (Netlify) para QA continua  
   – Importación a GoDaddy mediante `rsync` + backup automático  
   – CDN + caché controlada + compresión (gzip/brotli)

---

## 3. Cronograma Macro 

| Fase | Duración | Hitos |
|------|----------|-------|
| 1. Optimización Técnica Inicial | 2 días | *Repositorio limpio · CI con logs 0 errores* |
| 2. Extracción & MCP Figma | 3 días | *Assets descargados · Capturas importadas* |
| 3. Reconstrucción React/Vite | 6 días | *Paridad visual 100 % · Tests 90 %+* |
| 4. API Observabilidad | 2 días | *Endpoint métricas activo* |
| 5. QA & Despliegue GoDaddy | 2 días | *Uptime 100 % · Backup WordPress en legacy* |

_Total estimado:_ **≈ 15 días** de esfuerzo distribuido.

---

## 4. Stack Tecnológico Validado

| Capa | Herramienta | Versión | Estado |
|------|-------------|---------|--------|
| UI | React | 19.x | **To Upgrade** |
| Bundler | Vite | 6.x | ✅ |
| Lenguaje | TypeScript | ≥ 5.8 | ✅ |
| Estilos | TailwindCSS | 4.x | **To Upgrade** |
| Datos | TanStack Query | 5.x | ✅ |
| Routing | React Router | 7.x | ✅ |
| Unit Tests | Vitest | 3.x | ✅ (100 % cobertura) |
| E2E | Cypress | 14.x | **To Upgrade** |
| Observabilidad | Prometheus + Grafana | latest | Pending |
| CI / CD | GitHub Actions + Netlify | latest | ✅ |

---

## 5. Fase 1 – Optimización Técnica Inicial

### 5.1 Chequeos de Salud (completados)

| Chequeo | Resultado |
|----------|-----------|
| `npm audit --all` | 0 vulnerabilidades ✅ |
| `npm run lint` | 0 errores / 0 warnings ✅ |
| `npm run type-check` | 0 errores ✅ |
| `npm run test:coverage` | 100 % cobertura (20/20 tests) ✅ |
| Netlify build | Logs limpios (Sin advertencias) ✅ |

### 5.2 Próximas Acciones

1. **Branch `feature/upgrade-react19`** – migración controlada a React 19 + Tailwind 4 + Cypress 14.  
2. **Documentar breaking-changes** en `.temp-docs/planning/react19-migration-analysis.md`.  
3. **Feature flags** para mantener React 18 como fallback mientras se prueba la nueva versión.

---

## 6. Fase 2 – Extracción Visual y MCP

1. Ejecutar **Firecrawl**:  
   ```bash
   firecrawl https://www.prilabsa.com --output .temp-files/snapshots/2025-01-28
   ```
2. Procesar DOM HTML para obtener estructura → script `scripts/domMap.ts`.  
3. Convertir capturas a Figma: plugin *"Figma Screenshots Importer"*.  
4. Validar MCP con stakeholders.

---

## 7. Fase 3 – Reconstrucción React/Vite

1. Generar estructura de carpetas:
   ```bash
   src/
   ├─ components/
   ├─ pages/
   ├─ layouts/
   └─ hooks/
   ```
2. Implementar componentes siguiendo Atomic Design.  
3. Migrar estilos a Tailwind 4 con clases equivalentes.  
4. Añadir fixtures de TanStack Query para datos simulados.

### Calidad
- Cobertura mínima **90 %** (Vitest).  
- E2E críticos (Home, Contacto, Shop) en Cypress.

---

## 8. Fase 4 – Observabilidad & API

| Endpoint | Descripción |
|----------|-------------|
| `GET /api/health` | Estado del sitio (200 = OK) |
| `GET /api/metrics` | Métricas Prometheus text/plain |
| `POST /api/feedback` | Feedback anónimo de usuarios |

Dashboard SOLARIA se conecta vía WebSocket para alertas en tiempo real.

---

## 9. Fase 5 – Despliegue Final

1. QA en Netlify → aprobación.  
2. Backup WordPress completo → `legacy.prilabsa.com`.  
3. Deploy estático a GoDaddy con `rsync` + verificación hash.  
4. Activar CDN + seguridad (headers CSP estrictos).  
5. Monitorizar 24 h post-deploy antes de cierre.

---

## 10. Checklist Pre-Scraping

- [x] Repositorio libre de errores
- [x] Logs Netlify limpios
- [ ] Herramientas Firecrawl & scripts listos
- [ ] Acceso Figma confirmado
- [ ] Aprobación cliente recibida

---

## 11. Riesgos & Mitigaciones

| Riesgo | Prob. | Impacto | Plan Mitigación |
|--------|-------|---------|-----------------|
| Breaking changes React 19 | Media | Alta | Branch paralelo + feature flag |
| Tailwind 4 purge errores | Baja | Media | Validar clases con plugin ESLint |
| Bloqueo robots.txt en scraping | Baja | Alta | User-agent custom + fallback captura manual |
| Tiempo de propagación DNS | Baja | Media | Ventana mantenimiento 00:00-02:00 UTC |

---

## 12. Firmas de Aprobación

| Rol | Nombre | Estado |
|-----|--------|--------|
| PM | —— | ⬜ Pendiente |
| Tech Lead | —— | ⬜ Pendiente |
| Cliente | —— | ⬜ Pendiente |

---

> **Próxima acción inmediata:** confirmar checklist pre-scraping y proceder con creación de branch `feature/upgrade-react19`.

---

**Documento generado automáticamente por NAZCAMEDIA-ECO**. 