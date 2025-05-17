import { useEffect, useRef } from 'react';

interface AnimationOptions {
  useComposited?: boolean;
  willChange?: string;
  preventLayoutShift?: boolean;
  duration?: number;
}

/**
 * Custom hook to optimize animations for better performance
 * @param selector - CSS selector for the elements to animate
 * @param options - Animation optimization options
 */
export function useOptimizedAnimation(
  selector: string,
  options: AnimationOptions = {
    useComposited: true,
    willChange: 'transform, opacity',
    preventLayoutShift: true,
    duration: 300,
  }
) {
  const animatedRef = useRef<boolean>(false);

  useEffect(() => {
    if (animatedRef.current) return;
    
    const elements = document.querySelectorAll(selector);
    
    if (elements.length === 0) return;
    
    // Apply optimizations to each element
    elements.forEach((el) => {
      const htmlEl = el as HTMLElement;
      
      // Reserve space to prevent layout shifts
      if (options.preventLayoutShift) {
        const computedStyle = window.getComputedStyle(htmlEl);
        const height = computedStyle.height;
        const width = computedStyle.width;
        
        if (height !== 'auto' && width !== 'auto') {
          htmlEl.style.minHeight = height;
          htmlEl.style.minWidth = width;
        }
      }
      
      // Use GPU acceleration for animations
      if (options.useComposited) {
        htmlEl.style.transform = 'translateZ(0)';
        htmlEl.style.backfaceVisibility = 'hidden';
      }
      
      // Hint browser about properties that will change
      if (options.willChange) {
        htmlEl.style.willChange = options.willChange;
      }
      
      // Set transition duration
      if (options.duration) {
        htmlEl.style.transitionDuration = `${options.duration}ms`;
      }
    });
    
    animatedRef.current = true;
    
    // Cleanup function
    return () => {
      elements.forEach((el) => {
        const htmlEl = el as HTMLElement;
        if (options.willChange) {
          htmlEl.style.willChange = 'auto';
        }
      });
    };
  }, [selector, options]);
}

/**
 * Custom hook to prevent Cumulative Layout Shift (CLS)
 * @param selector - CSS selector for the elements to monitor
 */
export function usePreventLayoutShift(selector: string) {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);
    
    if (elements.length === 0) return;
    
    // Store original dimensions
    const originalDimensions = new Map<Element, { width: string, height: string }>();
    
    elements.forEach((el) => {
      const htmlEl = el as HTMLElement;
      const computedStyle = window.getComputedStyle(htmlEl);
      
      originalDimensions.set(el, {
        width: computedStyle.width,
        height: computedStyle.height
      });
      
      // Set explicit dimensions
      htmlEl.style.minHeight = computedStyle.height;
      htmlEl.style.minWidth = computedStyle.width;
    });
    
    // Cleanup function
    return () => {
      elements.forEach((el) => {
        const htmlEl = el as HTMLElement;
        const dimensions = originalDimensions.get(el);
        
        if (dimensions) {
          htmlEl.style.minHeight = '';
          htmlEl.style.minWidth = '';
        }
      });
    };
  }, [selector]);
}