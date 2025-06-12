import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { HomePage } from '../pages/HomePage'

describe('HomePage', () => {
  it('renders PRILABSA heading', () => {
    render(<HomePage />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent('PRILABSA')
  })

  it('renders without console errors', () => {
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {})
    render(<HomePage />)
    expect(consoleSpy).not.toHaveBeenCalled()
    consoleSpy.mockRestore()
  })
}) 