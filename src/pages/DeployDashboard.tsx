import React from 'react'
import { useQuery } from '@tanstack/react-query'

interface DeployMetrics {
  timestamp: string
  project: string
  version: string
  status: string
  metrics: {
    tests: { total: number; passed: number; failed: number; coverage: number }
    lint: { errors: number; warnings: number }
    security: { vulnerabilities: number; level: string }
    build: { success: boolean; size: string }
  }
}

const fetchDeployStatus = async (): Promise<DeployMetrics> => {
  const res = await fetch('/api/v1/deploy-status', { cache: 'no-cache' })
  if (!res.ok) throw new Error('Failed to fetch deploy status')
  return res.json()
}

const Card: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="bg-white shadow rounded p-4 w-full md:w-1/2 lg:w-1/3">
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    {children}
  </div>
)

const DeployDashboard: React.FC = () => {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['deploy-status'],
    queryFn: fetchDeployStatus,
    refetchInterval: 60_000 // refresh every minute
  })

  if (isLoading) {
    return <p className="text-center mt-10">Cargando métricas de despliegue...</p>
  }

  if (error || !data) {
    return (
      <div className="text-center mt-10">
        <p className="text-red-600 font-semibold">Error al obtener el estado de despliegue</p>
        <button
          onClick={() => refetch()}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Reintentar
        </button>
      </div>
    )
  }

  const {
    timestamp,
    status,
    metrics: { tests, lint, security, build }
  } = data

  return (
    <div className="min-h-screen bg-gray-100 p-6 space-y-6">
      <h1 className="text-2xl font-bold text-center">Dashboard Técnico - PRILABSA Deploy</h1>
      <div className="flex flex-wrap gap-4 justify-center">
        <Card title="Estado del Despliegue">
          <p>{status === 'ready' ? '🟢 En línea' : '🔴 Con errores'}</p>
          <p className="text-sm text-gray-600">{new Date(timestamp).toLocaleString()}</p>
        </Card>

        <Card title="Tests & Cobertura">
          <p className="font-mono">
            {tests.passed}/{tests.total} tests
          </p>
          <p>Cobertura: {tests.coverage}%</p>
        </Card>

        <Card title="Linting">
          <p>Errores: {lint.errors}</p>
          <p>Warnings: {lint.warnings}</p>
        </Card>

        <Card title="Seguridad">
          <p>Vulnerabilidades: {security.vulnerabilities}</p>
          <p>Nivel: {security.level}</p>
        </Card>

        <Card title="Build & Bundle">
          <p>Tamaño bundle: {build.size}</p>
          <p>Build exitosa: {build.success ? 'Sí' : 'No'}</p>
        </Card>
      </div>
    </div>
  )
}

export default DeployDashboard 