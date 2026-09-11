import React from 'react';
import { Globe, Mail, Share2, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import logoFull from '../assets/logo_full.png';

export const Footer = () => {
  return (
    <footer 
      style={{ 
        backgroundColor: '#0B0E17', 
        borderTop: '1px solid rgba(255, 255, 255, 0.08)', 
        paddingTop: '5rem',
        paddingBottom: '3rem',
        color: '#94A3B8',
        position: 'relative',
        zIndex: 2
      }}
    >
      <div className="container">
        {/* Top 4-Column Layout */}
        <div className="grid-4" style={{ gap: '3rem', marginBottom: '4rem' }}>
          
          {/* Column 1: Brand Info */}
          <div>
            <Link to="/" style={{ display: 'inline-block', marginBottom: '1.25rem', textDecoration: 'none' }}>
              <img 
                src={logoFull} 
                alt="Mystrio" 
                style={{ 
                  height: '42px', 
                  width: 'auto', 
                  display: 'block',
                  filter: 'drop-shadow(0 2px 14px rgba(0, 195, 255, 0.2))'
                }} 
              />
            </Link>

            <p style={{ fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.5rem', color: '#94A3B8' }}>
              MYSTRIO is an emerging technology brand building innovative digital solutions
              using AI, software and modern technology.
            </p>

            <div style={{ display: 'flex', gap: '0.8rem' }}>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ width: '38px', height: '38px', borderRadius: '50%', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFFFFF', transition: 'all 0.2s ease' }}>
                <Globe size={18} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ width: '38px', height: '38px', borderRadius: '50%', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFFFFF', transition: 'all 0.2s ease' }}>
                <Share2 size={18} />
              </a>
              <a href="mailto:contact@mystrio.com" style={{ width: '38px', height: '38px', borderRadius: '50%', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFFFFF', transition: 'all 0.2s ease' }}>
                <Mail size={18} />
              </a>
            </div>
          </div>


          {/* Column 2: Our Products */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '0.85rem', fontWeight: 800, marginBottom: '1.25rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              OUR PRODUCTS
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem' }}>
              <li><Link to="/products/groomer" style={{ color: '#94A3B8', transition: 'color 0.2s', textDecoration: 'none' }}>Groomer (AI Booking)</Link></li>
              <li><Link to="/products/broker-hub" style={{ color: '#94A3B8', transition: 'color 0.2s', textDecoration: 'none' }}>Broker Hub (Digital Platform)</Link></li>
              <li><Link to="/products/foodshare" style={{ color: '#94A3B8', transition: 'color 0.2s', textDecoration: 'none' }}>Foodshare (Food Waste)</Link></li>
              <li><Link to="/products/remix" style={{ color: '#94A3B8', transition: 'color 0.2s', textDecoration: 'none' }}>Remix (Digital Streaming)</Link></li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '0.85rem', fontWeight: 800, marginBottom: '1.25rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              COMPANY
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem' }}>
              <li><Link to="/about" style={{ color: '#94A3B8', textDecoration: 'none' }}>About Us</Link></li>
              <li><Link to="/about" style={{ color: '#94A3B8', textDecoration: 'none' }}>Founding Team</Link></li>
              <li><Link to="/careers" style={{ color: '#94A3B8', textDecoration: 'none' }}>Careers &amp; Roles</Link></li>
              <li><Link to="/contact" style={{ color: '#94A3B8', textDecoration: 'none' }}>Contact &amp; Inquiry</Link></li>
            </ul>
          </div>

          {/* Column 4: Legal & Notice */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '0.85rem', fontWeight: 800, marginBottom: '1.25rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              LEGAL & NOTICE
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem' }}>
              <li><span style={{ color: '#64748B', cursor: 'pointer' }}>Privacy Policy</span></li>
              <li><span style={{ color: '#64748B', cursor: 'pointer' }}>Terms of Service</span></li>
              <li><span style={{ color: '#64748B', cursor: 'pointer' }}>Cookie Settings</span></li>
              <li><span style={{ color: '#64748B', cursor: 'pointer' }}>Trademark Guidelines</span></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div 
          style={{ 
            borderTop: '1px solid rgba(255, 255, 255, 0.08)', 
            paddingTop: '2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            fontSize: '0.85rem',
            color: '#64748B'
          }}
        >
          <p>© {new Date().getFullYear()} Mystrio. All rights reserved. Founded by Atharsh S, Ajay KS, and Akash P.</p>
          <p>Engineered with absolute simplicity</p>
        </div>
      </div>
    </footer>
  );
};
