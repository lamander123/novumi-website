// =====================================================
// HOME PAGE CONTENT
// Edit text below to update the home page
// =====================================================

export const homeContent = {
  hero: {
    tagline:
      'In a world where credentials can be fabricated and histories hidden, you need someone who can find the truth.',
    primaryCTA: { text: 'Get Started', href: '/contact' },
    secondaryCTA: { text: 'Learn More', href: '/services' },
  },

  trustBar: [
    {
      icon: 'ShieldCheck',
      title: 'Verified',
      description: 'Every claim checked against authoritative sources',
    },
    {
      icon: 'Lock',
      title: 'Secure',
      description: 'GDPR compliant with enterprise-grade security',
    },
    {
      icon: 'Zap',
      title: 'Fast',
      description: 'Results delivered within 48-72 hours',
    },
  ],

  features: [
    {
      title: 'Background verification that goes deeper',
      description:
        'Standard checks miss what matters. We verify employment history, education credentials, and professional licenses against primary sources—not just databases.',
      icon: 'Search',
      highlights: [
        'Direct verification with institutions',
        'International credential checks',
        'Professional license validation',
      ],
    },
    {
      title: 'Digital footprint analysis',
      description:
        'Risk today exists online. We examine social media presence, public records, and digital behavior patterns to reveal what traditional screening misses.',
      icon: 'Globe',
      highlights: [
        'Social media review',
        'Data breach exposure check',
        'Online reputation assessment',
      ],
    },
    {
      title: 'Clear, actionable reports',
      description:
        'No jargon, no guesswork. Our reports give you the complete picture with clear findings and risk assessments you can act on.',
      icon: 'FileText',
      highlights: [
        'Executive summary with key findings',
        'Risk indicators highlighted',
        'Supporting documentation included',
      ],
    },
  ],

  cta: {
    headline: 'Ready to make confident hiring decisions?',
    description:
      'Get started with Novumi and discover the truth behind every candidate.',
    primaryButton: { text: 'Contact Us', href: '/contact' },
    secondaryButton: { text: 'View Services', href: '/services' },
  },
}
