import { Eye, Lock, Zap } from 'lucide-react'
import { PageLayout } from '@/components/layout'
import { Container, Button, Card } from '@/components/ui'
import { SEO } from '@/components/SEO'
import { useI18n } from '@/lib/i18n'

export function AboutPage() {
  const { t, language } = useI18n()

  const values = [
    { icon: Eye, titleKey: 'about.value1.title', descKey: 'about.value1.desc' },
    { icon: Lock, titleKey: 'about.value2.title', descKey: 'about.value2.desc' },
    { icon: Zap, titleKey: 'about.value3.title', descKey: 'about.value3.desc' },
  ]

  return (
    <PageLayout>
      <SEO
        title={language === 'nl' ? 'Over Ons' : 'About Us'}
        description={t('about.hero.subtitle')}
        canonical="/about"
      />

      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28">
        <Container size="md">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 tracking-tight leading-[1.1]">
              {t('about.hero.title')}
            </h1>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              {t('about.hero.subtitle')}
            </p>
          </div>
        </Container>
      </section>

      {/* Story */}
      <section className="py-20 md:py-28 bg-gray-50">
        <Container size="md">
          <div className="max-w-3xl">
            <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-4">
              {t('about.story.title')}
            </h2>
            <div className="space-y-6">
              <p className="text-gray-900 text-lg leading-relaxed">
                {t('about.story.p1')}
              </p>
              <p className="text-gray-600 leading-relaxed">
                {t('about.story.p2')}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Approach */}
      <section className="py-20 md:py-28">
        <Container size="md">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20">
            <div>
              <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-4">
                {language === 'nl' ? 'Traditioneel onderzoek' : 'Traditional investigation'}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {language === 'nl'
                  ? 'Wij bellen vorige werkgevers. Contacteren opleidingsinstellingen. Verifiëren licenties bij beroepsregisters. Dit kost tijd, maar levert informatie op die databases niet bevatten.'
                  : 'We call previous employers. Contact educational institutions. Verify licenses at professional registers. This takes time, but delivers information that databases don\'t contain.'}
              </p>
            </div>
            <div>
              <h2 className="text-sm font-medium text-accent-600 uppercase tracking-wide mb-4">
                {language === 'nl' ? 'Digitale intelligence' : 'Digital intelligence'}
              </h2>
              <p className="text-gray-900 font-medium leading-relaxed">
                {language === 'nl'
                  ? 'Wij analyseren wat online te vinden is over een kandidaat. Sociale media, openbare registers, nieuwsartikelen. Een complete digitale voetafdruk—binnen de grenzen van de AVG.'
                  : 'We analyze what can be found online about a candidate. Social media, public records, news articles. A complete digital footprint—within GDPR boundaries.'}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 bg-gray-50">
        <Container>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 text-center mb-16">
            {t('about.values.title')}
          </h2>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {values.map(({ icon: Icon, titleKey, descKey }, i) => (
              <Card key={i} padding="lg">
                <div className="flex gap-4">
                  <Icon className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {t(titleKey)}
                    </h3>
                    <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                      {t(descKey)}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Trust */}
      <section className="py-20 md:py-28">
        <Container size="md">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
              {language === 'nl' ? 'Vertrouwen & compliance' : 'Trust & compliance'}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              {language === 'nl'
                ? 'Wij verwerken gevoelige informatie. Daarom nemen we privacy en beveiliging serieus. Al onze processen zijn AVG-compliant, data blijft binnen de EU, en we hanteren strikte toegangscontroles.'
                : 'We process sensitive information. That\'s why we take privacy and security seriously. All our processes are GDPR-compliant, data stays within the EU, and we maintain strict access controls.'}
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              <div className="text-center">
                <p className="text-lg font-semibold text-gray-900">AVG/GDPR</p>
                <p className="text-sm text-gray-500">{language === 'nl' ? 'Compliant' : 'Compliant'}</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-semibold text-gray-900">EU</p>
                <p className="text-sm text-gray-500">{language === 'nl' ? 'Dataopslag' : 'Data storage'}</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-semibold text-gray-900">ISO 27001</p>
                <p className="text-sm text-gray-500">{language === 'nl' ? 'Beveiligingsstandaard' : 'Security standard'}</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-gray-50">
        <Container size="sm">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
              {t('cta.title')}
            </h2>
            <p className="mt-4 text-gray-600 max-w-md mx-auto">
              {t('cta.desc')}
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
