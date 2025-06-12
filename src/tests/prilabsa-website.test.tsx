import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import PrilabsaWebsite from '../pages/PrilabsaWebsite'

describe('PrilabsaWebsite', () => {
  it('renders hero section heading', () => {
    render(<PrilabsaWebsite />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent('Somos proveedores de')
  })

  it('renders navigation links', () => {
    render(<PrilabsaWebsite />)
    
    // Links de navegación del header
    const inicioLink = screen.getByRole('link', { name: 'INICIO' })
    const quienesLink = screen.getByRole('link', { name: 'QUIENES SOMOS' })
    const productosLink = screen.getByRole('link', { name: 'PRODUCTOS' })
    
    expect(inicioLink).toBeInTheDocument()
    expect(quienesLink).toBeInTheDocument()
    expect(productosLink).toBeInTheDocument()
  })

  it('renders without console errors', () => {
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {})
    render(<PrilabsaWebsite />)
    expect(consoleSpy).not.toHaveBeenCalled()
    consoleSpy.mockRestore()
  })
}) 