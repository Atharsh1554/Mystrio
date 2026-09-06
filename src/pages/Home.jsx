import React, { useState } from 'react';
import { SEOHead } from '../components/SEOHead';
import { TechCanvas } from '../components/TechCanvas';
import { ProductModal } from '../components/ProductModal';
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Globe, 
  Share2, 
  Zap, 
  ChevronRight,
  Users,
  Compass,
  ArrowUpRight,
  Mail
} from 'lucide-react';

// Import generated and uploaded assets
import groomerImg from '../assets/groomer_preview.jpg';
import brokerhubImg from '../assets/brokerhub_preview.jpg';
import foodshareImg from '../assets/foodshare_preview.jpg';
import remixImg from '../assets/remix_preview.jpg';
import missionImg from '../assets/mission_team.jpg';
import founderAtharshImg from '../assets/founder_atharsh.jpg';
import founderAkashImg from '../assets/founder_akash.jpg';
import founderAjayImg from '../assets/founder_ajay.jpg';

export const Home = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const productsData = [
    {
      id: 'groomer',
      title: 'GROOMER',
      category: 'AI Grooming & Booking',
      status: 'LIVE',
      image: groomerImg,
      description: 'AI-powered grooming & booking platform. Smart scheduling, personalized styling recommendations, and seamless calendar integrations.',
      fullDescription: 'Groomer revolutionizes personal care booking by pairing advanced computer vision style recommendations with an automated scheduling calendar engine for salons, barbers, and clients worldwide.',
      features: ['AI Barber & Style Recommendations', 'Automated Real-time Calendar Sync', 'Instant Contactless Payments', 'Loyalty Rewards Engine']
    },
    {
      id: 'broker-hub',
      title: 'BROKER HUB',
      category: 'Digital Commercial Platform',
      status: 'IN DEVELOPMENT',
      image: brokerhubImg,
      description: 'Digital broker platform connecting buyers and sellers with end-to-end transparency, real-time contract tracking, and automated efficiency.',
      fullDescription: 'Broker Hub eliminates friction in high-value commercial transactions by providing a unified digital portal equipped with smart contract tracking, automated compliance validation, and buyer-seller messaging.',
      features: ['Automated Contract Auditing', 'Real-time Escrow & Pipeline Analytics', 'Smart Document Verification', 'Role-based Access Controls']
    },
    {
      id: 'foodshare',
      title: 'FOODSHARE',
      category: 'Community Waste Reduction',
      status: 'LIVE',
      image: foodshareImg,
      description: 'Reducing global food waste through peer-to-peer community sharing. Share surplus meals, connect with local networks, and support sustainability.',
      fullDescription: 'FoodShare provides a hyper-local peer-to-peer sharing ecosystem where individuals, farms, and local businesses distribute surplus edible food items directly to nearby community networks.',
      features: ['Hyper-local Proximity Mapping', 'Zero-waste Sustainability Score', 'Community Distribution Points', 'Instant Share Alerts']
    },
    {
      id: 'remix',
      title: 'REMIX',
      category: 'Next-Gen Streaming Hub',
      status: 'LIVE',
      image: remixImg,
      description: 'Next-gen immersive streaming platform for digital entertainment and interactive content creation. Stream, discover, and build community in real-time.',
      fullDescription: 'Remix merges high-definition video streaming with spatial audio visualizers, interactive chat overlays, and real-time creator monetization tools for next-generation digital entertainment.',
      features: ['Spatial Audio & Visualizers', 'Ultra-low Latency Interactive Chat', 'Multi-channel Stream Splitting', 'Creator Economy Monetization']
    }
  ];

  return (
    <>
      <SEOHead 
        title="Mystrio — Building Ideas. Creating Technology. Solving Problems." 
        description="Mystrio is a tech startup crafting innovative digital platforms that simplify everyday life — from grooming and commercial ecosystems to food sharing and digital entertainment."
      />

      {/* Futuristic Background Network Lines Visualizer */}
      <TechCanvas />

      {/* 1. HERO SECTION (Dark Navy with Radial Orange Glow) */}
      <section className="section-dark bg-grid-pattern" style={{ paddingTop: '7rem', paddingBottom: '8rem', textAlign: 'center', overflow: 'hidden', position: 'relative' }}>
        <div className="glow-orange-radial"></div>

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          
          {/* Top Pill Badge */}
          <div className="badge-pill-orange" style={{ margin: '0 auto 1.75rem auto' }}>
            <Sparkles size={14} />
            <span>INTRODUCING MYSTRIO</span>
          </div>

          {/* Hero Main Headline */}
          <h1 
            style={{ 
              fontSize: 'clamp(2.75rem, 5.5vw, 4.5rem)', 
              fontWeight: 800, 
              color: '#FFFFFF',
              maxWidth: '920px',
              margin: '0 auto 1.5rem auto',
              letterSpacing: '-0.03em',
              lineHeight: 1.15
            }}
          >
            Building the Future, <br />
            <span style={{ background: 'linear-gradient(135deg, #FF5722 0%, #FF7A00 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              One Platform at a Time
            </span>
          </h1>

          {/* Hero Subtitle */}
          <p 
            style={{ 
              fontSize: 'clamp(1.05rem, 2vw, 1.25rem)', 
              color: 'var(--text-muted-dark)', 
              maxWidth: '780px', 
              margin: '0 auto 2.75rem auto',
              lineHeight: 1.6 
            }}
          >
            Mystrio is a tech startup crafting innovative digital platforms that simplify everyday life — from grooming and commercial ecosystems to food sharing and digital entertainment.
          </p>

          {/* Hero Action Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
            <a href="#products" className="btn btn-orange" style={{ padding: '0.95rem 2rem' }}>
              <span>Explore Our Products</span>
              <ArrowRight size={18} />
            </a>
            <a href="#mission" className="btn btn-outline-dark" style={{ padding: '0.95rem 2rem' }}>
              <span>Learn More</span>
              <ChevronRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* 2. PRODUCTS SHOWCASE SECTION (OUR ECOSYSTEM - Dark Navy 2x2 Grid) */}
      <section id="products" className="section-dark" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', position: 'relative', zIndex: 1 }}>
        <div className="container">
          
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 4rem auto' }}>
            <div className="badge-pill-orange" style={{ marginBottom: '1.25rem' }}>
              <Zap size={14} />
              <span>OUR ECOSYSTEM</span>
            </div>

            <h2 style={{ fontSize: 'clamp(2.2rem, 3.5vw, 3rem)', fontWeight: 800, color: '#FFFFFF', marginBottom: '1rem' }}>
              Crafting Platforms that Simplify Life
            </h2>

            <p style={{ color: 'var(--text-muted-dark)', fontSize: '1.05rem', lineHeight: 1.6 }}>
              From micro-utilities to expansive entertainment hubs, our products address modern problems with cutting-edge technology.
            </p>
          </div>

          {/* 2x2 Grid of Dark Card Components */}
          <div className="grid-2" style={{ gap: '2rem' }}>
            
            {productsData.map((item) => (
              <div 
                key={item.id}
                className="card-dark" 
                style={{ display: 'flex', flexDirection: 'column' }}
              >
                <div style={{ position: 'relative', width: '100%', height: '250px', overflow: 'hidden' }}>
                  <img 
                    src={item.image} 
                    alt={`${item.title} platform preview`}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                  />
                  <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to bottom, rgba(16,20,38,0.1), rgba(16,20,38,0.7))' }} />
                  <div style={{ position: 'absolute', top: '1.25rem', right: '1.25rem' }}>
                    <span className={`badge-status ${item.status === 'LIVE' ? 'live' : 'dev'}`}>
                      {item.status}
                    </span>
                  </div>
                </div>

                <div style={{ padding: '2.25rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.85rem', letterSpacing: '-0.02em' }}>
                    {item.title}
                  </h3>

                  <p style={{ color: 'var(--text-muted-dark)', fontSize: '0.975rem', lineHeight: 1.6, marginBottom: '1.75rem', flexGrow: 1 }}>
                    {item.description}
                  </p>

                  <div>
                    <button 
                      onClick={() => setSelectedProduct(item)}
                      style={{ 
                        background: 'transparent',
                        border: 'none',
                        padding: 0,
                        cursor: 'pointer',
                        display: 'inline-flex', 
                        alignItems: 'center', 
                        gap: '0.5rem', 
                        color: '#FF5722', 
                        fontWeight: 700, 
                        fontSize: '0.95rem' 
                      }}
                    >
                      <span>Launch Platform</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* 3. ABOUT / MISSION SECTION (Light Grey Background #F4F5F7 Contrast) */}
      <section id="mission" className="section-light" style={{ position: 'relative', zIndex: 1 }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
            
            {/* Left Column: Team Office Image */}
            <div style={{ position: 'relative', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.12)' }}>
              <img 
                src={missionImg} 
                alt="Mystrio team collaboration visual" 
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>

            {/* Right Column: Mission Text & Checkpoints */}
            <div>
              <div className="badge-pill-light" style={{ marginBottom: '1.25rem' }}>
                <Compass size={14} />
                <span>OUR MISSION</span>
              </div>

              <h2 style={{ fontSize: 'clamp(2.2rem, 3.5vw, 2.75rem)', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '1.25rem', lineHeight: 1.2 }}>
                Technology Built to Serve Humanity
              </h2>

              <p style={{ color: 'var(--text-muted-light)', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                At Mystrio, we believe technology should serve people. Our platforms are designed to make everyday experiences smarter, more connected, and highly sustainable.
              </p>

              <p style={{ color: 'var(--text-muted-light)', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '2.25rem' }}>
                Whether simplifying local personal care or streamlining massive real-estate transactions, we are engineering user-first tools that create meaningful change in community spaces.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                  <div style={{ color: '#FF5722', marginTop: '0.2rem' }}>
                    <CheckCircle2 size={22} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-dark)' }}>Ecosystem Sustainability</h4>
                    <p style={{ fontSize: '0.925rem', color: 'var(--text-muted-light)' }}>Fostering circular sharing cultures and zero-waste initiatives.</p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                  <div style={{ color: '#FF5722', marginTop: '0.2rem' }}>
                    <CheckCircle2 size={22} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-dark)' }}>Radical Simplicity</h4>
                    <p style={{ fontSize: '0.925rem', color: 'var(--text-muted-light)' }}>Reducing workflow friction across fragmented local industries.</p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                  <div style={{ color: '#FF5722', marginTop: '0.2rem' }}>
                    <CheckCircle2 size={22} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-dark)' }}>Future-proof Scalability</h4>
                    <p style={{ fontSize: '0.925rem', color: 'var(--text-muted-light)' }}>Building with modular, state-of-the-art tech stacks.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. KEY METRICS / STATS BAR (Dark Navy Background) */}
      <section className="section-dark" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', padding: '5rem 0', position: 'relative', zIndex: 1 }}>
        <div className="container">
          <div className="grid-3" style={{ textAlign: 'center', gap: '2.5rem' }}>
            
            <div>
              <div style={{ fontSize: 'clamp(3rem, 4.5vw, 4rem)', fontWeight: 800, color: '#FFFFFF', lineHeight: 1, fontFamily: 'Space Grotesk, sans-serif' }}>
                4 Products
              </div>
              <div style={{ color: '#FF5722', fontWeight: 800, fontSize: '0.85rem', letterSpacing: '0.1em', marginTop: '0.85rem', textTransform: 'uppercase' }}>
                ACTIVE PLATFORMS
              </div>
            </div>

            <div>
              <div style={{ fontSize: 'clamp(3rem, 4.5vw, 4rem)', fontWeight: 800, color: '#FFFFFF', lineHeight: 1, fontFamily: 'Space Grotesk, sans-serif' }}>
                3 Founders
              </div>
              <div style={{ color: '#FF5722', fontWeight: 800, fontSize: '0.85rem', letterSpacing: '0.1em', marginTop: '0.85rem', textTransform: 'uppercase' }}>
                DRIVING INNOVATION
              </div>
            </div>

            <div>
              <div style={{ fontSize: 'clamp(3rem, 4.5vw, 4rem)', fontWeight: 800, color: '#FFFFFF', lineHeight: 1, fontFamily: 'Space Grotesk, sans-serif' }}>
                1 Vision
              </div>
              <div style={{ color: '#FF5722', fontWeight: 800, fontSize: '0.85rem', letterSpacing: '0.1em', marginTop: '0.85rem', textTransform: 'uppercase' }}>
                UNIFIED STANDARD
              </div>
            </div>

          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem', fontStyle: 'italic', color: 'var(--text-muted-dark)', fontSize: '1.1rem' }}>
            "Innovation at every step."
          </div>
        </div>
      </section>

      {/* 5. TEAM / FOUNDERS SECTION (Light Grey Background #F8F9FA) */}
      <section id="founders" className="section-light" style={{ backgroundColor: '#F8F9FA', position: 'relative', zIndex: 1 }}>
        <div className="container">
          
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 4rem auto' }}>
            <div className="badge-pill-light" style={{ marginBottom: '1.25rem' }}>
              <Users size={14} />
              <span>MEET THE FOUNDERS</span>
            </div>

            <h2 style={{ fontSize: 'clamp(2.2rem, 3.5vw, 2.75rem)', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '1rem' }}>
              The Minds Behind Mystrio
            </h2>

            <p style={{ color: 'var(--text-muted-light)', fontSize: '1.05rem' }}>
              Building multi-faceted ecosystems requires highly dedicated and unified operational leaders.
            </p>
          </div>

          <div className="grid-3" style={{ gap: '2rem' }}>
            
            {/* 1st Founder: Atharsh S */}
            <div className="card-light" style={{ padding: '2.5rem 2rem', textAlign: 'center' }}>
              <div 
                style={{ 
                  width: '120px', 
                  height: '120px', 
                  borderRadius: '50%', 
                  margin: '0 auto 1.5rem auto',
                  overflow: 'hidden',
                  border: '3px solid #FF5722',
                  boxShadow: '0 8px 24px rgba(255, 87, 34, 0.25)'
                }}
              >
                <img 
                  src={founderAtharshImg} 
                  alt="Atharsh S - Co-Founder" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '0.25rem' }}>
                Atharsh S
              </h3>

              <div style={{ color: '#FF5722', fontWeight: 800, fontSize: '0.8rem', letterSpacing: '0.08em', marginBottom: '1.15rem' }}>
                CO-FOUNDER
              </div>

              <p style={{ color: 'var(--text-muted-light)', fontSize: '0.925rem', lineHeight: 1.6, marginBottom: '1.75rem' }}>
                Technical visionary pushing the frontiers of systems engineering and high-availability design templates across our multiple digital platforms.
              </p>

              <div style={{ display: 'flex', justifyContent: 'center', gap: '0.85rem' }}>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(15,23,42,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0F172A' }}>
                  <Globe size={16} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(15,23,42,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0F172A' }}>
                  <Share2 size={16} />
                </a>
              </div>
            </div>

            {/* 2nd Founder: Akash P */}
            <div className="card-light" style={{ padding: '2.5rem 2rem', textAlign: 'center' }}>
              <div 
                style={{ 
                  width: '120px', 
                  height: '120px', 
                  borderRadius: '50%', 
                  margin: '0 auto 1.5rem auto',
                  overflow: 'hidden',
                  border: '3px solid #FF5722',
                  boxShadow: '0 8px 24px rgba(255, 87, 34, 0.25)'
                }}
              >
                <img 
                  src={founderAkashImg} 
                  alt="Akash P - Co-Founder" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '0.25rem' }}>
                Akash P
              </h3>

              <div style={{ color: '#FF5722', fontWeight: 800, fontSize: '0.8rem', letterSpacing: '0.08em', marginBottom: '1.15rem' }}>
                CO-FOUNDER
              </div>

              <p style={{ color: 'var(--text-muted-light)', fontSize: '0.925rem', lineHeight: 1.6, marginBottom: '1.75rem' }}>
                Focuses on user-interface architectures and human-centric systems, ensuring beautiful spatial design registers exist in our ecosystem products.
              </p>

              <div style={{ display: 'flex', justifyContent: 'center', gap: '0.85rem' }}>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(15,23,42,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0F172A' }}>
                  <Globe size={16} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(15,23,42,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0F172A' }}>
                  <Share2 size={16} />
                </a>
              </div>
            </div>

            {/* 3rd Founder: Ajay KS */}
            <div className="card-light" style={{ padding: '2.5rem 2rem', textAlign: 'center' }}>
              <div 
                style={{ 
                  width: '120px', 
                  height: '120px', 
                  borderRadius: '50%', 
                  margin: '0 auto 1.5rem auto',
                  overflow: 'hidden',
                  border: '3px solid #FF5722',
                  boxShadow: '0 8px 24px rgba(255, 87, 34, 0.25)'
                }}
              >
                <img 
                  src={founderAjayImg} 
                  alt="Ajay KS - Co-Founder" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '0.25rem' }}>
                Ajay KS
              </h3>

              <div style={{ color: '#FF5722', fontWeight: 800, fontSize: '0.8rem', letterSpacing: '0.08em', marginBottom: '1.15rem' }}>
                CO-FOUNDER
              </div>

              <p style={{ color: 'var(--text-muted-light)', fontSize: '0.925rem', lineHeight: 1.6, marginBottom: '1.75rem' }}>
                A master of product-market integration and growth strategies, translating complex client business matrices into streamlined customer pathways.
              </p>

              <div style={{ display: 'flex', justifyContent: 'center', gap: '0.85rem' }}>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(15,23,42,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0F172A' }}>
                  <Globe size={16} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(15,23,42,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0F172A' }}>
                  <Share2 size={16} />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* 6. CTA CARD SECTION (CONNECT WITH US - Dark Navy Card with Orange Glow) */}
      <section id="contact" className="section-dark" style={{ position: 'relative', zIndex: 1 }}>
        <div className="container">
          <div 
            className="card-dark" 
            style={{ 
              padding: '4.5rem 2.5rem', 
              textAlign: 'center',
              maxWidth: '920px',
              margin: '0 auto',
              borderColor: 'rgba(255, 87, 34, 0.35)',
              background: 'linear-gradient(180deg, #101426 0%, #0A0D18 100%)',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.6), 0 0 30px rgba(255, 87, 34, 0.15)'
            }}
          >
            <div className="badge-pill-orange" style={{ marginBottom: '1.5rem' }}>
              <span>CONNECT WITH US</span>
            </div>

            <h2 style={{ fontSize: 'clamp(2.2rem, 3.5vw, 3rem)', fontWeight: 800, color: '#FFFFFF', marginBottom: '1rem' }}>
              Ready to Build With Us?
            </h2>

            <p style={{ color: 'var(--text-muted-dark)', fontSize: '1.1rem', maxWidth: '680px', margin: '0 auto 2.5rem auto', lineHeight: 1.6 }}>
              Whether you want to partner, invest, or just say hello — we would love to hear from you. Let's create the next leap in consumer tech.
            </p>

            <a 
              href="mailto:contact@mystrio.com" 
              className="btn btn-orange" 
              style={{ padding: '0.95rem 2.5rem', fontSize: '1.05rem' }}
            >
              <span>Get in Touch</span>
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Product Detail Demo Modal */}
      <ProductModal 
        product={selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
      />
    </>
  );
};

