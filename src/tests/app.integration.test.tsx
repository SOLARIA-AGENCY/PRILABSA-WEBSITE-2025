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

    // Links de navegación
    const homeLink = screen.getByRole('link', { name: /inicio/i })
    const dashboardLink = screen.getByRole('link', { name: /dashboard técnico/i })
    expect(homeLink).toBeInTheDocument()
    expect(dashboardLink).toBeInTheDocument()
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