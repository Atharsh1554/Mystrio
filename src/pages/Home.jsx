import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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

import groomerImg from '../assets/groomer_preview.jpg';
import brokerhubImg from '../assets/brokerhub_preview.jpg';
import foodshareImg from '../assets/foodshare_preview.jpg';
import remixImg from '../assets/remix_preview.jpg';
import missionImg from '../assets/mission_team.jpg';
import founderAtharshImg from '../assets/founder_atharsh.jpg';
import founderAkashImg from '../assets/founder_akash.jpg';
import founderAjayImg from '../assets/founder_ajay.jpg';

const HOME_JSON_LD = [
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'MYSTRIO',
    url: 'https://mystrio.vercel.app/',
    logo: 'https://mystrio.vercel.app/logo_full.png',
    description:
      'MYSTRIO is an emerging technology brand focused on building innovative digital solutions using AI, software and modern technology.',
    foundingDate: '2024',
    founders: [
      { '@type': 'Person', name: 'Atharsh S' },
      { '@type': 'Person', name: 'Akash P' },
      { '@type': 'Person', name: 'Ajay KS' },
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'contact@mystrio.com',
      contactType: 'general',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'MYSTRIO | Technology & Innovation',
    url: 'https://mystrio.vercel.app/',
    description:
      'MYSTRIO is an emerging technology brand focused on building innovative digital solutions using AI, software and modern technology.',
    isPartOf: { '@type': 'WebSite', name: 'MYSTRIO', url: 'https://mystrio.vercel.app/' },
  },
];

