import React, { useState } from 'react';
import { SEOHead } from '../components/SEOHead';
import { BLOG_POSTS } from '../data/blogData';
import { Clock, ArrowRight, X, BookOpen } from 'lucide-react';

export const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <>
      <SEOHead
        title="Mystrio Blog — Technology, AI & Startup Insights"
        description="Read articles and product engineering insights from Mystrio founders Atharsh S, Ajay KS, and Akash P."
      />

      {/* Hero (Dark) */}
      <section className="section-dark bg-grid-pattern" style={{ paddingTop: '5.5rem', paddingBottom: '4rem', textAlign: 'center' }}>
        <div className="container">
          <div className="badge-pill-coral" style={{ margin: '0 auto 1.25rem auto' }}>
            <BookOpen size={14} />
            <span>INSIGHTS & ARTICLES</span>
          </div>

          <h1 style={{ fontSize: 'clamp(2.25rem, 4.5vw, 3.75rem)', fontWeight: 800, color: '#FFFFFF', marginBottom: '1rem' }}>
            Mystrio <span className="text-gradient-brand">Engineering & Vision</span>
          </h1>

          <p style={{ fontSize: '1.15rem', color: 'var(--text-muted-dark)', maxWidth: '650px', margin: '0 auto' }}>
            Perspectives on building multi-product technology ecosystems, AI integration, and zero-waste community platforms.
          </p>
        </div>
      </section>

      {/* Articles Grid (Dark) */}
      <section className="section-dark" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="grid-2" style={{ gap: '2rem' }}>
            {BLOG_POSTS.map((post) => (
              <div 
                key={post.id} 
                className="card-dark" 
                style={{ padding: '2.25rem', display: 'flex', flexDirection: 'column', cursor: 'pointer' }}
                onClick={() => setSelectedPost(post)}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                  <span className="badge-pill-coral" style={{ fontSize: '0.75rem', padding: '0.25rem 0.75rem' }}>{post.category}</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-muted-dark)', fontSize: '0.85rem' }}>
                    <Clock size={14} />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.75rem', lineHeight: 1.3 }}>{post.title}</h3>

                <p style={{ fontSize: '0.95rem', color: 'var(--text-muted-dark)', lineHeight: 1.6, marginBottom: '1.5rem', flexGrow: 1 }}>{post.excerpt}</p>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '1.25rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <span style={{ fontSize: '0.85rem', color: '#94A3B8', fontWeight: 600 }}>By {post.author} • {post.date}</span>
                  <span style={{ color: '#00D8FF', fontWeight: 700, fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                    Read Article <ArrowRight size={15} />
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Reader Modal */}
          {selectedPost && (
            <div style={{ position: 'fixed', inset: 0, zIndex: 2000, background: 'rgba(0, 0, 0, 0.8)', backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1.5rem' }}>
              <div className="card-dark" style={{ maxWidth: '750px', width: '100%', maxHeight: '85vh', overflowY: 'auto', padding: '3rem 2.5rem', position: 'relative' }}>
                
                <button 
                  onClick={() => setSelectedPost(null)} 
                  style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'transparent', border: 'none', color: '#FFFFFF', cursor: 'pointer' }}
                >
                  <X size={24} />
                </button>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                  <span className="badge-pill-coral">{selectedPost.category}</span>
                  <span style={{ color: 'var(--text-muted-dark)', fontSize: '0.85rem' }}>{selectedPost.readTime}</span>
                </div>

                <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '1rem' }}>{selectedPost.title}</h2>
                <div style={{ color: '#00D8FF', fontSize: '0.9rem', fontWeight: 600, marginBottom: '2rem' }}>By {selectedPost.author} • {selectedPost.date}</div>

                <div style={{ color: 'var(--text-muted-dark)', fontSize: '1.05rem', lineHeight: 1.8 }}>
                  <p style={{ marginBottom: '1.5rem' }}>{selectedPost.excerpt}</p>
                  <p style={{ marginBottom: '1.5rem' }}>
                    At Mystrio, founders Atharsh S, Ajay KS, and Akash P approach product development with modular tech stacks and user-centric architecture. Building Groomer, Broker Hub, FoodShare, and Remix allows us to cross-pollinate technology innovations across varied consumer matrices.
                  </p>
                  <p>
                    Stay tuned for deeper technical whitepapers and system release notes as our platforms advance from early prototypes into full production releases.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};
