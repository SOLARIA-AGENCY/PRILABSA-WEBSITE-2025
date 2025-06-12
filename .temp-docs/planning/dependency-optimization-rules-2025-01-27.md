# REGLAS FORMALES: Optimización de Dependencias

**Proyecto**: PRILABSA-WEBSITE-2025  
**Fecha Establecimiento**: 2025-01-27  
**Tipo**: Reglas Técnicas Obligatorias  
**Aplicación**: Todos los proyectos SOLARIA AGENCY  

## 🎯 REGLAS OBLIGATORIAS DE OPTIMIZACIÓN

### **REGLA TÉCNICA #001: AUDITORÍA PRE-OPTIMIZACIÓN**
```bash
MANDATO: Ejecutar auditoría completa ANTES de cualquier optimización

COMANDOS OBLIGATORIOS:
1. npm outdated
2. npm audit --all  
3. npm ls --depth=0
4. Documentar findings en .temp-docs/

CRITERIO DE CUMPLIMIENTO:
- Auditoría documentada ✅
- Breaking changes identificados ✅
- Plan de actualización creado ✅
```

### **REGLA TÉCNICA #002: CLASIFICACIÓN POR RIESGO**
```bash
PATCH (Riesgo: BAJO):
- Actualizaciones automáticas permitidas
- Testing básico requerido
- Rollback simple

MINOR (Riesgo: MEDIO):
- Revisión de changelog requerida
- Testing completo requerido
- Plan de rollback documentado

MAJOR (Riesgo: ALTO):
- Análisis de breaking changes OBLIGATORIO
- Testing exhaustivo + manual testing
- Plan de rollback completo + backup
- Aprobación explícita requerida
```

### **REGLA TÉCNICA #003: ORDEN DE ACTUALIZACIÓN**
```bash
SECUENCIA OBLIGATORIA:
1. PATCH versions → Actualizar inmediatamente
2. MINOR versions → Actualizar con testing
3. MAJOR versions → Evaluar caso por caso

RESTRICCIONES:
- Máximo 1 MAJOR version por sprint
- Testing completo entre cada actualización
- Rollback plan antes de cada MAJOR
```

### **REGLA TÉCNICA #004: CRITERIOS DE DECISIÓN MAJOR**
```bash
ACTUALIZAR MAJOR VERSION SOLO SI:
✅ Feature específica requerida para proyecto
✅ Vulnerabilidad crítica en versión actual
✅ Tiempo suficiente para testing (>2 días)
✅ Plan de rollback completo preparado
✅ Backup del estado actual creado

MANTENER VERSION ACTUAL SI:
✅ Versión actual estable y segura
✅ Proyecto en producción crítica
✅ No hay necesidad específica de upgrade
✅ Tiempo limitado para testing
```

### **REGLA TÉCNICA #005: TESTING OBLIGATORIO**
```bash
PARA PATCH/MINOR:
- npm run test:coverage (100% pass)
- npm run lint (0 errores)
- npm run build (exitoso)
- Smoke testing manual

PARA MAJOR:
- Todo lo anterior +
- Integration testing completo
- Performance testing
- Cross-browser testing
- User acceptance testing
- Rollback testing
```

### **REGLA TÉCNICA #006: DOCUMENTACIÓN OBLIGATORIA**
```bash
PARA CADA ACTUALIZACIÓN DOCUMENTAR:
- Versión anterior → nueva
- Razón de la actualización
- Breaking changes identificados
- Testing realizado
- Issues encontrados y resolución
- Plan de rollback utilizado

UBICACIÓN: .temp-docs/planning/dependency-updates-YYYY-MM-DD.md
```

## 🚫 PROHIBICIONES ABSOLUTAS

### **NUNCA HACER**
```bash
❌ Eliminar advertencias sin abordar causas raíz
❌ Actualizar major versions sin análisis
❌ Silenciar warnings sin optimización real
❌ Hacer múltiples major updates simultáneamente
❌ Actualizar sin testing exhaustivo
❌ Ignorar breaking changes documentados
❌ Priorizar cosmética sobre estabilidad
```

### **SIEMPRE HACER**
```bash
✅ Auditoría completa antes de optimizar
✅ Clasificar dependencias por riesgo
✅ Testing exhaustivo después de cambios
✅ Documentar decisiones y razones
✅ Crear plan de rollback antes de major updates
✅ Verificar compatibilidad con ecosystem
✅ Mantener backup del estado funcional
```

## 📊 MÉTRICAS DE CUMPLIMIENTO

### **INDICADORES DE ÉXITO**
```bash
- 0 vulnerabilidades críticas/altas
- 100% test coverage mantenido
- 0 errores de lint
- Build time < 1 segundo
- Bundle size optimizado
- Documentación actualizada
```

### **INDICADORES DE FALLO**
```bash
- Tests fallando después de actualización
- Errores de lint introducidos
- Performance degradation >10%
- Breaking changes no documentados
- Rollback requerido sin plan
```

## 🔄 PROCESO DE ACTUALIZACIÓN GRADUAL

### **FASE 1: PREPARACIÓN**
```bash
1. Crear branch feature/dependency-updates-YYYY-MM-DD
2. Ejecutar auditoría completa
3. Documentar estado actual
4. Crear backup/tag del estado funcional
5. Planificar secuencia de actualizaciones
```

### **FASE 2: ACTUALIZACIONES SEGURAS**
```bash
1. Actualizar PATCH versions
2. Testing básico
3. Commit con mensaje descriptivo
4. Actualizar MINOR versions
5. Testing completo
6. Commit con mensaje descriptivo
```

### **FASE 3: EVALUACIÓN MAJOR**
```bash
1. Investigar breaking changes
2. Crear plan de migración
3. Actualizar una MAJOR por vez
4. Testing exhaustivo
5. Documentar issues y resoluciones
6. Commit con mensaje detallado
```

### **FASE 4: VALIDACIÓN FINAL**
```bash
1. Testing completo de integración
2. Performance testing
3. Manual testing de funcionalidades críticas
4. Merge a main solo si todo pasa
5. Deploy con monitoreo
```

## 🎯 APLICACIÓN INMEDIATA

Estas reglas son **OBLIGATORIAS** y deben aplicarse:
- En todos los proyectos SOLARIA AGENCY
- Antes de cualquier optimización de dependencias
- En code reviews de actualizaciones
- En auditorías técnicas periódicas

**VIOLACIÓN DE ESTAS REGLAS = ERROR CRÍTICO DE METODOLOGÍA**

---
**Estado**: ACTIVA  
**Revisión**: Trimestral  
**Próxima Revisión**: 2025-04-27 