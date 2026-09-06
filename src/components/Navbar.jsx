import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header 
      style={{ 
        position: 'sticky', 
        top: 0, 
        zIndex: 1000, 
        backgroundColor: 'rgba(11, 14, 23, 0.85)', 
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '80px' }}>
        
        {/* Brand Logo matching Figma */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <div 
            style={{ 
              backgroundColor: '#FFFFFF', 
              padding: '0.45rem 1.1rem', 
              borderRadius: '100px',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              boxShadow: '0 4px 14px rgba(0,0,0,0.2)'
            }}
          >
            <div 
              style={{
                width: '22px',
                height: '22px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #FF5722 0%, #FF7A00 100%)',
                color: '#FFFFFF',
                fontWeight: 800,
                fontSize: '0.85rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'Space Grotesk, sans-serif'
              }}
            >
              M
            </div>
            <span style={{ color: '#0B0E17', fontWeight: 800, fontSize: '1.25rem', fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.02em' }}>
              ystrio
            </span>
          </div>
        </Link>

        {/* Center Nav Links */}
        <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>
          <a 
            href="#products" 
            style={{ 
              fontSize: '0.95rem', 
              fontWeight: 600, 
              color: '#E2E8F0',
              transition: 'color 0.2s ease'
            }}
          >
            Products
          </a>
          <a 
            href="#mission" 
            style={{ 
              fontSize: '0.95rem', 
              fontWeight: 600, 
              color: '#E2E8F0',
              transition: 'color 0.2s ease'
            }}
          >
            About
          </a>
          <a 
            href="#founders" 
            style={{ 
              fontSize: '0.95rem', 
              fontWeight: 600, 
              color: '#E2E8F0',
              transition: 'color 0.2s ease'
            }}
          >
            Team
          </a>
          <a 
            href="#contact" 
            style={{ 
              fontSize: '0.95rem', 
              fontWeight: 600, 
              color: '#E2E8F0',
              transition: 'color 0.2s ease'
            }}
          >
            Contact
          </a>
        </nav>

        {/* Right CTA Button matching Figma (Orange Get Started button) */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <a href="#contact" className="btn btn-orange desktop-cta" style={{ padding: '0.65rem 1.5rem' }}>
            <span>Get Started</span>
            <ArrowUpRight size={16} />
          </a>

          {/* Mobile Menu Trigger */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#FFFFFF',
              cursor: 'pointer',
              display: 'none',
              padding: '0.5rem'
            }}
            className="mobile-toggle"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div 
          style={{ 
            backgroundColor: '#0B0E17', 
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem'
          }}
        >
          <a 
            href="#products" 
            onClick={() => setMobileMenuOpen(false)}
            style={{ fontSize: '1.1rem', fontWeight: 600, color: '#FFFFFF' }}
          >
            Products
          </a>
          <a 
            href="#mission" 
            onClick={() => setMobileMenuOpen(false)}
            style={{ fontSize: '1.1rem', fontWeight: 600, color: '#FFFFFF' }}
          >
            About
          </a>
          <a 
            href="#founders" 
            onClick={() => setMobileMenuOpen(false)}
            style={{ fontSize: '1.1rem', fontWeight: 600, color: '#FFFFFF' }}
          >
            Team
          </a>
          <a 
            href="#contact" 
            onClick={() => setMobileMenuOpen(false)}
            style={{ fontSize: '1.1rem', fontWeight: 600, color: '#FFFFFF' }}
          >
            Contact
          </a>
          <a 
            href="#contact" 
            onClick={() => setMobileMenuOpen(false)}
            className="btn btn-orange" 
            style={{ width: '100%', marginTop: '0.5rem' }}
          >
            <span>Get Started</span>
            <ArrowUpRight size={16} />
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 850px) {
          .desktop-nav, .desktop-cta {
            display: none !important;
          }
          .mobile-toggle {
            display: block !important;
          }
        }
      `}</style>
    </header>
  );
};

