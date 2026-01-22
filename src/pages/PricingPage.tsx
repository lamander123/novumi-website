import { Check, Zap, Users, Search, Building } from 'lucide-react'
import { PageLayout } from '@/components/layout'
import { Container, Button, Card } from '@/components/ui'
import { SEO } from '@/components/SEO'
import { useI18n } from '@/lib/i18n'

export function PricingPage() {
  const { language } = useI18n()
  const isNL = language === 'nl'

  const tiers = [
    {
      name: isNL ? 'Basis' : 'Basic',
      price: '49',
      description: isNL
        ? 'Snelle geautomatiseerde screening voor standaard checks.'
        : 'Fast automated screening for standard checks.',
      turnaround: isNL ? '24 uur' : '24 hours',
      approach: isNL ? 'Geautomatiseerd' : 'Automated',
      icon: Zap,
      features: isNL
        ? [
            'Identiteitsverificatie',
            'Sanctielijsten & PEP-check',
            'VOG-statuscheck',
            'Geautomatiseerd rapport',
          ]
        : [
            'Identity verification',
            'Sanctions & PEP check',
            'Criminal record status',
            'Automated report',
          ],
      cta: isNL ? 'Selecteer Basis' : 'Select Basic',
      popular: false,
    },
    {
      name: isNL ? 'Standaard' : 'Standard',
      price: '149',
      description: isNL
        ? 'Handmatige verificatie bij de bron voor betrouwbare resultaten.'
        : 'Manual verification at the source for reliable results.',
      turnaround: isNL ? '48-72 uur' : '48-72 hours',
      approach: isNL ? 'Handmatig geverifieerd' : 'Manually verified',
      icon: Users,
      features: isNL
        ? [
            'Alles uit Basis',
            'Werkervaring verificatie (2 werkgevers)',
            'Diploma verificatie (hoogste opleiding)',
            '1 referentiecheck',
            'Review door analist',
          ]
        : [
            'Everything in Basic',
            'Employment verification (2 employers)',
            'Education verification (highest degree)',
            '1 reference check',
            'Analyst review',
          ],
      cta: isNL ? 'Selecteer Standaard' : 'Select Standard',
      popular: true,
    },
    {
      name: isNL ? 'Uitgebreid' : 'Comprehensive',
      price: '299',
      description: isNL
        ? 'Diepgaand onderzoek inclusief OSINT en digitale analyse.'
        : 'In-depth investigation including OSINT and digital analysis.',
      turnaround: isNL ? '5-7 werkdagen' : '5-7 business days',
      approach: isNL ? 'Diepgaand onderzoek' : 'Deep investigation',
      icon: Search,
      features: isNL
        ? [
            'Alles uit Standaard',
            'Volledige werkhistorie verificatie',
            'Meerdere referentiechecks',
            'OSINT & digitale analyse',
            'Internationale checks',
            'Uitgebreide risico-analyse',
          ]
        : [
            'Everything in Standard',
            'Full employment history verification',
            'Multiple reference checks',
            'OSINT & digital analysis',
            'International checks',
            'Comprehensive risk analysis',
          ],
      cta: isNL ? 'Selecteer Uitgebreid' : 'Select Comprehensive',
      popular: false,
    },
    {
      name: isNL ? 'Op Maat' : 'Custom',
      price: isNL ? 'Vanaf 499' : 'From 499',
      description: isNL
        ? 'Volledig maatwerk voor executives en due diligence.'
        : 'Fully customized for executives and due diligence.',
      turnaround: isNL ? 'In overleg' : 'By agreement',
      approach: isNL ? 'Volledig maatwerk' : 'Fully custom',
      icon: Building,
      features: isNL
        ? [
            'Alles uit Uitgebreid',
            'Diepgaand OSINT-onderzoek',
            'Due diligence niveau',
            'Dedicated onderzoeker',
            'Sectorspecifieke checks',
            'Persoonlijke rapportbespreking',
          ]
        : [
            'Everything in Comprehensive',
            'Deep OSINT investigation',
            'Due diligence level',
            'Dedicated investigator',
            'Sector-specific checks',
            'Personal report discussion',
          ],
      cta: isNL ? 'Neem contact op' : 'Contact us',
      popular: false,
    },
  ]

  const faqs = [
    {
      q: isNL ? 'Wat is het verschil tussen Basis en Standaard?' : 'What\'s the difference between Basic and Standard?',
      a: isNL
        ? 'Basis is volledig geautomatiseerd en checkt databases. Standaard voegt daar handmatige verificatie aan toe: we bellen echt met vorige werkgevers en opleidingen om informatie te bevestigen.'
        : 'Basic is fully automated and checks databases. Standard adds manual verification: we actually call previous employers and educational institutions to confirm information.',
    },
    {
      q: isNL ? 'Wanneer heb ik Uitgebreid nodig?' : 'When do I need Comprehensive?',
      a: isNL
        ? 'Kies Uitgebreid voor functies met veel verantwoordelijkheid, toegang tot gevoelige informatie, of een publiek profiel. De OSINT-analyse vindt risico\'s die standaard screening mist.'
        : 'Choose Comprehensive for positions with significant responsibility, access to sensitive information, or a public profile. The OSINT analysis finds risks that standard screening misses.',
    },
    {
      q: isNL ? 'Bieden jullie volumekorting?' : 'Do you offer volume discounts?',
      a: isNL
        ? 'Ja. Bij 10+ screenings per maand krijg je 10% korting, bij 50+ screenings 20%. Neem contact op voor een offerte op maat.'
        : 'Yes. With 10+ screenings per month you get 10% discount, with 50+ screenings 20%. Contact us for a custom quote.',
    },
    {
      q: isNL ? 'Hoe werkt het toestemmingsproces?' : 'How does the consent process work?',
      a: isNL
        ? 'Na je aanvraag sturen wij de kandidaat automatisch een uitnodiging om toestemming te geven en gegevens aan te leveren. Volledig AVG-compliant.'
        : 'After your request, we automatically send the candidate an invitation to give consent and provide information. Fully GDPR-compliant.',
    },
  ]

  return (
    <PageLayout>
      <SEO
        title={isNL ? 'Prijzen | Pre-employment Screening Pakketten' : 'Pricing | Pre-employment Screening Packages'}
        description={isNL
          ? 'Transparante prijzen voor pre-employment screening. Van geautomatiseerde checks tot diepgaand OSINT-onderzoek. Vanaf €49.'
          : 'Transparent pricing for pre-employment screening. From automated checks to deep OSINT investigation. From €49.'}
        canonical="/pricing"
      />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 tracking-tight leading-[1.1]">
              {isNL ? 'Transparante prijzen' : 'Transparent pricing'}
            </h1>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              {isNL
                ? 'Kies het pakket dat past bij je behoeften. Van snelle geautomatiseerde checks tot diepgaand onderzoek door onze specialisten.'
                : 'Choose the package that fits your needs. From fast automated checks to in-depth investigation by our specialists.'}
            </p>
          </div>
        </Container>
      </section>

      {/* Pricing tiers */}
      <section className="pb-16 md:pb-24">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tiers.map((tier) => (
              <Card
                key={tier.name}
                padding="none"
                className={`relative flex flex-col ${tier.popular ? 'ring-2 ring-gray-900' : ''}`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-gray-900 text-white text-xs font-medium px-3 py-1 rounded-full">
                      {isNL ? 'Meest gekozen' : 'Most popular'}
                    </span>
                  </div>
                )}

                <div className="p-6 flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
                      <tier.icon className="w-5 h-5 text-gray-600" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">{tier.name}</h3>
                  </div>

                  <div className="mb-4">
                    <span className="text-3xl font-semibold text-gray-900">€{tier.price}</span>
                    <span className="text-gray-500 text-sm ml-1">
                      {isNL ? '/ screening' : '/ screening'}
                    </span>
                  </div>

                  <p className="text-sm text-gray-600 mb-4">{tier.description}</p>

                  <div className="flex gap-4 text-xs text-gray-500 mb-6">
                    <span>{tier.turnaround}</span>
                    <span>•</span>
                    <span>{tier.approach}</span>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <Check className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-6 pt-0">
                  <Button
                    variant={tier.popular ? 'primary' : 'secondary'}
                    size="md"
                    href="/contact"
                    className="w-full justify-center"
                  >
                    {tier.cta}
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Volume discount banner */}
      <section className="py-12 bg-gray-50">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 max-w-4xl mx-auto">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                {isNL ? 'Veel screenings nodig?' : 'Need many screenings?'}
              </h3>
              <p className="text-gray-600 mt-1">
                {isNL
                  ? '10+ screenings/maand: 10% korting. 50+ screenings: 20% korting.'
                  : '10+ screenings/month: 10% discount. 50+ screenings: 20% discount.'}
              </p>
            </div>
            <Button variant="secondary" href="/contact">
              {isNL ? 'Vraag volumekorting aan' : 'Request volume discount'}
            </Button>
          </div>
        </Container>
      </section>

      {/* Comparison */}
      <section className="py-16 md:py-24">
        <Container>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 text-center mb-12">
            {isNL ? 'Vergelijk pakketten' : 'Compare packages'}
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 pr-4 font-medium text-gray-500">
                    {isNL ? 'Onderdeel' : 'Feature'}
                  </th>
                  <th className="text-center py-4 px-4 font-medium text-gray-900">Basis</th>
                  <th className="text-center py-4 px-4 font-medium text-gray-900">Standaard</th>
                  <th className="text-center py-4 px-4 font-medium text-gray-900">Uitgebreid</th>
                  <th className="text-center py-4 px-4 font-medium text-gray-900">Op Maat</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <ComparisonRow
                  feature={isNL ? 'Identiteitsverificatie' : 'Identity verification'}
                  values={[true, true, true, true]}
                />
                <ComparisonRow
                  feature={isNL ? 'Sanctielijsten & PEP' : 'Sanctions & PEP'}
                  values={[true, true, true, true]}
                />
                <ComparisonRow
                  feature={isNL ? 'VOG-statuscheck' : 'Criminal record status'}
                  values={[true, true, true, true]}
                />
                <ComparisonRow
                  feature={isNL ? 'Werkervaring verificatie' : 'Employment verification'}
                  values={[false, '2', isNL ? 'Volledig' : 'Full', isNL ? 'Volledig' : 'Full']}
                />
                <ComparisonRow
                  feature={isNL ? 'Diploma verificatie' : 'Education verification'}
                  values={[false, '1', isNL ? 'Volledig' : 'Full', isNL ? 'Volledig' : 'Full']}
                />
                <ComparisonRow
                  feature={isNL ? 'Referentiechecks' : 'Reference checks'}
                  values={[false, '1', '3+', isNL ? 'Onbeperkt' : 'Unlimited']}
                />
                <ComparisonRow
                  feature={isNL ? 'OSINT & digitale analyse' : 'OSINT & digital analysis'}
                  values={[false, false, true, true]}
                />
                <ComparisonRow
                  feature={isNL ? 'Internationale checks' : 'International checks'}
                  values={[false, false, true, true]}
                />
                <ComparisonRow
                  feature={isNL ? 'Dedicated onderzoeker' : 'Dedicated investigator'}
                  values={[false, false, false, true]}
                />
                <ComparisonRow
                  feature={isNL ? 'Doorlooptijd' : 'Turnaround'}
                  values={['24u', '48-72u', '5-7d', isNL ? 'Flex' : 'Flex']}
                />
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-gray-50">
        <Container size="md">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 text-center mb-12">
            {isNL ? 'Veelgestelde vragen' : 'Frequently asked questions'}
          </h2>

          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <Container size="sm">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
              {isNL ? 'Niet zeker welk pakket?' : 'Not sure which package?'}
            </h2>
            <p className="mt-4 text-gray-600 max-w-md mx-auto">
              {isNL
                ? 'We helpen je graag bij het kiezen van de juiste screening voor jouw situatie.'
                : 'We\'re happy to help you choose the right screening for your situation.'}
            </p>
            <div className="mt-8">
              <Button variant="primary" size="lg" href="/contact">
                {isNL ? 'Plan een gesprek' : 'Schedule a call'}
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </PageLayout>
  )
}

function ComparisonRow({ feature, values }: { feature: string; values: (boolean | string)[] }) {
  return (
    <tr>
      <td className="py-4 pr-4 text-gray-700">{feature}</td>
      {values.map((value, i) => (
        <td key={i} className="text-center py-4 px-4">
          {value === true ? (
            <Check className="w-5 h-5 text-emerald-500 mx-auto" />
          ) : value === false ? (
            <span className="text-gray-300">—</span>
          ) : (
            <span className="text-gray-700">{value}</span>
          )}
        </td>
      ))}
    </tr>
  )
}
