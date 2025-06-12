# 🚀 PLAN DE DESPLIEGUE E INTEGRACIÓN PRILABSA-SOLARIA

## 🎯 OBJETIVO
Configurar despliegue continuo de PRILABSA-WEBSITE-2025 en Netlify e integrar con el dashboard de SOLARIA-AGENCY-FRAMEWORK.

---

## 📋 FASES DEL PROYECTO

### **FASE 1: PREPARACIÓN REPOSITORIO PRILABSA** ✅

#### 1.1 Configuración Netlify
- [x] `netlify.toml` configurado con build commands
- [x] Headers de seguridad implementados
- [x] Redirects para SPA configurados
- [x] Cache strategies para assets estáticos

#### 1.2 Variables de Entorno
- [x] `env.example` creado con configuraciones necesarias
- [x] URLs de staging y producción definidas
- [x] Configuración de analytics preparada

---

### **FASE 2: INTEGRACIÓN CON SOLARIA** ✅

#### 2.1 Sistema de URLs Centralizado
- [x] `src/config/urls.config.ts` creado
- [x] Función `getClientWebsiteUrl()` implementada
- [x] Detección automática de entorno
- [x] Switch configurable entre websites

#### 2.2 Dashboard Actualizado
- [x] `ClientServicesGrid.tsx` actualizado
- [x] Card "SITIO WEB" redirige a nueva URL
- [x] Apertura en nueva pestaña implementada
- [x] Variables de entorno integradas

#### 2.3 Variables de Entorno SOLARIA
- [x] `env.example` actualizado con configuraciones PRILABSA
- [x] Switch `VITE_USE_NEW_WEBSITE` implementado
- [x] URLs de staging y producción configuradas

---

### **FASE 3: DESPLIEGUE EN NETLIFY** 🔄

#### 3.1 Configuración del Proyecto
```bash
# 1. Conectar repositorio a Netlify
#    - Ir a https://app.netlify.com/
#    - "New site from Git"
#    - Conectar GitHub
#    - Seleccionar repositorio PRILABSA-WEBSITE-2025

# 2. Configuración de Build
#    Build command: npm run build
#    Publish directory: dist
#    Node version: 18

# 3. Variables de entorno en Netlify
VITE_SITE_URL=https://prilabsa-nueva.netlify.app
VITE_CONTACT_EMAIL=info@prilabsa.com.ec
VITE_WHATSAPP_NUMBER=593999999999
NODE_ENV=production
```

#### 3.2 Configuración de Dominios
```bash
# Opciones de dominio:
# 1. Subdominio: nueva.prilabsa.com
# 2. Netlify: prilabsa-nueva.netlify.app  
# 3. Dominio propio: www.prilabsa-nueva.com

# Configuración DNS (si se usa subdominio):
# nueva.prilabsa.com -> CNAME -> awesome-branch-123.netlify.app
```

#### 3.3 Deploy Previews
- [x] Branch deploys habilitados
- [x] Deploy previews para pull requests
- [x] Staging environment configurado

---

### **FASE 4: TESTING E INTEGRACIÓN** 🔄

#### 4.1 Testing Local
```bash
# Terminal 1: PRILABSA-WEBSITE-2025
npm run dev # -> http://localhost:5176

# Terminal 2: SOLARIA-AGENCY-FRAMEWORK  
npm run dev # -> http://localhost:5174

# Verificar:
# 1. Card "SITIO WEB" abre http://localhost:5176
# 2. Navegación funciona correctamente
# 3. Todas las secciones cargan sin errores
```

#### 4.2 Testing Staging
```bash
# 1. Merge a branch 'staging'
# 2. Netlify deploy automático
# 3. Verificar https://staging-prilabsa.netlify.app
# 4. Testing completo de funcionalidad
```

#### 4.3 Testing Producción
```bash
# Variables en SOLARIA-AGENCY-FRAMEWORK/.env:
VITE_USE_NEW_WEBSITE=true
VITE_PRILABSA_NEW_URL=https://prilabsa-nueva.netlify.app

# Verificar redirección desde dashboard
```

---

### **FASE 5: GO-LIVE** 🎯

#### 5.1 Deploy a Producción
```bash
# 1. Merge main branch
# 2. Deploy automático en Netlify
# 3. Configurar variables en SOLARIA producción
# 4. Switch VITE_USE_NEW_WEBSITE=true
```

#### 5.2 Rollback Plan
```bash
# Si hay problemas:
VITE_USE_NEW_WEBSITE=false  # Volver a website actual
# Deploy SOLARIA-AGENCY-FRAMEWORK
# Website vuelve a https://www.prilabsa.com
```

