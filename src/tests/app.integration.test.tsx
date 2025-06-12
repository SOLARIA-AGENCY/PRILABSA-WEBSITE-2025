import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import App from '../App'

/**
 * APP INTEGRATION TESTS
 * Valida que la aplicación se renderice correctamente con la nueva barra de navegación y rutas.
 */

describe('App Integration Tests', () => {
  it('renders main heading and navigation links', () => {
    render(<App />)

    // Heading principal
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent('PRILABSA')

    // Links de navegación actuales - buscar por los nombres reales
    const websiteLink = screen.getByRole('link', { name: /website 2025/i })
    const metricsLink = screen.getByRole('link', { name: /métricas despliegue y auditoría/i })
    
    // Verificar que los links existen y están en el documento
    expect(websiteLink).toBeInTheDocument()
    expect(metricsLink).toBeInTheDocument()
    
    // Verificar que tienen los hrefs correctos
    expect(websiteLink).toHaveAttribute('href', '/website')
    expect(metricsLink).toHaveAttribute('href', '/dashboard')
  })

  it('loads without console errors', () => {
    const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {})
    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})

    render(<App />)

    expect(errorSpy).not.toHaveBeenCalled()
    expect(warnSpy).not.toHaveBeenCalled()

    errorSpy.mockRestore()
    warnSpy.mockRestore()
  })
}) 