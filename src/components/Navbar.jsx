import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import logoFull from '../assets/logo_full.png';

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        backgroundColor: 'rgba(11, 14, 23, 0.85)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '80px',
        }}
      >
        {/* Brand Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }} aria-label="MYSTRIO home">
          <img
            src={logoFull}
            alt="MYSTRIO — Technology & Innovation"
            style={{
              height: '42px',
              width: 'auto',
              display: 'block',
              filter: 'drop-shadow(0 2px 14px rgba(0, 195, 255, 0.2))',
            }}
          />
        </Link>

        {/* Desktop Nav Links — real <Link> elements for crawlability */}
        <nav className="desktop-nav" aria-label="Main navigation" style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>
          <Link
            to="/products"
            style={{
              fontSize: '0.95rem',
              fontWeight: 600,
              color: location.pathname.startsWith('/products') ? '#00D8FF' : '#E2E8F0',
              textDecoration: 'none',
              transition: 'color 0.2s ease',
            }}
          >
            Products
          </Link>
          <Link
            to="/about"
            style={{
              fontSize: '0.95rem',
              fontWeight: 600,
              color: location.pathname === '/about' ? '#00D8FF' : '#E2E8F0',
              textDecoration: 'none',
              transition: 'color 0.2s ease',
            }}
          >
            About
          </Link>
          <Link
            to="/blog"
            style={{
              fontSize: '0.95rem',
              fontWeight: 600,
              color: location.pathname === '/blog' ? '#00D8FF' : '#E2E8F0',
              textDecoration: 'none',
              transition: 'color 0.2s ease',
            }}
          >
            Blog
          </Link>
          <Link
            to="/careers"
            style={{
              fontSize: '0.95rem',
              fontWeight: 600,
              color: location.pathname === '/careers' ? '#00D8FF' : '#E2E8F0',
              textDecoration: 'none',
              transition: 'color 0.2s ease',
            }}
          >
            Careers
          </Link>
        </nav>

        {/* Right CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Link
            to="/contact"
            className="btn btn-orange desktop-cta"
            style={{ padding: '0.65rem 1.5rem' }}
          >
            <span>Get in Touch</span>
            <ArrowUpRight size={16} />
          </Link>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#FFFFFF',
              cursor: 'pointer',
              display: 'none',
              padding: '0.5rem',
            }}
            className="mobile-toggle"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <nav
          aria-label="Mobile navigation"
          style={{
            backgroundColor: '#0B0E17',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem',
          }}
        >
          <Link
            to="/products"
            onClick={() => setMobileMenuOpen(false)}
            style={{ fontSize: '1.1rem', fontWeight: 600, color: '#FFFFFF', textDecoration: 'none' }}
          >
            Products
          </Link>
          <Link
            to="/about"
            onClick={() => setMobileMenuOpen(false)}
            style={{ fontSize: '1.1rem', fontWeight: 600, color: '#FFFFFF', textDecoration: 'none' }}
          >
            About
          </Link>
          <Link
            to="/blog"
            onClick={() => setMobileMenuOpen(false)}
            style={{ fontSize: '1.1rem', fontWeight: 600, color: '#FFFFFF', textDecoration: 'none' }}
          >
            Blog
          </Link>
          <Link
            to="/careers"
            onClick={() => setMobileMenuOpen(false)}
            style={{ fontSize: '1.1rem', fontWeight: 600, color: '#FFFFFF', textDecoration: 'none' }}
          >
            Careers
          </Link>
          <Link
            to="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="btn btn-orange"
            style={{ width: '100%', marginTop: '0.5rem', textDecoration: 'none' }}
          >
            <span>Get in Touch</span>
            <ArrowUpRight size={16} />
          </Link>
        </nav>
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
