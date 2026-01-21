import { UserSearch, Scale, Monitor, Landmark } from 'lucide-react'
import { PageLayout } from '@/components/layout'
import { Container, Button, Card } from '@/components/ui'
import { SEO } from '@/components/SEO'
import { useI18n } from '@/lib/i18n'

export function ServicesPage() {
  const { t, language } = useI18n()

  const services = [
    {
      icon: UserSearch,
      titleKey: 'services.background.title',
      descKey: 'services.background.desc',
      features: language === 'nl'
        ? ['Werkervaring verificatie', 'Opleidingscheck', 'Professionele referenties']
        : ['Employment verification', 'Education check', 'Professional references'],
    },
    {
      icon: Scale,
      titleKey: 'services.criminal.title',
      descKey: 'services.criminal.desc',
      features: language === 'nl'
        ? ['VOG-verificatie', 'Internationale checks', 'Sanctielijsten']
        : ['Criminal record check', 'International checks', 'Sanctions lists'],
    },
    {
      icon: Monitor,
      titleKey: 'services.digital.title',
      descKey: 'services.digital.desc',
      features: language === 'nl'
        ? ['Social media analyse', 'Online reputatie', 'Digitale voetafdruk']
        : ['Social media analysis', 'Online reputation', 'Digital footprint'],
    },
    {
      icon: Landmark,
      titleKey: 'services.financial.title',
      descKey: 'services.financial.desc',
      features: language === 'nl'
        ? ['Kredietcontrole', 'Faillissementscheck', 'Integriteitstoets']
        : ['Credit check', 'Bankruptcy check', 'Integrity assessment'],
    },
  ]

  return (
    <PageLayout>
      <SEO
        title={language === 'nl' ? 'Diensten' : 'Services'}
        description={t('services.hero.subtitle')}
        canonical="/services"
      />

      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28">
        <Container size="md">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 tracking-tight leading-[1.1]">
              {t('services.hero.title')}
            </h1>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              {t('services.hero.subtitle')}
            </p>
            <div className="mt-8">
              <Button variant="primary" size="lg" href="/contact">
                {t('cta.button')}
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-28 bg-gray-50">
        <Container>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {services.map(({ icon: Icon, titleKey, descKey, features }, i) => (
              <Card key={i} padding="lg">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Icon className="w-5 h-5 text-gray-400 mt-0.5" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {t(titleKey)}
                    </h3>
                    <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                      {t(descKey)}
                    </p>
                    <ul className="mt-4 space-y-1.5">
                      {features.map((feature, j) => (
                        <li key={j} className="text-sm text-gray-500 flex items-center gap-2">
                          <span className="w-1 h-1 bg-gray-300 rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Process overview */}
      <section className="py-20 md:py-28">
        <Container size="md">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 text-center mb-4">
              {language === 'nl' ? 'Hoe we werken' : 'How we work'}
            </h2>
            <p className="text-gray-600 text-center mb-12">
              {language === 'nl'
                ? 'Elk onderzoek doorloopt hetzelfde grondige proces, afgestemd op uw specifieke eisen.'
                : 'Every investigation follows the same thorough process, tailored to your specific requirements.'}
            </p>

            <div className="space-y-8">
              {[
                {
                  step: '01',
                  title: language === 'nl' ? 'Intake & toestemming' : 'Intake & consent',
                  desc: language === 'nl'
                    ? 'U dient een aanvraag in via ons portaal. Wij regelen de AVG-conforme toestemmingsverklaring met de kandidaat.'
                    : 'You submit a request via our portal. We handle the GDPR-compliant consent process with the candidate.',
                },
                {
                  step: '02',
                  title: language === 'nl' ? 'Verificatie bij bronnen' : 'Source verification',
                  desc: language === 'nl'
                    ? 'Ons team contacteert vorige werkgevers, opleidingsinstellingen en beroepsregisters. Geen databases—echte verificatie.'
                    : 'Our team contacts previous employers, educational institutions, and professional registers. No databases—real verification.',
                },
                {
                  step: '03',
                  title: language === 'nl' ? 'Digitale analyse' : 'Digital analysis',
                  desc: language === 'nl'
                    ? 'We analyseren online aanwezigheid, sociale media en openbare bronnen voor een compleet beeld.'
                    : 'We analyze online presence, social media, and public sources for a complete picture.',
                },
                {
                  step: '04',
                  title: language === 'nl' ? 'Rapport & advies' : 'Report & advice',
                  desc: language === 'nl'
                    ? 'U ontvangt een helder rapport met bevindingen, risico-indicatoren en aanbevelingen. Binnen 48-72 uur.'
                    : 'You receive a clear report with findings, risk indicators, and recommendations. Within 48-72 hours.',
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                    <span className="text-sm font-medium text-gray-500">{item.step}</span>
                  </div>
                  <div className="pt-1.5">
                    <h3 className="font-semibold text-gray-900">{item.title}</h3>
                    <p className="mt-1 text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-gray-50">
        <Container size="sm">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
              {t('services.cta.title')}
            </h2>
            <p className="mt-4 text-gray-600 max-w-md mx-auto">
              {t('services.cta.desc')}
            </p>
            <div className="mt-8">
              <Button variant="primary" size="lg" href="/contact">
                {t('cta.button')}
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </PageLayout>
  )
}
