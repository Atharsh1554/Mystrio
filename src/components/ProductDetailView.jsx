import React from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../components/SEOHead';
import { ArrowLeft, Zap, CheckCircle2, Calendar, MapPin, Bell, ShieldCheck, MessageSquare, BarChart3, PlusCircle, Navigation, Leaf, Play, Layers, Monitor, Sparkles, ExternalLink } from 'lucide-react';

const ICON_MAP = {
  Sparkles, Calendar, MapPin, Bell, ShieldCheck, MessageSquare,
  BarChart3, PlusCircle, Navigation, Leaf, CheckCircle2, Play,
  Layers, Zap, Monitor, Kanban: Layers,
};

export const ProductDetailView = ({ product }) => {
  if (!product) return null;

  const isLive = product.status.toLowerCase().includes('prototype') || product.status.toLowerCase().includes('live');

  return (
    <>
      <SEOHead
        title={`${product.name} — ${product.tagline}`}
        description={product.shortDescription}
      />

      {/* Breadcrumb */}
      <section className="section-dark" style={{ paddingTop: '2.5rem', paddingBottom: '1rem' }}>
        <div className="container">
          <Link
            to="/products"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              color: 'var(--text-muted-dark)',
              fontSize: '0.9rem',
              fontWeight: 600,
              transition: 'color 0.15s ease',
            }}
          >
            <ArrowLeft size={16} />
            <span>Back to Products</span>
          </Link>
        </div>
      </section>

      {/* Hero */}
      <section className="section-dark bg-grid-pattern" style={{ paddingTop: '1rem', paddingBottom: '4rem' }}>
        <div className="container">
          <div className="card-dark" style={{ padding: '3rem 2.5rem', borderColor: 'rgba(0, 216, 255, 0.3)' }}>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1.25rem', marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                <div style={{ fontSize: '2.25rem', width: '72px', height: '72px', borderRadius: '16px', background: 'rgba(0, 216, 255, 0.12)', color: '#00D8FF', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(0, 216, 255, 0.3)' }}>
                  {product.icon}
                </div>
                <div>
                  <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.25rem' }}>{product.name}</h1>
                  <p style={{ fontSize: '1.1rem', color: '#00D8FF', fontWeight: 600 }}>{product.tagline}</p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
                <span className={`badge-status ${isLive ? 'live' : 'dev'}`} style={{ padding: '0.4rem 1rem', fontSize: '0.8rem' }}>
                  {isLive ? 'LIVE PLATFORM' : 'IN DEVELOPMENT'}
                </span>
                {product.liveUrl && (
                  <a
                    href={product.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-coral"
                    style={{ padding: '0.45rem 1.15rem', fontSize: '0.85rem', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
                  >
                    <span>Launch Live App</span>
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </div>

            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted-dark)', lineHeight: 1.7, maxWidth: '850px', marginBottom: '1.75rem' }}>
              {product.shortDescription}
            </p>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', paddingTop: '1.25rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {product.tags.map((tag) => (
                  <span key={tag} style={{ fontSize: '0.8rem', padding: '0.3rem 0.75rem', borderRadius: '6px', background: 'rgba(255, 255, 255, 0.08)', color: '#FFFFFF' }}>
                    {tag}
                  </span>
                ))}
              </div>

              {product.liveUrl && (
                <a
                  href={product.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: '#00D8FF',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    textDecoration: 'none'
                  }}
                >
                  <span>{product.liveUrl.replace('https://', '').replace(/\/$/, '')}</span>
                  <ExternalLink size={14} />
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Concept Overview */}
      <section className="section-dark" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <div className="container">
          <div className="card-dark" style={{ maxWidth: '900px', margin: '0 auto', padding: '2.5rem' }}>
            <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '1rem' }}>Product Concept Overview</h2>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-muted-dark)', lineHeight: 1.75 }}>{product.overview}</p>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="section-dark" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 3.5rem auto' }}>
            <h2 style={{ fontSize: '2.25rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.75rem' }}>Key Features</h2>
            <p style={{ color: 'var(--text-muted-dark)', fontSize: '1.05rem' }}>Core capabilities engineered into {product.name}.</p>
          </div>

          <div className="grid-2" style={{ gap: '1.5rem' }}>
            {product.features.map((feat) => {
              const IconComp = ICON_MAP[feat.icon] || Zap;
              return (
                <div key={feat.title} className="card-dark" style={{ padding: '2rem' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: 'rgba(0, 216, 255, 0.1)', color: '#00D8FF', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                    <IconComp size={22} />
                  </div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '0.5rem' }}>{feat.title}</h3>
                  <p style={{ fontSize: '0.95rem', color: 'var(--text-muted-dark)', lineHeight: 1.6 }}>{feat.description || feat.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-dark" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingBottom: '6rem' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="card-dark" style={{ maxWidth: '800px', margin: '0 auto', padding: '3.5rem 2rem' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '1rem' }}>Interested in {product.name}?</h2>
            <p style={{ color: 'var(--text-muted-dark)', fontSize: '1.05rem', marginBottom: '2rem' }}>
              Connect with founders Atharsh S, Ajay KS, and Akash P for early previews, partnership discussions, or product feedback.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              {product.liveUrl && (
                <a 
                  href={product.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-coral" 
                  style={{ padding: '0.85rem 2rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
                >
                  <span>Launch Live Platform</span>
                  <ExternalLink size={16} />
                </a>
              )}
              <Link to="/contact" className="btn btn-outline-dark" style={{ padding: '0.85rem 2rem' }}>
                <span>Get in Touch with Mystrio</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
