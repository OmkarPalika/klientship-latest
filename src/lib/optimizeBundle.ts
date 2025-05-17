/**
 * This file contains utilities to optimize JavaScript bundles
 * It's used by the Next.js build process to reduce bundle size
 */

// Function to identify and remove unused exports
export function removeUnusedExports(modules: string[]): string[] {
  // This is a placeholder for the actual implementation
  // In a real-world scenario, this would analyze the dependency graph
  return modules;
}

// Function to identify modern browsers and serve optimized code
export function shouldServeModernBundle(): boolean {
  if (typeof window === 'undefined') {
    return false;
  }
  
  // Check for modern browser features
  const isModernBrowser = 
    'IntersectionObserver' in window &&
    'ResizeObserver' in window &&
    'fetch' in window &&
    'Promise' in window &&
    'Symbol' in window &&
    'customElements' in window;
    
  return isModernBrowser;
}

// Function to dynamically import polyfills only when needed
export async function loadPolyfillsIfNeeded(): Promise<void> {
  if (typeof window === 'undefined') {
    return;
  }
  
  const polyfills = [];
  
  if (!('IntersectionObserver' in window)) {
    polyfills.push(import('intersection-observer'));
  }
  
  if (!('ResizeObserver' in window)) {
    polyfills.push(import('resize-observer-polyfill'));
  }
  
  if (!('fetch' in window)) {
    polyfills.push(import('whatwg-fetch'));
  }
  
  if (polyfills.length > 0) {
    await Promise.all(polyfills);
  }
}

// Function to optimize animations by using requestAnimationFrame
export function optimizeAnimation(callback: FrameRequestCallback): number {
  return requestAnimationFrame(callback);
}

// Function to cancel animation frame
export function cancelOptimizedAnimation(id: number): void {
  cancelAnimationFrame(id);
}

// Function to defer non-critical JavaScript execution
export function deferExecution(fn: () => void, delay = 100): void {
  if (typeof window === 'undefined') {
    return;
  }
  
  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(() => {
      fn();
    }, { timeout: delay });
  } else {
    setTimeout(fn, delay);
  }
}