---

## 🔧 COMANDOS DE IMPLEMENTACIÓN

### **PASO 1: Configurar Netlify**
```bash
# En el directorio PRILABSA-WEBSITE-2025
npm install -g netlify-cli
netlify login
netlify init
netlify deploy --build
netlify deploy --prod
```

### **PASO 2: Configurar Variables SOLARIA**
```bash
# Crear archivo .env en SOLARIA-AGENCY-FRAMEWORK
cp env.example .env

# Editar variables:
VITE_USE_NEW_WEBSITE=false  # Inicialmente false
VITE_PRILABSA_NEW_URL=https://prilabsa-nueva.netlify.app
VITE_PRILABSA_STAGING_URL=https://staging-prilabsa.netlify.app
```

### **PASO 3: Testing Completo**
```bash
# PRILABSA-WEBSITE-2025
npm run build
npm run preview  # Verificar build funciona

# SOLARIA-AGENCY-FRAMEWORK
npm run dev
# Ir a dashboard -> Card "SITIO WEB" -> Verificar redirección
```

### **PASO 4: Deploy Final**
```bash
# 1. Commit y push ambos repositorios
git add .
git commit -m "feat: integrate PRILABSA website with SOLARIA dashboard"
git push origin main

# 2. Configurar producción
VITE_USE_NEW_WEBSITE=true  # En variables de entorno producción

# 3. Deploy SOLARIA a producción
npm run build
npm run deploy
```

---

## 🎛️ CONTROL DEL SISTEMA

### **Switch de Websites**
```typescript
// En desarrollo: Siempre nueva website
// En producción: Controlado por VITE_USE_NEW_WEBSITE

// Activar nueva website:
VITE_USE_NEW_WEBSITE=true

// Desactivar (rollback):
VITE_USE_NEW_WEBSITE=false
```

### **URLs por Ambiente**
```bash
# Desarrollo
Dashboard: http://localhost:5174
Nueva Web: http://localhost:5176

# Staging  
Dashboard: https://staging-solaria.netlify.app
Nueva Web: https://staging-prilabsa.netlify.app

# Producción
Dashboard: https://dashboard.solaria.agency
Nueva Web: https://prilabsa-nueva.netlify.app
```

---

## 📊 MÉTRICAS Y MONITOREO

### **KPIs a Monitorear**
- [ ] Time to First Byte (TTFB) < 200ms
- [ ] Largest Contentful Paint (LCP) < 2.5s  
- [ ] First Input Delay (FID) < 100ms
- [ ] Cumulative Layout Shift (CLS) < 0.1
- [ ] Performance Score > 90
- [ ] Accessibility Score > 95
- [ ] SEO Score > 90

### **Herramientas de Monitoreo**
- [ ] Netlify Analytics
- [ ] Google PageSpeed Insights
- [ ] Lighthouse CI
- [ ] Error tracking (Sentry)
- [ ] Uptime monitoring

---

## 🔒 SEGURIDAD Y BACKUPS

### **Configuraciones de Seguridad**
- [x] CSP Headers configurados
- [x] HTTPS enforced
- [x] XSS Protection habilitada
- [x] Content Type Sniffing disabled
- [x] Frame Options configuradas

### **Estrategia de Backup**
- [ ] Git branches como backup
- [ ] Netlify build history (30 días)
- [ ] Assets backup en CDN
- [ ] Database backup (si aplica)

---

## 🎯 RESULTADO ESPERADO

Al completar este plan:

1. **Dashboard SOLARIA** → Card "SITIO WEB" → Abre nueva website de PRILABSA
2. **Despliegue automático** en cada push a main
3. **Staging environment** para testing
4. **Rollback instantáneo** cambiando una variable
5. **Performance optimizada** con Netlify CDN
6. **Monitoreo completo** de métricas

---

## 🚨 CONTINGENCIAS

### **Problema: Nueva website no carga**
- Verificar variables de entorno
- Revisar Netlify build logs
- Rollback con `VITE_USE_NEW_WEBSITE=false`

### **Problema: Dashboard no redirige**
- Verificar import de `urls.config.ts`
- Revisar función `getClientWebsiteUrl()`
- Clear cache del navegador

### **Problema: Performance degradado**
- Revisar bundle size en Netlify
- Optimizar imágenes
- Verificar cache headers

---

**IMPLEMENTACIÓN INMEDIATA**: Seguir PASO 1-4 para deployment completo. 