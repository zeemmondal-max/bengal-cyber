"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  // Mobile Menubar Dock Position: 'left' | 'right', and vertical percentage (e.g. 42%)
  const [dockPosition, setDockPosition] = useState<{ side: "left" | "right"; topPercent: number }>({
    side: "right",
    topPercent: 42,
  });

  // Long-press (3 seconds) & drag states
  const [isHolding, setIsHolding] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragCoords, setDragCoords] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [hoveredZone, setHoveredZone] = useState<"top-left" | "mid-left" | "bot-left" | "top-right" | "mid-right" | "bot-right" | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const holdTimerRef = useRef<NodeJS.Timeout | null>(null);
  const startPosRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const isDraggingRef = useRef<boolean>(false);
  const didMoveRef = useRef<boolean>(false);

  // Restore saved position from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem("bengal_mobile_menu_pos");
      if (saved) {
        const parsed = JSON.parse(saved);
        if ((parsed.side === "left" || parsed.side === "right") && typeof parsed.topPercent === "number") {
          setDockPosition({
            side: parsed.side,
            topPercent: Math.max(12, Math.min(85, parsed.topPercent)),
          });
        }
      }
    } catch {}
  }, []);

  const savePosition = (newPos: { side: "left" | "right"; topPercent: number }) => {
    setDockPosition(newPos);
    try {
      localStorage.setItem("bengal_mobile_menu_pos", JSON.stringify(newPos));
    } catch {}
  };

  const cancelHoldTimer = () => {
    if (holdTimerRef.current) {
      clearTimeout(holdTimerRef.current);
      holdTimerRef.current = null;
    }
  };

  useEffect(() => {
    return () => {
      cancelHoldTimer();
    };
  }, []);

  // Body scroll lock when menu is open
  useEffect(() => {
    if (isMobileOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isMobileOpen]);

  // Touch and pointer start/move/end handlers
  const startHold = (clientX: number, clientY: number) => {
    if (isMobileOpen) return;

    startPosRef.current = { x: clientX, y: clientY };
    isDraggingRef.current = false;
    didMoveRef.current = false;
    setIsHolding(true);

    cancelHoldTimer();

    // Exactly 3.0s (3000ms) uninterrupted hold threshold
    holdTimerRef.current = setTimeout(() => {
      isDraggingRef.current = true;
      setIsHolding(false);
      setIsDragging(true);
      setDragCoords({ x: clientX, y: clientY });

      if (typeof navigator !== "undefined" && navigator.vibrate) {
        try {
          navigator.vibrate([60, 40, 80]);
        } catch {}
      }
    }, 3000);
  };

  const moveHold = (clientX: number, clientY: number) => {
    if (isDraggingRef.current) {
      setDragCoords({ x: clientX, y: clientY });
      const isLeft = clientX < window.innerWidth / 2;
      const yRatio = clientY / window.innerHeight;
      const vZone = yRatio < 0.33 ? "top" : yRatio > 0.67 ? "bot" : "mid";
      setHoveredZone(`${vZone}-${isLeft ? "left" : "right"}` as any);
      return;
    }

    if (!didMoveRef.current) {
      const dist = Math.hypot(clientX - startPosRef.current.x, clientY - startPosRef.current.y);
      if (dist > 15) {
        didMoveRef.current = true;
        cancelHoldTimer();
        setIsHolding(false);
      }
    }
  };

  const endHold = (clientX: number, clientY: number) => {
    cancelHoldTimer();

    if (isDraggingRef.current) {
      const isLeft = clientX < window.innerWidth / 2;
      const yRatio = Math.max(0.12, Math.min(0.85, clientY / window.innerHeight));

      let targetTop = Math.round(yRatio * 100);
      let cornerLabel = "Center Edge";
      if (yRatio < 0.28) {
        targetTop = 16;
        cornerLabel = "Top Corner";
      } else if (yRatio > 0.72) {
        targetTop = 82;
        cornerLabel = "Bottom Corner";
      }

      const newPos = {
        side: (isLeft ? "left" : "right") as "left" | "right",
        topPercent: targetTop,
      };

      savePosition(newPos);
      isDraggingRef.current = false;
      setIsDragging(false);
      setHoveredZone(null);

      setToastMessage(`Menubar docked to ${isLeft ? "Left" : "Right"} ${cornerLabel}!`);
      setTimeout(() => setToastMessage(null), 2500);
      return;
    }

    const wasHolding = !didMoveRef.current;
    setIsHolding(false);

    // If tapped without moving and without waiting 3s, open menu immediately
    if (wasHolding) {
      setIsMobileOpen(true);
    }
  };

  const cancelHold = () => {
    cancelHoldTimer();
    isDraggingRef.current = false;
    setIsHolding(false);
    setIsDragging(false);
    setHoveredZone(null);
  };

  // Window listeners during active drag
  useEffect(() => {
    if (!isDragging) return;

    const handleWindowTouchMove = (e: TouchEvent) => {
      const t = e.touches[0];
      if (t) moveHold(t.clientX, t.clientY);
    };
    const handleWindowTouchEnd = (e: TouchEvent) => {
      const t = e.changedTouches[0];
      if (t) endHold(t.clientX, t.clientY);
    };
    const handleWindowMouseMove = (e: MouseEvent) => {
      moveHold(e.clientX, e.clientY);
    };
    const handleWindowMouseUp = (e: MouseEvent) => {
      endHold(e.clientX, e.clientY);
    };

    window.addEventListener("touchmove", handleWindowTouchMove, { passive: false });
    window.addEventListener("touchend", handleWindowTouchEnd);
    window.addEventListener("mousemove", handleWindowMouseMove);
    window.addEventListener("mouseup", handleWindowMouseUp);

    return () => {
      window.removeEventListener("touchmove", handleWindowTouchMove);
      window.removeEventListener("touchend", handleWindowTouchEnd);
      window.removeEventListener("mousemove", handleWindowMouseMove);
      window.removeEventListener("mouseup", handleWindowMouseUp);
    };
  }, [isDragging]);

  const toggleDockSide = () => {
    const nextSide = dockPosition.side === "left" ? "right" : "left";
    const newPos = { ...dockPosition, side: nextSide };
    savePosition(newPos);
    setToastMessage(`Menubar moved to ${nextSide === "left" ? "Left" : "Right"} Side!`);
    setTimeout(() => setToastMessage(null), 2000);
  };

  const normalizePath = (p: string | null | undefined) => {
    if (!p) return "/";
    const clean = p.split("?")[0].split("#")[0].replace(/\/+$/, "");
    return clean === "" ? "/" : clean;
  };
  const currentPath = normalizePath(pathname);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "About Us", href: "/about" },
    { name: "Career", href: "/career" },
    { name: "Get in Touch", href: "/contact", isCta: true },
  ];

  return (
    <>
      {/* ========================================================= */}
      {/* 1. MOBILE RESPONSIVE MENU BAR (REPOSITIONABLE TAB & PANEL) */}
      {/* Supports 3-second hold to drag & dock anywhere on screen    */}
      {/* ========================================================= */}
      <div className="lg:hidden">
        {/* Docking Confirmation Toast */}
        <AnimatePresence>
          {toastMessage && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.9 }}
              className="fixed top-5 left-1/2 -translate-x-1/2 z-[160] bg-brand-dark/95 border border-orange-500/70 shadow-2xl shadow-brand-primary/40 text-white text-xs font-bold px-4 py-2 rounded-full flex items-center gap-2 pointer-events-none whitespace-nowrap"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{toastMessage}</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Drop Target Zones Overlay (Visible when dragging) */}
        {isDragging && (
          <div className="fixed inset-0 z-[130] pointer-events-none select-none">
            <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] transition-opacity duration-300" />
            {[
              { id: "top-left", label: "Top-Left", pos: "top-4 left-3" },
              { id: "mid-left", label: "Left Edge", pos: "top-1/2 -translate-y-1/2 left-3" },
              { id: "bot-left", label: "Bottom-Left", pos: "bottom-4 left-3" },
              { id: "top-right", label: "Top-Right", pos: "top-4 right-3" },
              { id: "mid-right", label: "Right Edge", pos: "top-1/2 -translate-y-1/2 right-3" },
              { id: "bot-right", label: "Bottom-Right", pos: "bottom-4 right-3" },
            ].map((zone) => {
              const isHovered = hoveredZone === zone.id;
              return (
                <div
                  key={zone.id}
                  className={`absolute ${zone.pos} w-20 h-28 rounded-3xl border-2 border-dashed flex flex-col items-center justify-center p-2 text-center transition-all duration-200 ${
                    isHovered
                      ? "border-orange-400 bg-orange-500/30 scale-105 shadow-2xl shadow-brand-primary/60 text-white"
                      : "border-white/30 bg-white/5 text-white/60"
                  }`}
                >
                  <span className="text-xl">{isHovered ? "📍" : "⚓"}</span>
                  <span className="text-[9px] font-extrabold uppercase tracking-tight mt-1 leading-tight">
                    {zone.label}
                  </span>
                </div>
              );
            })}
          </div>
        )}

        {/* Floating Active Drag Ghost (Follows Finger while Dragging) */}
        {isDragging && (
          <div
            className="fixed z-[140] w-[46px] h-[120px] pointer-events-none select-none flex flex-col items-center justify-center"
            style={{
              left: `${dragCoords.x - 23}px`,
              top: `${dragCoords.y - 60}px`,
            }}
          >
            {/* Guide Badge above user's finger */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black/95 text-white text-[10px] font-bold px-3 py-1 rounded-full whitespace-nowrap border border-orange-500 shadow-xl shadow-orange-500/50 flex items-center gap-1.5 animate-bounce">
              <span>🎯</span>
              <span>Drop on any corner or edge</span>
            </div>

            {/* Glowing Ghost Replica */}
            <div className="w-full h-full rounded-2xl bg-orange-500/80 border-2 border-white shadow-2xl shadow-orange-500 flex flex-col items-center justify-center text-white scale-110">
              <span className="text-[10px] font-extrabold tracking-widest uppercase rotate-90">
                MOVE
              </span>
            </div>
          </div>
        )}

        {/* Full Backdrop Overlay when Mobile Menu is Open */}
        <AnimatePresence>
          {isMobileOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-[3px] z-[110] pointer-events-auto"
              onClick={() => setIsMobileOpen(false)}
              onTouchMove={(e) => e.preventDefault()}
            />
          )}
        </AnimatePresence>

        {/* Floating Mobile Trigger Tab (Repositionable: Hold 3s to move anywhere) */}
        <AnimatePresence>
          {!isMobileOpen && !isDragging && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              whileTap={{ scale: 0.96 }}
              onTouchStart={(e) => {
                const t = e.touches[0];
                startHold(t.clientX, t.clientY);
              }}
              onTouchMove={(e) => {
                const t = e.touches[0];
                if (t) moveHold(t.clientX, t.clientY);
              }}
              onTouchEnd={(e) => {
                const t = e.changedTouches[0];
                if (t) endHold(t.clientX, t.clientY);
              }}
              onTouchCancel={cancelHold}
              onMouseDown={(e) => {
                startHold(e.clientX, e.clientY);
              }}
              onMouseMove={(e) => {
                if (e.buttons === 1) moveHold(e.clientX, e.clientY);
              }}
              onMouseUp={(e) => {
                endHold(e.clientX, e.clientY);
              }}
              onContextMenu={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}
              style={{
                top: `calc(${dockPosition.topPercent}% - 58px)`,
                WebkitTouchCallout: "none",
                WebkitUserSelect: "none",
                userSelect: "none",
                touchAction: "none",
              }}
              className={`fixed ${
                dockPosition.side === "left" ? "left-0" : "right-0"
              } z-[60] w-[42px] h-[116px] flex flex-col items-center justify-center cursor-pointer group pointer-events-auto select-none touch-none`}
              aria-label="Open Navigation Menu (Hold 3s to Move)"
            >
              {/* Unified Background and Seamless Inverse Fillets SVG */}
              <svg
                viewBox="0 0 42 116"
                className={`absolute inset-0 w-full h-full overflow-visible filter ${
                  dockPosition.side === "left"
                    ? "drop-shadow-[4px_4px_16px_rgba(249,115,22,0.35)] scale-x-[-1]"
                    : "drop-shadow-[-4px_4px_16px_rgba(249,115,22,0.35)]"
                }`}
                fill="none"
              >
                <defs>
                  <linearGradient id="tabOrangeBorderGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#ea580c" stopOpacity="0.2" />
                    <stop offset="15%" stopColor="#f97316" stopOpacity="0.9" />
                    <stop offset="50%" stopColor="#fb923c" stopOpacity="1" />
                    <stop offset="85%" stopColor="#f97316" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#ea580c" stopOpacity="0.2" />
                  </linearGradient>
                </defs>

                {/* Seamless Glassmorphic Tab Body with Inverse Fillets */}
                <path
                  d="M 42 0 C 42 13, 0 11, 0 24 L 0 92 C 0 105, 42 103, 42 116 L 42 0 Z"
                  fill="#0f172a"
                  fillOpacity="0.95"
                />

                {/* Continuous Glowing Orange Contour Stroke */}
                <path
                  d="M 42 0 C 42 13, 0 11, 0 24 L 0 92 C 0 105, 42 103, 42 116"
                  stroke="url(#tabOrangeBorderGrad)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>

              {/* Foreground Interactive Elements */}
              <div
                className={`relative z-10 flex flex-col items-center justify-center ${
                  dockPosition.side === "left" ? "pr-1" : "pl-1"
                }`}
              >
                {/* Droplet with Ping and Bounce */}
                <div className="relative flex items-center justify-center my-0.5">
                  <div className="absolute w-5 h-5 bg-brand-primary/40 rounded-full animate-ping pointer-events-none" />
                  <div className="relative w-3.5 h-3.5 bg-brand-primary rounded-full rounded-br-none rotate-45 shadow-md shadow-brand-primary/40 animate-bounce" />
                </div>

                {/* Vertical Text Indicator */}
                <span className="text-[9px] font-extrabold tracking-widest text-orange-400 rotate-90 my-3.5 select-none uppercase">
                  MENU
                </span>

                {/* Glowing Pulse Dot */}
                <div className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
              </div>

              {/* 3-Second Hold Countdown Tooltip & Circular Progress Ring */}
              <AnimatePresence>
                {isHolding && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.85 }}
                    className={`absolute top-1/2 -translate-y-1/2 ${
                      dockPosition.side === "right" ? "right-[48px]" : "left-[48px]"
                    } bg-brand-dark/95 text-white border border-orange-500/80 text-[10px] font-bold px-3 py-1.5 rounded-2xl whitespace-nowrap shadow-2xl flex items-center gap-2 pointer-events-none z-50`}
                  >
                    <div className="w-4 h-4 relative flex items-center justify-center shrink-0">
                      <svg className="w-full h-full -rotate-90" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.2)" strokeWidth="3" fill="none" />
                        <circle
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="#f97316"
                          strokeWidth="3"
                          fill="none"
                          strokeDasharray={62.8}
                          strokeDashoffset={isHolding ? 0 : 62.8}
                          strokeLinecap="round"
                          className={isHolding ? "transition-[stroke-dashoffset] duration-[3000ms] ease-linear" : "none"}
                        />
                      </svg>
                    </div>
                    <span>Hold 3s to Move Menubar...</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Slide-Out Menu Island Panel (Docked on Left or Right) */}
        <AnimatePresence>
          {isMobileOpen && (
            <motion.div
              initial={{
                x: dockPosition.side === "left" ? -180 : 180,
                opacity: 0,
                scale: 0.95,
              }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              exit={{
                x: dockPosition.side === "left" ? -180 : 180,
                opacity: 0,
                scale: 0.95,
              }}
              transition={{ type: "spring", stiffness: 260, damping: 25, mass: 0.8 }}
              className={`fixed inset-y-2 sm:inset-y-4 ${
                dockPosition.side === "left" ? "left-2 sm:left-4" : "right-2 sm:right-4"
              } my-auto z-[120] w-[280px] landscape:w-[420px] max-w-[calc(100vw-16px)] h-fit max-h-[calc(100dvh-16px)] sm:max-h-[calc(100dvh-32px)] flex flex-col pointer-events-auto`}
            >
              <div className="relative bg-brand-dark/95 backdrop-blur-2xl text-white p-3.5 sm:p-4 rounded-3xl border border-orange-500/40 shadow-2xl shadow-brand-primary/50 flex flex-col max-h-[calc(100dvh-16px)] sm:max-h-[calc(100dvh-32px)] overflow-hidden">
                
                {/* Traveling Sine Wave Light Ribbon (Top of Island) */}
                <div className="absolute top-0 left-0 right-0 h-4 overflow-hidden pointer-events-none">
                  <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
                    className="w-[200%] h-full flex"
                  >
                    <svg viewBox="0 0 800 30" className="w-1/2 h-full" preserveAspectRatio="none" fill="none">
                      <path
                        d="M 0 10 Q 100 0, 200 10 T 400 10 T 600 10 T 800 10"
                        stroke="url(#mobileWaveGrad)"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        className="filter drop-shadow-[0_2px_8px_rgba(249,115,22,0.9)]"
                      />
                      <defs>
                        <linearGradient id="mobileWaveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#ea580c" stopOpacity="0.2" />
                          <stop offset="30%" stopColor="#f97316" stopOpacity="0.9" />
                          <stop offset="50%" stopColor="#fde047" stopOpacity="1" />
                          <stop offset="70%" stopColor="#f97316" stopOpacity="0.9" />
                          <stop offset="100%" stopColor="#ea580c" stopOpacity="0.2" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <svg viewBox="0 0 800 30" className="w-1/2 h-full" preserveAspectRatio="none" fill="none">
                      <path
                        d="M 0 10 Q 100 0, 200 10 T 400 10 T 600 10 T 800 10"
                        stroke="url(#mobileWaveGrad2)"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        className="filter drop-shadow-[0_2px_8px_rgba(249,115,22,0.9)]"
                      />
                      <defs>
                        <linearGradient id="mobileWaveGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#ea580c" stopOpacity="0.2" />
                          <stop offset="30%" stopColor="#f97316" stopOpacity="0.9" />
                          <stop offset="50%" stopColor="#fde047" stopOpacity="1" />
                          <stop offset="70%" stopColor="#f97316" stopOpacity="0.9" />
                          <stop offset="100%" stopColor="#ea580c" stopOpacity="0.2" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </motion.div>
                </div>

                {/* Ambient Glow behind the card */}
                <motion.div
                  animate={{
                    scaleX: [0.95, 1.1, 0.95],
                    opacity: [0.6, 0.9, 0.6],
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-2 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-gradient-to-r from-orange-600 via-amber-500 to-orange-600 rounded-full blur-xl pointer-events-none -z-10"
                />

                {/* Header with Droplet, Corner Dock Pills, and Close Button */}
                <div className="flex items-center justify-between pt-1 pb-2 border-b border-white/10 shrink-0">
                  <div className="flex items-center gap-2">
                    <div className="relative flex items-center justify-center">
                      <div className="absolute w-5 h-5 bg-brand-primary/40 rounded-full animate-ping" />
                      <div className="relative w-3 h-3 bg-brand-primary rounded-full rounded-br-none rotate-45 shadow-sm shadow-brand-primary/40" />
                    </div>
                    <span className="text-xs font-bold tracking-wider text-white uppercase">
                      Navigation
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    {/* 4 Corner Shortcut Dock Pills */}
                    <div className="flex items-center bg-white/10 rounded-full p-0.5 border border-white/10">
                      {[
                        { label: "↖", pos: { side: "left", topPercent: 16 }, title: "Top-Left" },
                        { label: "↗", pos: { side: "right", topPercent: 16 }, title: "Top-Right" },
                        { label: "↙", pos: { side: "left", topPercent: 82 }, title: "Bottom-Left" },
                        { label: "↘", pos: { side: "right", topPercent: 82 }, title: "Bottom-Right" },
                      ].map((corner) => {
                        const isCurrent =
                          dockPosition.side === corner.pos.side &&
                          Math.abs(dockPosition.topPercent - corner.pos.topPercent) < 22;
                        return (
                          <button
                            key={corner.title}
                            onClick={() => {
                              savePosition(corner.pos as any);
                              setToastMessage(`Menubar docked to ${corner.title} Corner!`);
                              setTimeout(() => setToastMessage(null), 2000);
                            }}
                            className={`w-6 h-6 rounded-full text-[10px] font-bold flex items-center justify-center transition-all cursor-pointer ${
                              isCurrent
                                ? "bg-brand-primary text-white shadow-md shadow-brand-primary/50"
                                : "text-white/70 hover:text-white hover:bg-white/10"
                            }`}
                            title={`Dock to ${corner.title}`}
                            aria-label={`Dock to ${corner.title}`}
                          >
                            {corner.label}
                          </button>
                        );
                      })}
                    </div>

                    <button
                      onClick={() => setIsMobileOpen(false)}
                      className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/80 hover:text-white transition-colors cursor-pointer"
                      aria-label="Close Menu"
                    >
                      ✕
                    </button>
                  </div>
                </div>

                {/* Scrollable Links List */}
                <div className="flex-1 min-h-0 overflow-y-auto overscroll-contain pr-1 pt-1 touch-pan-y [webkit-overflow-scrolling:touch] [scrollbar-width:thin] [scrollbar-color:rgba(249,115,22,0.4)_transparent] [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:bg-orange-500/40 [&::-webkit-scrollbar-thumb]:rounded-full">
                  <div className="grid grid-cols-1 landscape:grid-cols-2 gap-1.5 sm:gap-2">
                    {navLinks.map((link) => {
                      const isActive = currentPath === normalizePath(link.href);
                      if (link.isCta) {
                        return (
                          <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsMobileOpen(false)}
                            className={`px-4 py-2 sm:py-2.5 rounded-2xl text-xs font-bold flex items-center justify-between transition-all shrink-0 ${
                              isActive
                                ? "bg-white text-brand-dark shadow-md ring-2 ring-brand-primary/50"
                                : "bg-brand-primary text-white shadow-lg shadow-brand-primary/20 hover:bg-orange-600"
                            }`}
                          >
                            <span>{link.name}</span>
                            <span className="text-sm">→</span>
                          </Link>
                        );
                      }
                      return (
                        <Link
                          key={link.href}
                          href={link.href}
                          onClick={() => setIsMobileOpen(false)}
                          className={`px-4 py-2 sm:py-2.5 rounded-2xl text-xs font-medium flex items-center justify-between transition-all shrink-0 ${
                            isActive
                              ? "bg-white text-brand-dark font-bold shadow-md"
                              : "bg-white/5 text-white/80 hover:bg-white/15 border border-white/5 hover:text-white"
                          }`}
                        >
                          <span>{link.name}</span>
                          {isActive && <span className="w-1.5 h-1.5 rounded-full bg-brand-primary" />}
                        </Link>
                      );
                    })}
                  </div>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ========================================================= */}
      {/* 2. DESKTOP NAVBAR (CENTERED DYNAMIC ISLAND AT TOP)         */}
      {/* Preserves 100% of desktop original layout & animations     */}
      {/* ========================================================= */}
      <div className="hidden lg:flex fixed top-0 left-0 right-0 z-50 flex-col items-center pointer-events-none">
        {/* Trigger Area (Water Drop) */}
        <div 
          className={`absolute top-0 left-1/2 -translate-x-1/2 w-64 h-16 flex justify-center items-start cursor-pointer group z-[60] ${isNavVisible ? 'pointer-events-none' : 'pointer-events-auto'}`}
          onMouseEnter={() => setIsNavVisible(true)}
          onClick={() => setIsNavVisible(!isNavVisible)}
        >
          <motion.div 
            animate={{ scale: isNavVisible ? 0 : 1, opacity: isNavVisible ? 0 : 1, y: isNavVisible ? -20 : 0 }}
            className="relative mt-2 flex items-center justify-center transition-all duration-300 animate-bounce"
          >
            <div className="absolute w-6 h-6 bg-brand-primary/40 rounded-full animate-ping" />
            <div className="relative w-3.5 h-3.5 bg-brand-primary rounded-full rounded-br-none rotate-45 group-hover:scale-125 transition-transform duration-300 shadow-md shadow-brand-primary/20" />
          </motion.div>
        </div>

        {/* The Dynamic Island Dropdown Panel */}
        <motion.div 
          initial={{ y: "-75%" }}
          animate={{ y: isNavVisible ? 0 : "-75%" }}
          transition={{ type: "spring", stiffness: 120, damping: 20, mass: 0.8 }}
          onMouseEnter={() => setIsNavVisible(true)}
          onMouseLeave={() => setIsNavVisible(false)}
          className="w-full flex justify-center pointer-events-auto absolute top-0"
        >
          <nav className={`relative bg-brand-dark/70 backdrop-blur-xl text-white p-4 md:p-6 rounded-b-[2.5rem] w-auto max-w-fit transition-shadow duration-500 ${isNavVisible ? 'shadow-2xl shadow-brand-primary/40' : 'shadow-lg shadow-brand-primary/30'}`}>
          
            {/* Animated Orange Wave Shadow when Menu Bar is Hidden */}
            <motion.div
              initial={false}
              animate={{
                opacity: isNavVisible ? 0 : 1,
              }}
              transition={{ duration: 0.35 }}
              className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-[115%] h-12 pointer-events-none overflow-visible flex flex-col items-center justify-start -z-10"
            >
              {/* Ambient Pulsing Glow Wave */}
              <motion.div
                animate={{
                  scaleX: [0.92, 1.15, 0.95, 1.18, 0.92],
                  scaleY: [0.85, 1.35, 0.9, 1.3, 0.85],
                  opacity: [0.55, 0.95, 0.6, 0.9, 0.55],
                }}
                transition={{
                  duration: 3.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-1 w-3/4 h-8 bg-gradient-to-r from-orange-600 via-amber-500 to-orange-600 rounded-full blur-xl"
              />

              {/* Ripple Wave Arc 1 */}
              <motion.div
                animate={{
                  scaleX: [0.85, 1.28],
                  scaleY: [0.7, 1.55],
                  y: [0, 16],
                  opacity: [0.8, 0],
                }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
                className="absolute top-0 w-3/4 h-5 border-b-2 border-orange-400/80 rounded-b-[2.5rem] blur-[2px]"
              />

              {/* Ripple Wave Arc 2 */}
              <motion.div
                animate={{
                  scaleX: [0.85, 1.28],
                  scaleY: [0.7, 1.55],
                  y: [0, 16],
                  opacity: [0.8, 0],
                }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  ease: "easeOut",
                  delay: 1.1,
                }}
                className="absolute top-0 w-3/4 h-5 border-b-2 border-amber-400/70 rounded-b-[2.5rem] blur-[2px]"
              />

              {/* Traveling Sine Wave Light Ribbon */}
              <div className="absolute -top-1.5 w-full max-w-sm sm:max-w-md h-6 overflow-hidden pointer-events-none">
                <motion.div
                  animate={{
                    x: ["0%", "-50%"],
                  }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="w-[200%] h-full flex"
                >
                  <svg
                    viewBox="0 0 800 30"
                    className="w-1/2 h-full"
                    preserveAspectRatio="none"
                    fill="none"
                  >
                    <path
                      d="M 0 10 Q 100 0, 200 10 T 400 10 T 600 10 T 800 10"
                      stroke="url(#orangeWaveGradDesktop)"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      className="filter drop-shadow-[0_2px_8px_rgba(249,115,22,0.9)]"
                    />
                    <defs>
                      <linearGradient id="orangeWaveGradDesktop" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#ea580c" stopOpacity="0.2" />
                        <stop offset="30%" stopColor="#f97316" stopOpacity="0.9" />
                        <stop offset="50%" stopColor="#fde047" stopOpacity="1" />
                        <stop offset="70%" stopColor="#f97316" stopOpacity="0.9" />
                        <stop offset="100%" stopColor="#ea580c" stopOpacity="0.2" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <svg
                    viewBox="0 0 800 30"
                    className="w-1/2 h-full"
                    preserveAspectRatio="none"
                    fill="none"
                  >
                    <path
                      d="M 0 10 Q 100 0, 200 10 T 400 10 T 600 10 T 800 10"
                      stroke="url(#orangeWaveGradDesktop2)"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      className="filter drop-shadow-[0_2px_8px_rgba(249,115,22,0.9)]"
                    />
                    <defs>
                      <linearGradient id="orangeWaveGradDesktop2" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#ea580c" stopOpacity="0.2" />
                        <stop offset="30%" stopColor="#f97316" stopOpacity="0.9" />
                        <stop offset="50%" stopColor="#fde047" stopOpacity="1" />
                        <stop offset="70%" stopColor="#f97316" stopOpacity="0.9" />
                        <stop offset="100%" stopColor="#ea580c" stopOpacity="0.2" />
                      </linearGradient>
                    </defs>
                  </svg>
                </motion.div>
              </div>
            </motion.div>
            
            {/* Inverse Curve Fillets (Desktop Only) */}
            <div 
              className="absolute top-0 -left-6 w-6 h-6 bg-brand-dark/70 backdrop-blur-xl" 
              style={{ 
                WebkitMaskImage: 'radial-gradient(circle at bottom left, transparent 24px, black 24.2px)', 
                maskImage: 'radial-gradient(circle at bottom left, transparent 24px, black 24.2px)' 
              }}
            />
            <div 
              className="absolute top-0 -right-6 w-6 h-6 bg-brand-dark/70 backdrop-blur-xl" 
              style={{ 
                WebkitMaskImage: 'radial-gradient(circle at bottom right, transparent 24px, black 24.2px)', 
                maskImage: 'radial-gradient(circle at bottom right, transparent 24px, black 24.2px)' 
              }}
            />

            {/* Middle Row: Pill Tabs */}
            <div className="flex items-center gap-2.5 md:gap-3 max-w-full">
              {navLinks.map((link) => {
                const isActive = currentPath === normalizePath(link.href);
                if (link.isCta) {
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`px-5 md:px-6 py-2.5 rounded-full text-sm flex items-center transition-all ${
                        isActive
                          ? "bg-white text-brand-dark font-bold shadow-lg shadow-white/20 ring-2 ring-brand-primary/50 hover:scale-105"
                          : "bg-brand-primary text-white font-medium hover:bg-orange-600 shadow-lg shadow-brand-primary/20"
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                }
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-5 md:px-6 py-2.5 rounded-full text-sm flex items-center transition-all ${
                      isActive
                        ? "bg-white text-brand-dark font-bold shadow-md hover:scale-105"
                        : "bg-white/10 text-white/85 font-medium hover:bg-white/20 hover:text-white"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

          </nav>
        </motion.div>
      </div>
    </>
  );
}
