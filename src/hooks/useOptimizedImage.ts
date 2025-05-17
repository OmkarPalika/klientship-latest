import { useState, useEffect } from 'react';

interface ImageDimensions {
  width: number;
  height: number;
}

interface OptimizedImageOptions {
  placeholder?: boolean;
  blurhash?: string;
  quality?: number;
  priority?: boolean;
}

/**
 * Custom hook to optimize image loading and prevent layout shifts
 * @param src - Image source URL
 * @param options - Image optimization options
 * @returns Object containing loading state and optimized props
 */
export function useOptimizedImage(
  src: string,
  options: OptimizedImageOptions = {
    placeholder: true,
    quality: 75,
    priority: false,
  }
) {
  const [loading, setLoading] = useState(true);
  const [dimensions, setDimensions] = useState<ImageDimensions | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!src) return;

    // Reset states when src changes
    setLoading(true);
    setError(null);

    // Create new image to get dimensions
    const img = new Image();
    img.src = src;

    img.onload = () => {
      setDimensions({
        width: img.naturalWidth,
        height: img.naturalHeight,
      });
      setLoading(false);
    };

    img.onerror = () => {
      setError(new Error('Failed to load image'));
      setLoading(false);
    };

    // Clean up
    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src]);

  // Calculate aspect ratio for proper sizing
  const aspectRatio = dimensions 
    ? dimensions.width / dimensions.height 
    : undefined;

  // Generate srcSet for responsive images
  const generateSrcSet = () => {
    if (!src) return undefined;
    
    const widths = [320, 640, 960, 1280, 1920];
    const baseUrl = new URL(src);
    const extension = baseUrl.pathname.split('.').pop();
    const basePath = baseUrl.pathname.replace(`.${extension}`, '');
    
    return widths
      .map(width => {
        // This is a simplified example - in a real app, you'd use a proper image service
        const resizedUrl = `${baseUrl.origin}${basePath}-${width}.${extension}`;
        return `${resizedUrl} ${width}w`;
      })
      .join(', ');
  };

  // Return optimized image props and loading state
  return {
    loading,
    error,
    imageProps: {
      src,
      width: dimensions?.width,
      height: dimensions?.height,
      aspectRatio,
      loading: options.priority ? 'eager' : 'lazy',
      quality: options.quality || 75,
      placeholder: options.placeholder ? 'blur' : undefined,
      blurDataURL: options.blurhash,
      srcSet: generateSrcSet(),
      sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
    },
  };
}

/**
 * Preloads an image to ensure it's in the browser cache
 * @param src - Image source URL
 */
export function preloadImage(src: string): void {
  if (typeof window === 'undefined') return;
  
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'image';
  link.href = src;
  document.head.appendChild(link);
}