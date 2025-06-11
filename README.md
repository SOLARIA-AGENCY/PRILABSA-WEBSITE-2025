# 🌐 PRILABSA Website 2025

Nueva implementación del sitio web corporativo de Prilabsa desarrollado con tecnologías modernas e integrado con el framework SOLARIA.

## 🚀 Stack Tecnológico

- **Frontend**: React 18 + TypeScript
- **Bundler**: Vite 5
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Testing**: Vitest + Testing Library
- **Deployment**: Netlify con CD/CI
- **Integration**: SOLARIA-AGENCY-FRAMEWORK Dashboard

## 📁 Estructura del Proyecto

```
PRILABSA-WEBSITE-2025/
├── src/
│   ├── components/
│   │   └── layout/           # Header, Footer, Layout
│   ├── pages/               # HomePage, QuienesSomos, etc.
│   ├── prilabsa-mockup-html/ # Assets e imágenes del diseño
│   └── types/               # Declaraciones TypeScript
├── scripts/
│   └── deploy-setup.sh      # Script de automatización
├── netlify.toml             # Configuración Netlify
├── DEPLOYMENT_PLAN.md       # Plan completo de despliegue
└── env.example              # Variables de entorno template
```

## 🎯 Integración con SOLARIA Framework

Este proyecto está diseñado para integrarse con el dashboard de SOLARIA-AGENCY-FRAMEWORK:

### En Desarrollo
- Dashboard SOLARIA: `http://localhost:5174`
- Website PRILABSA: `http://localhost:5176`
- Card "SITIO WEB" → Redirige automáticamente a nueva website

### En Producción
- Dashboard: `https://dashboard.solaria.agency`
- Website: `https://prilabsa-nueva.netlify.app`
- Switch controlado por `VITE_USE_NEW_WEBSITE=true/false`

## 🔧 Comandos Disponibles

```bash
# Desarrollo
npm run dev              # Servidor local puerto 5176

# Build y Deploy
npm run build           # Build para producción
npm run preview         # Preview del build local
npm run deploy          # Deploy a Netlify (requiere setup)

# Testing
npm run test           # Ejecutar tests
npm run test:coverage  # Tests con coverage

# Setup automatizado
./scripts/deploy-setup.sh  # Configuración inicial completa
```

## 🚀 Quick Start

### 1. Instalación
```bash
git clone [repo-url]
cd PRILABSA-WEBSITE-2025
npm install
```

### 2. Desarrollo Local
```bash
npm run dev
# Abre http://localhost:5176
```

### 3. Setup para Deployment
```bash
./scripts/deploy-setup.sh
# Sigue las instrucciones del script
```

### 4. Deploy a Netlify
```bash
# Login y configuración inicial
netlify login
netlify init

# Deploy staging
netlify deploy --build

# Deploy producción
netlify deploy --prod
```

## 🔗 Integración Dashboard SOLARIA

### Variables de Entorno Requeridas en SOLARIA:
```bash
VITE_USE_NEW_WEBSITE=false          # Switch principal
VITE_PRILABSA_NEW_URL=https://prilabsa-nueva.netlify.app
VITE_PRILABSA_STAGING_URL=https://staging-prilabsa.netlify.app
```

### Activar Nueva Website:
```bash
# En SOLARIA-AGENCY-FRAMEWORK/.env
VITE_USE_NEW_WEBSITE=true
```

### Rollback (si es necesario):
```bash
# En SOLARIA-AGENCY-FRAMEWORK/.env
VITE_USE_NEW_WEBSITE=false
```

## 📊 Performance Targets

- **Bundle Size**: ~68kB gzipped ✅
- **Build Time**: <1 segundo ✅
- **Lighthouse Performance**: >90
- **Lighthouse Accessibility**: >95
- **Lighthouse SEO**: >90

## 🔒 Seguridad

- CSP Headers configurados
- XSS Protection habilitada
- HTTPS enforced
- Content Type Sniffing disabled
- Secure headers en Netlify

## 📋 Páginas Implementadas

- ✅ **Inicio** (`/`) - Hero + About + Productos + Agencias + Marcas
- ✅ **Quiénes Somos** (`/quienes-somos`) - Placeholder
- ✅ **Oficinas** (`/oficinas`) - Placeholder  
- ✅ **Productos** (`/productos`) - Placeholder
- ✅ **Contáctanos** (`/contactanos`) - Placeholder

## 🎨 Diseño

Basado en mockup oficial de Prilabsa con:
- Header responsive con navegación
- Hero section con video background
- Sección About con texto corporativo
- Grid de productos con iconos
- Sección de agencias con CTA
- Carousel de marcas asociadas
- Footer completo con redes sociales
- Botón flotante de WhatsApp

## 🔄 Workflow de Desarrollo

1. **Feature Development**: Crear branch desde `main`
2. **Testing Local**: `npm run dev` + `npm run test`
3. **Build Verification**: `npm run build`
4. **Deploy Preview**: Push a branch → Netlify preview automático
5. **Code Review**: Pull Request con preview link
6. **Merge to Main**: Deploy automático a producción
7. **Integration**: Activar en SOLARIA dashboard

## 📞 Soporte

Para dudas sobre este proyecto contactar al equipo de SOLARIA.AGENCY:

- **Email**: hello@solaria.agency
- **Dashboard**: Módulo de soporte en SOLARIA Framework

---

**Desarrollado por SOLARIA.AGENCY** - Transformación digital con IA y automatización