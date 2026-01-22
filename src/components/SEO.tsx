import { Helmet } from 'react-helmet-async'
import { useI18n } from '@/lib/i18n'

interface SEOProps {
  title?: string
  description?: string
  canonical?: string
  type?: 'website' | 'article'
  image?: string
  noindex?: boolean
  faqItems?: Array<{ question: string; answer: string }>
  serviceName?: string
  serviceDescription?: string
}

const SITE_NAME = 'Novumi'
const DEFAULT_DESCRIPTION = 'Pre-employment screening that bridges traditional investigation with digital security expertise. Background checks, digital analysis, and comprehensive reports.'
const SITE_URL = 'https://novumi.nl'
const DEFAULT_IMAGE = `${SITE_URL}/og-image.svg`

export function SEO({
  title,
  description = DEFAULT_DESCRIPTION,
  canonical,
  type = 'website',
  image = DEFAULT_IMAGE,
  noindex = false,
  faqItems,
  serviceName,
  serviceDescription,
}: SEOProps) {
  const { language } = useI18n()
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} - Pre-employment Screening`
  const url = canonical ? `${SITE_URL}${canonical}` : SITE_URL

  // Organization + LocalBusiness schema
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'LocalBusiness'],
    '@id': `${SITE_URL}/#organization`,
    name: 'Novumi',
    description: 'Pre-employment screening diensten: achtergrondverificatie, strafrechtelijke screening, digitale analyse en OSINT onderzoek.',
    url: SITE_URL,
    logo: `${SITE_URL}/favicon.svg`,
    image: DEFAULT_IMAGE,
    telephone: '+31-20-123-4567',
    email: 'info@novumi.nl',
    priceRange: '€€',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '',
      addressLocality: 'Amsterdam',
      addressRegion: 'Noord-Holland',
      postalCode: '',
      addressCountry: 'NL',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 52.3676,
      longitude: 4.9041,
    },
    areaServed: [
      { '@type': 'Country', name: 'Netherlands' },
      { '@type': 'Country', name: 'Belgium' },
      { '@type': 'Country', name: 'Germany' },
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+31-20-123-4567',
      contactType: 'customer service',
      areaServed: ['NL', 'BE', 'DE', 'EU'],
      availableLanguage: ['Dutch', 'English'],
    },
    sameAs: [
      'https://linkedin.com/company/novumi',
    ],
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '17:30',
    },
  }

  // Service schema
  const serviceSchema = serviceName ? {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    description: serviceDescription || description,
    provider: {
      '@type': 'Organization',
      name: 'Novumi',
      '@id': `${SITE_URL}/#organization`,
    },
    areaServed: {
      '@type': 'Country',
      name: 'Netherlands',
    },
    serviceType: 'Pre-employment Screening',
  } : null

  // FAQ schema
  const faqSchema = faqItems && faqItems.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  } : null

  // BreadcrumbList schema
  const breadcrumbSchema = canonical && canonical !== '/' ? {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: SITE_URL,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: title || 'Page',
        item: url,
      },
    ],
  } : null

  return (
    <Helmet>
      <html lang={language} />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      {/* Hreflang tags for bilingual support */}
      <link rel="alternate" hrefLang="nl" href={url} />
      <link rel="alternate" hrefLang="en" href={url} />
      <link rel="alternate" hrefLang="x-default" href={url} />

      {/* Open Graph */}
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content={language === 'nl' ? 'nl_NL' : 'en_US'} />
      <meta property="og:locale:alternate" content={language === 'nl' ? 'en_US' : 'nl_NL'} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Structured Data - Organization */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>

      {/* Structured Data - Service (if applicable) */}
      {serviceSchema && (
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
      )}

      {/* Structured Data - FAQ (if applicable) */}
      {faqSchema && (
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      )}

      {/* Structured Data - Breadcrumb (if not homepage) */}
      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}
    </Helmet>
  )
}
