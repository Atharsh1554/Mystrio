import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { Target, Eye, Zap, Search, Users, Palette, Code2, RefreshCw, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import founderAtharshImg from '../assets/founder_atharsh.jpg';
import founderAkashImg from '../assets/founder_akash.jpg';
import founderAjayImg from '../assets/founder_ajay.jpg';

export const About = () => {
  const founders = [
    {
      name: 'Atharsh S',
      role: 'Co-Founder',
      focus: 'Product Strategy & Systems Engineering',
      bio: 'Technical visionary pushing the frontiers of systems engineering and high-availability design templates across our digital platforms.',
      image: founderAtharshImg
    },
    {
      name: 'Akash P',
      role: 'Co-Founder',
      focus: 'UI/UX Architecture & Product Operations',
      bio: 'Focuses on user-interface architectures and human-centric systems, ensuring beautiful spatial design registers exist in our ecosystem products.',
      image: founderAkashImg
    },
    {
      name: 'Ajay KS',
      role: 'Co-Founder',
      focus: 'AI Architecture & Growth Integration',
      bio: 'A master of product-market integration and growth strategies, translating complex client business matrices into streamlined customer pathways.',
      image: founderAjayImg
    },
  ];


  const processSteps = [
    { step: '01', title: 'Discover', description: 'Identify real-world challenges and unaddressed friction points.', icon: Search },
    { step: '02', title: 'Understand', description: 'Deep dive into user needs and behavior patterns.', icon: Users },
    { step: '03', title: 'Design', description: 'Craft intuitive interfaces and scalable architectures.', icon: Palette },
    { step: '04', title: 'Build', description: 'Engineer prototypes using modern frameworks and AI.', icon: Code2 },
    { step: '05', title: 'Improve', description: 'Refine based on feedback and real-world usage data.', icon: RefreshCw },
  ];

  return (
    <>
      <SEOHead
        title="About MYSTRIO | Technology & Innovation"
        description="Learn about MYSTRIO — an emerging technology brand founded by Atharsh S, Akash P, and Ajay KS, building innovative AI and software solutions."
        canonical="/about"
        jsonLd={[{
          '@context': 'https://schema.org',
          '@type': 'AboutPage',
          name: 'About MYSTRIO',
          url: 'https://mystrio.vercel.app/about',
          description: 'Learn about MYSTRIO — an emerging technology brand founded by Atharsh S, Akash P, and Ajay KS, building innovative AI and software solutions.',
          isPartOf: { '@type': 'WebSite', name: 'MYSTRIO', url: 'https://mystrio.vercel.app/' }
        }]}
      />

      {/* Hero Section (Dark) */}
      <section className="section-dark bg-grid-pattern" style={{ paddingTop: '5.5rem', paddingBottom: '4rem', textAlign: 'center' }}>
        <div className="container">
          <div className="badge-pill-coral" style={{ margin: '0 auto 1.25rem auto' }}>
            <Zap size={14} />
            <span>BRAND IDENTITY</span>
          </div>

          <h1 style={{ fontSize: 'clamp(2.25rem, 4.5vw, 3.75rem)', fontWeight: 800, color: '#FFFFFF', marginBottom: '1.25rem' }}>
            About <span className="text-gradient-brand">MYSTRIO</span>
          </h1>

          <p style={{ fontSize: '1.2rem', color: 'var(--text-muted-dark)', maxWidth: '650px', margin: '0 auto', lineHeight: 1.6 }}>
            MYSTRIO is an emerging technology brand building innovative digital solutions
            through modern software, AI, and user-centered design.
          </p>
        </div>
      </section>

      {/* Introduction (Light) */}
      <section className="section-light">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: '3.5rem' }}>
            
            <div>
              <div className="badge-pill-light" style={{ marginBottom: '1rem' }}>
                <span>OUR CORE PHILOSOPHY</span>
              </div>

              <h2 style={{ fontSize: 'clamp(1.85rem, 3vw, 2.5rem)', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '1.25rem', lineHeight: 1.2 }}>
                Engineering Modern Platforms for Practical Impact
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '1rem', color: 'var(--text-muted-light)', lineHeight: 1.7 }}>
                <p>
                  Mystrio is an emerging parent technology brand focused on building innovative digital products that solve real-world friction.
                </p>
                <p>
                  We combine modern software, artificial intelligence, and human-centric design to build products that are intuitive, accessible, and scalable.
                </p>
                <p>
                  Our formula is clear: discover real challenges, understand user workflows, and build software that improves daily life.
                </p>
              </div>
            </div>

            <div className="card-light" style={{ padding: '2.5rem' }}>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '1.5rem' }}>
                Vision & Mission
              </h3>

              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#00D8FF', fontWeight: 700, marginBottom: '0.4rem' }}>
                  <Eye size={18} />
                  <span>OUR VISION</span>
                </div>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-muted-light)', lineHeight: 1.6 }}>
                  To build an interconnected ecosystem of digital platforms that simplify daily consumer routines and streamline local business operations.
                </p>
              </div>

              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#00D8FF', fontWeight: 700, marginBottom: '0.4rem' }}>
                  <Target size={18} />
                  <span>OUR MISSION</span>
                </div>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-muted-light)', lineHeight: 1.6 }}>
                  To engineer scalable, modular software solutions that prioritize zero-friction usability, trust, and sustainability.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Founders Section (Light) */}
      <section className="section-light" style={{ backgroundColor: '#EAECEF', borderTop: '1px solid var(--border-light-subtle)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 4rem auto' }}>
            <div className="badge-pill-light" style={{ marginBottom: '1rem' }}>
              <Users size={14} />
              <span>LEADERSHIP</span>
            </div>

            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '1rem' }}>
              Founders of Mystrio
            </h2>

            <p style={{ color: 'var(--text-muted-light)', fontSize: '1.05rem' }}>
              Driven by a shared vision to transform ideas into high-impact digital products.
            </p>
          </div>

          <div className="grid-3" style={{ gap: '2rem' }}>
            {founders.map((founder) => (
              <div key={founder.name} className="card-light" style={{ padding: '2.5rem 2rem', textAlign: 'center' }}>
                <div 
                  style={{ 
                    width: '96px', 
                    height: '96px', 
                    borderRadius: '50%', 
                    margin: '0 auto 1.5rem auto',
                    overflow: 'hidden',
                    border: '3px solid #00D8FF',
                    boxShadow: '0 8px 20px rgba(0, 216, 255, 0.25)'
                  }}
                >
                  <img 
                    src={founder.image} 
                    alt={founder.name} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>

                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '0.25rem' }}>
                  {founder.name}
                </h3>

                <div style={{ color: '#00D8FF', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>
                  {founder.role.toUpperCase()}
                </div>

                <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-dark)', marginBottom: '0.75rem' }}>
                  {founder.focus}
                </div>

                <p style={{ color: 'var(--text-muted-light)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                  {founder.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering Process Section (Dark) */}
      <section className="section-dark">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 4rem auto' }}>
            <div className="badge-pill-coral" style={{ marginBottom: '1rem' }}>
              <span>ENGINEERING METHODOLOGY</span>
            </div>

            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 800, color: '#FFFFFF', marginBottom: '1rem' }}>
              Our 5-Stage Product Approach
            </h2>

            <p style={{ color: 'var(--text-muted-dark)', fontSize: '1.05rem' }}>
              How we take raw concepts and engineer them into reliable, production-ready software platforms.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
            {processSteps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.step} className="card-dark" style={{ padding: '2rem 1.5rem', textAlign: 'center' }}>
                  <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#00D8FF', marginBottom: '0.75rem' }}>
                    STAGE {step.step}
                  </div>

                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(0, 216, 255, 0.1)', color: '#00D8FF', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem auto' }}>
                    <Icon size={22} />
                  </div>

                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '0.5rem' }}>
                    {step.title}
                  </h3>

                  <p style={{ fontSize: '0.875rem', color: 'var(--text-muted-dark)', lineHeight: 1.5 }}>
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* CTA Box */}
          <div style={{ marginTop: '5rem', textAlign: 'center' }}>
            <Link to="/contact" className="btn btn-coral">
              <span>Connect With Our Team</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
