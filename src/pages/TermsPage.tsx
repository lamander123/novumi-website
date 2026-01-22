import { PageLayout } from '@/components/layout'
import { Container } from '@/components/ui'
import { SEO } from '@/components/SEO'
import { useI18n } from '@/lib/i18n'

export function TermsPage() {
  const { language } = useI18n()
  const isNL = language === 'nl'

  return (
    <PageLayout>
      <SEO
        title={isNL ? 'Algemene Voorwaarden' : 'Terms of Service'}
        description={isNL ? 'Algemene voorwaarden van Novumi' : 'Terms of Service of Novumi'}
        canonical="/terms"
      />

      <section className="pt-32 pb-20 md:pt-40 md:pb-28">
        <Container size="sm">
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-8">
            {isNL ? 'Algemene Voorwaarden' : 'Terms of Service'}
          </h1>

          <div className="prose prose-gray max-w-none">
            <p className="text-sm text-gray-500 mb-8">
              {isNL ? 'Laatst bijgewerkt: januari 2025' : 'Last updated: January 2025'}
            </p>

            {isNL ? <DutchContent /> : <EnglishContent />}
          </div>
        </Container>
      </section>
    </PageLayout>
  )
}

function DutchContent() {
  return (
    <>
      <Section title="1. Definities">
        <p>In deze algemene voorwaarden bedoelen we met:</p>
        <ul>
          <li><strong>Novumi:</strong> Novumi, gevestigd in Amsterdam, aanbieder van pre-employment screening diensten.</li>
          <li><strong>Opdrachtgever:</strong> De persoon of organisatie die een overeenkomst aangaat met Novumi.</li>
          <li><strong>Kandidaat:</strong> De persoon die gescreend wordt.</li>
          <li><strong>Diensten:</strong> Alle screening- en verificatiediensten die Novumi aanbiedt.</li>
        </ul>
      </Section>

      <Section title="2. Wanneer gelden deze voorwaarden">
        <p>
          Deze algemene voorwaarden gelden voor alle aanbiedingen, offertes en overeenkomsten
          tussen Novumi en de opdrachtgever. Afwijkingen zijn alleen geldig als ze schriftelijk zijn afgesproken.
        </p>
      </Section>

      <Section title="3. Onze diensten">
        <p>
          Novumi voert pre-employment screenings en achtergrondonderzoeken uit in opdracht van de opdrachtgever.
          We starten pas met screenen nadat de kandidaat toestemming heeft gegeven, conform de AVG.
        </p>
        <p>
          We doen ons best om de diensten zorgvuldig uit te voeren. Het gaat om een inspanningsverplichting,
          geen resultaatsverplichting.
        </p>
      </Section>

      <Section title="4. Toestemming en privacy">
        <p>
          De opdrachtgever zorgt ervoor dat de kandidaat vooraf toestemming heeft gegeven voor het onderzoek.
          Novumi verwerkt persoonsgegevens volgens de AVG en ons privacybeleid.
        </p>
      </Section>

      <Section title="5. Vertrouwelijkheid">
        <p>
          Alle informatie uit de screening behandelen we strikt vertrouwelijk.
          Rapporten gaan alleen naar de opdrachtgever en niet naar derden, tenzij de wet dit vereist.
        </p>
      </Section>

      <Section title="6. Tarieven en betaling">
        <p>
          Alle tarieven zijn exclusief btw, tenzij anders aangegeven. Betaling moet binnen 30 dagen na
          factuurdatum. Bij te late betaling is de opdrachtgever automatisch in verzuim.
        </p>
      </Section>

      <Section title="7. Levertijd">
        <p>
          We streven ernaar rapporten binnen de aangegeven termijn te leveren (standaard 48-72 uur voor
          basisscreenings). Genoemde levertijden zijn een indicatie, geen harde deadlines.
        </p>
      </Section>

      <Section title="8. Aansprakelijkheid">
        <p>
          De aansprakelijkheid van Novumi is beperkt tot het bedrag dat de aansprakelijkheidsverzekering
          uitkeert, of als dat niet van toepassing is, tot het factuurbedrag van de betreffende opdracht.
        </p>
        <p>
          Novumi is niet aansprakelijk voor schade door beslissingen die de opdrachtgever neemt
          op basis van screeningsresultaten.
        </p>
      </Section>

      <Section title="9. Intellectueel eigendom">
        <p>
          Alle intellectuele eigendomsrechten op materialen, methoden en rapporten van Novumi blijven bij Novumi.
          De opdrachtgever krijgt een gebruiksrecht voor eigen doeleinden.
        </p>
      </Section>

      <Section title="10. Klachten">
        <p>
          Klachten over onze diensten moeten binnen 14 dagen na levering schriftelijk bij ons worden ingediend.
          We proberen klachten binnen 30 dagen af te handelen.
        </p>
      </Section>

      <Section title="11. Toepasselijk recht">
        <p>
          Op alle overeenkomsten is Nederlands recht van toepassing. Geschillen leggen we voor aan de
          rechtbank in Amsterdam.
        </p>
      </Section>

      <Section title="12. Contact">
        <p>Vragen over deze voorwaarden? Neem contact met ons op:</p>
        <ul>
          <li>E-mail: info@novumi.nl</li>
          <li>Telefoon: +31 (0)20 123 4567</li>
        </ul>
      </Section>
    </>
  )
}

