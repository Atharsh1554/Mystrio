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
        {/* 3D Logo Mark with Clean Ethereal Glow */}
        <div
          style={{
            width: '110px',
            height: '110px',
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
              height: '100%',
              objectFit: 'contain',
              filter: 'drop-shadow(0 0 20px rgba(0, 216, 255, 0.5)) drop-shadow(0 0 40px rgba(236, 72, 153, 0.35))',
            }}
          />
        </div>

        {/* Minimalist Cinematic Typography */}
        <div style={{ marginTop: '1.25rem', textAlign: 'center' }}>
          <h1
            style={{
              fontSize: '1.85rem',
              fontWeight: 800,
              fontFamily: 'Space Grotesk, sans-serif',
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              margin: 0,
              color: '#FFFFFF',
              textShadow: '0 0 25px rgba(0, 216, 255, 0.4)',
              animation: 'letterSpacingExpand 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
            }}
          >
            MYSTRIO
          </h1>
          <p
            style={{
              fontSize: '0.72rem',
              letterSpacing: '0.35em',
              fontWeight: 600,
              color: 'rgba(255, 255, 255, 0.45)',
              textTransform: 'uppercase',
              marginTop: '0.4rem',
              marginRight: '-0.35em',
            }}
          >
            TECHNOLOGY
          </p>
        </div>
      </div>
    </div>
  );
};
