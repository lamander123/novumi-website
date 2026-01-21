import { Helmet } from 'react-helmet-async'

interface SEOProps {
  title?: string
  description?: string
  canonical?: string
  type?: 'website' | 'article'
  image?: string
  noindex?: boolean
}

const SITE_NAME = 'Novumi'
const DEFAULT_DESCRIPTION = 'Pre-employment screening that bridges traditional investigation with digital security expertise. Background checks, digital analysis, and comprehensive reports.'
const SITE_URL = 'https://novumi.nl'
const DEFAULT_IMAGE = `${SITE_URL}/og-image.png`

export function SEO({
  title,
  description = DEFAULT_DESCRIPTION,
  canonical,
  type = 'website',
  image = DEFAULT_IMAGE,
  noindex = false,
}: SEOProps) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} - Pre-employment Screening`
  const url = canonical ? `${SITE_URL}${canonical}` : SITE_URL

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Novumi',
    description: DEFAULT_DESCRIPTION,
    url: SITE_URL,
    logo: `${SITE_URL}/favicon.svg`,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+31-20-123-4567',
      contactType: 'customer service',
      areaServed: ['NL', 'EU'],
      availableLanguage: ['Dutch', 'English'],
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Amsterdam',
      addressCountry: 'NL',
    },
    sameAs: [
      'https://linkedin.com/company/novumi',
    ],
  }

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      {/* Open Graph */}
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content="nl_NL" />
      <meta property="og:locale:alternate" content="en_US" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  )
}
