export const PRODUCTS = {
  groomer: {
    id: 'groomer',
    slug: 'groomer',
    path: '/products/groomer',
    name: 'GROOMER',
    icon: '💈',
    tagline: 'AI-Powered Grooming & Booking Platform',
    liveUrl: 'https://groomer-app-steel.vercel.app/',
    shortDescription: 'An AI-powered grooming and booking platform designed to make salon discovery, appointment booking, and hairstyle exploration easier.',
    fullDescription: 'GROOMER redefines the grooming experience by pairing intelligent AI hairstyle recommendations with seamless salon appointment scheduling. Designed for both clients seeking personalized styling advice and salon owners wanting efficient booking workflows.',
    status: 'Live Platform',
    statusBadge: 'Live',
    tags: ['AI', 'Grooming', 'Booking'],
    colorScheme: {
      primary: '#FF5E3A',
      secondary: '#E11D48',
      gradient: 'linear-gradient(135deg, rgba(255, 94, 58, 0.15), rgba(225, 29, 72, 0.15))',
      borderGlow: 'rgba(225, 29, 72, 0.3)',
      textGradient: 'linear-gradient(135deg, #FF5E3A, #E11D48)',
    },
    overview: 'Finding the right look and securing an available slot at a quality salon often involves guesswork and back-and-forth phone calls. GROOMER solves this by combining visual AI models that analyze face shape and hair characteristics with a real-time booking engine that connects clients to verified local grooming professionals.',
    features: [
      {
        title: 'AI Style Exploration',
        description: 'Personalized hairstyle suggestions powered by computer vision and style matching algorithms.',
        icon: 'Sparkles'
      },
      {
        title: 'Instant Slot Booking',
        description: 'Real-time calendar sync for friction-free salon scheduling without double-bookings.',
        icon: 'Calendar'
      },
      {
        title: 'Barber & Salon Discovery',
        description: 'Explore highly rated local salons with verified reviews, portfolios, and transparent pricing.',
        icon: 'MapPin'
      },
      {
        title: 'Automated Reminders',
        description: 'Smart notifications ensuring clients never miss an upcoming grooming session.',
        icon: 'Bell'
      }
    ],
    knownTech: ['React / Vite UI', 'AI Computer Vision Modules', 'Restful Booking API Architecture', 'Tailored Recommendation Engine'],
    developmentPhase: 'Live Platform — Active web deployment with AI styling & booking features.'
  },

  'broker-hub': {
    id: 'broker-hub',
    slug: 'broker-hub',
    path: '/products/broker-hub',
    name: 'BROKER HUB',
    icon: '🤝',
    tagline: 'Digital Broker Platform & Workflow Simplifier',
    liveUrl: 'https://new-brokerhub.vercel.app/',
    shortDescription: 'A digital platform designed to modernize broker-related workflows and simplify interactions between brokers and users.',
    fullDescription: 'BROKER HUB is engineered to eliminate fragmentation in broker ecosystems. By streamlining lead management, document exchanges, and client communication into a unified digital workspace, it empowers brokers to operate faster and build stronger client trust.',
    status: 'Live Platform',
    statusBadge: 'Live',
    tags: ['Digital Platform', 'Business', 'Workflow'],
    colorScheme: {
      primary: '#10B981',
      secondary: '#0EA5E9',
      gradient: 'linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(14, 165, 233, 0.15))',
      borderGlow: 'rgba(16, 185, 129, 0.3)',
      textGradient: 'linear-gradient(135deg, #34D399, #38BDF8)',
    },
    overview: 'Modern brokerage relies heavily on decentralized channels, physical paperwork, and manual follow-ups. BROKER HUB provides a clean digital platform that structures deal pipelines, standardizes communication, and creates transparent interaction touchpoints for clients.',
    features: [
      {
        title: 'Unified Deal Pipeline',
        description: 'Track deals, negotiations, and client interaction histories in a centralized view.',
        icon: 'Kanban'
      },
      {
        title: 'Secure Document Exchange',
        description: 'Simplified, encrypted file sharing for fast compliance and verification.',
        icon: 'ShieldCheck'
      },
      {
        title: 'Client Interaction Hub',
        description: 'Direct messaging and automated updates keeping clients informed at every stage.',
        icon: 'MessageSquare'
      },
      {
        title: 'Performance Analytics',
        description: 'Actionable insights into response times, deal closure speeds, and client satisfaction.',
        icon: 'BarChart3'
      }
    ],
    knownTech: ['Modern Web Architecture', 'Encrypted Document Engine', 'Real-Time Notification Pipeline'],
    developmentPhase: 'Live Platform — Unified digital brokerage platform with deal pipeline and document workflow.'
  },

  foodshare: {
    id: 'foodshare',
    slug: 'foodshare',
    path: '/products/foodshare',
    name: 'FOODSHARE',
    icon: '🍱',
    tagline: 'Food Redistribution & Social Impact Network',
    liveUrl: 'https://food-donation-app-ten.vercel.app/',
    shortDescription: 'A digital platform focused on connecting food availability with people who need it while encouraging responsible food sharing and reducing unnecessary waste.',
    fullDescription: 'FOODSHARE leverages technology to address food surplus. By connecting food providers, events, restaurants, and individuals with local community networks, FOODSHARE turns excess food into community nourishment.',
    status: 'Live Platform',
    statusBadge: 'Live',
    tags: ['Food', 'Community', 'Social Impact'],
    colorScheme: {
      primary: '#22C55E',
      secondary: '#EAB308',
      gradient: 'linear-gradient(135deg, rgba(34, 197, 94, 0.15), rgba(234, 179, 8, 0.15))',
      borderGlow: 'rgba(34, 197, 94, 0.3)',
      textGradient: 'linear-gradient(135deg, #4ADE80, #FACC15)',
    },
    overview: 'Tonnes of quality edible food are discarded daily while communities face food insecurity. FOODSHARE acts as an intelligent redistribution hub where surplus food listings can be published, claimed, and picked up rapidly before spoilage.',
    features: [
      {
        title: 'Instant Surplus Listing',
        description: 'Publish excess food details in seconds with geotagged pickup coordinates.',
        icon: 'PlusCircle'
      },
      {
        title: 'Real-Time Proximity Alert',
        description: 'Notify nearby community groups, volunteers, and users when surplus is available.',
        icon: 'Navigation'
      },
      {
        title: 'Impact Counter',
        description: 'Quantify kilograms of food saved and estimated CO2 reduction per neighborhood.',
        icon: 'Leaf'
      },
      {
        title: 'Community Trust Verification',
        description: 'Safety protocols and user ratings to ensure hygienic and reliable sharing.',
        icon: 'CheckCircle2'
      }
    ],
    knownTech: ['Geospatial Mapping Utilities', 'Real-Time Alert Dispatcher', 'Impact Calculation Metrics'],
    developmentPhase: 'Live Platform — Food donation network connecting donors with local communities.'
  },

  remix: {
    id: 'remix',
    slug: 'remix',
    path: '/products/remix',
    name: 'REMIX',
    icon: '🎬',
    tagline: 'Digital Entertainment & Media Streaming Platform',
    liveUrl: null,
    shortDescription: 'A digital streaming platform concept focused on delivering engaging entertainment and modern content experiences.',
    fullDescription: 'REMIX reimagines digital content streaming by merging fluid media playback with interactive audience engagement. Built for modern digital consumers who value discoverability, speed, and immersive media formats.',
    status: 'In Development',
    statusBadge: 'In Development',
    tags: ['Streaming', 'Entertainment', 'Media'],
    colorScheme: {
      primary: '#7C3AED',
      secondary: '#EC4899',
      gradient: 'linear-gradient(135deg, rgba(124, 58, 237, 0.15), rgba(236, 72, 153, 0.15))',
      borderGlow: 'rgba(124, 58, 237, 0.3)',
      textGradient: 'linear-gradient(135deg, #A78BFA, #F472B6)',
    },
    overview: 'As entertainment shifts toward interactive and multi-format experiences, REMIX explores new ways to showcase audio-visual media, creator highlights, and dynamic content playlists in a slick, high-performance web environment.',
    features: [
      {
        title: 'Adaptive Media Playback',
        description: 'High-definition playback optimized for fast load times and minimal buffering.',
        icon: 'Play'
      },
      {
        title: 'Curated Content Streams',
        description: 'Algorithmic and editorially curated feeds tailored to individual tastes.',
        icon: 'Layers'
      },
      {
        title: 'Interactive Engagement',
        description: 'Real-time viewer reactions, timestamped highlights, and playlist creation.',
        icon: 'Zap'
      },
      {
        title: 'Multi-Device Optimization',
        description: 'Responsive canvas that scales fluidly from smartphone screens to large displays.',
        icon: 'Monitor'
      }
    ],
    knownTech: ['Modern Streaming Protocols', 'Adaptive Media Renderers', 'High-Performance UI Engine'],
    developmentPhase: 'In Development — Concept validation and media player UI prototyping.'
  }
};

export const PRODUCT_LIST = Object.values(PRODUCTS);
