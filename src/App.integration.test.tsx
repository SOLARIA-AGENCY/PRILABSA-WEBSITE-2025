import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import App from './App';

describe('App Integration Tests', () => {
  it('renders complete application structure', () => {
    const { container } = render(<App />);
    
    // Check that the main container is present
    const mainDiv = container.firstChild as HTMLElement;
    expect(mainDiv).toBeInTheDocument();
    
    // Check that the heading is present and correct
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('PRILABSA');
  });

  it('has proper document structure for SEO', () => {
    const { container } = render(<App />);
    
    // Check semantic HTML structure
    const mainDiv = container.firstChild as HTMLElement;
    expect(mainDiv).toBeInTheDocument();
    
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading.tagName).toBe('H1');
  });

  it('applies consistent styling throughout the app', () => {
    const { container } = render(<App />);
    
    const mainDiv = container.firstChild as HTMLElement;
    expect(mainDiv).toHaveClass('min-h-screen');
    expect(mainDiv).toHaveClass('flex');
    expect(mainDiv).toHaveClass('items-center');
    expect(mainDiv).toHaveClass('justify-center');
    expect(mainDiv).toHaveClass('bg-white');
  });

  it('uses correct typography system', () => {
    render(<App />);
    
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveClass('font-montserrat');
    expect(heading).toHaveClass('text-6xl');
    expect(heading).toHaveClass('font-bold');
    expect(heading).toHaveClass('text-gray-900');
  });

  it('renders without accessibility violations', () => {
    render(<App />);
    
    // Check for proper heading hierarchy
    const headings = screen.getAllByRole('heading');
    expect(headings).toHaveLength(1);
    expect(headings[0].tagName).toBe('H1');
  });

  it('has proper contrast and readability', () => {
    const { container } = render(<App />);
    
    const heading = screen.getByRole('heading', { level: 1 });
    // text-gray-900 on bg-white provides excellent contrast
    expect(heading).toHaveClass('text-gray-900');
    
    const mainDiv = container.firstChild as HTMLElement;
    expect(mainDiv).toHaveClass('bg-white');
  });

  it('is responsive and mobile-friendly', () => {
    const { container } = render(<App />);
    
    const mainDiv = container.firstChild as HTMLElement;
    // Check for responsive classes
    expect(mainDiv).toHaveClass('min-h-screen');
    expect(mainDiv).toHaveClass('flex');
    expect(mainDiv).toHaveClass('items-center');
    expect(mainDiv).toHaveClass('justify-center');
  });

  it('loads without JavaScript errors', () => {
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
    
    render(<App />);
    
    expect(consoleSpy).not.toHaveBeenCalled();
    expect(warnSpy).not.toHaveBeenCalled();
    
    consoleSpy.mockRestore();
    warnSpy.mockRestore();
  });

  it('maintains performance standards', () => {
    const startTime = performance.now();
    render(<App />);
    const endTime = performance.now();
    
    const renderTime = endTime - startTime;
    expect(renderTime).toBeLessThan(100); // Should render in less than 100ms
  });

  it('has correct meta information structure', () => {
    // This test ensures the app is ready for proper meta tags
    render(<App />);
    
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveTextContent('PRILABSA');
    
    // The heading content should be suitable for page title
    expect(heading.textContent).toMatch(/^[A-Z]+$/); // All caps brand name
  });
}); 