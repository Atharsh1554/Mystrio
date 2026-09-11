import { useEffect } from 'react';

const BASE_URL = 'https://mystrio.vercel.app';
const DEFAULT_IMAGE = `${BASE_URL}/logo_full.png`;
const SITE_NAME = 'MYSTRIO';

const DEFAULT_TITLE = 'MYSTRIO | Technology & Innovation';
const DEFAULT_DESCRIPTION =
  'MYSTRIO is an emerging technology brand focused on building innovative digital solutions using AI, software and modern technology.';

/**
 * SEOHead — manages all per-page <head> SEO tags via DOM manipulation.
 *
 * Props:
 *   title         — page title string (will be used as-is, no suffix appended)
 *   description   — meta description
 *   canonical     — canonical URL path, e.g. "/about" (base URL prepended automatically)
 *                   Pass full URL starting with "https://" to use it verbatim.
 *   ogImage       — absolute OG image URL (defaults to logo)
 *   ogType        — og:type value (defaults to "website")
 *   noindex       — set true to add noindex (should only be used for truly private pages)
 *   jsonLd        — array of JSON-LD objects to inject as <script type="application/ld+json">
 */
export const SEOHead = ({
  title,
  description,
  canonical,
  ogImage,
  ogType = 'website',
  noindex = false,
  jsonLd,
}) => {
  useEffect(() => {
    const resolvedTitle = title || DEFAULT_TITLE;
    const resolvedDescription = description || DEFAULT_DESCRIPTION;
    const resolvedImage = ogImage || DEFAULT_IMAGE;

    // Resolve canonical URL
    let canonicalUrl = `${BASE_URL}/`;
    if (canonical) {
      canonicalUrl = canonical.startsWith('https://')
        ? canonical
        : `${BASE_URL}${canonical.startsWith('/') ? canonical : `/${canonical}`}`;
    }

    // ── Document title ──────────────────────────────────────────────────────
    document.title = resolvedTitle;

    // ── Helper: get or create a <meta> tag ──────────────────────────────────
    const setMeta = (selector, attrKey, attrValue, contentValue) => {
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attrKey, attrValue);
        document.head.appendChild(el);
      }
      el.setAttribute('content', contentValue);
    };

    // ── Helper: get or create a <link> tag ──────────────────────────────────
    const setLink = (rel, href) => {
      let el = document.querySelector(`link[rel="${rel}"]`);
      if (!el) {
        el = document.createElement('link');
        el.setAttribute('rel', rel);
        document.head.appendChild(el);
      }
      el.setAttribute('href', href);
    };

    // ── Primary meta ────────────────────────────────────────────────────────
    setMeta('meta[name="description"]', 'name', 'description', resolvedDescription);
    setMeta(
      'meta[name="robots"]',
      'name',
      'robots',
      noindex ? 'noindex, nofollow' : 'index, follow'
    );

    // ── Canonical ───────────────────────────────────────────────────────────
    setLink('canonical', canonicalUrl);

    // ── Open Graph ──────────────────────────────────────────────────────────
    setMeta('meta[property="og:type"]', 'property', 'og:type', ogType);
    setMeta('meta[property="og:site_name"]', 'property', 'og:site_name', SITE_NAME);
    setMeta('meta[property="og:title"]', 'property', 'og:title', resolvedTitle);
    setMeta('meta[property="og:description"]', 'property', 'og:description', resolvedDescription);
    setMeta('meta[property="og:url"]', 'property', 'og:url', canonicalUrl);
    setMeta('meta[property="og:image"]', 'property', 'og:image', resolvedImage);
    setMeta('meta[property="og:image:alt"]', 'property', 'og:image:alt', resolvedTitle);
    setMeta('meta[property="og:locale"]', 'property', 'og:locale', 'en_US');

    // ── Twitter / X Card ────────────────────────────────────────────────────
    setMeta('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
    setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', resolvedTitle);
    setMeta(
      'meta[name="twitter:description"]',
      'name',
      'twitter:description',
      resolvedDescription
    );
    setMeta('meta[name="twitter:image"]', 'name', 'twitter:image', resolvedImage);
    setMeta('meta[name="twitter:image:alt"]', 'name', 'twitter:image:alt', resolvedTitle);

    // ── JSON-LD structured data ──────────────────────────────────────────────
    // Remove any previously injected per-page JSON-LD scripts
    document
      .querySelectorAll('script[data-seohead="true"]')
      .forEach((el) => el.remove());

    if (jsonLd && jsonLd.length > 0) {
      jsonLd.forEach((schema) => {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.setAttribute('data-seohead', 'true');
        script.textContent = JSON.stringify(schema);
        document.head.appendChild(script);
      });
    }
  }, [title, description, canonical, ogImage, ogType, noindex, jsonLd]);

  return null;
};
