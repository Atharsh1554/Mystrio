import React, { useState, useEffect } from 'react';
import logoIcon from '../assets/logo_icon.png';

export const IntroSplash = () => {
  const [isExiting, setIsExiting] = useState(false);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Snappy, cinematic timing (1.2s reveal, then slide-up wipe)
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
    }, 1200);

    const finishTimer = setTimeout(() => {
      setIsDone(true);
    }, 1800);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(finishTimer);
    };
  }, []);

  if (isDone) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 999999,
        backgroundColor: '#070913',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        transform: isExiting ? 'translateY(-100%)' : 'translateY(0%)',
        transition: 'transform 0.65s cubic-bezier(0.77, 0, 0.175, 1)',
        pointerEvents: isExiting ? 'none' : 'all',
        overflow: 'hidden',
        boxShadow: isExiting ? '0 30px 60px rgba(0,0,0,0.8)' : 'none',
      }}
    >
      {/* Soft Ambient Breathing Bloom */}
      <div
        style={{
          position: 'absolute',
          width: '450px',
          height: '450px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0, 216, 255, 0.18) 0%, rgba(139, 92, 246, 0.1) 45%, rgba(236, 72, 153, 0.05) 65%, transparent 80%)',
          filter: 'blur(30px)',
          animation: 'cinematicBloom 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
          pointerEvents: 'none',
        }}
      />

      {/* Center Content */}
      <div
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          zIndex: 2,
          animation: 'cinematicReveal 1.1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        }}
      >
        {/* Clean Logo Mark */}
        <div
          style={{
            width: '200px',
            height: 'auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img
            src={logoIcon}
            alt="Mystrio Logo"
            style={{
              width: '100%',
              height: 'auto',
              objectFit: 'contain',
              filter: 'drop-shadow(0 0 25px rgba(0, 216, 255, 0.45)) drop-shadow(0 0 45px rgba(236, 72, 153, 0.3))',
            }}
          />
        </div>
      </div>
    </div>
  );
};
