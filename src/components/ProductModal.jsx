import React from 'react';
import { X, ExternalLink, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';

export const ProductModal = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(5, 7, 12, 0.85)',
        backdropFilter: 'blur(16px)',
        zIndex: 2000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem'
      }}
      onClick={onClose}
    >
      <div 
        style={{
          backgroundColor: '#101426',
          border: '1px solid rgba(255, 87, 34, 0.3)',
          borderRadius: '24px',
          maxWidth: '650px',
          width: '100%',
          overflow: 'hidden',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7), 0 0 30px rgba(255, 87, 34, 0.2)',
          position: 'relative',
          animation: 'fadeInUp 0.3s ease-out'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Image */}
        <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
          <img 
            src={product.image} 
            alt={product.title} 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to bottom, rgba(16, 20, 38, 0.2), #101426)' }} />
          
          {/* Close button */}
          <button 
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '1rem',
              right: '1rem',
              background: 'rgba(11, 14, 23, 0.75)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '50%',
              width: '36px',
              height: '36px',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'background 0.2s'
            }}
          >
            <X size={18} />
          </button>

          {/* Status Badge */}
          <div style={{ position: 'absolute', bottom: '1rem', left: '1.5rem' }}>
            <span className={`badge-status ${product.status === 'LIVE' ? 'live' : 'dev'}`}>
              {product.status}
            </span>
          </div>
        </div>

        {/* Content */}
        <div style={{ padding: '1.75rem 2rem 2.25rem 2.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
            <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#FFFFFF' }}>{product.title}</h3>
            <span style={{ fontSize: '0.85rem', color: '#FF5722', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              {product.category}
            </span>
          </div>

          <p style={{ color: '#94A3B8', fontSize: '0.975rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
            {product.fullDescription || product.description}
          </p>

          {/* Features check list */}
          <div style={{ marginBottom: '2rem' }}>
            <h4 style={{ color: '#FFFFFF', fontSize: '0.9rem', fontWeight: 700, marginBottom: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Key Platform Highlights
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.75rem' }}>
              {(product.features || ['Real-time Synchronization', 'User-first UI/UX', 'Cloud Native Architecture', 'End-to-End Encryption']).map((feat, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#E2E8F0', fontSize: '0.875rem' }}>
                  <CheckCircle2 size={16} color="#FF5722" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Footer CTAs */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', pt: '1rem', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#64748B', fontSize: '0.85rem' }}>
              <ShieldCheck size={16} />
              <span>Verified Mystrio Ecosystem</span>
            </div>
            
            <button 
              onClick={() => alert(`Launching ${product.title} platform portal...`)} 
              className="btn btn-orange"
              style={{ padding: '0.75rem 1.5rem', fontSize: '0.9rem' }}
            >
              <span>Launch Platform</span>
              <ExternalLink size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
