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
 * Valida que la aplicación se renderice correctamente con el nuevo MainDashboard.
 */

describe('App Integration Tests', () => {
  beforeEach(() => {
    // Reset all mocks before each test
    vi.clearAllMocks()
  })

  it('renders main dashboard with PRILABSA title and navigation buttons', () => {
    render(<App />)

    // Heading principal PRILABSA
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent('PRILABSA')

    // Links de navegación principales
    const websiteLink = screen.getByRole('link', { name: /🌐 website 2025/i })
    const metricsLink = screen.getByRole('link', { name: /📊 métricas despliegue/i })
    
    // Verificar que los links existen y están en el documento
    expect(websiteLink).toBeInTheDocument()
    expect(metricsLink).toBeInTheDocument()
    
    // Verificar que tienen los hrefs correctos
    expect(websiteLink).toHaveAttribute('href', '/iniciodev')
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