import { PageLayout } from '@/components/layout'
import { Container } from '@/components/ui'
import { SEO } from '@/components/SEO'
import { useI18n } from '@/lib/i18n'

export function PrivacyPage() {
  const { language } = useI18n()
  const isNL = language === 'nl'

  return (
    <PageLayout>
      <SEO
        title={isNL ? 'Privacybeleid' : 'Privacy Policy'}
        description={isNL ? 'Privacybeleid van Novumi' : 'Privacy Policy of Novumi'}
        canonical="/privacy"
      />

      <section className="pt-32 pb-20 md:pt-40 md:pb-28">
        <Container size="sm">
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-8">
            {isNL ? 'Privacybeleid' : 'Privacy Policy'}
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
      <Section title="1. Inleiding">
        <p>
          Novumi ("wij", "ons", "onze") respecteert je privacy en beschermt je persoonsgegevens zorgvuldig.
          Dit privacybeleid legt uit hoe we omgaan met je gegevens als je onze website bezoekt,
          en wat je rechten zijn.
        </p>
      </Section>

      <Section title="2. Verwerkingsverantwoordelijke">
        <p>
          Novumi is verantwoordelijk voor de persoonsgegevens die via deze website worden verzameld.
        </p>
        <ul>
          <li>Bedrijfsnaam: Novumi</li>
          <li>Vestiging: Amsterdam, Nederland</li>
          <li>E-mail: info@novumi.nl</li>
        </ul>
      </Section>

      <Section title="3. Welke gegevens verzamelen we">
        <p>We verzamelen en verwerken de volgende persoonsgegevens:</p>

        <h4 className="font-semibold mt-4">3.1 Gegevens die je ons geeft</h4>
        <p>Als je ons contactformulier invult, verzamelen we:</p>
        <ul>
          <li>Naam</li>
          <li>E-mailadres</li>
          <li>Telefoonnummer (optioneel)</li>
          <li>Bedrijfsnaam en functie</li>
          <li>Bedrijfsgrootte</li>
          <li>Verwachte screenings per jaar</li>
          <li>Interesse in diensten</li>
          <li>Je bericht</li>
        </ul>

        <h4 className="font-semibold mt-4">3.2 Automatisch verzamelde gegevens</h4>
        <p>Als je onze website bezoekt, verzamelen we automatisch:</p>
        <ul>
          <li>IP-adres (geanonimiseerd)</li>
          <li>Browsertype en -versie</li>
          <li>Apparaatinformatie</li>
          <li>Pagina's die je bezoekt</li>
          <li>Tijd en duur van je bezoek</li>
          <li>Klik- en scrollgedrag</li>
        </ul>
      </Section>

      <Section title="4. Waarom we je gegevens verwerken">
        <p>We verwerken je persoonsgegevens voor:</p>
        <ul>
          <li><strong>Contact afhandelen:</strong> Om te reageren op je vragen en verzoeken (rechtsgrond: uitvoering van een overeenkomst)</li>
          <li><strong>Website verbeteren:</strong> Om onze website en gebruikerservaring te verbeteren (rechtsgrond: gerechtvaardigd belang)</li>
          <li><strong>Beveiliging:</strong> Om onze website veilig te houden (rechtsgrond: gerechtvaardigd belang)</li>
        </ul>
      </Section>

      <Section title="5. Cookies en tracking">
        <p>
          We gebruiken Microsoft Clarity voor website-analyse om de gebruikerservaring te verbeteren.
          Microsoft Clarity plaatst cookies op je apparaat. Meer informatie over hoe Microsoft gegevens
          verwerkt vind je in het{' '}
          <a href="https://privacy.microsoft.com/privacystatement" target="_blank" rel="noopener noreferrer" className="text-gray-900 underline">
            privacybeleid van Microsoft
          </a>.
        </p>
      </Section>

      <Section title="6. Met wie delen we gegevens">
        <p>We delen je persoonsgegevens met:</p>
        <ul>
          <li><strong>Microsoft Clarity:</strong> Voor website-analyse (verwerker in de VS, EU-VS Data Privacy Framework)</li>
          <li><strong>Hosting provider:</strong> Cloudflare (voor het hosten van onze website)</li>
        </ul>
        <p>
          We verkopen je gegevens nooit aan derden.
        </p>
      </Section>

      <Section title="7. Bewaartermijnen">
        <ul>
          <li><strong>Contactformuliergegevens:</strong> 2 jaar na laatste contact</li>
          <li><strong>Analytische gegevens:</strong> 26 maanden</li>
        </ul>
      </Section>

      <Section title="8. Je rechten">
        <p>Onder de AVG heb je de volgende rechten:</p>
        <ul>
          <li><strong>Inzage:</strong> Je kunt opvragen welke gegevens we van je hebben</li>
          <li><strong>Correctie:</strong> Je kunt onjuiste gegevens laten aanpassen</li>
          <li><strong>Verwijdering:</strong> Je kunt vragen om je gegevens te verwijderen</li>
          <li><strong>Beperking:</strong> Je kunt de verwerking laten beperken</li>
          <li><strong>Overdraagbaarheid:</strong> Je kunt je gegevens opvragen in een standaardformaat</li>
          <li><strong>Bezwaar:</strong> Je kunt bezwaar maken tegen verwerking</li>
        </ul>
        <p>
          Wil je gebruik maken van je rechten? Neem contact met ons op via info@novumi.nl.
        </p>
      </Section>

      <Section title="9. Beveiliging">
        <p>
          We nemen passende maatregelen om je persoonsgegevens te beschermen tegen onbevoegde toegang,
          verlies of misbruik. Dit betekent onder andere versleutelde verbindingen (HTTPS) en beveiligde opslag.
        </p>
      </Section>

      <Section title="10. Klachten">
        <p>
          Heb je een klacht over hoe we met je gegevens omgaan? Neem dan contact met ons op.
          Je kunt ook een klacht indienen bij de Autoriteit Persoonsgegevens:{' '}
          <a href="https://autoriteitpersoonsgegevens.nl" target="_blank" rel="noopener noreferrer" className="text-gray-900 underline">
            autoriteitpersoonsgegevens.nl
          </a>
        </p>
      </Section>

      <Section title="11. Wijzigingen">
        <p>
          We kunnen dit privacybeleid soms bijwerken. De nieuwste versie staat altijd op deze pagina.
          Bij grote wijzigingen laten we het je weten.
        </p>
      </Section>

      <Section title="12. Contact">
        <p>
          Vragen over dit privacybeleid of je persoonsgegevens? Neem contact met ons op:
        </p>
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
      <Section title="1. Introduction">
        <p>
          Novumi ("we", "us", "our") respects your privacy and is committed to protecting your personal data.
          This privacy policy informs you about how we handle your personal data when you visit our website
          and tells you about your privacy rights and how the law protects you.
        </p>
      </Section>

      <Section title="2. Data Controller">
        <p>
          Novumi is the data controller for the personal data collected through this website.
        </p>
        <ul>
          <li>Company name: Novumi</li>
          <li>Location: Amsterdam, Netherlands</li>
          <li>Email: info@novumi.nl</li>
        </ul>
      </Section>

      <Section title="3. Data We Collect">
        <p>We collect and process the following categories of personal data:</p>

        <h4 className="font-semibold mt-4">3.1 Data you provide to us</h4>
        <p>When you fill out our contact form, we collect:</p>
        <ul>
          <li>Name</li>
          <li>Email address</li>
          <li>Phone number (optional)</li>
          <li>Company name and job title</li>
          <li>Company size</li>
          <li>Expected screenings per year</li>
          <li>Service interests</li>
          <li>Your message</li>
        </ul>

        <h4 className="font-semibold mt-4">3.2 Automatically collected data</h4>
        <p>When you visit our website, we automatically collect:</p>
        <ul>
          <li>IP address (anonymized)</li>
          <li>Browser type and version</li>
          <li>Device information</li>
          <li>Pages you visit</li>
          <li>Time and duration of your visit</li>
          <li>Click behavior and scroll behavior</li>
        </ul>
      </Section>

      <Section title="4. Purposes and Legal Basis">
        <p>We process your personal data for the following purposes:</p>
        <ul>
          <li><strong>Handling contact requests:</strong> To respond to your questions and requests (legal basis: performance of a contract or pre-contractual measures)</li>
          <li><strong>Improving the website:</strong> To analyze and improve our website and user experience (legal basis: legitimate interest)</li>
          <li><strong>Security:</strong> To ensure the security of our website (legal basis: legitimate interest)</li>
        </ul>
      </Section>

      <Section title="5. Cookies and Tracking">
        <p>
          We use Microsoft Clarity for website analytics to improve user experience.
          Microsoft Clarity places cookies on your device. For more information about how Microsoft processes
          data, please refer to{' '}
          <a href="https://privacy.microsoft.com/privacystatement" target="_blank" rel="noopener noreferrer" className="text-gray-900 underline">
            Microsoft's privacy policy
          </a>.
        </p>
      </Section>

      <Section title="6. Data Sharing">
        <p>We share your personal data with the following parties:</p>
        <ul>
          <li><strong>Microsoft Clarity:</strong> For website analytics (processor in the US, EU-US Data Privacy Framework)</li>
          <li><strong>Hosting provider:</strong> Cloudflare (for hosting our website)</li>
        </ul>
        <p>
          We do not sell your personal data to third parties.
        </p>
      </Section>

      <Section title="7. Retention Periods">
        <ul>
          <li><strong>Contact form data:</strong> 2 years after last contact</li>
          <li><strong>Analytics data:</strong> 26 months</li>
        </ul>
      </Section>

      <Section title="8. Your Rights">
        <p>Under the GDPR, you have the following rights:</p>
        <ul>
          <li><strong>Right of access:</strong> You can request what data we have about you</li>
          <li><strong>Right to rectification:</strong> You can have incorrect data corrected</li>
          <li><strong>Right to erasure:</strong> You can request deletion of your data</li>
          <li><strong>Right to restriction:</strong> You can have processing restricted</li>
          <li><strong>Right to data portability:</strong> You can request your data in a standard format</li>
          <li><strong>Right to object:</strong> You can object to processing based on legitimate interest</li>
        </ul>
        <p>
          To exercise your rights, please contact us at info@novumi.nl.
        </p>
      </Section>

      <Section title="9. Security">
        <p>
          We take appropriate technical and organizational measures to protect your personal data
          against unauthorized access, loss, or misuse. This includes the use of encrypted connections
          (HTTPS) and secure storage.
        </p>
      </Section>

      <Section title="10. Complaints">
        <p>
          If you have a complaint about how we process your personal data, please contact us.
          You also have the right to file a complaint with the Dutch Data Protection Authority:{' '}
          <a href="https://autoriteitpersoonsgegevens.nl" target="_blank" rel="noopener noreferrer" className="text-gray-900 underline">
            autoriteitpersoonsgegevens.nl
          </a>
        </p>
      </Section>

      <Section title="11. Changes">
        <p>
          We may update this privacy policy from time to time. The most recent version is always
          available on this page. We will inform you of significant changes.
        </p>
      </Section>

      <Section title="12. Contact">
        <p>
          For questions about this privacy policy or your personal data, please contact us:
        </p>
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
