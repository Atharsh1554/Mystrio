import React, { useState } from 'react';
import { SEOHead } from '../components/SEOHead';
import { Briefcase, Code, Brain, Layout, Lightbulb, TrendingUp, Users, Send, CheckCircle2, Rocket } from 'lucide-react';

export const Careers = () => {
  const [selectedRole, setSelectedRole] = useState(null);
  const [appliedRole, setAppliedRole] = useState(null);

  const roles = [
    { id: 'fullstack', title: 'Full-Stack Software Engineer', domain: 'Engineering', type: 'Full-Time / Hybrid', desc: 'Build scalable web applications and micro-services across the Mystrio product suite.', icon: Code },
    { id: 'ai', title: 'AI / ML Engineer', domain: 'AI & Data Science', type: 'Full-Time / Remote', desc: 'Design intelligent models for grooming scheduling algorithms and recommendation engines.', icon: Brain },
    { id: 'design', title: 'UI/UX Product Designer', domain: 'Design', type: 'Full-Time / Hybrid', desc: 'Craft human-centric digital interfaces and spatial design systems.', icon: Layout },
    { id: 'growth', title: 'Product Growth Manager', domain: 'Operations', type: 'Full-Time / On-site', desc: 'Drive product-market validation and user acquisition for FoodShare and Broker Hub.', icon: TrendingUp },
  ];

  return (
    <>
      <SEOHead
        title="Careers at MYSTRIO | Technology & Innovation"
        description="Join MYSTRIO and build the future of technology. Explore open roles in software engineering, AI, design, and product growth at an emerging technology brand."
        canonical="/careers"
        jsonLd={[{
          '@context': 'https://schema.org',
          '@type': 'JobPosting',
          'hiringOrganization': {
            '@type': 'Organization',
            'name': 'MYSTRIO',
            'url': 'https://mystrio.vercel.app/'
          },
          'description': 'MYSTRIO is hiring engineers, designers, and growth managers to build innovative digital solutions using AI and modern software.',
          'jobLocation': { '@type': 'Place', 'address': { '@type': 'PostalAddress', 'addressCountry': 'IN' } },
          'employmentType': 'FULL_TIME'
        }]}
      />

      {/* Hero (Dark) */}
      <section className="section-dark bg-grid-pattern" style={{ paddingTop: '5.5rem', paddingBottom: '4rem', textAlign: 'center' }}>
        <div className="container">
          <div className="badge-pill-coral" style={{ margin: '0 auto 1.25rem auto' }}>
            <Briefcase size={14} />
            <span>JOIN OUR TEAM</span>
          </div>

          <h1 style={{ fontSize: 'clamp(2.25rem, 4.5vw, 3.75rem)', fontWeight: 800, color: '#FFFFFF', marginBottom: '1rem' }}>
            Build the Future <span className="text-gradient-brand">With Mystrio</span>
          </h1>

          <p style={{ fontSize: '1.15rem', color: 'var(--text-muted-dark)', maxWidth: '650px', margin: '0 auto' }}>
            Work alongside founders Atharsh S, Ajay KS, and Akash P on high-impact technology platforms that simplify human lives.
          </p>
        </div>
      </section>

      {/* Engineering Culture (Light) */}
      <section className="section-light">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 4rem auto' }}>
            <div className="badge-pill-light" style={{ marginBottom: '1rem' }}>
              <span>OUR VALUES</span>
            </div>

            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '1rem' }}>
              Why Work at Mystrio?
            </h2>

            <p style={{ color: 'var(--text-muted-light)', fontSize: '1.05rem' }}>
              We foster an environment of high autonomy, rapid iteration, and radical ownership.
            </p>
          </div>

          <div className="grid-3" style={{ gap: '2rem' }}>
            <div className="card-light" style={{ padding: '2.25rem', textAlign: 'center' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(0, 216, 255, 0.1)', color: '#00D8FF', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem auto' }}>
                <Lightbulb size={24} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '0.5rem' }}>First-Principles Thinking</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted-light)', lineHeight: 1.6 }}>We break down challenges to fundamental truths and build clean solutions without legacy baggage.</p>
            </div>

            <div className="card-light" style={{ padding: '2.25rem', textAlign: 'center' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(0, 216, 255, 0.1)', color: '#00D8FF', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem auto' }}>
                <Rocket size={24} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '0.5rem' }}>Multi-Product Ownership</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted-light)', lineHeight: 1.6 }}>Work across AI grooming apps, commercial broker systems, and peer-to-peer sustainability networks.</p>
            </div>

            <div className="card-light" style={{ padding: '2.25rem', textAlign: 'center' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(0, 216, 255, 0.1)', color: '#00D8FF', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem auto' }}>
                <Users size={24} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '0.5rem' }}>Founder Mentorship</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted-light)', lineHeight: 1.6 }}>Direct collaboration with founders Atharsh S, Ajay KS, and Akash P in an agile startup framework.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Roles (Dark) */}
      <section className="section-dark">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 4rem auto' }}>
            <div className="badge-pill-coral" style={{ marginBottom: '1rem' }}>
              <span>OPEN POSITIONS</span>
            </div>

            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 800, color: '#FFFFFF', marginBottom: '1rem' }}>
              Explore Opportunities
            </h2>

            <p style={{ color: 'var(--text-muted-dark)', fontSize: '1.05rem' }}>
              We are currently accepting expression of interest applications for early technical and design team members.
            </p>
          </div>

          <div className="grid-2" style={{ gap: '1.5rem' }}>
            {roles.map((role) => {
              const IconComp = role.icon;
              return (
                <div key={role.id} className="card-dark" style={{ padding: '2rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
                    <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: 'rgba(0, 216, 255, 0.1)', color: '#00D8FF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <IconComp size={22} />
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#FFFFFF' }}>{role.title}</h3>
                      <div style={{ fontSize: '0.8rem', color: '#00D8FF', fontWeight: 600 }}>{role.domain} • {role.type}</div>
                    </div>
                  </div>

                  <p style={{ fontSize: '0.925rem', color: 'var(--text-muted-dark)', lineHeight: 1.6, marginBottom: '1.5rem' }}>{role.desc}</p>

                  <button 
                    onClick={() => {
                      setSelectedRole(role);
                      setAppliedRole(null);
                    }}
                    className="btn btn-coral" 
                    style={{ width: '100%', padding: '0.7rem' }}
                  >
                    <span>Apply for {role.title}</span>
                  </button>
                </div>
              );
            })}
          </div>

          {/* Application Modal / Drawer */}
          {selectedRole && (
            <div style={{ position: 'fixed', inset: 0, zIndex: 2000, background: 'rgba(0, 0, 0, 0.75)', backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1.5rem' }}>
              <div className="card-dark" style={{ maxWidth: '600px', width: '100%', padding: '2.5rem', position: 'relative' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.5rem' }}>
                  Apply for {selectedRole.title}
                </h3>
                <p style={{ color: 'var(--text-muted-dark)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                  Send your resume and profile details directly to founders Atharsh S, Ajay KS, and Akash P.
                </p>

                {appliedRole ? (
                  <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                    <div style={{ color: '#10B981', marginBottom: '1rem' }}><CheckCircle2 size={48} style={{ margin: '0 auto' }} /></div>
                    <h4 style={{ color: '#FFFFFF', fontSize: '1.25rem', marginBottom: '0.5rem' }}>Application Submitted!</h4>
                    <p style={{ color: 'var(--text-muted-dark)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>Thank you for expressing interest in Mystrio.</p>
                    <button onClick={() => setSelectedRole(null)} className="btn btn-coral">Close</button>
                  </div>
                ) : (
                  <form onSubmit={(e) => { e.preventDefault(); setAppliedRole(true); }}>
                    <div style={{ marginBottom: '1rem' }}>
                      <label className="form-label">Full Name *</label>
                      <input type="text" required placeholder="Alex Morgan" className="form-input" />
                    </div>
                    <div style={{ marginBottom: '1rem' }}>
                      <label className="form-label">Email Address *</label>
                      <input type="email" required placeholder="alex@example.com" className="form-input" />
                    </div>
                    <div style={{ marginBottom: '1.5rem' }}>
                      <label className="form-label">Portfolio / GitHub Link *</label>
                      <input type="url" required placeholder="https://github.com/username" className="form-input" />
                    </div>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                      <button type="button" onClick={() => setSelectedRole(null)} className="btn btn-outline-dark" style={{ flex: 1 }}>Cancel</button>
                      <button type="submit" className="btn btn-coral" style={{ flex: 1 }}>Submit Application</button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};
