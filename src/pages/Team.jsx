import React from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../components/SEOHead';
import { TEAM_MEMBERS } from '../data/teamData';
import { Users, ArrowRight, ShieldCheck } from 'lucide-react';

export const Team = () => {
  return (
    <>
      <SEOHead
        title="Leadership & Founders | MYSTRIO"
        description="Meet the founders, co-founders, and design leaders behind MYSTRIO — Atharsh S, Akash P, Ajay KS, and Kishore D."
        canonical="/team"
      />

      {/* Hero Header */}
      <section className="section-dark" style={{ paddingTop: '5rem', paddingBottom: '4rem', textAlign: 'center' }}>
        <div className="container">
          <div className="badge-pill-cyan" style={{ marginBottom: '1.25rem' }}>
            <Users size={14} />
            <span>LEADERSHIP TEAM</span>
          </div>

          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 800, color: '#FFFFFF', marginBottom: '1.25rem' }}>
            Meet the Builders Behind <span className="text-gradient-cyan">MYSTRIO</span>
          </h1>

          <p style={{ fontSize: '1.15rem', color: 'var(--text-muted-dark)', maxWidth: '700px', margin: '0 auto' }}>
            A unified team of engineers, architects, growth leads, and spatial designers driving innovation across multi-faceted digital ecosystems.
          </p>
        </div>
      </section>

      {/* Leadership Grid */}
      <section className="section-light" style={{ padding: '5rem 0' }}>
        <div className="container">
          <div className="grid-4" style={{ gap: '2rem' }}>
            {TEAM_MEMBERS.map((member) => (
              <Link
                key={member.id}
                to={`/team/${member.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="card-light"
                style={{
                  padding: '2.5rem 1.75rem',
                  textAlign: 'center',
                  textDecoration: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  cursor: 'pointer'
                }}
              >
                <div>
                  <div 
                    style={{ 
                      width: '120px', 
                      height: '120px', 
                      borderRadius: '50%', 
                      margin: '0 auto 1.5rem auto',
                      overflow: 'hidden',
                      border: '3px solid #00D8FF',
                      boxShadow: '0 8px 24px rgba(0, 216, 255, 0.25)'
                    }}
                  >
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>

                  <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '0.25rem' }}>
                    {member.name}
                  </h3>

                  <div style={{ color: '#00D8FF', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>
                    {member.role.toUpperCase()}
                  </div>

                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted-light)', fontWeight: 600, marginBottom: '1rem' }}>
                    {member.focus}
                  </div>

                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted-light)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                    {member.bio}
                  </p>
                </div>

                <div 
                  style={{ 
                    marginTop: 'auto',
                    paddingTop: '1rem',
                    borderTop: '1px solid rgba(0, 0, 0, 0.06)',
                    color: '#00D8FF',
                    fontWeight: 700,
                    fontSize: '0.9rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem'
                  }}
                >
                  <span>View Full Profile</span>
                  <ArrowRight size={16} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
