import { useEffect, useState } from 'react';

// Custom hook for lazy loading components
export function useLazyLoad<T>(importFunc: () => Promise<{ default: T }>, options = { threshold: 0.1 }): T | null {
  const [component, setComponent] = useState<T | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When the element is in view, load the component
        if (entry.isIntersecting) {
          importFunc().then((mod) => {
            setComponent(mod.default);
          });
          observer.disconnect();
        }
      },
      { threshold: options.threshold }
    );

    // Create a dummy element to observe
    const element = document.createElement('div');
    element.id = 'lazy-load-trigger';
    element.style.height = '1px';
    element.style.width = '1px';
    element.style.position = 'absolute';
    element.style.bottom = '200px'; // Load when user is 200px from the bottom
    element.style.left = '0';
    document.body.appendChild(element);

    observer.observe(element);

    return () => {
      observer.disconnect();
      if (document.body.contains(element)) {
        document.body.removeChild(element);
      }
    };
  }, [importFunc, options.threshold]);

  return component;
}

// Function to defer non-critical JavaScript
export function deferNonCriticalJS(url: string, id: string): void {
  if (typeof window !== 'undefined') {
    setTimeout(() => {
      const script = document.createElement('script');
      script.src = url;
      script.id = id;
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    }, 2000); // Delay loading by 2 seconds
  }
}

// Function to preload critical assets
export function preloadCriticalAssets(assets: string[]): void {
  if (typeof window !== 'undefined') {
    assets.forEach(asset => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = asset;
      link.as = asset.endsWith('.js') ? 'script' : 'style';
      document.head.appendChild(link);
    });
  }
}