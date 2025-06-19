import '@testing-library/jest-dom';
import { beforeEach, afterEach } from 'vitest';

// Setup DOM environment for react-modal
beforeEach(() => {
  // Create root element for react-modal
  const root = document.createElement('div');
  root.setAttribute('id', 'root');
  document.body.appendChild(root);
});

afterEach(() => {
  // Cleanup DOM after each test
  const root = document.getElementById('root');
  if (root) {
    document.body.removeChild(root);
  }
}); 