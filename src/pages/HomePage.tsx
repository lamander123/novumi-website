import { Phone, Globe, FileText, Shield, ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { PageLayout } from '@/components/layout'
import { Container, Button, Card } from '@/components/ui'
import { DashboardMockup } from '@/components/ui/DashboardMockup'
import { ProcessMockups } from '@/components/ui/ProcessMockups'
import { SEO } from '@/components/SEO'
import { useI18n } from '@/lib/i18n'

export function HomePage() {
  const { t, language } = useI18n()

  const benefits = [
    { icon: Phone, titleKey: 'benefit1.title', descKey: 'benefit1.desc' },
    { icon: Globe, titleKey: 'benefit2.title', descKey: 'benefit2.desc' },
    { icon: FileText, titleKey: 'benefit3.title', descKey: 'benefit3.desc' },
    { icon: Shield, titleKey: 'benefit4.title', descKey: 'benefit4.desc' },
  ]

  const faqs = [
    { q: 'faq.q1', a: 'faq.a1' },
    { q: 'faq.q2', a: 'faq.a2' },
    { q: 'faq.q3', a: 'faq.a3' },
    { q: 'faq.q4', a: 'faq.a4' },
    { q: 'faq.q5', a: 'faq.a5' },
  ]

  return (
    <PageLayout>
      <SEO
        title={language === 'nl' ? 'Pre-employment Screening' : 'Pre-employment Screening'}
        description={t('hero.subtitle')}
        canonical="/"
      />

      {/* Hero Section */}
      <section
        className="pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden relative"
        style={{
          backgroundImage: 'url(/hero-bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Text content */}
            <div className="max-w-xl">
              <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 tracking-tight leading-[1.1]">
                {t('hero.title')}
              </h1>
              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                {t('hero.subtitle')}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button variant="primary" size="lg" href="/contact">
                  {t('hero.cta.primary')}
                </Button>
                <Button variant="secondary" size="lg" href="/services">
                  {t('hero.cta.secondary')}
                </Button>
              </div>
            </div>

            {/* Right: Dashboard mockup */}
            <div className="lg:ml-8 -mr-4 md:-mr-8 lg:-mr-16">
              <DashboardMockup />
            </div>
          </div>
        </Container>
      </section>

      {/* Trust indicators */}
      <section className="py-8 border-y border-gray-100">
        <Container>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <div className="text-center">
              <p className="text-lg font-semibold text-gray-900">{t('trust.turnaround')}</p>
              <p className="text-sm text-gray-500">{t('trust.turnaround.label')}</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-semibold text-gray-900">{t('trust.compliant')}</p>
              <p className="text-sm text-gray-500">{t('trust.compliant.label')}</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-semibold text-gray-900">{t('trust.eu')}</p>
              <p className="text-sm text-gray-500">{t('trust.eu.label')}</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-20 md:py-28">
        <Container size="md">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20">
            <div>
              <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-4">
                {t('problem.title')}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {t('problem.text')}
              </p>
            </div>
            <div>
              <h2 className="text-sm font-medium text-accent-600 uppercase tracking-wide mb-4">
                {t('solution.title')}
              </h2>
              <p className="text-gray-900 font-medium leading-relaxed">
                {t('solution.text')}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* How it works */}
      <section className="py-20 md:py-28 bg-gray-50">
        <Container>
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
              {t('process.title')}
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              {language === 'nl'
                ? 'Van aanvraag tot rapport in drie stappen. Transparant, grondig en snel.'
                : 'From request to report in three steps. Transparent, thorough, and fast.'}
            </p>
          </div>

          <ProcessMockups />
        </Container>
      </section>

      {/* Benefits */}
      <section className="py-20 md:py-28">
        <Container>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 text-center mb-16">
            {t('benefits.title')}
          </h2>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {benefits.map(({ icon: Icon, titleKey, descKey }, i) => (
              <Card key={i} padding="lg">
                <div className="flex gap-4">
                  <Icon className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {t(titleKey)}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {t(descKey)}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-28 bg-gray-50">
        <Container size="md">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 text-center mb-12">
            {t('faq.title')}
          </h2>

          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <FAQItem key={i} question={t(faq.q)} answer={t(faq.a)} />
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28">
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

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border border-gray-200 rounded-lg bg-white">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-4 text-left"
      >
        <span className="font-medium text-gray-900">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div className="px-4 pb-4">
          <p className="text-gray-600 text-sm leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  )
}
