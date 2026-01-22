import { CheckCircle, Building, GraduationCap, Users, FileCheck } from 'lucide-react'
import { PageLayout } from '@/components/layout'
import { Container, Button, Card } from '@/components/ui'
import { SEO } from '@/components/SEO'
import { useI18n } from '@/lib/i18n'

export function BackgroundVerificationPage() {
  const { language } = useI18n()
  const isNL = language === 'nl'

  const features = [
    {
      icon: Building,
      title: isNL ? 'Werkervaring verificatie' : 'Employment verification',
      desc: isNL
        ? 'We nemen contact op met vorige werkgevers om functies, periodes en verantwoordelijkheden te checken.'
        : 'We contact previous employers to confirm positions, periods, and responsibilities.',
    },
    {
      icon: GraduationCap,
      title: isNL ? 'Opleiding verificatie' : 'Education verification',
      desc: isNL
        ? 'We checken diploma\'s en certificaten direct bij de onderwijsinstelling.'
        : 'Verification of diplomas and certificates directly with educational institutions.',
    },
    {
      icon: Users,
      title: isNL ? 'Referentie checks' : 'Reference checks',
      desc: isNL
        ? 'Gestructureerde gesprekken met opgegeven referenties voor een compleet beeld.'
        : 'Structured interviews with provided references for a complete picture.',
    },
    {
      icon: FileCheck,
      title: isNL ? 'Document verificatie' : 'Document verification',
      desc: isNL
        ? 'Echtheidscontrole van CV\'s, certificaten en andere aangeleverde documenten.'
        : 'Authentication of CVs, certificates, and other submitted documents.',
    },
  ]

  const benefits = [
    isNL ? 'Verificatie bij de bron, niet alleen databases' : 'Verification at primary sources, not just databases',
    isNL ? 'Persoonlijk contact met vorige werkgevers' : 'Personal contact with previous employers',
    isNL ? 'Resultaten binnen 48-72 uur' : 'Results within 48-72 hours',
    isNL ? 'AVG-compliant met toestemming van de kandidaat' : 'GDPR-compliant process with candidate consent',
    isNL ? 'Helder rapport met concrete bevindingen' : 'Clear report with concrete findings',
  ]

  return (
    <PageLayout>
      <SEO
        title={isNL ? 'Achtergrondverificatie | Werkervaring & Opleiding Check' : 'Background Verification | Employment & Education Check'}
        description={isNL
          ? 'Professionele achtergrondverificatie: werkervaring, opleiding en referenties geverifieerd bij de bron. Resultaten binnen 48-72 uur.'
          : 'Professional background verification: employment, education, and references verified at the source. Results within 48-72 hours.'}
        canonical="/services/background-verification"
      />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <Container size="md">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-accent-600 mb-4">
              {isNL ? 'Diensten' : 'Services'}
            </p>
            <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 tracking-tight leading-[1.1]">
              {isNL ? 'Achtergrondverificatie' : 'Background Verification'}
            </h1>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              {isNL
                ? 'Verificatie van werkervaring, opleidingen en referenties direct bij de bron. Geen databases—echte verificatie door ons team.'
                : 'Verification of employment history, education, and professional references directly at the source. No databases—real verification by our investigation team.'}
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

      {/* Features */}
      <section className="py-16 md:py-24 bg-gray-50">
        <Container>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 text-center mb-12">
            {isNL ? 'Wat wij verifiëren' : 'What we verify'}
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
      <section className="py-16 md:py-24">
        <Container size="md">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-8">
              {isNL ? 'Waarom kiezen voor Novumi' : 'Why choose Novumi'}
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
              {isNL ? 'Start met achtergrondverificatie' : 'Start with background verification'}
            </h2>
            <p className="mt-4 text-gray-600 max-w-md mx-auto">
              {isNL
                ? 'Neem contact op voor een vrijblijvende offerte of plan een gesprek om je wensen te bespreken.'
                : 'Contact us for a no-obligation quote or schedule a call to discuss your needs.'}
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
