import { UserSearch, Scale, Monitor, Landmark, Fingerprint, Users, Activity } from 'lucide-react'
import { PageLayout } from '@/components/layout'
import { Container, Button, Card } from '@/components/ui'
import { SEO } from '@/components/SEO'
import { useI18n } from '@/lib/i18n'

export function ServicesPage() {
  const { t, language } = useI18n()
  const isNL = language === 'nl'

  const services = [
    { icon: UserSearch, titleKey: 'services.background.title', descKey: 'services.background.desc' },
    { icon: Scale, titleKey: 'services.criminal.title', descKey: 'services.criminal.desc' },
    { icon: Monitor, titleKey: 'services.digital.title', descKey: 'services.digital.desc' },
    { icon: Landmark, titleKey: 'services.financial.title', descKey: 'services.financial.desc' },
  ]

  const differentiators = [
    {
      icon: Fingerprint,
      title: 'OSINT Expertise',
      desc: isNL
        ? 'Wij combineren traditioneel onderzoek met digitale intelligence tools voor een compleet beeld.'
        : 'We combine traditional investigation with digital intelligence tools for a complete picture.',
    },
    {
      icon: Users,
      title: isNL ? 'Kandidaat Portaal' : 'Candidate Portal',
      desc: isNL
        ? 'Kandidaten kunnen veilig hun eigen documenten en informatie aanleveren.'
        : 'Candidates can securely submit their own documents and information.',
    },
    {
      icon: Activity,
      title: 'Real-time Tracking',
      desc: isNL
        ? 'Volg de voortgang van elke screening live via ons klantenportaal.'
        : 'Track the progress of every screening live through our client portal.',
    },
  ]

  return (
    <PageLayout>
      <SEO
        title={isNL ? 'Diensten' : 'Services'}
        description={isNL
          ? 'Uitgebreide pre-employment screening diensten: achtergrondverificatie, strafrechtelijk onderzoek, digitale analyse en financieel onderzoek.'
          : 'Comprehensive pre-employment screening services: background verification, criminal screening, digital analysis, and financial background checks.'}
        canonical="/services"
      />
      {/* Hero */}
      <section className="pt-24 pb-16 lg:pt-32 lg:pb-20 bg-gradient-to-b from-neutral-50 to-white">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-heading font-bold text-primary-900 leading-tight">
              {t('services.hero.title')}
            </h1>
            <p className="mt-6 text-xl text-neutral-600 leading-relaxed">
              {t('services.hero.subtitle')}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button variant="primary" size="lg" href="/contact">
                {t('cta.button')}
              </Button>
              <Button variant="secondary" size="lg" href="/contact">
                {t('hero.cta.demo')}
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-28">
        <Container>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map(({ icon: Icon, titleKey, descKey }, i) => (
              <Card key={i} padding="lg" className="border border-neutral-200">
                <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-accent-600" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-primary-900">
                  {t(titleKey)}
                </h3>
                <p className="mt-3 text-neutral-600">
                  {t(descKey)}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* What makes us different */}
      <section className="py-20 lg:py-28 bg-neutral-50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary-900 text-center mb-12">
              {isNL ? 'Wat ons anders maakt' : 'What makes us different'}
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {differentiators.map((item, i) => (
                <Card key={i} padding="lg" className="text-center">
                  <div className="w-14 h-14 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-7 h-7 text-accent-600" />
                  </div>
                  <h3 className="font-heading font-semibold text-primary-900">{item.title}</h3>
                  <p className="mt-2 text-neutral-600 text-sm">{item.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-primary-900">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-white">
              {t('services.cta.title')}
            </h2>
            <p className="mt-4 text-lg text-primary-200">
              {t('services.cta.desc')}
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <Button variant="accent" size="lg" href="/contact">
                {t('cta.button')}
              </Button>
              <Button
                variant="ghost"
                size="lg"
                href="/contact"
                className="text-white border border-white/30 hover:bg-white/10"
              >
                {t('hero.cta.demo')}
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </PageLayout>
  )
}
