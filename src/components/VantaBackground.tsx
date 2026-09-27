"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";

declare global {
  interface Window {
    VANTA: any;
    THREE: any;
  }
}

export default function VantaBackground() {
  const [vantaEffect, setVantaEffect] = useState<any>(null);
  const vantaRef = useRef<HTMLDivElement>(null);

  const initVanta = () => {
    if (!vantaEffect && window.VANTA && window.VANTA.DOTS && vantaRef.current) {
      try {
        const effect = window.VANTA.DOTS({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0xed7b0f,
          color2: 0xff7100,
          backgroundColor: 0xffffff,
          size: 4.00,
          showLines: false
        });
        setVantaEffect(effect);
      } catch (e) {
        console.error("Vanta init error:", e);
      }
    }
  };

  useEffect(() => {
    // Attempt init in case scripts are already loaded from cache
    const timer = setTimeout(initVanta, 500);
    
    return () => {
      clearTimeout(timer);
      if (vantaEffect) {
        vantaEffect.destroy();
      }
    };
  }, [vantaEffect]);

  return (
    <>
      <Script 
        id="three-js"
        src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js" 
        strategy="beforeInteractive"
      />
      <Script 
        id="vanta-js"
        src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.dots.min.js" 
        strategy="afterInteractive"
        onLoad={initVanta}
      />
      <div 
        ref={vantaRef} 
        className="fixed inset-0 -z-50 w-full h-full pointer-events-none"
      />
    </>
  );
}
