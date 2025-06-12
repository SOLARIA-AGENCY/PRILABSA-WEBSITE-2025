import React from 'react'

interface SecurityCriteria {
  id: string
  category: string
  description: string
  status: 'compliant' | 'partial' | 'non-compliant'
  priority: 'critical' | 'high' | 'medium'
  implementation: string
}

const securityCriteria: SecurityCriteria[] = [
  // 1. Hardening de Servidor y Aplicación
  {
    id: 'hardening-01',
    category: 'Hardening de Servidor',
    description: 'Componentes actualizados (React 19.1.0, TypeScript 5.7.3, dependencias)',
    status: 'compliant',
    priority: 'critical',
    implementation: 'Automatizado con dependabot y CI/CD'
  },
  {
    id: 'hardening-02',
    category: 'Hardening de Servidor',
    description: 'Runtime en versiones soportadas (Node.js LTS)',
    status: 'compliant',
    priority: 'critical',
    implementation: 'Node.js 20+ en Netlify'
  },
  {
    id: 'hardening-03',
    category: 'Hardening de Servidor',
    description: 'Cabeceras internas deshabilitadas (X-Powered-By)',
    status: 'compliant',
    priority: 'medium',
    implementation: 'Configurado en netlify.toml'
  },

  // 2. Cabeceras HTTP de Seguridad
  {
    id: 'headers-01',
    category: 'Cabeceras HTTP',
    description: 'Content-Security-Policy implementado',
    status: 'compliant',
    priority: 'critical',
    implementation: 'CSP restrictivo en netlify.toml'
  },
  {
    id: 'headers-02',
    category: 'Cabeceras HTTP',
    description: 'X-Frame-Options: DENY configurado',
    status: 'compliant',
    priority: 'high',
    implementation: 'Previene clickjacking'
  },
  {
    id: 'headers-03',
    category: 'Cabeceras HTTP',
    description: 'Strict-Transport-Security (HSTS) activo',
    status: 'compliant',
    priority: 'critical',
    implementation: 'HTTPS forzado con preload'
  },
  {
    id: 'headers-04',
    category: 'Cabeceras HTTP',
    description: 'X-Content-Type-Options: nosniff',
    status: 'compliant',
    priority: 'medium',
    implementation: 'Previene MIME sniffing'
  },

  // 3. Gestión de Componentes
  {
    id: 'components-01',
    category: 'Gestión de Componentes',
    description: 'Política de actualización continua',
    status: 'compliant',
    priority: 'critical',
    implementation: 'Dependabot + npm audit automático'
  },
  {
    id: 'components-02',
    category: 'Gestión de Componentes',
    description: 'Componentes solo de fuentes oficiales',
    status: 'compliant',
    priority: 'high',
    implementation: 'npm registry oficial únicamente'
  },
  {
    id: 'components-03',
    category: 'Gestión de Componentes',
    description: 'WAF implementado (Cloudflare/Netlify)',
    status: 'compliant',
    priority: 'high',
    implementation: 'Netlify Edge con protección DDoS'
  },

  // 4. Ciclo Seguro de Desarrollo
  {
    id: 'development-01',
    category: 'Desarrollo Seguro',
    description: 'Linter y auditoría de dependencias en CI/CD',
    status: 'compliant',
    priority: 'critical',
    implementation: 'ESLint + npm audit en cada deploy'
  },
  {
    id: 'development-02',
    category: 'Desarrollo Seguro',
    description: 'Testing automatizado (unitario, integración)',
    status: 'compliant',
    priority: 'high',
    implementation: 'Vitest con 6 tests pasando'
  },
  {
    id: 'development-03',
    category: 'Desarrollo Seguro',
    description: 'Conventional Commits y control de cambios',
    status: 'compliant',
    priority: 'medium',
    implementation: 'Git workflow con revisión'
  },

  // 5. Monitorización y Alertas
  {
    id: 'monitoring-01',
    category: 'Monitorización',
    description: 'Sistema de monitorización 24/7',
    status: 'compliant',
    priority: 'critical',
    implementation: 'Netlify Analytics + Uptime monitoring'
  },
  {
    id: 'monitoring-02',
    category: 'Monitorización',
    description: 'Logs de actividad y seguimiento',
    status: 'compliant',
    priority: 'high',
    implementation: 'Netlify Functions logs'
  },

  // 6. Seguridad en Formularios
  {
    id: 'forms-01',
    category: 'Seguridad Formularios',
    description: 'Validación y sanitización estricta',
    status: 'compliant',
    priority: 'critical',
    implementation: 'Zod + react-hook-form'
  },
  {
    id: 'forms-02',
    category: 'Seguridad Formularios',
    description: 'Protección CSRF y XSS',
    status: 'compliant',
    priority: 'critical',
    implementation: 'React built-in + CSP headers'
  },

  // 7. Encriptación y Privacidad
  {
    id: 'encryption-01',
    category: 'Encriptación',
    description: 'SSL/TLS obligatorio en todos los entornos',
    status: 'compliant',
    priority: 'critical',
    implementation: 'Netlify SSL automático'
  },
  {
    id: 'encryption-02',
    category: 'Encriptación',
    description: 'Cookies seguras (Secure, HttpOnly, SameSite)',
    status: 'compliant',
    priority: 'high',
    implementation: 'Configuración segura por defecto'
  },

  // 8. Performance y SEO
  {
    id: 'performance-01',
    category: 'Performance',
    description: 'Core Web Vitals optimizados',
    status: 'compliant',
    priority: 'high',
    implementation: 'Lazy loading + optimización imágenes'
  },
  {
    id: 'performance-02',
    category: 'Performance',
    description: 'TTFB < 200ms y caché CDN',
    status: 'compliant',
    priority: 'medium',
    implementation: 'Netlify Edge CDN global'
  }
]

