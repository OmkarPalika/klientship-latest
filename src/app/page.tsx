'use client';

import { Suspense, lazy, useEffect } from 'react';
import Header from "@/components/Main/Header";
import { preloadCriticalAssets } from '@/lib/lazyLoad';
import { deferExecution, loadPolyfillsIfNeeded, shouldServeModernBundle } from '@/lib/optimizeBundle';

// Lazy load non-critical components
const Services = lazy(() => import("@/components/Main/Services"));
const Process = lazy(() => import("@/components/Main/Process"));
const FAQs = lazy(() => import("@/components/Main/FAQs"));
const Footer = lazy(() => import("@/components/Main/Footer"));

// Loading fallbacks
const ServicesFallback = () => <div className="w-full h-96 bg-gray-100 animate-pulse"></div>;
const ProcessFallback = () => <div className="w-full h-64 bg-gray-50 animate-pulse"></div>;
const FAQsFallback = () => <div className="w-full h-64 bg-gray-100 animate-pulse"></div>;
const FooterFallback = () => <div className="w-full h-96 bg-black"></div>;

export default function Home() {
  useEffect(() => {
    // Preload critical assets
    preloadCriticalAssets([
      '/logo.webp',
    ]);
    
    // Load polyfills only if needed
    deferExecution(() => {
      loadPolyfillsIfNeeded();
    }, 1000);
    
    // Add browser back/forward cache
    if ('navigation' in window) {
      // @ts-expect-error - This is a new API that TypeScript might not recognize yet
      window.navigation?.addEventListener('navigate', (event: Event) => {
        // @ts-expect-error - navigationType may not exist on Event, but is present in Navigation API
        if (event.navigationType === 'push' || event.navigationType === 'replace') {
          // Save scroll position
          const scrollPosition = window.scrollY;
          sessionStorage.setItem('scrollPos', scrollPosition.toString());
          
          // Save form data if any
          const forms = document.querySelectorAll('form');
          forms.forEach(form => {
            const formData = new FormData(form);
            sessionStorage.setItem(`form-${form.id}`, JSON.stringify(Object.fromEntries(formData)));
          });

          // Preload assets for new route
          preloadCriticalAssets([
            '/logo.webp',
          ]);
        }
      });
    }
    
    // Add event listener for page visibility changes to optimize resource usage
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'hidden') {
        // Pause non-essential operations when page is not visible
        document.querySelectorAll('video').forEach(video => video.pause());
        document.querySelectorAll('audio').forEach(audio => audio.pause());
        window.cancelAnimationFrame(window.requestAnimationFrame(() => {}));
        sessionStorage.setItem('wasHidden', 'true');
      } else {
        // Resume operations when page becomes visible again
        if (sessionStorage.getItem('wasHidden') === 'true') {
          document.querySelectorAll('video[data-autoplay]').forEach(video => (video as HTMLVideoElement).play());
          document.querySelectorAll('audio[data-autoplay]').forEach(audio => (audio as HTMLAudioElement).play());
          window.requestAnimationFrame(() => {
            // Resume any animations
            document.querySelectorAll('.animate-pulse').forEach(el => 
              el.classList.remove('pause-animation')
            );
          });
          sessionStorage.removeItem('wasHidden');
        }
      }
    });
    
    // Check if we should serve modern bundle
    const isModern = shouldServeModernBundle();
    if (isModern) {
      // Modern browsers get optimized code
      document.documentElement.classList.add('modern-browser');
    }
  }, []);

  return (
    <div className="flex flex-col justify-center w-full min-h-screen">
      <Header />
      
      <Suspense fallback={<ServicesFallback />}>
        <Services />
      </Suspense>
      
      <Suspense fallback={<ProcessFallback />}>
        <Process />
      </Suspense>
      
      <Suspense fallback={<FAQsFallback />}>
        <FAQs />
      </Suspense>
      
      <Suspense fallback={<FooterFallback />}>
        <Footer />
      </Suspense>
    </div>
  );
}