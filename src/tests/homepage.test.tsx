import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { HomePage } from '../pages/HomePage'

describe('HomePage', () => {
  it('renders hero section heading', () => {
    render(<HomePage />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent('Somos proveedores de')
  })

  it('renders without console errors', () => {
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {})
    render(<HomePage />)
    expect(consoleSpy).not.toHaveBeenCalled()
    consoleSpy.mockRestore()
  })
}) 