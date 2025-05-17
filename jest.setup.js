// Import jest-dom utilities
import '@testing-library/jest-dom';

// Mock the dynamic imports for polyfills
jest.mock('intersection-observer', () => ({}), { virtual: true });
jest.mock('resize-observer-polyfill', () => ({}), { virtual: true });
jest.mock('whatwg-fetch', () => ({}), { virtual: true });

// Mock requestIdleCallback and cancelIdleCallback
if (typeof window !== 'undefined') {
  window.requestIdleCallback = jest.fn((cb) => {
    const id = setTimeout(() => cb(), 0);
    return id;
  });
  
  window.cancelIdleCallback = jest.fn((id) => {
    clearTimeout(id);
  });
}