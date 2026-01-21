// =====================================================
// SERVICES PAGE CONTENT
// Edit text below to update the services page
// =====================================================

export const servicesContent = {
  hero: {
    headline: 'Comprehensive Screening Services',
    subheadline:
      'Our name comes from the Latin word "novum," meaning new or novel facts. We uncover the relevant information that matters for your decisions, verify what claims to be true, and identify risks that aren\'t immediately visible.',
  },

  services: [
    {
      id: 'background-check',
      icon: 'UserCheck',
      title: 'Background Verification',
      description:
        'Comprehensive verification of employment history, education, and professional credentials.',
      details: [
        'Employment history verification',
        'Education and degree verification',
        'Professional license validation',
        'Reference checks with detailed reporting',
        'Identity verification',
      ],
    },
    {
      id: 'criminal-check',
      icon: 'FileSearch',
      title: 'Criminal Record Screening',
      description:
        'Thorough criminal background checks across multiple jurisdictions and databases.',
      details: [
        'National criminal database search',
        'International criminal records (where available)',
        'Court records verification',
        'Sex offender registry checks',
        'Watchlist and sanctions screening',
      ],
    },
    {
      id: 'digital-footprint',
      icon: 'Globe',
      title: 'Digital Footprint Analysis',
      description:
        'Modern screening that examines online presence and digital behavior patterns.',
      details: [
        'Social media presence review',
        'Public records and media mentions',
        'Professional network analysis',
        'Digital reputation assessment',
        'Data breach exposure check',
      ],
    },
    {
      id: 'financial-check',
      icon: 'Landmark',
      title: 'Financial Background',
      description:
        'Financial integrity verification for positions with fiscal responsibility.',
      details: [
        'Credit history review',
        'Bankruptcy records search',
        'Civil litigation history',
        'Directorships and business interests',
        'Sanctions and politically exposed persons (PEP) screening',
      ],
    },
  ],

  faq: {
    title: 'Frequently Asked Questions',
    items: [
      {
        question: 'How long does a typical screening take?',
        answer:
          'Standard background checks are typically completed within 48-72 hours. More comprehensive screenings, including international verifications, may take 5-7 business days depending on the jurisdictions involved.',
      },
      {
        question: 'What information do you need to start a screening?',
        answer:
          'We require basic candidate information including full name, date of birth, and consent. For more detailed screenings, we may need additional documentation such as previous addresses, education details, and employment history.',
      },
      {
        question: 'Is candidate consent required?',
        answer:
          'Yes, we operate in full compliance with GDPR and local privacy regulations. Candidate consent is required before we begin any screening process. Our platform makes obtaining and managing consent simple and transparent.',
      },
      {
        question: 'Do you offer international screening?',
        answer:
          'Yes, we provide international screening services covering most major jurisdictions. Turnaround times and available checks vary by country. Contact us to discuss your specific international screening needs.',
      },
      {
        question: 'How do you ensure data security?',
        answer:
          'We employ enterprise-grade security measures including encrypted data transmission, secure storage, access controls, and regular security audits. We are fully GDPR compliant and follow industry best practices for data protection.',
      },
    ],
  },

  cta: {
    headline: 'Need a Custom Screening Solution?',
    description:
      'Every organization has unique risk profiles. Let\'s discuss how we can tailor our services to your specific requirements.',
    primaryButton: { text: 'Contact Us', href: '/contact' },
  },
}
