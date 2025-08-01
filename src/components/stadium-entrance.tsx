"use client";

import { useEffect, useState } from 'react';
import { gsap } from 'gsap';

export function StadiumEntrance() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Check if animation has already been shown in this session
    const hasSeenAnimation = sessionStorage.getItem('fandoms-entrance-seen');

    if (hasSeenAnimation) {
      setIsVisible(false);
      return;
    }

    const timeline = gsap.timeline({
      onComplete: () => {
        sessionStorage.setItem('fandoms-entrance-seen', 'true');
        setTimeout(() => setIsVisible(false), 500);
      }
    });

    // Stadium entrance sequence
    timeline
      .set('.entrance-overlay', { opacity: 1 })
      .set('.spotlight', { scaleX: 0 })
      .set('.logo-reveal', { opacity: 0, scale: 0.5, rotateY: 180 })
      .set('.energy-particles', { opacity: 0 })

      // Spotlight sweep
      .to('.spotlight', {
        scaleX: 1,
        duration: 1.5,
        ease: "power2.out"
      })

      // Logo reveal
      .to('.logo-reveal', {
        opacity: 1,
        scale: 1,
        rotateY: 0,
        duration: 1,
        ease: "back.out(1.7)"
      }, "-=0.5")

      // Energy particles
      .to('.energy-particles', {
        opacity: 1,
        duration: 0.5
      }, "-=0.3")

      // Energy pulse
      .to('.logo-reveal', {
        scale: 1.1,
        duration: 0.3,
        yoyo: true,
        repeat: 1,
        ease: "power2.inOut"
      })

      // Fade out
      .to('.entrance-overlay', {
        opacity: 0,
        duration: 0.8,
        ease: "power2.inOut"
      }, "+=0.5");

  }, []);

  if (!isVisible) return null;

  return (
    <div className="entrance-overlay fixed inset-0 z-50 bg-black flex items-center justify-center">
      {/* Spotlight Effect */}
      <div className="spotlight absolute inset-0 bg-gradient-to-r from-transparent via-red-500/20 to-transparent origin-left"></div>

      {/* Logo Reveal */}
      <div className="logo-reveal flex flex-col items-center space-y-4">
        <div className="relative">
          <img
            src="/logo.png"
            alt="Fandoms"
            className="w-24 h-24 object-contain"
          />
          {/* Energy Ring */}
          <div className="absolute inset-0 rounded-full border-2 border-red-500/30 animate-spin" style={{ animationDuration: '3s' }}></div>
          <div className="absolute inset-2 rounded-full border border-orange-500/20 animate-spin" style={{ animationDuration: '2s', animationDirection: 'reverse' }}></div>
        </div>

        <h1 className="text-4xl font-bold energy-text">FANDOMS</h1>
        <p className="text-orange-400 text-sm tracking-wider uppercase">Entering the Arena...</p>
      </div>

      {/* Energy Particles */}
      <div className="energy-particles absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-red-500 rounded-full animate-pulse"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${1 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}
