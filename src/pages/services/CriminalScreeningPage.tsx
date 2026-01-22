import { CheckCircle, Shield, Globe, FileWarning, Scale } from 'lucide-react'
import { PageLayout } from '@/components/layout'
import { Container, Button, Card } from '@/components/ui'
import { SEO } from '@/components/SEO'
import { useI18n } from '@/lib/i18n'

export function CriminalScreeningPage() {
  const { language } = useI18n()
  const isNL = language === 'nl'

  const features = [
    {
      icon: Shield,
      title: isNL ? 'VOG verificatie' : 'Criminal record check',
      desc: isNL
        ? 'Hulp bij VOG-aanvragen en controle van bestaande verklaringen.'
        : 'Support with criminal record applications and verification of existing declarations.',
    },
    {
      icon: Globe,
      title: isNL ? 'Internationale checks' : 'International checks',
      desc: isNL
        ? 'Strafrechtelijke screening in meerdere Europese landen en daarbuiten.'
        : 'Criminal screening in multiple European countries and beyond.',
    },
    {
      icon: FileWarning,
      title: isNL ? 'Sanctielijsten' : 'Sanctions lists',
      desc: isNL
        ? 'Check tegen nationale en internationale sanctie- en watchlists.'
        : 'Checks against national and international sanctions and watchlists.',
    },
    {
      icon: Scale,
      title: isNL ? 'Compliance screening' : 'Compliance screening',
      desc: isNL
        ? 'Screening voor gereguleerde sectoren (financieel, zorg, overheid).'
        : 'Screening for regulated sectors (financial, healthcare, government).',
    },
  ]

  const benefits = [
    isNL ? 'Screening in meer dan 100 landen' : 'Screening in 100+ countries worldwide',
    isNL ? 'Kennis van lokale wetgeving en procedures' : 'Knowledge of local legislation and procedures',
    isNL ? 'Voldoet aan AVG en sectorspecifieke regels' : 'Compliant with GDPR and sector-specific regulations',
    isNL ? 'Discrete en vertrouwelijke afhandeling' : 'Discreet and confidential handling',
    isNL ? 'Optie voor doorlopende monitoring' : 'Continuous monitoring option available',
  ]

  return (
    <PageLayout>
      <SEO
        title={isNL ? 'Strafrechtelijke Screening | VOG & Internationale Checks' : 'Criminal Screening | Background & International Checks'}
        description={isNL
          ? 'Strafrechtelijke screening en VOG verificatie voor Nederlandse werkgevers. Internationale checks in 100+ landen. AVG-compliant.'
          : 'Criminal screening and background checks for employers. International checks in 100+ countries. GDPR-compliant.'}
        canonical="/services/criminal-screening"
      />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <Container size="md">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-accent-600 mb-4">
              {isNL ? 'Diensten' : 'Services'}
            </p>
            <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 tracking-tight leading-[1.1]">
              {isNL ? 'Strafrechtelijke Screening' : 'Criminal Screening'}
            </h1>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              {isNL
                ? 'Check van justitiële documentatie en sanctielijsten, in Nederland en internationaal. Voor functies waar integriteit essentieel is.'
                : 'Verification of criminal records and sanctions lists, both domestically and internationally. For positions where integrity is essential.'}
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

      {/* VOG Explanation */}
      <section className="py-16 md:py-24 bg-gray-50">
        <Container size="md">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
              {isNL ? 'VOG vs. uitgebreide screening' : 'Criminal record vs. comprehensive screening'}
            </h2>
            <div className="prose prose-gray">
              <p className="text-gray-600 leading-relaxed">
                {isNL
                  ? 'Een VOG laat alleen zien of iemand relevante strafrechtelijke antecedenten heeft in Nederland. Onze uitgebreide screening gaat verder: internationale checks, sanctielijsten en verificatie in landen waar de kandidaat heeft gewoond of gewerkt.'
                  : 'A criminal record check only shows if someone has relevant criminal history domestically. Our comprehensive criminal screening goes further: international checks, sanctions lists, and verification in countries where the candidate has lived or worked.'}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Features */}
      <section className="py-16 md:py-24">
        <Container>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 text-center mb-12">
            {isNL ? 'Onze screening omvat' : 'Our screening includes'}
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

      {/* Benefits */}
      <section className="py-16 md:py-24 bg-gray-50">
        <Container size="md">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-8">
              {isNL ? 'Waarom Novumi' : 'Why Novumi'}
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
      <section className="py-16 md:py-24">
        <Container size="sm">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
              {isNL ? 'Vraag strafrechtelijke screening aan' : 'Request criminal screening'}
            </h2>
            <p className="mt-4 text-gray-600 max-w-md mx-auto">
              {isNL
                ? 'Bespreek je screeningbehoeften met ons team. We adviseren over de juiste aanpak voor jouw sector.'
                : 'Discuss your screening needs with our team. We advise on the right approach for your sector.'}
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
