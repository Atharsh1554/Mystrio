import React from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../components/SEOHead';
import { PRODUCT_LIST } from '../data/productsData';
import { ArrowRight, Zap, ExternalLink } from 'lucide-react';

export const Products = () => {
  return (
    <>
      <SEOHead
        title="Products Built by Mystrio — Ecosystem Showcase"
        description="Explore the Mystrio digital product ecosystem: Groomer, Broker Hub, FoodShare, and Remix."
      />

      {/* Hero (Dark) */}
      <section className="section-dark bg-grid-pattern" style={{ paddingTop: '5.5rem', paddingBottom: '4rem', textAlign: 'center' }}>
        <div className="container">
          <div className="badge-pill-coral" style={{ margin: '0 auto 1.25rem auto' }}>
            <Zap size={14} />
            <span>DIGITAL PRODUCT SUITE</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2.25rem, 4.5vw, 3.75rem)', fontWeight: 800, color: '#FFFFFF', marginBottom: '1rem' }}>
            Products Built by <span className="text-gradient-brand">Mystrio</span>
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-muted-dark)', maxWidth: '600px', margin: '0 auto' }}>
            Different problems. Different products. One technology vision.
          </p>
        </div>
      </section>

      {/* Product Cards (Dark) */}
      <section className="section-dark" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="grid-2" style={{ gap: '2rem' }}>
            {PRODUCT_LIST.map((prod) => (
              <div key={prod.id} className="card-dark" style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ padding: '2.25rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                    <h2 style={{ fontSize: '1.65rem', fontWeight: 800, color: '#FFFFFF' }}>{prod.name}</h2>
                    <span className={`badge-status ${prod.status.toLowerCase().includes('prototype') || prod.status.toLowerCase().includes('live') ? 'live' : 'dev'}`}>
                      {prod.status.toLowerCase().includes('live') || prod.status.toLowerCase().includes('prototype') ? 'LIVE' : 'IN DEVELOPMENT'}
                    </span>
                  </div>

                  <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#00D8FF', marginBottom: '1rem' }}>
                    {prod.tagline}
                  </div>

                  <p style={{ fontSize: '0.95rem', color: 'var(--text-muted-dark)', lineHeight: 1.6, marginBottom: '1.5rem', flexGrow: 1 }}>
                    {prod.fullDescription}
                  </p>

                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.75rem' }}>
                    {prod.tags.map((tag) => (
                      <span 
                        key={tag} 
                        style={{ 
                          fontSize: '0.75rem', 
                          padding: '0.25rem 0.65rem', 
                          borderRadius: '6px', 
                          background: 'rgba(255, 255, 255, 0.06)', 
                          color: '#CBD5E1' 
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: 'auto' }}>
                    {prod.liveUrl ? (
                      <>
                        <a 
                          href={prod.liveUrl} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="btn btn-coral" 
                          style={{ flex: '1 1 180px', display: 'inline-flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}
                        >
                          <span>Launch Live App</span>
                          <ExternalLink size={16} />
                        </a>
                        <Link 
                          to={prod.path} 
                          className="btn btn-outline-dark" 
                          style={{ flex: '1 1 140px', display: 'inline-flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}
                        >
                          <span>Details</span>
                          <ArrowRight size={16} />
                        </Link>
                      </>
                    ) : (
                      <Link 
                        to={prod.path} 
                        className="btn btn-coral" 
                        style={{ width: '100%', display: 'inline-flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}
                      >
                        <span>Explore Product Overview</span>
                        <ArrowRight size={16} />
                      </Link>
                    )}
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