export const Home = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const productsData = [
    {
      id: 'groomer',
      title: 'GROOMER',
      category: 'AI Grooming & Booking',
      status: 'LIVE',
      image: groomerImg,
      path: '/products/groomer',
      liveUrl: 'https://groomer-app-steel.vercel.app/',
      description:
        'AI-powered grooming & booking platform. Smart scheduling, personalized styling recommendations, and seamless calendar integrations.',
      fullDescription:
        'Groomer revolutionizes personal care booking by pairing advanced computer vision style recommendations with an automated scheduling calendar engine for salons, barbers, and clients worldwide.',
      features: [
        'AI Barber & Style Recommendations',
        'Automated Real-time Calendar Sync',
        'Instant Contactless Payments',
        'Loyalty Rewards Engine',
      ],
    },
    {
      id: 'broker-hub',
      title: 'BROKER HUB',
      category: 'Digital Commercial Platform',
      status: 'LIVE',
      image: brokerhubImg,
      path: '/products/broker-hub',
      liveUrl: 'https://new-brokerhub.vercel.app/',
      description:
        'Digital broker platform connecting buyers and sellers with end-to-end transparency, real-time contract tracking, and automated efficiency.',
      fullDescription:
        'Broker Hub eliminates friction in high-value commercial transactions by providing a unified digital portal equipped with smart contract tracking, automated compliance validation, and buyer-seller messaging.',
      features: [
        'Automated Contract Auditing',
        'Real-time Escrow & Pipeline Analytics',
        'Smart Document Verification',
        'Role-based Access Controls',
      ],
    },
    {
      id: 'foodshare',
      title: 'FOODSHARE',
      category: 'Community Waste Reduction',
      status: 'LIVE',
      image: foodshareImg,
      path: '/products/foodshare',
      liveUrl: 'https://food-donation-app-ten.vercel.app/',
      description:
        'Reducing global food waste through peer-to-peer community sharing. Share surplus meals, connect with local networks, and support sustainability.',
      fullDescription:
        'FoodShare provides a hyper-local peer-to-peer sharing ecosystem where individuals, farms, and local businesses distribute surplus edible food items directly to nearby community networks.',
      features: [
        'Hyper-local Proximity Mapping',
        'Zero-waste Sustainability Score',
        'Community Distribution Points',
        'Instant Share Alerts',
      ],
    },
    {
      id: 'remix',
      title: 'REMIX',
      category: 'Next-Gen Streaming Hub',
      status: 'IN DEVELOPMENT',
      image: remixImg,
      path: '/products/remix',
      liveUrl: null,
      description:
        'Next-gen immersive streaming platform for digital entertainment and interactive content creation. Stream, discover, and build community in real-time.',
      fullDescription:
        'Remix merges high-definition video streaming with spatial audio visualizers, interactive chat overlays, and real-time creator monetization tools for next-generation digital entertainment.',
      features: [
        'Spatial Audio & Visualizers',
        'Ultra-low Latency Interactive Chat',
        'Multi-channel Stream Splitting',
        'Creator Economy Monetization',
      ],
    },
  ];

  return (
    <>
      <SEOHead
        title="MYSTRIO | Technology & Innovation"
        description="MYSTRIO is an emerging technology brand focused on building innovative digital solutions using AI, software and modern technology."
        canonical="/"
        jsonLd={HOME_JSON_LD}
      />

      {/* Futuristic Background Network Lines Visualizer */}
      <TechCanvas />

      {/* ── 1. HERO SECTION ─────────────────────────────────────────────── */}
      <section
        className="section-dark bg-grid-pattern"
        style={{
          paddingTop: '7rem',
          paddingBottom: '8rem',
          textAlign: 'center',
          overflow: 'hidden',
          position: 'relative',
        }}
        aria-label="MYSTRIO hero introduction"
      >
        <div className="glow-orange-radial" aria-hidden="true" />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          {/* Top Pill Badge */}
          <div className="badge-pill-orange" style={{ margin: '0 auto 1.75rem auto' }} aria-hidden="true">
            <Sparkles size={14} />
            <span>INTRODUCING MYSTRIO</span>
          </div>

          {/* Hero Main Headline — exactly one H1 per page */}
          <h1
            style={{
              fontSize: 'clamp(2.75rem, 5.5vw, 4.5rem)',
              fontWeight: 800,
              color: '#FFFFFF',
              maxWidth: '920px',
              margin: '0 auto 1.5rem auto',
              letterSpacing: '-0.03em',
              lineHeight: 1.15,
            }}
          >
            Building Ideas. Creating Technology.{' '}
            <span
              style={{
                background:
                  'linear-gradient(135deg, #00D8FF 0%, #8B5CF6 50%, #EC4899 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Solving Problems.
            </span>
          </h1>

          {/* Brand intro paragraph — natural keyword presence for Google */}
          <p
            style={{
              fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
              color: 'var(--text-muted-dark)',
              maxWidth: '780px',
              margin: '0 auto 2.75rem auto',
              lineHeight: 1.6,
            }}
          >
            MYSTRIO is an emerging technology brand building innovative digital solutions
            through modern software, artificial intelligence, and user-centered design —
            turning real-world challenges into platforms people rely on every day.
          </p>

          {/* Hero Action Buttons — real <a> and <Link> for crawlability */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1.25rem',
              flexWrap: 'wrap',
            }}
          >
            <Link to="/products" className="btn btn-orange" style={{ padding: '0.95rem 2rem' }}>
              <span>Explore Our Products</span>
              <ArrowRight size={18} />
            </Link>
            <Link to="/about" className="btn btn-outline-dark" style={{ padding: '0.95rem 2rem' }}>
              <span>About MYSTRIO</span>
              <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 2. BRAND INTRODUCTION SECTION (SEO content block) ──────────── */}
      <section
        className="section-light"
        style={{ borderTop: '1px solid var(--border-light-subtle)', position: 'relative', zIndex: 1 }}
        aria-label="About MYSTRIO technology brand"
      >
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2
            style={{
              fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)',
              fontWeight: 800,
              color: 'var(--text-dark)',
              marginBottom: '1.25rem',
            }}
          >
            MYSTRIO Technology &amp; Innovation
          </h2>
          <p
            style={{
              fontSize: '1.05rem',
              color: 'var(--text-muted-light)',
              lineHeight: 1.75,
              marginBottom: '1rem',
            }}
          >
            MYSTRIO is an emerging technology brand from India, focused on creating digital
            solutions that solve everyday problems using modern software and AI. From
            AI-powered booking tools to community-driven sustainability platforms, MYSTRIO
            builds products that are practical, scalable, and designed around real users.
          </p>
          <p
            style={{
              fontSize: '1.05rem',
              color: 'var(--text-muted-light)',
              lineHeight: 1.75,
            }}
          >
            Each MYSTRIO product is engineered with a clear purpose — simplifying a workflow,
            reducing waste, or connecting people more effectively through technology and
            innovation.
          </p>

          {/* Internal navigation links — crawlable by Googlebot */}
          <nav
            aria-label="Quick links to MYSTRIO pages"
            style={{
              marginTop: '2rem',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '0.75rem',
            }}
          >
            <Link
              to="/about"
              style={{
                fontSize: '0.9rem',
                fontWeight: 700,
                color: '#00D8FF',
                textDecoration: 'underline',
                textUnderlineOffset: '3px',
              }}
            >
              About MYSTRIO
            </Link>
            <span style={{ color: 'var(--text-muted-light)' }} aria-hidden="true">·</span>
            <Link
              to="/products"
              style={{
                fontSize: '0.9rem',
                fontWeight: 700,
                color: '#00D8FF',
                textDecoration: 'underline',
                textUnderlineOffset: '3px',
              }}
            >
              Our Products
            </Link>
            <span style={{ color: 'var(--text-muted-light)' }} aria-hidden="true">·</span>
            <Link
              to="/careers"
              style={{
                fontSize: '0.9rem',
                fontWeight: 700,
                color: '#00D8FF',
                textDecoration: 'underline',
                textUnderlineOffset: '3px',
              }}
            >
              Careers
            </Link>
            <span style={{ color: 'var(--text-muted-light)' }} aria-hidden="true">·</span>
            <Link
              to="/blog"
              style={{
                fontSize: '0.9rem',
                fontWeight: 700,
                color: '#00D8FF',
                textDecoration: 'underline',
                textUnderlineOffset: '3px',
              }}
            >
              Blog
            </Link>
            <span style={{ color: 'var(--text-muted-light)' }} aria-hidden="true">·</span>
            <Link
              to="/contact"
              style={{
                fontSize: '0.9rem',
                fontWeight: 700,
                color: '#00D8FF',
                textDecoration: 'underline',
                textUnderlineOffset: '3px',
              }}
            >
              Contact
            </Link>
          </nav>
        </div>
      </section>

      {/* ── 3. PRODUCTS SHOWCASE SECTION ────────────────────────────────── */}
      <section
        id="products"
        className="section-dark"
        style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          position: 'relative',
          zIndex: 1,
        }}
        aria-label="MYSTRIO product ecosystem"
      >
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 4rem auto' }}>
            <div className="badge-pill-orange" style={{ marginBottom: '1.25rem' }} aria-hidden="true">
              <Zap size={14} />
              <span>OUR ECOSYSTEM</span>
            </div>

            <h2
              style={{
                fontSize: 'clamp(2.2rem, 3.5vw, 3rem)',
                fontWeight: 800,
                color: '#FFFFFF',
                marginBottom: '1rem',
              }}
            >
              Crafting Platforms that Simplify Life
            </h2>

            <p style={{ color: 'var(--text-muted-dark)', fontSize: '1.05rem', lineHeight: 1.6 }}>
              From micro-utilities to expansive entertainment hubs, our products address
              modern problems with cutting-edge technology.
            </p>
          </div>

          {/* 2×2 Product Grid */}
          <div className="grid-2" style={{ gap: '2rem' }}>
            {productsData.map((item) => (
              <article key={item.id} className="card-dark" style={{ display: 'flex', flexDirection: 'column' }}>
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '250px',
                    overflow: 'hidden',
                  }}
                >
                  <img
                    src={item.image}
                    alt={`${item.title} — MYSTRIO ${item.category} platform`}
                    loading="lazy"
                    width="600"
                    height="250"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease',
                    }}
                  />
                  <div
                    aria-hidden="true"
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      background:
                        'linear-gradient(to bottom, rgba(16,20,38,0.1), rgba(16,20,38,0.7))',
                    }}
                  />
                  <div style={{ position: 'absolute', top: '1.25rem', right: '1.25rem' }}>
                    <span
                      className={`badge-status ${item.status === 'LIVE' ? 'live' : 'dev'}`}
                      aria-label={`Status: ${item.status}`}
                    >
                      {item.status}
                    </span>
                  </div>
                </div>

                <div
                  style={{
                    padding: '2.25rem',
                    display: 'flex',
                    flexDirection: 'column',
                    flexGrow: 1,
                  }}
                >
                  <h3
                    style={{
                      fontSize: '1.6rem',
                      fontWeight: 800,
                      color: '#FFFFFF',
                      marginBottom: '0.85rem',
                      letterSpacing: '-0.02em',
                    }}
                  >
                    {item.title}
                  </h3>

                  <p
                    style={{
                      color: 'var(--text-muted-dark)',
                      fontSize: '0.975rem',
                      lineHeight: 1.6,
                      marginBottom: '1.75rem',
                      flexGrow: 1,
                    }}
                  >
                    {item.description}
                  </p>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '1rem',
                      flexWrap: 'wrap',
                      marginTop: 'auto',
                    }}
                  >
                    {item.liveUrl ? (
                      <a
                        href={item.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Launch ${item.title} live platform`}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.45rem',
                          color: '#00D8FF',
                          fontWeight: 700,
                          fontSize: '0.95rem',
                          textDecoration: 'none',
                        }}
                      >
                        <span>Launch Platform</span>
                        <ArrowUpRight size={16} />
                      </a>
                    ) : (
                      <button
                        onClick={() => setSelectedProduct(item)}
                        aria-label={`View preview for ${item.title}`}
                        style={{
                          background: 'transparent',
                          border: 'none',
                          padding: 0,
                          cursor: 'pointer',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.45rem',
                          color: '#94A3B8',
                          fontWeight: 700,
                          fontSize: '0.95rem',
                        }}
                      >
                        <span>View Preview</span>
                        <ArrowRight size={16} />
                      </button>
                    )}

                    <Link
                      to={item.path}
                      aria-label={`View details for ${item.title}`}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        color: 'var(--text-muted-dark)',
                        fontWeight: 600,
                        fontSize: '0.875rem',
                        textDecoration: 'none',
                      }}
                    >
                      <span>Details</span>
                      <ChevronRight size={14} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Link to full products page */}
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/products" className="btn btn-outline-dark" style={{ padding: '0.85rem 2rem' }}>
              <span>View All MYSTRIO Products</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 4. MISSION SECTION ──────────────────────────────────────────── */}
      <section
        id="mission"
        className="section-light"
        style={{ position: 'relative', zIndex: 1 }}
        aria-label="MYSTRIO mission and values"
      >
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
            <div
              style={{
                position: 'relative',
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 20px 40px rgba(0,0,0,0.12)',
              }}
            >
              <img
                src={missionImg}
                alt="MYSTRIO team working on technology and innovation"
                loading="lazy"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>

            <div>
              <div className="badge-pill-light" style={{ marginBottom: '1.25rem' }} aria-hidden="true">
                <Compass size={14} />
                <span>OUR MISSION</span>
              </div>

              <h2
                style={{
                  fontSize: 'clamp(2.2rem, 3.5vw, 2.75rem)',
                  fontWeight: 800,
                  color: 'var(--text-dark)',
                  marginBottom: '1.25rem',
                  lineHeight: 1.2,
                }}
              >
                Technology Built to Serve Humanity
              </h2>

              <p
                style={{
                  color: 'var(--text-muted-light)',
                  fontSize: '1.05rem',
                  lineHeight: 1.6,
                  marginBottom: '1.25rem',
                }}
              >
                At MYSTRIO, we believe technology should serve people. Our platforms are
                designed to make everyday experiences smarter, more connected, and highly
                sustainable.
              </p>

              <p
                style={{
                  color: 'var(--text-muted-light)',
                  fontSize: '1.05rem',
                  lineHeight: 1.6,
                  marginBottom: '2.25rem',
                }}
              >
                Whether simplifying local personal care or streamlining complex
                transactions, we engineer user-first digital solutions that create
                meaningful change in community spaces.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {[
                  {
                    heading: 'Ecosystem Sustainability',
                    body: 'Fostering circular sharing cultures and zero-waste initiatives.',
                  },
                  {
                    heading: 'Radical Simplicity',
                    body: 'Reducing workflow friction across fragmented local industries.',
                  },
                  {
                    heading: 'Future-proof Scalability',
                    body: 'Building with modular, state-of-the-art tech stacks.',
                  },
                ].map(({ heading, body }) => (
                  <div
                    key={heading}
                    style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}
                  >
                    <div style={{ color: '#00D8FF', marginTop: '0.2rem' }} aria-hidden="true">
                      <CheckCircle2 size={22} />
                    </div>
                    <div>
                      <h3
                        style={{
                          fontSize: '1.1rem',
                          fontWeight: 800,
                          color: 'var(--text-dark)',
                        }}
                      >
                        {heading}
                      </h3>
                      <p style={{ fontSize: '0.925rem', color: 'var(--text-muted-light)' }}>
                        {body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: '2rem' }}>
                <Link to="/about" className="btn btn-outline-dark" style={{ padding: '0.75rem 1.75rem' }}>
                  <span>Learn More About MYSTRIO</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. KEY METRICS BAR ──────────────────────────────────────────── */}
      <section
        className="section-dark"
        style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          padding: '5rem 0',
          position: 'relative',
          zIndex: 1,
        }}
        aria-label="MYSTRIO at a glance"
      >
        <div className="container">
          <div className="grid-3" style={{ textAlign: 'center', gap: '2.5rem' }}>
            {[
              { value: '4 Products', label: 'ACTIVE PLATFORMS' },
              { value: '3 Founders', label: 'DRIVING INNOVATION' },
              { value: '1 Vision', label: 'UNIFIED STANDARD' },
            ].map(({ value, label }) => (
              <div key={label}>
                <div
                  style={{
                    fontSize: 'clamp(3rem, 4.5vw, 4rem)',
                    fontWeight: 800,
                    color: '#FFFFFF',
                    lineHeight: 1,
                    fontFamily: 'Space Grotesk, sans-serif',
                  }}
                >
                  {value}
                </div>
                <div
                  style={{
                    color: '#00D8FF',
                    fontWeight: 800,
                    fontSize: '0.85rem',
                    letterSpacing: '0.1em',
                    marginTop: '0.85rem',
                    textTransform: 'uppercase',
                  }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>

          <p
            style={{
              textAlign: 'center',
              marginTop: '3rem',
              fontStyle: 'italic',
              color: 'var(--text-muted-dark)',
              fontSize: '1.1rem',
            }}
          >
            "Innovation at every step."
          </p>
        </div>
      </section>

      {/* ── 6. FOUNDERS SECTION ─────────────────────────────────────────── */}
      <section
        id="founders"
        className="section-light"
        style={{ backgroundColor: '#F8F9FA', position: 'relative', zIndex: 1 }}
        aria-label="MYSTRIO founding team"
      >
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 4rem auto' }}>
            <div className="badge-pill-light" style={{ marginBottom: '1.25rem' }} aria-hidden="true">
              <Users size={14} />
              <span>MEET THE FOUNDERS</span>
            </div>

            <h2
              style={{
                fontSize: 'clamp(2.2rem, 3.5vw, 2.75rem)',
                fontWeight: 800,
                color: 'var(--text-dark)',
                marginBottom: '1rem',
              }}
            >
              The Minds Behind MYSTRIO
            </h2>

            <p style={{ color: 'var(--text-muted-light)', fontSize: '1.05rem' }}>
              Building multi-faceted ecosystems requires highly dedicated and unified
              operational leaders.
            </p>
          </div>

          <div className="grid-3" style={{ gap: '2rem' }}>
            {[
              {
                name: 'Atharsh S',
                role: 'CO-FOUNDER',
                bio: 'Technical visionary pushing the frontiers of systems engineering and high-availability design templates across our multiple digital platforms.',
                img: founderAtharshImg,
              },
              {
                name: 'Akash P',
                role: 'CO-FOUNDER',
                bio: 'Focuses on user-interface architectures and human-centric systems, ensuring beautiful spatial design registers exist in our ecosystem products.',
                img: founderAkashImg,
              },
              {
                name: 'Ajay KS',
                role: 'CO-FOUNDER',
                bio: 'A master of product-market integration and growth strategies, translating complex client business matrices into streamlined customer pathways.',
                img: founderAjayImg,
              },
            ].map(({ name, role, bio, img }) => (
              <div
                key={name}
                className="card-light"
                style={{ padding: '2.5rem 2rem', textAlign: 'center' }}
              >
                <div
                  style={{
                    width: '120px',
                    height: '120px',
                    borderRadius: '50%',
                    margin: '0 auto 1.5rem auto',
                    overflow: 'hidden',
                    border: '3px solid #00D8FF',
                    boxShadow: '0 8px 24px rgba(0, 216, 255, 0.25)',
                  }}
                >
                  <img
                    src={img}
                    alt={`${name}, ${role} of MYSTRIO`}
                    loading="lazy"
                    width="120"
                    height="120"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>

                <h3
                  style={{
                    fontSize: '1.4rem',
                    fontWeight: 800,
                    color: 'var(--text-dark)',
                    marginBottom: '0.25rem',
                  }}
                >
                  {name}
                </h3>

                <div
                  style={{
                    color: '#00D8FF',
                    fontWeight: 800,
                    fontSize: '0.8rem',
                    letterSpacing: '0.08em',
                    marginBottom: '1.15rem',
                  }}
                >
                  {role}
                </div>

                <p
                  style={{
                    color: 'var(--text-muted-light)',
                    fontSize: '0.925rem',
                    lineHeight: 1.6,
                  }}
                >
                  {bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. CTA SECTION ──────────────────────────────────────────────── */}
      <section
        id="contact"
        className="section-dark"
        style={{ position: 'relative', zIndex: 1 }}
        aria-label="Contact MYSTRIO"
      >
        <div className="container">
          <div
            className="card-dark"
            style={{
              padding: '4.5rem 2.5rem',
              textAlign: 'center',
              maxWidth: '920px',
              margin: '0 auto',
              borderColor: 'rgba(0, 216, 255, 0.35)',
              background: 'linear-gradient(180deg, #101426 0%, #0A0D18 100%)',
              boxShadow:
                '0 25px 50px -12px rgba(0, 0, 0, 0.6), 0 0 30px rgba(0, 216, 255, 0.15), 0 0 15px rgba(236, 72, 153, 0.1)',
            }}
          >
            <div className="badge-pill-orange" style={{ marginBottom: '1.5rem' }} aria-hidden="true">
              <span>CONNECT WITH US</span>
            </div>

            <h2
              style={{
                fontSize: 'clamp(2.2rem, 3.5vw, 3rem)',
                fontWeight: 800,
                color: '#FFFFFF',
                marginBottom: '1rem',
              }}
            >
              Ready to Build With Us?
            </h2>

            <p
              style={{
                color: 'var(--text-muted-dark)',
                fontSize: '1.1rem',
                maxWidth: '680px',
                margin: '0 auto 2.5rem auto',
                lineHeight: 1.6,
              }}
            >
              Whether you want to partner, invest, or just say hello — we would love to
              hear from you. Let's create the next leap in technology together.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <Link
                to="/contact"
                className="btn btn-orange"
                style={{ padding: '0.95rem 2.5rem', fontSize: '1.05rem' }}
              >
                <span>Get in Touch</span>
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/careers"
                className="btn btn-outline-dark"
                style={{ padding: '0.95rem 2rem' }}
              >
                <span>View Careers</span>
                <ChevronRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Product Detail Demo Modal */}
      <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </>
  );
};
