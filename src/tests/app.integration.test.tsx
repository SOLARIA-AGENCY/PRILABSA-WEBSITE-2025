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

    // Heading principal del hero section
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent('Somos proveedores de')

    // Links de navegación del header - usar texto exacto para evitar duplicados
    const inicioLink = screen.getByRole('link', { name: 'INICIO' })
    const quienesLink = screen.getByRole('link', { name: 'QUIENES SOMOS' })
    const productosLink = screen.getByRole('link', { name: 'PRODUCTOS' })
    
    // Verificar que los links existen y están en el documento
    expect(inicioLink).toBeInTheDocument()
    expect(quienesLink).toBeInTheDocument()
    expect(productosLink).toBeInTheDocument()
    
    // Verificar que tienen los hrefs correctos
    expect(inicioLink).toHaveAttribute('href', '#inicio')
    expect(quienesLink).toHaveAttribute('href', '#quienes-somos')
    expect(productosLink).toHaveAttribute('href', '#productos')
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