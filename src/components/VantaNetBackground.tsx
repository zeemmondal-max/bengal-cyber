"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";

declare global {
  interface Window {
    VANTA: any;
    THREE: any;
  }
}

export default function VantaNetBackground() {
  const [vantaEffect, setVantaEffect] = useState<any>(null);
  const vantaRef = useRef<HTMLDivElement>(null);

  const initVanta = () => {
    if (!vantaEffect && window.VANTA && window.VANTA.NET && vantaRef.current) {
      try {
        const effect = window.VANTA.NET({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0xfcac12,
          backgroundColor: 0xffffff,
          points: 20.00,
          maxDistance: 10.00,
          spacing: 10.00
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
      {/* three.js is already loaded by layout/home or other components, but we load it anyway just in case it's a fresh load */}
      <Script 
        id="three-js-net"
        src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js" 
        strategy="beforeInteractive"
      />
      <Script 
        id="vanta-net-js"
        src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.net.min.js" 
        strategy="afterInteractive"
        onLoad={initVanta}
      />
      <div 
        ref={vantaRef} 
        className="fixed inset-0 -z-50 w-full h-full pointer-events-none"
      />
      {/* Blur Overlay to soften the background and make content pop */}
      <div className="fixed inset-0 -z-40 w-full h-full pointer-events-none backdrop-blur-md bg-white/40" />
    </>
  );
}
