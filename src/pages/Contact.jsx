import React, { useState } from 'react';
import { SEOHead } from '../components/SEOHead';
import { Sparkles, Send, CheckCircle2, AlertCircle } from 'lucide-react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setFormStatus('error');
      return;
    }

    setFormStatus('success');
  };

  return (
    <>
      <SEOHead
        title="Contact MYSTRIO | Technology & Innovation"
        description="Get in touch with MYSTRIO. Reach out for partnerships, investment, collaboration, or general enquiries about our technology and digital products."
        canonical="/contact"
        jsonLd={[{
          '@context': 'https://schema.org',
          '@type': 'ContactPage',
          name: 'Contact MYSTRIO',
          url: 'https://mystrio.vercel.app/contact',
          description: 'Get in touch with MYSTRIO for partnerships, investment, collaboration, or general enquiries.',
          isPartOf: { '@type': 'WebSite', name: 'MYSTRIO', url: 'https://mystrio.vercel.app/' }
        }]}
      />

      {/* Hero Section */}
      <section className="section-dark bg-grid-pattern" style={{ paddingTop: '5.5rem', paddingBottom: '3.5rem', textAlign: 'center' }}>
        <div className="container">
          <div className="badge-pill-coral" style={{ margin: '0 auto 1.25rem auto' }}>
            <Sparkles size={14} />
            <span>GET IN TOUCH</span>
          </div>

          <h1 style={{ fontSize: 'clamp(2.25rem, 4.5vw, 3.75rem)', fontWeight: 800, color: '#FFFFFF', marginBottom: '1.25rem' }}>
            Let's Build <span className="text-gradient-brand">Something Together</span>
          </h1>

          <p style={{ fontSize: '1.2rem', color: 'var(--text-muted-dark)', maxWidth: '650px', margin: '0 auto 2.5rem auto', lineHeight: 1.6 }}>
            Have an idea, question, collaboration opportunity, or feedback? Contact founders Atharsh S, Ajay KS, and Akash P.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-dark" style={{ paddingTop: 0, paddingBottom: '6rem' }}>
        <div className="container">
          <div 
            className="card-dark" 
            style={{ 
              maxWidth: '750px', 
              margin: '0 auto', 
              padding: '3rem 2.5rem',
              borderColor: 'rgba(0, 216, 255, 0.3)'
            }}
          >
            {formStatus === 'success' ? (
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
                  margin: '0 auto 1.5rem auto'
                }}>
                  <CheckCircle2 size={32} />
                </div>

                <h3 style={{ fontSize: '1.6rem', color: '#FFFFFF', marginBottom: '0.75rem', fontWeight: 800 }}>
                  Message Sent Successfully!
                </h3>

                <p style={{ fontSize: '1rem', color: 'var(--text-muted-dark)', lineHeight: 1.6, maxWidth: '520px', margin: '0 auto 1.5rem auto' }}>
                  Thank you for reaching out to Mystrio. Our founders Atharsh S, Ajay KS, and Akash P will review your message.
                </p>

                <button 
                  onClick={() => {
                    setFormStatus(null);
                    setFormData({ name: '', email: '', subject: '', message: '' });
                  }} 
                  className="btn btn-outline-dark"
                  style={{ marginTop: '1rem' }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {formStatus === 'error' && (
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '0.6rem', 
                    color: '#FF5252', 
                    background: 'rgba(255, 82, 82, 0.1)', 
                    border: '1px solid rgba(255, 82, 82, 0.3)',
                    padding: '0.85rem 1.25rem',
                    borderRadius: '0.75rem',
                    marginBottom: '1.5rem',
                    fontSize: '0.9rem'
                  }}>
                    <AlertCircle size={18} />
                    <span>Please fill in all required fields to submit your message.</span>
                  </div>
                )}

                <div className="grid-2" style={{ gap: '1.25rem', marginBottom: '1.25rem' }}>
                  <div>
                    <label className="form-label" style={{ color: '#FFFFFF' }}>Your Name *</label>
                    <input 
                      type="text" 
                      name="name" 
                      required
                      placeholder="e.g. Alex Morgan"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>

                  <div>
                    <label className="form-label" style={{ color: '#FFFFFF' }}>Your Email *</label>
                    <input 
                      type="email" 
                      name="email" 
                      required
                      placeholder="e.g. alex@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>
                </div>

                <div style={{ marginBottom: '1.25rem' }}>
                  <label className="form-label" style={{ color: '#FFFFFF' }}>Subject *</label>
                  <input 
                    type="text" 
                    name="subject" 
                    required
                    placeholder="What would you like to discuss?"
                    value={formData.subject}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>

                <div style={{ marginBottom: '1.75rem' }}>
                  <label className="form-label" style={{ color: '#FFFFFF' }}>Message *</label>
                  <textarea 
                    name="message" 
                    required
                    placeholder="Tell us about your idea, feedback, or collaboration interest..."
                    value={formData.message}
                    onChange={handleChange}
                    className="form-textarea"
                  />
                </div>

                <button type="submit" className="btn btn-coral" style={{ width: '100%', padding: '0.9rem' }}>
                  <Send size={16} />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
};
