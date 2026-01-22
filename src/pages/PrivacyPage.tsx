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
          Novumi ("wij", "ons", "onze") respecteert uw privacy en is toegewijd aan het beschermen van uw persoonsgegevens.
          Dit privacybeleid informeert u over hoe wij omgaan met uw persoonsgegevens wanneer u onze website bezoekt en
          informeert u over uw privacyrechten en hoe de wet u beschermt.
        </p>
      </Section>

      <Section title="2. Verwerkingsverantwoordelijke">
        <p>
          Novumi is de verwerkingsverantwoordelijke voor de persoonsgegevens die via deze website worden verzameld.
        </p>
        <ul>
          <li>Bedrijfsnaam: Novumi</li>
          <li>Vestigingsplaats: Amsterdam, Nederland</li>
          <li>E-mail: info@novumi.nl</li>
        </ul>
      </Section>

      <Section title="3. Welke gegevens verzamelen wij">
        <p>Wij verzamelen en verwerken de volgende categorieën persoonsgegevens:</p>

        <h4 className="font-semibold mt-4">3.1 Gegevens die u ons verstrekt</h4>
        <p>Wanneer u ons contactformulier invult, verzamelen wij:</p>
        <ul>
          <li>Naam</li>
          <li>E-mailadres</li>
          <li>Telefoonnummer (optioneel)</li>
          <li>Bedrijfsnaam en functie</li>
          <li>Bedrijfsgrootte</li>
          <li>Verwachte screenings per jaar</li>
          <li>Interesses in diensten</li>
          <li>Uw bericht</li>
        </ul>

        <h4 className="font-semibold mt-4">3.2 Automatisch verzamelde gegevens</h4>
        <p>Wanneer u onze website bezoekt, verzamelen wij automatisch:</p>
        <ul>
          <li>IP-adres (geanonimiseerd)</li>
          <li>Browsertype en -versie</li>
          <li>Apparaatinformatie</li>
          <li>Pagina's die u bezoekt</li>
          <li>Tijd en duur van uw bezoek</li>
          <li>Klikgedrag en scrollgedrag</li>
        </ul>
      </Section>

      <Section title="4. Doeleinden en rechtsgrond">
        <p>Wij verwerken uw persoonsgegevens voor de volgende doeleinden:</p>
        <ul>
          <li><strong>Contactverzoeken afhandelen:</strong> Om te reageren op uw vragen en verzoeken (rechtsgrond: uitvoering van een overeenkomst of precontractuele maatregelen)</li>
          <li><strong>Website verbeteren:</strong> Om onze website en gebruikerservaring te analyseren en verbeteren (rechtsgrond: gerechtvaardigd belang)</li>
          <li><strong>Beveiliging:</strong> Om de veiligheid van onze website te waarborgen (rechtsgrond: gerechtvaardigd belang)</li>
        </ul>
      </Section>

      <Section title="5. Cookies en tracking">
        <p>
          Wij gebruiken Microsoft Clarity voor website-analyse. Clarity verzamelt informatie over hoe bezoekers
          onze website gebruiken, inclusief sessie-opnames en heatmaps. Deze informatie helpt ons de
          gebruikerservaring te verbeteren.
        </p>
        <p>
          Microsoft Clarity plaatst cookies op uw apparaat. Voor meer informatie over hoe Microsoft gegevens
          verwerkt, verwijzen wij naar het{' '}
          <a href="https://privacy.microsoft.com/privacystatement" target="_blank" rel="noopener noreferrer" className="text-gray-900 underline">
            privacybeleid van Microsoft
          </a>.
        </p>
      </Section>

      <Section title="6. Delen van gegevens">
        <p>Wij delen uw persoonsgegevens met de volgende partijen:</p>
        <ul>
          <li><strong>Microsoft Clarity:</strong> Voor website-analyse (verwerker in de VS, EU-VS Data Privacy Framework)</li>
          <li><strong>Hosting provider:</strong> Cloudflare (voor het hosten van onze website)</li>
        </ul>
        <p>
          Wij verkopen uw persoonsgegevens niet aan derden.
        </p>
      </Section>

      <Section title="7. Bewaartermijnen">
        <ul>
          <li><strong>Contactformuliergegevens:</strong> 2 jaar na laatste contact</li>
          <li><strong>Analytische gegevens:</strong> 26 maanden</li>
        </ul>
      </Section>

      <Section title="8. Uw rechten">
        <p>Onder de AVG heeft u de volgende rechten:</p>
        <ul>
          <li><strong>Recht op inzage:</strong> U kunt opvragen welke gegevens wij van u hebben</li>
          <li><strong>Recht op rectificatie:</strong> U kunt onjuiste gegevens laten corrigeren</li>
          <li><strong>Recht op verwijdering:</strong> U kunt verzoeken uw gegevens te verwijderen</li>
          <li><strong>Recht op beperking:</strong> U kunt de verwerking laten beperken</li>
          <li><strong>Recht op overdraagbaarheid:</strong> U kunt uw gegevens opvragen in een standaardformaat</li>
          <li><strong>Recht van bezwaar:</strong> U kunt bezwaar maken tegen verwerking op basis van gerechtvaardigd belang</li>
        </ul>
        <p>
          Om uw rechten uit te oefenen, kunt u contact met ons opnemen via info@novumi.nl.
        </p>
      </Section>

      <Section title="9. Beveiliging">
        <p>
          Wij nemen passende technische en organisatorische maatregelen om uw persoonsgegevens te beschermen
          tegen ongeoorloofde toegang, verlies of misbruik. Dit omvat het gebruik van versleutelde verbindingen
          (HTTPS) en beveiligde opslag.
        </p>
      </Section>

      <Section title="10. Klachten">
        <p>
          Als u een klacht heeft over hoe wij uw persoonsgegevens verwerken, kunt u contact met ons opnemen.
          U heeft ook het recht om een klacht in te dienen bij de Autoriteit Persoonsgegevens:{' '}
          <a href="https://autoriteitpersoonsgegevens.nl" target="_blank" rel="noopener noreferrer" className="text-gray-900 underline">
            autoriteitpersoonsgegevens.nl
          </a>
        </p>
      </Section>

      <Section title="11. Wijzigingen">
        <p>
          Wij kunnen dit privacybeleid van tijd tot tijd bijwerken. De meest recente versie is altijd
          beschikbaar op deze pagina. Bij belangrijke wijzigingen zullen wij u hierover informeren.
        </p>
      </Section>

      <Section title="12. Contact">
        <p>
          Voor vragen over dit privacybeleid of uw persoonsgegevens kunt u contact met ons opnemen:
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
          We use Microsoft Clarity for website analytics. Clarity collects information about how visitors
          use our website, including session recordings and heatmaps. This information helps us improve
          the user experience.
        </p>
        <p>
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
