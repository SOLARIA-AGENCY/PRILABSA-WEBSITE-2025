import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import App from '../App'

// Mock react-modal completely
vi.mock('react-modal', () => {
  const MockModal = ({ children, isOpen }: any) => 
    isOpen ? <div data-testid="modal">{children}</div> : null;
  
  MockModal.setAppElement = vi.fn();
  
  return {
    default: MockModal,
    setAppElement: vi.fn(),
  };
});

/**
 * APP INTEGRATION TESTS
 * Valida que la aplicación se renderice correctamente con el dashboard como página principal.
 */

describe('App Integration Tests', () => {
  beforeEach(() => {
    // Reset all mocks before each test
    vi.clearAllMocks()
  })

  it('renders dashboard heading and navigation links', () => {
    render(<App />)

    // Heading principal del dashboard
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent('Métricas Despliegue y Auditoría')

    // Links de navegación reales en el dashboard
    const homeLink = screen.getByRole('link', { name: /🏠 inicio/i })
    const websiteLink = screen.getByRole('link', { name: /🌐 website 2025/i })
    
    // Verificar que los links existen y están en el documento
    expect(homeLink).toBeInTheDocument()
    expect(websiteLink).toBeInTheDocument()
    
    // Verificar que tienen los hrefs correctos
    expect(homeLink).toHaveAttribute('href', '/')
    expect(websiteLink).toHaveAttribute('href', '/website')
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