import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { SEOHead } from '../components/SEOHead';
import { TEAM_MEMBERS, getTeamMemberById } from '../data/teamData';
import { 
  ArrowLeft, 
  Mail, 
  CheckCircle2, 
  Sparkles, 
  Briefcase, 
  Layers, 
  ArrowRight,
  ShieldCheck,
  Award
} from 'lucide-react';

const GithubIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const TeamMemberDetail = () => {
  const { id } = useParams();
  const member = getTeamMemberById(id);

  if (!member) {
    return <Navigate to="/about" replace />;
  }

  const otherMembers = TEAM_MEMBERS.filter((m) => m.id !== member.id);

  return (
    <>
      <SEOHead
        title={`${member.name} — ${member.title} | MYSTRIO`}
        description={`${member.name} is ${member.role} at MYSTRIO focusing on ${member.focus}. Read full profile, background, and contributions.`}
        canonical={`/team/${member.id}`}
        jsonLd={[
          {
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: member.name,
            jobTitle: member.title,
            worksFor: {
              '@type': 'Organization',
              name: 'MYSTRIO',
              url: 'https://mystrio.vercel.app/'
            },
            description: member.bio,
            image: `https://mystrio.vercel.app${member.image}`
          }
        ]}
      />

      {/* ── 1. HERO & PROFILE HEADER ───────────────────────────────────────── */}
      <section className="section-dark" style={{ paddingTop: '3rem', paddingBottom: '4rem', position: 'relative' }}>
        <div className="container">
          {/* Breadcrumb / Back Link */}
          <div style={{ marginBottom: '2.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Link 
              to="/about" 
              style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '0.5rem', 
                color: 'var(--text-muted-dark)', 
                textDecoration: 'none', 
                fontSize: '0.9rem',
                fontWeight: 600,
                transition: 'color 0.2s ease' 
              }}
              className="hover:text-cyan"
            >
              <ArrowLeft size={16} />
              <span>Back to Team</span>
            </Link>
            <span style={{ color: 'rgba(255, 255, 255, 0.2)' }}>/</span>
            <span style={{ color: '#00D8FF', fontSize: '0.9rem', fontWeight: 600 }}>{member.name}</span>
          </div>

          <div 
            className="card-dark" 
            style={{ 
              padding: '3rem 2.5rem', 
              display: 'grid', 
              gridTemplateColumns: 'minmax(200px, 280px) 1fr', 
              gap: '3rem',
              alignItems: 'center',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)'
            }}
          >
            {/* Member Image Column */}
            <div style={{ textAlign: 'center' }}>
              <div 
                style={{ 
                  width: '200px', 
                  height: '200px', 
                  borderRadius: '50%', 
                  margin: '0 auto 1.5rem auto', 
                  overflow: 'hidden',
                  border: '4px solid #00D8FF',
                  boxShadow: '0 10px 35px rgba(0, 216, 255, 0.3)',
                  position: 'relative'
                }}
              >
                <img 
                  src={member.image} 
                  alt={member.name} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              {/* Contact Icons */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
                <a 
                  href={`mailto:${member.contact.email}`} 
                  title={`Email ${member.name}`}
                  style={{ 
                    width: '40px', 
                    height: '40px', 
                    borderRadius: '50%', 
                    background: 'rgba(255, 255, 255, 0.05)', 
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: '#00D8FF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <Mail size={18} />
                </a>
                <a 
                  href={member.contact.github} 
                  target="_blank"
                  rel="noopener noreferrer"
                  title="GitHub Profile"
                  style={{ 
                    width: '40px', 
                    height: '40px', 
                    borderRadius: '50%', 
                    background: 'rgba(255, 255, 255, 0.05)', 
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <GithubIcon size={18} />
                </a>
                <a 
                  href={member.contact.linkedin} 
                  target="_blank"
                  rel="noopener noreferrer"
                  title="LinkedIn Profile"
                  style={{ 
                    width: '40px', 
                    height: '40px', 
                    borderRadius: '50%', 
                    background: 'rgba(255, 255, 255, 0.05)', 
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: '#38BDF8',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <LinkedinIcon size={18} />
                </a>
              </div>
            </div>

            {/* Member Details Column */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                <span className="badge-pill-cyan">
                  <ShieldCheck size={14} />
                  <span>{member.roleTag}</span>
                </span>
                <span style={{ fontSize: '0.9rem', color: 'var(--text-muted-dark)', fontWeight: 500 }}>
                  MYSTRIO Leadership
                </span>
              </div>

              <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3rem)', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.5rem', lineHeight: 1.1 }}>
                {member.name}
              </h1>

              <div style={{ fontSize: '1.2rem', fontWeight: 700, color: '#00D8FF', marginBottom: '1.25rem' }}>
                {member.title}
              </div>

              <p style={{ fontSize: '1.05rem', color: 'var(--text-muted-dark)', lineHeight: 1.6, marginBottom: '2rem' }}>
                {member.bio}
              </p>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link to="/contact" className="btn btn-cyan" style={{ padding: '0.65rem 1.5rem' }}>
                  <span>Get in Touch</span>
                  <ArrowRight size={16} />
                </Link>
                <a href={`mailto:${member.contact.email}`} className="btn btn-outline-light" style={{ padding: '0.65rem 1.5rem' }}>
                  <Mail size={16} />
                  <span>Direct Email</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. DETAILED BACKGROUND & RESPONSIBILITIES ─────────────────────── */}
      <section className="section-light">
        <div className="container">
          <div className="grid-2" style={{ gap: '3rem', alignItems: 'start' }}>
            
            {/* About Narrative */}
            <div className="card-light" style={{ padding: '2.5rem' }}>
              <div className="badge-pill-light" style={{ marginBottom: '1rem' }}>
                <Sparkles size={14} />
                <span>BIOGRAPHY</span>
              </div>
              <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '1.25rem' }}>
                About {member.name}
              </h2>
              <p style={{ fontSize: '1rem', color: 'var(--text-muted-light)', lineHeight: 1.7, marginBottom: '2rem' }}>
                {member.about}
              </p>

              {/* Skills Tag Cloud */}
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '1rem' }}>
                Core Competencies & Skills
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                {member.skills.map((skill) => (
                  <span 
                    key={skill}
                    style={{ 
                      padding: '0.4rem 0.9rem', 
                      borderRadius: '20px', 
                      background: 'rgba(0, 216, 255, 0.08)', 
                      border: '1px solid rgba(0, 216, 255, 0.2)',
                      color: 'var(--text-dark)',
                      fontSize: '0.85rem',
                      fontWeight: 600
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Responsibilities */}
            <div className="card-light" style={{ padding: '2.5rem' }}>
              <div className="badge-pill-light" style={{ marginBottom: '1rem' }}>
                <Briefcase size={14} />
                <span>KEY RESPONSIBILITIES</span>
              </div>
              <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '1.25rem' }}>
                Operational Focus
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {member.responsibilities.map((resp, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                    <div style={{ color: '#00D8FF', marginTop: '2px', flexShrink: 0 }}>
                      <CheckCircle2 size={20} />
                    </div>
                    <span style={{ fontSize: '0.975rem', color: 'var(--text-muted-light)', lineHeight: 1.5, fontWeight: 500 }}>
                      {resp}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 3. ECOSYSTEM CONTRIBUTIONS ────────────────────────────────────── */}
      <section className="section-dark">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3.5rem auto' }}>
            <div className="badge-pill-cyan" style={{ marginBottom: '1rem' }}>
              <Layers size={14} />
              <span>PRODUCT IMPACT</span>
            </div>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.5rem)', fontWeight: 800, color: '#FFFFFF', marginBottom: '1rem' }}>
              Contributions to MYSTRIO Ecosystem
            </h2>
            <p style={{ color: 'var(--text-muted-dark)', fontSize: '1.05rem' }}>
              Key platforms and architectural frameworks direct-led by {member.name}.
            </p>
          </div>

          <div className="grid-2" style={{ gap: '1.75rem' }}>
            {member.contributions.map((item) => (
              <div key={item.name} className="card-dark" style={{ padding: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#FFFFFF' }}>{item.name}</h3>
                  <span style={{ fontSize: '0.78rem', fontWeight: 700, padding: '0.25rem 0.75rem', borderRadius: '12px', background: 'rgba(0, 216, 255, 0.15)', color: '#00D8FF' }}>
                    {item.role}
                  </span>
                </div>
                <p style={{ color: 'var(--text-muted-dark)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. MEET OTHER LEADERS ───────────────────────────────────────── */}
      <section className="section-light">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3rem auto' }}>
            <div className="badge-pill-light" style={{ marginBottom: '1rem' }}>
              <Award size={14} />
              <span>LEADERSHIP</span>
            </div>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '0.75rem' }}>
              Explore Other Team Members
            </h2>
            <p style={{ color: 'var(--text-muted-light)', fontSize: '1rem' }}>
              Discover the founders and leaders building Mystrio's innovative platforms.
            </p>
          </div>

          <div className="grid-3" style={{ gap: '2rem' }}>
            {otherMembers.map((other) => (
              <Link
                key={other.id}
                to={`/team/${other.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="card-light"
                style={{ 
                  padding: '2rem 1.5rem', 
                  textAlign: 'center', 
                  textDecoration: 'none',
                  display: 'block',
                  transition: 'transform 0.25s ease, box-shadow 0.25s ease'
                }}
              >
                <div 
                  style={{ 
                    width: '90px', 
                    height: '90px', 
                    borderRadius: '50%', 
                    margin: '0 auto 1.25rem auto', 
                    overflow: 'hidden',
                    border: '3px solid #00D8FF',
                    boxShadow: '0 6px 18px rgba(0, 216, 255, 0.2)'
                  }}
                >
                  <img src={other.image} alt={other.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '0.25rem' }}>
                  {other.name}
                </h3>
                <div style={{ color: '#00D8FF', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>
                  {other.role.toUpperCase()}
                </div>
                <div style={{ fontSize: '0.875rem', color: '#00D8FF', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                  <span>View Full Profile</span>
                  <ArrowRight size={14} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