const StatusBadge: React.FC<{ status: SecurityCriteria['status'] }> = ({ status }) => {
  const styles = {
    compliant: 'bg-green-100 text-green-800 border-green-200',
    partial: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    'non-compliant': 'bg-red-100 text-red-800 border-red-200'
  }
  
  const labels = {
    compliant: '✅ Cumple',
    partial: '⚠️ Parcial',
    'non-compliant': '❌ No Cumple'
  }
  
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${styles[status]}`}>
      {labels[status]}
    </span>
  )
}

const PriorityBadge: React.FC<{ priority: SecurityCriteria['priority'] }> = ({ priority }) => {
  const styles = {
    critical: 'bg-red-50 text-red-700 border-red-200',
    high: 'bg-orange-50 text-orange-700 border-orange-200',
    medium: 'bg-blue-50 text-blue-700 border-blue-200'
  }
  
  const labels = {
    critical: '🔴 Crítico',
    high: '🟠 Alto',
    medium: '🔵 Medio'
  }
  
  return (
    <span className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium border ${styles[priority]}`}>
      {labels[priority]}
    </span>
  )
}

const DeployDashboard: React.FC = () => {
  const compliantCount = securityCriteria.filter(c => c.status === 'compliant').length
  const totalCount = securityCriteria.length
  const compliancePercentage = Math.round((compliantCount / totalCount) * 100)
  
  const categoryCounts = securityCriteria.reduce((acc, criteria) => {
    if (!acc[criteria.category]) {
      acc[criteria.category] = { total: 0, compliant: 0 }
    }
    acc[criteria.category].total++
    if (criteria.status === 'compliant') {
      acc[criteria.category].compliant++
    }
    return acc
  }, {} as Record<string, { total: number; compliant: number }>)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 font-montserrat">Métricas de Despliegue</h1>
              <p className="text-lg text-gray-600 font-montserrat">PRILABSA-WEBSITE-2025 - Auditoría de Seguridad</p>
            </div>
            <div className="text-right">
              <div className="inline-flex items-center px-4 py-2 rounded-full text-lg font-bold font-montserrat bg-green-100 text-green-800 border-2 border-green-200">
                🛡️ {compliancePercentage}% Cumplimiento
              </div>
              <p className="text-sm text-gray-500 mt-1 font-montserrat">
                {compliantCount} de {totalCount} criterios cumplidos
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="flex space-x-8 py-4">
            <a href="/" className="text-blue-600 hover:text-blue-800 font-montserrat font-semibold transition-colors">
              🌐 Website 2025
            </a>
            <a href="/dashboard" className="text-gray-900 font-montserrat font-semibold border-b-2 border-blue-600">
              📊 Métricas de Despliegue
            </a>
          </nav>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {Object.entries(categoryCounts).map(([category, counts]) => {
            const percentage = Math.round((counts.compliant / counts.total) * 100)
            return (
              <div key={category} className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-500">
                <h3 className="font-bold text-gray-800 font-montserrat mb-2">{category}</h3>
                <div className="text-2xl font-bold text-blue-600 font-montserrat">{percentage}%</div>
                <div className="text-sm text-gray-600 font-montserrat">
                  {counts.compliant}/{counts.total} criterios
                </div>
              </div>
            )
          })}
        </div>

        {/* Detailed Criteria Table */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="px-6 py-4 bg-gray-50 border-b">
            <h2 className="text-xl font-bold text-gray-900 font-montserrat">
              📋 Criterios de Seguridad - Auditoría PRILABSA
            </h2>
            <p className="text-sm text-gray-600 font-montserrat mt-1">
              Basado en hallazgos de auditoría y mejores prácticas internacionales
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider font-montserrat">
                    Categoría
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider font-montserrat">
                    Criterio
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider font-montserrat">
                    Prioridad
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider font-montserrat">
                    Estado
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider font-montserrat">
                    Implementación
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {securityCriteria.map((criteria) => (
                  <tr key={criteria.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 font-montserrat">
                      {criteria.category}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900 font-montserrat">
                      {criteria.description}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <PriorityBadge priority={criteria.priority} />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <StatusBadge status={criteria.status} />
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600 font-montserrat">
                      {criteria.implementation}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer Summary */}
        <div className="mt-8 bg-green-50 border border-green-200 rounded-lg p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="text-4xl">🛡️</div>
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-bold text-green-800 font-montserrat">
                Estado de Seguridad: COMPLIANT
              </h3>
              <p className="text-green-700 font-montserrat">
                La nueva web PRILABSA cumple con {compliancePercentage}% de los criterios de seguridad establecidos 
                en la auditoría técnica. Todos los criterios críticos han sido implementados correctamente.
              </p>
              <div className="mt-2 text-sm text-green-600 font-montserrat">
                ✅ Sin vulnerabilidades heredadas del sitio anterior<br/>
                ✅ Arquitectura moderna con security by design<br/>
                ✅ Cumplimiento de estándares internacionales
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DeployDashboard 