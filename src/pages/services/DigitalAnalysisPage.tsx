import { CheckCircle, Globe, Search, AlertTriangle, Eye } from 'lucide-react'
import { PageLayout } from '@/components/layout'
import { Container, Button, Card } from '@/components/ui'
import { SEO } from '@/components/SEO'
import { useI18n } from '@/lib/i18n'

export function DigitalAnalysisPage() {
  const { language } = useI18n()
  const isNL = language === 'nl'

  const features = [
    {
      icon: Globe,
      title: isNL ? 'Social media analyse' : 'Social media analysis',
      desc: isNL
        ? 'Onderzoek van openbare social media profielen en online activiteiten.'
        : 'Investigation of public social media profiles and online activities.',
    },
    {
      icon: Search,
      title: isNL ? 'Openbare bronnen' : 'Public records',
      desc: isNL
        ? 'Analyse van nieuwsartikelen, persberichten en openbare registers.'
        : 'Analysis of news articles, press releases, and publicly accessible registers.',
    },
    {
      icon: AlertTriangle,
      title: isNL ? 'Reputatierisico\'s' : 'Reputation risks',
      desc: isNL
        ? 'Signalering van mogelijke reputatierisico\'s en controverses.'
        : 'Identification of potential reputation risks and controversies.',
    },
    {
      icon: Eye,
      title: isNL ? 'Digitale voetafdruk' : 'Digital footprint',
      desc: isNL
        ? 'Compleet overzicht van iemands online aanwezigheid en activiteiten.'
        : 'Complete overview of someone\'s online presence and activities.',
    },
  ]

  const benefits = [
    isNL ? 'OSINT-expertise van ervaren onderzoekers' : 'OSINT expertise from experienced investigators',
    isNL ? 'Vind wat traditionele screening mist' : 'Discover what traditional screening misses',
    isNL ? 'AVG-compliant: alleen openbare bronnen' : 'GDPR-compliant: only public sources',
    isNL ? 'Duidelijk rapport met bronvermelding' : 'Structured report with source references',
    isNL ? 'Te combineren met andere screeningdiensten' : 'Can be combined with other screening services',
  ]

  return (
    <PageLayout>
      <SEO
        title={isNL ? 'Digitale Analyse & OSINT | Online Achtergrondonderzoek' : 'Digital Analysis & OSINT | Online Background Investigation'}
        description={isNL
          ? 'OSINT en digitale analyse voor pre-employment screening. Social media onderzoek, reputatie analyse en digitale voetafdruk. AVG-compliant.'
          : 'OSINT and digital analysis for pre-employment screening. Social media research, reputation analysis, and digital footprint. GDPR-compliant.'}
        canonical="/services/digital-analysis"
      />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <Container size="md">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-accent-600 mb-4">
              {isNL ? 'Diensten' : 'Services'}
            </p>
            <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 tracking-tight leading-[1.1]">
              {isNL ? 'Digitale Analyse' : 'Digital Analysis'}
            </h1>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              {isNL
                ? 'OSINT-onderzoek naar online aanwezigheid, reputatie en digitale risico\'s. We vinden wat traditionele screening mist—binnen de grenzen van de AVG.'
                : 'OSINT investigation into online presence, reputation, and digital risks. We find what traditional screening misses—within GDPR boundaries.'}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button variant="primary" size="lg" href="/contact">
                {isNL ? 'Offerte aanvragen' : 'Request quote'}
              </Button>
              <Button variant="secondary" size="lg" href="/services">
                {isNL ? 'Alle diensten' : 'All services'}
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* What is OSINT */}
      <section className="py-16 md:py-24 bg-gray-50">
        <Container size="md">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
              {isNL ? 'Wat is OSINT?' : 'What is OSINT?'}
            </h2>
            <div className="prose prose-gray">
              <p className="text-gray-600 leading-relaxed">
                {isNL
                  ? 'OSINT (Open Source Intelligence) is het verzamelen en analyseren van informatie uit openbare bronnen. Denk aan sociale media, nieuwsartikelen, openbare registers en andere online bronnen. Onze OSINT-specialisten gebruiken slimme technieken om een compleet beeld te krijgen van iemands digitale aanwezigheid.'
                  : 'OSINT (Open Source Intelligence) is the collection and analysis of information from publicly available sources. This includes social media, news articles, public registers, and other online sources. Our OSINT specialists use advanced techniques to get a complete picture of someone\'s digital presence.'}
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                {isNL
                  ? 'Belangrijk: we onderzoeken alleen openbaar toegankelijke informatie. Geen hacking, geen toegang tot privé-accounts. Volledig AVG-compliant.'
                  : 'Important: we only investigate publicly accessible information. No hacking, no access to private accounts. Fully GDPR-compliant.'}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Features */}
      <section className="py-16 md:py-24">
        <Container>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 text-center mb-12">
            {isNL ? 'Wat wij onderzoeken' : 'What we investigate'}
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {features.map((feature, i) => (
              <Card key={i} padding="lg">
                <div className="flex gap-4">
                  <feature.icon className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                  <div>
                    <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                    <p className="mt-2 text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Use cases */}
      <section className="py-16 md:py-24 bg-gray-50">
        <Container size="md">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-8">
            {isNL ? 'Wanneer digitale analyse?' : 'When digital analysis?'}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                {isNL ? 'Leidinggevende functies' : 'Leadership positions'}
              </h3>
              <p className="text-gray-600 text-sm">
                {isNL
                  ? 'Executives en managers die het bedrijf naar buiten toe vertegenwoordigen.'
                  : 'Executives and managers who represent the company externally.'}
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                {isNL ? 'Klantgerichte functies' : 'Public-facing roles'}
              </h3>
              <p className="text-gray-600 text-sm">
                {isNL
                  ? 'Medewerkers met veel klant- of mediacontact.'
                  : 'Employees who interact with customers or media.'}
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                {isNL ? 'Vertrouwensfuncties' : 'Positions of trust'}
              </h3>
              <p className="text-gray-600 text-sm">
                {isNL
                  ? 'Functies met toegang tot gevoelige informatie of systemen.'
                  : 'Positions with access to sensitive information or systems.'}
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                {isNL ? 'Due diligence' : 'Due diligence'}
              </h3>
              <p className="text-gray-600 text-sm">
                {isNL
                  ? 'Onderzoek bij overnames, samenwerkingen of investeringen.'
                  : 'Investigation for acquisitions, partnerships, or investments.'}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-24">
        <Container size="md">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-8">
              {isNL ? 'Voordelen van Novumi OSINT' : 'Benefits of Novumi OSINT'}
            </h2>
            <ul className="space-y-4">
              {benefits.map((benefit, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gray-50">
        <Container size="sm">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
              {isNL ? 'Start met digitale analyse' : 'Start with digital analysis'}
            </h2>
            <p className="mt-4 text-gray-600 max-w-md mx-auto">
              {isNL
                ? 'Ontdek wat online te vinden is over je kandidaten. Neem contact op voor meer informatie.'
                : 'Discover what can be found online about your candidates. Contact us for more information.'}
            </p>
            <div className="mt-8">
              <Button variant="primary" size="lg" href="/contact">
                {isNL ? 'Neem contact op' : 'Get in touch'}
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </PageLayout>
  )
}
