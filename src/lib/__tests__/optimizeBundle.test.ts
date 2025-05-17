/**
 * Tests for optimizeBundle.ts
 */

import { 
  removeUnusedExports, 
  shouldServeModernBundle, 
  loadPolyfillsIfNeeded, 
  optimizeAnimation, 
  cancelOptimizedAnimation, 
  deferExecution 
} from '../optimizeBundle';

// Mock the window object
const originalWindow = global.window;

beforeEach(() => {
  // Reset window object before each test
  global.window = {
    ...originalWindow,
    IntersectionObserver: undefined,
    ResizeObserver: undefined,
    fetch: undefined,
    Promise: undefined,
    Symbol: undefined,
    customElements: undefined,
    requestIdleCallback: undefined,
    requestAnimationFrame: jest.fn(),
    cancelAnimationFrame: jest.fn(),
  };
});

afterEach(() => {
  // Restore original window object after each test
  global.window = originalWindow;
  jest.resetAllMocks();
});

describe('removeUnusedExports', () => {
  it('should return the input modules array', () => {
    const modules = ['module1', 'module2'];
    expect(removeUnusedExports(modules)).toEqual(modules);
  });
});

describe('shouldServeModernBundle', () => {
  it('should return false if window is undefined', () => {
    // @ts-expect-error - Simulating server-side rendering where window is undefined
    delete global.window;
    expect(shouldServeModernBundle()).toBe(false);
  });

  it('should return false if modern features are not available', () => {
    expect(shouldServeModernBundle()).toBe(false);
  });

  it('should return true if all modern features are available', () => {
    // Mock modern browser features
    global.window = {
      ...global.window,
      IntersectionObserver: function() {},
      ResizeObserver: function() {},
      fetch: function() {},
      Promise: function() {},
      Symbol: function() {},
      customElements: {},
    };
    expect(shouldServeModernBundle()).toBe(true);
  });
});

describe('loadPolyfillsIfNeeded', () => {
  it('should not load polyfills if window is undefined', async () => {
    // @ts-expect-error - Simulating server-side rendering where window is undefined
    delete global.window;
    await expect(loadPolyfillsIfNeeded()).resolves.toBeUndefined();
  });

  it('should load polyfills if features are not available', async () => {
    // Mock dynamic imports
    jest.mock('intersection-observer', () => ({}), { virtual: true });
    jest.mock('resize-observer-polyfill', () => ({}), { virtual: true });
    jest.mock('whatwg-fetch', () => ({}), { virtual: true });

    await loadPolyfillsIfNeeded();
    // This test just verifies that the function doesn't throw errors
    // In a real test environment, we would verify that the imports were called
  });

  it('should not load polyfills if features are available', async () => {
    global.window = {
      ...global.window,
      IntersectionObserver: function() {},
      ResizeObserver: function() {},
      fetch: function() {},
    };
    await loadPolyfillsIfNeeded();
    // This test just verifies that the function doesn't throw errors
  });
});

describe('optimizeAnimation', () => {
  it('should call requestAnimationFrame with the callback', () => {
    const callback = () => {};
    optimizeAnimation(callback);
    expect(window.requestAnimationFrame).toHaveBeenCalledWith(callback);
  });
});

describe('cancelOptimizedAnimation', () => {
  it('should call cancelAnimationFrame with the id', () => {
    const id = 123;
    cancelOptimizedAnimation(id);
    expect(window.cancelAnimationFrame).toHaveBeenCalledWith(id);
  });
});

describe('deferExecution', () => {
  it('should not execute if window is undefined', () => {
    // @ts-expect-error - Simulating server-side rendering where window is undefined
    delete global.window;
    const fn = jest.fn();
    deferExecution(fn);
    expect(fn).not.toHaveBeenCalled();
  });

  it('should use requestIdleCallback if available', () => {
    global.window.requestIdleCallback = jest.fn();
    const fn = jest.fn();
    deferExecution(fn, 200);
    expect(window.requestIdleCallback).toHaveBeenCalled();
  });

  it('should use setTimeout as fallback', () => {
    global.window.setTimeout = jest.fn();
    const fn = jest.fn();
    deferExecution(fn, 200);
    expect(window.setTimeout).toHaveBeenCalledWith(fn, 200);
  });
});