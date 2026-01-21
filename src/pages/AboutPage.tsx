import { Eye, Lock, Zap } from 'lucide-react'
import { PageLayout } from '@/components/layout'
import { Container, Button, Card } from '@/components/ui'
import { useI18n } from '@/lib/i18n'
import teamImage from '@/assets/illustrations/team.svg'

export function AboutPage() {
  const { t } = useI18n()

  const values = [
    { icon: Eye, titleKey: 'about.value1.title', descKey: 'about.value1.desc' },
    { icon: Lock, titleKey: 'about.value2.title', descKey: 'about.value2.desc' },
    { icon: Zap, titleKey: 'about.value3.title', descKey: 'about.value3.desc' },
  ]

  return (
    <PageLayout>
      {/* Hero */}
      <section className="pt-24 pb-16 lg:pt-32 lg:pb-20 bg-gradient-to-b from-neutral-50 to-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-heading font-bold text-primary-900 leading-tight">
              {t('about.hero.title')}
            </h1>
            <p className="mt-6 text-xl text-neutral-600 leading-relaxed">
              {t('about.hero.subtitle')}
            </p>
          </div>
        </Container>
      </section>

      {/* Story */}
      <section className="py-20 lg:py-28">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary-900 mb-6">
                {t('about.story.title')}
              </h2>
              <div className="space-y-4 text-lg text-neutral-600 leading-relaxed">
                <p>{t('about.story.p1')}</p>
                <p>{t('about.story.p2')}</p>
              </div>
            </div>
            <div>
              <img src={teamImage} alt="" className="w-full rounded-2xl" />
            </div>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28 bg-neutral-50">
        <Container>
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary-900 text-center mb-12">
            {t('about.values.title')}
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {values.map(({ icon: Icon, titleKey, descKey }, i) => (
              <Card key={i} padding="lg" className="text-center">
                <div className="w-14 h-14 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-7 h-7 text-accent-600" />
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

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-primary-900">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-white">
              {t('cta.title')}
            </h2>
            <p className="mt-4 text-lg text-primary-200">
              {t('cta.desc')}
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
