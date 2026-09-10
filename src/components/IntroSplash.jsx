import React, { useState, useEffect } from 'react';
import logoIcon from '../assets/logo_icon.png';

export const IntroSplash = () => {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Smooth progress ticker
    const interval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const step = Math.floor(Math.random() * 15) + 12;
        return Math.min(prev + step, 100);
      });
    }, 120);

    // Trigger exit animation
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
    }, 1800);

    // Completely unmount after transition
    const finishTimer = setTimeout(() => {
      setIsDone(true);
    }, 2400);

    return () => {
      clearInterval(interval);
      clearTimeout(exitTimer);
      clearTimeout(finishTimer);
    };
  }, []);

  if (isDone) return null;

  return (
    <div
      className={`intro-splash-overlay ${isExiting ? 'exit' : ''}`}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        backgroundColor: '#070913',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1), transform 0.65s cubic-bezier(0.16, 1, 0.3, 1)',
        opacity: isExiting ? 0 : 1,
        transform: isExiting ? 'scale(1.04)' : 'scale(1)',
        pointerEvents: isExiting ? 'none' : 'all',
        overflow: 'hidden',
      }}
    >
      {/* Background Animated Ambient Auras */}
      <div
        style={{
          position: 'absolute',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0, 216, 255, 0.22) 0%, rgba(139, 92, 246, 0.12) 40%, rgba(236, 72, 153, 0.08) 60%, rgba(7, 9, 19, 0) 80%)',
          animation: 'ambientPulse 3s ease-in-out infinite alternate',
          pointerEvents: 'none',
        }}
      />

      {/* Center Logo Container */}
      <div
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          zIndex: 2,
        }}
      >
        {/* Orbital Neon Ring */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -60%)',
            width: '180px',
            height: '180px',
            borderRadius: '50%',
            border: '2px dashed rgba(0, 216, 255, 0.35)',
            boxShadow: '0 0 30px rgba(0, 216, 255, 0.15), inset 0 0 20px rgba(236, 72, 153, 0.12)',
            animation: 'ringRotate 8s linear infinite',
            pointerEvents: 'none',
          }}
        />

        {/* 3D Ribbon Logo Icon with Dynamic Glow & Levitation */}
        <div
          style={{
            position: 'relative',
            width: '120px',
            height: '120px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            animation: 'logoIntroFloat 2s ease-in-out infinite alternate',
          }}
        >
          <img
            src={logoIcon}
            alt="Mystrio Logo"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              filter: 'drop-shadow(0 0 25px rgba(0, 216, 255, 0.6)) drop-shadow(0 0 45px rgba(236, 72, 153, 0.45))',
              animation: 'logoScaleIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
            }}
          />
        </div>

        {/* Brand Name Typography with Shimmer Effect */}
        <div style={{ marginTop: '1.75rem', textAlign: 'center' }}>
          <h1
            style={{
              fontSize: '2rem',
              fontWeight: 800,
              fontFamily: 'Space Grotesk, sans-serif',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              margin: 0,
              background: 'linear-gradient(90deg, #FFFFFF 0%, #00D8FF 25%, #EC4899 50%, #00D8FF 75%, #FFFFFF 100%)',
              backgroundSize: '200% auto',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              animation: 'shimmerText 2.5s linear infinite',
            }}
          >
            MYSTRIO
          </h1>

          <p
            style={{
              fontSize: '0.75rem',
              letterSpacing: '0.25em',
              fontWeight: 700,
              color: 'rgba(255, 255, 255, 0.5)',
              textTransform: 'uppercase',
              marginTop: '0.5rem',
            }}
          >
            Building the Future
          </p>
        </div>

        {/* Sleek Minimal Progress Line */}
        <div
          style={{
            marginTop: '2rem',
            width: '160px',
            height: '3px',
            borderRadius: '10px',
            backgroundColor: 'rgba(255, 255, 255, 0.08)',
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          <div
            style={{
              height: '100%',
              width: `${loadingProgress}%`,
              background: 'linear-gradient(90deg, #00D8FF, #8B5CF6, #EC4899)',
              borderRadius: '10px',
              boxShadow: '0 0 10px #00D8FF',
              transition: 'width 0.15s ease-out',
            }}
          />
        </div>
      </div>
    </div>
  );
};
