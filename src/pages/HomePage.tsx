import { Shield, Lock, Zap, ClipboardList, Search, FileCheck, UserCheck, Globe, BarChart3 } from 'lucide-react'
import { PageLayout } from '@/components/layout'
import { Container, Button, AnimatedLogo, PlatformDemo, Card } from '@/components/ui'
import { useI18n } from '@/lib/i18n'

export function HomePage() {
  const { t } = useI18n()

  const trustIndicators = [
    { icon: Shield, titleKey: 'trust.verified.title' },
    { icon: Lock, titleKey: 'trust.secure.title' },
    { icon: Zap, titleKey: 'trust.fast.title' },
  ]

  const processSteps = [
    { icon: ClipboardList, titleKey: 'process.step1.title', descKey: 'process.step1.desc' },
    { icon: Search, titleKey: 'process.step2.title', descKey: 'process.step2.desc' },
    { icon: FileCheck, titleKey: 'process.step3.title', descKey: 'process.step3.desc' },
  ]

  const features = [
    { icon: UserCheck, titleKey: 'feature1.title', descKey: 'feature1.desc', points: ['feature1.point1', 'feature1.point2', 'feature1.point3'] },
    { icon: Globe, titleKey: 'feature2.title', descKey: 'feature2.desc', points: ['feature2.point1', 'feature2.point2', 'feature2.point3'] },
    { icon: BarChart3, titleKey: 'feature3.title', descKey: 'feature3.desc', points: ['feature3.point1', 'feature3.point2', 'feature3.point3'] },
  ]

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="pt-24 pb-16 lg:pt-32 lg:pb-24 bg-gradient-to-b from-neutral-50 to-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <AnimatedLogo variant="dark" size="xl" />
              <p className="mt-6 text-xl text-neutral-600 leading-relaxed max-w-lg">
                {t('hero.subtitle')}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button variant="primary" size="lg" href="/contact">
                  {t('hero.cta.primary')}
                </Button>
                <Button variant="secondary" size="lg" href="/contact">
                  {t('hero.cta.demo')}
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <PlatformDemo />
            </div>
          </div>
        </Container>
      </section>

      {/* Trust indicators */}
      <section className="py-8 border-b border-neutral-100 bg-neutral-50">
        <Container>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-4">
            {trustIndicators.map(({ icon: Icon, titleKey }, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-10 h-10 bg-accent-100 rounded-full flex items-center justify-center">
                  <Icon className="w-5 h-5 text-accent-600" />
                </div>
                <span className="text-neutral-700 font-medium">{t(titleKey)}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* How it works */}
      <section className="py-20 lg:py-28 bg-white">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary-900">
              {t('process.title')}
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              {t('process.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto">
            {processSteps.map(({ icon: Icon, titleKey, descKey }, i) => (
              <Card key={i} padding="lg" className="text-center relative">
                <div className="w-14 h-14 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-5">
                  <Icon className="w-7 h-7 text-accent-600" />
                </div>
                <div className="absolute top-4 left-4 w-8 h-8 bg-primary-900 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {i + 1}
                </div>
                <h3 className="text-lg font-heading font-semibold text-primary-900">
                  {t(titleKey)}
                </h3>
                <p className="mt-2 text-neutral-600 text-sm">
                  {t(descKey)}
                </p>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="secondary" size="lg" href="/contact">
              {t('hero.cta.demo')}
            </Button>
          </div>
        </Container>
      </section>

      {/* Features */}
      <section className="py-20 lg:py-28 bg-neutral-50">
        <Container>
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary-900 text-center mb-16">
            {t('language') === 'nl' ? 'Wat wij bieden' : 'What we offer'}
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {features.map(({ icon: Icon, titleKey, descKey, points }, i) => (
              <Card key={i} padding="lg">
                <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-accent-600" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-primary-900 mb-3">
                  {t(titleKey)}
                </h3>
                <p className="text-neutral-600 mb-4">
                  {t(descKey)}
                </p>
                <ul className="space-y-2">
                  {points.map((key, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-neutral-700">
                      <span className="w-1.5 h-1.5 bg-accent-500 rounded-full" />
                      {t(key)}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
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
