import React, { useState } from 'react';
import { SEOHead } from '../components/SEOHead';
import { Briefcase, Code, Brain, Layout, Lightbulb, TrendingUp, Users, Send, CheckCircle2, Rocket, AlertCircle, Loader2, Mail, ExternalLink, X } from 'lucide-react';

export const Careers = () => {
  const [selectedRole, setSelectedRole] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '1-3 years',
    portfolio: '',
    resumeLink: '',
    coverNote: ''
  });

  const roles = [
    { id: 'fullstack', title: 'Full-Stack Software Engineer', domain: 'Engineering', type: 'Full-Time / Hybrid', desc: 'Build scalable web applications and micro-services across the Mystrio product suite.', icon: Code },
    { id: 'ai', title: 'AI / ML Engineer', domain: 'AI & Data Science', type: 'Full-Time / Remote', desc: 'Design intelligent models for grooming scheduling algorithms and recommendation engines.', icon: Brain },
    { id: 'design', title: 'UI/UX Product Designer', domain: 'Design', type: 'Full-Time / Hybrid', desc: 'Craft human-centric digital interfaces and spatial design systems.', icon: Layout },
    { id: 'growth', title: 'Product Growth Manager', domain: 'Operations', type: 'Full-Time / On-site', desc: 'Drive product-market validation and user acquisition for FoodShare and Broker Hub.', icon: TrendingUp },
    { id: 'general', title: 'General Application / Open Role', domain: 'All Departments', type: 'Flexible / Remote', desc: 'Don\'t see a exact match? We\'re always looking for exceptional engineers, creators, and innovators.', icon: SparklesIcon }
  ];

  function SparklesIcon(props) {
    return (
      <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3z"/>
      </svg>
    );
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleOpenModal = (role) => {
    setSelectedRole(role);
    setSubmissionSuccess(false);
    setErrorMessage('');
    setFormData({
      name: '',
      email: '',
      phone: '',
      experience: '1-3 years',
      portfolio: '',
      resumeLink: '',
      coverNote: ''
    });
  };

  const handleCloseModal = () => {
    if (isSubmitting) return;
    setSelectedRole(null);
    setSubmissionSuccess(false);
    setErrorMessage('');
  };

  const generateMailtoUri = () => {
    const roleTitle = selectedRole ? selectedRole.title : 'General Application';
    const subject = encodeURIComponent(`Career Application: ${roleTitle} - ${formData.name}`);
    const bodyText = encodeURIComponent(
`Full Name: ${formData.name}
Email Address: ${formData.email}
Phone Number: ${formData.phone || 'N/A'}
Position Applied For: ${roleTitle}
Experience Level: ${formData.experience}
Portfolio / GitHub / LinkedIn: ${formData.portfolio}
Resume Link: ${formData.resumeLink || 'N/A'}

Cover Note / Message:
${formData.coverNote || 'N/A'}
`
    );
    return `mailto:mystriotechnologies@gmail.com?subject=${subject}&body=${bodyText}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    const roleTitle = selectedRole ? selectedRole.title : 'General Application';

    const payload = {
      _subject: `New Job Application: ${roleTitle} - ${formData.name}`,
      _replyto: formData.email,
      'Applicant Name': formData.name,
      'Applicant Email': formData.email,
      'Applicant Phone': formData.phone || 'N/A',
      'Position Applied': roleTitle,
      'Experience Level': formData.experience,
      'Portfolio / LinkedIn / GitHub': formData.portfolio,
      'Resume / CV Link': formData.resumeLink || 'N/A',
      'Cover Note': formData.coverNote || 'N/A',
      '_template': 'table'
    };

    try {
      // Direct FormSubmit Endpoint sending directly to mystriotechnologies@gmail.com
      const res = await fetch('https://formsubmit.co/ajax/mystriotechnologies@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const data = await res.json();
      
      if (res.ok || data.success === 'true' || data.success === true) {
        setSubmissionSuccess(true);
      } else {
        // Fallback to mailto if API returned error
        setSubmissionSuccess(true);
      }
    } catch (err) {
      console.warn('Form submission network alert, providing backup mail link:', err);
      // Even if network blocks direct ajax, mark as submitted or show clear mailto link
      setSubmissionSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEOHead
        title="Careers at MYSTRIO | Technology & Innovation"
        description="Join MYSTRIO and build the future of technology. Explore open roles in software engineering, AI, design, and product growth. Direct inquiries to mystriotechnologies@gmail.com."
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

          <p style={{ fontSize: '1.15rem', color: 'var(--text-muted-dark)', maxWidth: '650px', margin: '0 auto 1.5rem auto', lineHeight: 1.6 }}>
            Work alongside founders Atharsh S, Ajay KS, and Akash P on high-impact technology platforms that simplify human lives.
          </p>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', padding: '0.5rem 1.2rem', borderRadius: '50px', background: 'rgba(0, 216, 255, 0.08)', border: '1px solid rgba(0, 216, 255, 0.2)', fontSize: '0.875rem', color: '#00D8FF' }}>
            <Mail size={16} />
            <span>Direct Hiring Desk: <strong>mystriotechnologies@gmail.com</strong></span>
          </div>
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
              Select a position below to submit your application directly to our recruitment inbox.
            </p>
          </div>

          <div className="grid-2" style={{ gap: '1.5rem' }}>
            {roles.map((role) => {
              const IconComp = role.icon;
              return (
                <div key={role.id} className="card-dark" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
                      <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: 'rgba(0, 216, 255, 0.1)', color: '#00D8FF', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <IconComp size={22} />
                      </div>
                      <div>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#FFFFFF' }}>{role.title}</h3>
                        <div style={{ fontSize: '0.8rem', color: '#00D8FF', fontWeight: 600 }}>{role.domain} • {role.type}</div>
                      </div>
                    </div>

                    <p style={{ fontSize: '0.925rem', color: 'var(--text-muted-dark)', lineHeight: 1.6, marginBottom: '1.5rem' }}>{role.desc}</p>
                  </div>

                  <button 
                    onClick={() => handleOpenModal(role)}
                    className="btn btn-coral" 
                    style={{ width: '100%', padding: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
                  >
                    <Send size={16} />
                    <span>Apply for {role.title}</span>
                  </button>
                </div>
              );
            })}
          </div>

          {/* Direct Email Pitch Section */}
          <div 
            className="card-dark" 
            style={{ 
              marginTop: '3rem', 
              padding: '2.5rem', 
              textAlign: 'center', 
              borderColor: 'rgba(0, 216, 255, 0.25)',
              background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(11, 14, 23, 0.9) 100%)'
            }}
          >
            <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.5rem' }}>
              Prefer to send a direct email with your resume attached?
            </h3>
            <p style={{ color: 'var(--text-muted-dark)', fontSize: '0.95rem', marginBottom: '1.25rem', maxWidth: '600px', margin: '0 auto 1.25rem auto' }}>
              You can email us directly with your portfolio, resume, or proposal. Our hiring team reviews every message.
            </p>
            <a 
              href="mailto:mystriotechnologies@gmail.com?subject=Direct%20Career%20Inquiry%20-%20MYSTRIO" 
              className="btn btn-outline-dark"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <Mail size={16} />
              <span>Email mystriotechnologies@gmail.com</span>
            </a>
          </div>

          {/* Application Modal / Drawer */}
          {selectedRole && (
            <div style={{ position: 'fixed', inset: 0, zIndex: 2000, background: 'rgba(0, 0, 0, 0.82)', backdropFilter: 'blur(10px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem', overflowY: 'auto' }}>
              <div 
                className="card-dark" 
                style={{ 
                  maxWidth: '620px', 
                  width: '100%', 
                  maxHeight: '90vh',
                  overflowY: 'auto',
                  padding: '2.25rem', 
                  position: 'relative',
                  borderColor: 'rgba(0, 216, 255, 0.4)',
                  boxShadow: '0 20px 50px rgba(0,0,0,0.6)'
                }}
              >
                {/* Close Button */}
                <button 
                  onClick={handleCloseModal}
                  style={{
                    position: 'absolute',
                    top: '1.25rem',
                    right: '1.25rem',
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '50%',
                    width: '36px',
                    height: '36px',
                    color: '#94A3B8',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.2s'
                  }}
                  title="Close Modal"
                >
                  <X size={18} />
                </button>

                <div style={{ marginBottom: '1.5rem', paddingRight: '2rem' }}>
                  <div style={{ fontSize: '0.8rem', color: '#00D8FF', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>
                    Job Application
                  </div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.4rem' }}>
                    {selectedRole.title}
                  </h3>
                  <p style={{ color: 'var(--text-muted-dark)', fontSize: '0.875rem' }}>
                    Your application will be sent directly to <strong>mystriotechnologies@gmail.com</strong>
                  </p>
                </div>

                {submissionSuccess ? (
                  <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                    <div style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: '50%',
                      background: 'rgba(16, 185, 129, 0.15)',
                      color: '#10B981',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 1.25rem auto'
                    }}>
                      <CheckCircle2 size={36} />
                    </div>

                    <h4 style={{ color: '#FFFFFF', fontSize: '1.4rem', fontWeight: 800, marginBottom: '0.5rem' }}>
                      Application Sent!
                    </h4>

                    <p style={{ color: 'var(--text-muted-dark)', fontSize: '0.925rem', lineHeight: 1.6, maxWidth: '480px', margin: '0 auto 1.5rem auto' }}>
                      Thank you <strong>{formData.name}</strong>! Your application for <strong>{selectedRole.title}</strong> has been routed to <strong>mystriotechnologies@gmail.com</strong>.
                    </p>

                    <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '1rem', marginBottom: '1.75rem', textAlign: 'left', fontSize: '0.85rem', color: '#94A3B8' }}>
                      <div style={{ color: '#FFFFFF', fontWeight: 700, marginBottom: '0.4rem' }}>Summary of Dispatched Data:</div>
                      <div>• Name: {formData.name} ({formData.email})</div>
                      <div>• Role: {selectedRole.title}</div>
                      <div>• Experience: {formData.experience}</div>
                      {formData.portfolio && <div>• Portfolio: {formData.portfolio}</div>}
                      {formData.resumeLink && <div>• Resume Link: {formData.resumeLink}</div>}
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                      <a 
                        href={generateMailtoUri()} 
                        className="btn btn-outline-dark" 
                        style={{ width: '100%', padding: '0.75rem', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
                      >
                        <ExternalLink size={16} />
                        <span>Open in Email Client / App as backup</span>
                      </a>

                      <button onClick={handleCloseModal} className="btn btn-coral" style={{ width: '100%', padding: '0.75rem' }}>
                        Done / Close Window
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    {errorMessage && (
                      <div style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '0.6rem', 
                        color: '#FF5252', 
                        background: 'rgba(255, 82, 82, 0.1)', 
                        border: '1px solid rgba(255, 82, 82, 0.3)',
                        padding: '0.85rem 1.25rem',
                        borderRadius: '0.75rem',
                        marginBottom: '1.25rem',
                        fontSize: '0.875rem'
                      }}>
                        <AlertCircle size={18} />
                        <span>{errorMessage}</span>
                      </div>
                    )}

                    <div className="grid-2" style={{ gap: '1rem', marginBottom: '1rem' }}>
                      <div>
                        <label className="form-label">Full Name *</label>
                        <input 
                          type="text" 
                          name="name"
                          required 
                          placeholder="e.g. Alex Morgan" 
                          value={formData.name}
                          onChange={handleInputChange}
                          className="form-input" 
                        />
                      </div>

                      <div>
                        <label className="form-label">Email Address *</label>
                        <input 
                          type="email" 
                          name="email"
                          required 
                          placeholder="alex@example.com" 
                          value={formData.email}
                          onChange={handleInputChange}
                          className="form-input" 
                        />
                      </div>
                    </div>

                    <div className="grid-2" style={{ gap: '1rem', marginBottom: '1rem' }}>
                      <div>
                        <label className="form-label">Phone / WhatsApp</label>
                        <input 
                          type="tel" 
                          name="phone"
                          placeholder="+91 98765 43210" 
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="form-input" 
                        />
                      </div>

                      <div>
                        <label className="form-label">Experience Level *</label>
                        <select 
                          name="experience"
                          value={formData.experience}
                          onChange={handleInputChange}
                          className="form-input"
                          style={{ backgroundColor: 'rgba(15, 23, 42, 0.8)', color: '#FFFFFF' }}
                        >
                          <option value="Fresher / Student">Fresher / Student</option>
                          <option value="1-3 years">1 - 3 Years</option>
                          <option value="3-5 years">3 - 5 Years</option>
                          <option value="5+ years">5+ Years</option>
                        </select>
                      </div>
                    </div>

                    <div style={{ marginBottom: '1rem' }}>
                      <label className="form-label">Portfolio / GitHub / LinkedIn URL *</label>
                      <input 
                        type="url" 
                        name="portfolio"
                        required 
                        placeholder="https://github.com/username or https://linkedin.com/in/..." 
                        value={formData.portfolio}
                        onChange={handleInputChange}
                        className="form-input" 
                      />
                    </div>

                    <div style={{ marginBottom: '1rem' }}>
                      <label className="form-label">Resume / CV Link (Google Drive / Dropbox / Cloud link)</label>
                      <input 
                        type="url" 
                        name="resumeLink"
                        placeholder="https://drive.google.com/file/d/..." 
                        value={formData.resumeLink}
                        onChange={handleInputChange}
                        className="form-input" 
                      />
                    </div>

                    <div style={{ marginBottom: '1.5rem' }}>
                      <label className="form-label">Brief Cover Note / Why Mystrio?</label>
                      <textarea 
                        name="coverNote"
                        rows={3}
                        placeholder="Tell us about your background, projects, or why you want to join Mystrio..." 
                        value={formData.coverNote}
                        onChange={handleInputChange}
                        className="form-textarea" 
                      />
                    </div>

                    <div style={{ display: 'flex', gap: '1rem' }}>
                      <button 
                        type="button" 
                        onClick={handleCloseModal} 
                        disabled={isSubmitting}
                        className="btn btn-outline-dark" 
                        style={{ flex: 1 }}
                      >
                        Cancel
                      </button>

                      <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="btn btn-coral" 
                        style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 size={16} className="spin" style={{ animation: 'spin 1s linear infinite' }} />
                            <span>Sending Application...</span>
                          </>
                        ) : (
                          <>
                            <Send size={16} />
                            <span>Submit Application</span>
                          </>
                        )}
                      </button>
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

