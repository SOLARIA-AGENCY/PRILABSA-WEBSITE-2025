# Prilabsa Web – v0.1 (Under Construction)

Este paquete contiene el frontend corporativo de **Prilabsa** basado en el mismo stack validado en SOLARIA-AGENCY-FRAMEWORK.

## Stack Técnico
* Vite + React 18 + TypeScript
* TailwindCSS 3
* Vitest + @testing-library/react

## Scripts Principales
```bash
pnpm install      # Instalar dependencias (workspace)
pnpm dev          # Servidor de desarrollo
pnpm build        # Build estático optimizado
pnpm preview      # Servidor local para build
pnpm test         # Ejecutar tests unitarios
```

## Estructura
```
prilabsa-web/
├─ public/
│  └─ favicon.svg
├─ src/
│  ├─ App.tsx    # Página principal – placeholder "Sitio en construcción"
│  ├─ main.tsx   # Punto de entrada Vite
│  └─ App.test.tsx
├─ index.html    # HTML raíz
├─ vite.config.ts
└─ vitest.config.ts
```

## Roadmap
1. Fase 1 – Placeholder corporativo + CI/CD ✅
2. Fase 2 – Contenido corporativo completo
3. Fase 3 – Integración a **SOLARIA-AGENCY-FRAMEWORK** como `client-web/` 