function EnglishContent() {
  return (
    <>
      <Section title="1. Definitions">
        <p>In these terms of service, the following definitions apply:</p>
        <ul>
          <li><strong>Novumi:</strong> Novumi, located in Amsterdam, provider of pre-employment screening services.</li>
          <li><strong>Client:</strong> The natural or legal person entering into an agreement with Novumi.</li>
          <li><strong>Candidate:</strong> The person subject to the screening.</li>
          <li><strong>Services:</strong> All screening and verification services offered by Novumi.</li>
        </ul>
      </Section>

      <Section title="2. Applicability">
        <p>
          These terms of service apply to all offers, quotations, and agreements between Novumi and the client.
          Deviations are only valid if agreed upon in writing.
        </p>
      </Section>

      <Section title="3. Services">
        <p>
          Novumi performs pre-employment screenings and background checks on behalf of the client.
          Screening only takes place after obtaining consent from the candidate, in accordance with GDPR.
        </p>
        <p>
          Novumi endeavors to perform services carefully and to the best of its ability. The service provision
          constitutes an obligation of effort, not an obligation of result.
        </p>
      </Section>

      <Section title="4. Consent and Privacy">
        <p>
          The client guarantees that the candidate has given consent prior to the screening for conducting
          the investigation. Novumi processes personal data in accordance with GDPR and our privacy policy.
        </p>
      </Section>

      <Section title="5. Confidentiality">
        <p>
          All information obtained in the context of the screening is treated strictly confidentially.
          Reports are provided exclusively to the client and not to third parties, unless legally required.
        </p>
      </Section>

      <Section title="6. Rates and Payment">
        <p>
          All rates are exclusive of VAT, unless otherwise stated. Payment must be made within 30 days
          of the invoice date. In case of late payment, the client is automatically in default.
        </p>
      </Section>

      <Section title="7. Delivery Time">
        <p>
          Novumi aims to deliver reports within the indicated timeframe (standard 48-72 hours for basic
          screenings). Stated delivery times are indicative and not strict deadlines.
        </p>
      </Section>

      <Section title="8. Liability">
        <p>
          Novumi's liability is limited to the amount paid out under the liability insurance in the
          relevant case, or in the absence thereof, to the invoice amount of the relevant assignment.
        </p>
        <p>
          Novumi is not liable for damages resulting from decisions made by the client based on
          screening results.
        </p>
      </Section>

      <Section title="9. Intellectual Property">
        <p>
          All intellectual property rights to materials, methods, and reports developed by Novumi
          remain with Novumi. The client obtains a right of use for their own purposes.
        </p>
      </Section>

      <Section title="10. Complaints">
        <p>
          Complaints about the services must be submitted in writing to Novumi within 14 days of delivery.
          We aim to handle complaints within 30 days.
        </p>
      </Section>

      <Section title="11. Applicable Law">
        <p>
          Dutch law applies to all agreements. Disputes will be submitted to the competent court in Amsterdam.
        </p>
      </Section>

      <Section title="12. Contact">
        <p>For questions about these terms, please contact us:</p>
        <ul>
          <li>Email: info@novumi.nl</li>
          <li>Phone: +31 (0)20 123 4567</li>
        </ul>
      </Section>
    </>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">{title}</h2>
      <div className="text-gray-600 leading-relaxed space-y-3 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1 [&_li]:text-gray-600">
        {children}
      </div>
    </div>
  )
}
