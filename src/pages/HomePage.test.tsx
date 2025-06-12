import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import HomePage from './HomePage';

describe('HomePage', () => {
  it('renders PRILABSA text correctly', () => {
    render(<HomePage />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('PRILABSA');
  });

  it('applies correct CSS classes for styling', () => {
    const { container } = render(<HomePage />);
    const mainDiv = container.firstChild as HTMLElement;
    expect(mainDiv).toHaveClass('min-h-screen', 'flex', 'items-center', 'justify-center', 'bg-white');
  });

  it('uses Montserrat font family', () => {
    render(<HomePage />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveClass('font-montserrat');
  });

  it('has correct text size and weight', () => {
    render(<HomePage />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveClass('text-6xl', 'font-bold', 'text-gray-900');
  });

  it('renders as a container div element', () => {
    const { container } = render(<HomePage />);
    const mainDiv = container.firstChild as HTMLElement;
    expect(mainDiv).toBeInTheDocument();
    expect(mainDiv.tagName).toBe('DIV');
  });

  it('has proper accessibility structure', () => {
    render(<HomePage />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading.tagName).toBe('H1');
  });

  it('matches snapshot for visual regression testing', () => {
    const { container } = render(<HomePage />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders without any console errors', () => {
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    render(<HomePage />);
    expect(consoleSpy).not.toHaveBeenCalled();
    consoleSpy.mockRestore();
  });
}); 