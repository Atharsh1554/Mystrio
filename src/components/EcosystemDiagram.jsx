import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PRODUCT_LIST } from '../data/productsData';
import { ArrowRight } from 'lucide-react';

export const EcosystemDiagram = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div style={{ position: 'relative', width: '100%', margin: '1rem 0' }}>
      <div
        className="card-elevated"
        style={{
          position: 'relative',
          padding: '2.5rem 2rem',
          border: '1px solid var(--border-default)',
          overflow: 'hidden',
        }}
      >
        {/* Central Brand Node */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.75rem 1.75rem',
              borderRadius: '10px',
              background: 'var(--purple-glow)',
              border: '1px solid rgba(124, 58, 237, 0.3)',
            }}
          >
            <img src="/favicon.svg" alt="MYSTRIO" style={{ width: '22px', height: '22px' }} />
            <span
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.1rem',
                fontWeight: 700,
                color: '#FFFFFF',
              }}
            >
              MYSTRIO
            </span>
          </div>
          <div
            style={{
              fontSize: '0.7rem',
              fontWeight: 600,
              color: 'var(--purple-300)',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              marginTop: '0.5rem',
            }}
          >
            Parent Technology Brand
          </div>
        </div>

        {/* Connector */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
          <div
            style={{
              width: '1px',
              height: '30px',
              background: 'linear-gradient(180deg, var(--purple-500), rgba(124, 58, 237, 0.2))',
            }}
          />
        </div>

        {/* Product Nodes */}
        <div className="grid-4" style={{ gap: '1rem' }}>
          {PRODUCT_LIST.map((prod) => {
            const isHovered = hoveredId === prod.id;
            return (
              <Link
                key={prod.id}
                to={prod.path}
                onMouseEnter={() => setHoveredId(prod.id)}
                onMouseLeave={() => setHoveredId(null)}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '1.15rem',
                  borderRadius: '10px',
                  background: isHovered ? 'var(--bg-card-hover)' : 'var(--bg-card)',
                  border: `1px solid ${isHovered ? 'var(--border-active)' : 'var(--border-default)'}`,
                  transition: 'all 0.2s ease',
                  textDecoration: 'none',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.65rem' }}>
                  <span style={{ fontSize: '1.4rem' }}>{prod.icon}</span>
                  <span
                    className={`status-badge ${prod.status === 'Prototype / Active Development' ? 'prototype' : 'in-development'}`}
                    style={{ fontSize: '0.6rem' }}
                  >
                    {prod.statusBadge}
                  </span>
                </div>

                <h4 style={{
                  color: '#FFFFFF',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  marginBottom: '0.3rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                  {prod.name}
                  <ArrowRight
                    size={13}
                    style={{
                      transform: isHovered ? 'translateX(2px)' : 'translateX(0)',
                      transition: 'transform 0.2s ease',
                      color: 'var(--purple-400)',
                    }}
                  />
                </h4>

                <p style={{
                  fontSize: '0.78rem',
                  color: 'var(--text-muted)',
                  lineHeight: 1.4,
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                }}>
                  {prod.shortDescription}
                </p>
              </Link>
            );
          })}
        </div>

        {/* Footer */}
        <div style={{
          marginTop: '2rem',
          textAlign: 'center',
          fontSize: '0.825rem',
          color: 'var(--text-muted)',
          maxWidth: '540px',
          margin: '2rem auto 0 auto',
          paddingTop: '1.25rem',
          borderTop: '1px solid var(--border-default)',
        }}>
          Each MYSTRIO product targets a different problem and audience — united by our commitment to meaningful technology.
        </div>
      </div>
    </div>
  );
};
