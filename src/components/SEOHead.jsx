import { useEffect } from 'react';

export const SEOHead = ({ title, description }) => {
  useEffect(() => {
    const defaultTitle = 'MYSTRIO — Building Technology That Solves Real Problems';
    const defaultDescription = 'MYSTRIO is an emerging technology brand building innovative digital products across AI, software, business technology, entertainment, and social impact.';

    document.title = title ? `${title} | MYSTRIO` : defaultTitle;

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = description || defaultDescription;
  }, [title, description]);

  return null;
};
