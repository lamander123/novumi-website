import { createContext, useContext, useState, ReactNode } from 'react'

type Language = 'nl' | 'en'

interface I18nContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations: Record<Language, Record<string, string>> = {
  nl: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Diensten',
    'nav.about': 'Over ons',
    'nav.contact': 'Contact',
    'nav.portal': 'Portaal',

    // Hero
    'hero.title': 'Screening dat vindt wat anderen missen.',
    'hero.subtitle': 'Wij combineren traditioneel onderzoek met digitale intelligence. Zo ontdekken we risico\'s die standaard checks missen.',
    'hero.cta.primary': 'Plan een gesprek',
    'hero.cta.secondary': 'Bekijk diensten',

    // Problem section
    'problem.title': 'Het probleem met standaard screening',
    'problem.text': 'Een VOG vertelt je alleen of iemand veroordeeld is—niet of diegene de waarheid vertelt. Standaard screeningbureaus controleren databases, maar bellen zelden de vorige werkgever. En niemand kijkt naar wat online te vinden is.',

    // Solution section
    'solution.title': 'Onze aanpak',
    'solution.text': 'Novumi combineert de grondigheid van een traditioneel onderzoeksbureau met moderne digitale intelligence. Wij verifiëren niet alleen—wij onderzoeken.',

    // Process section
    'process.title': 'Hoe het werkt',
    'process.step1.title': 'Aanvraag',
    'process.step1.desc': 'Dien een aanvraag in via ons portaal. Wij regelen de toestemmingsverklaring met de kandidaat.',
    'process.step2.title': 'Onderzoek',
    'process.step2.desc': 'Ons team verifieert gegevens bij primaire bronnen en voert digitaal onderzoek uit.',
    'process.step3.title': 'Rapport',
    'process.step3.desc': 'U ontvangt een helder rapport met bevindingen en risico-indicatoren. Binnen 48-72 uur.',

    // Benefits
    'benefits.title': 'Waarom Novumi',
    'benefit1.title': 'Verificatie bij de bron',
    'benefit1.desc': 'Wij bellen vorige werkgevers. Contacteren opleidingsinstellingen. Verifiëren licenties bij beroepsregisters.',
    'benefit2.title': 'OSINT-expertise',
    'benefit2.desc': 'Wij analyseren sociale media, openbare registers en digitale sporen om te vinden wat traditionele screening mist.',
    'benefit3.title': 'Rapporten waar je op kunt handelen',
    'benefit3.desc': 'Geen jargon of onduidelijke bevindingen. Onze rapporten geven een helder beeld met concrete risico-indicatoren.',
    'benefit4.title': 'AVG-compliant proces',
    'benefit4.desc': 'Volledige naleving van de AVG en Nederlandse privacywetgeving. Data blijft binnen de EU.',

    // Trust signals
    'trust.turnaround': '48-72 uur',
    'trust.turnaround.label': 'Doorlooptijd',
    'trust.compliant': 'AVG-compliant',
    'trust.compliant.label': 'Privacywetgeving',
    'trust.eu': 'EU-data',
    'trust.eu.label': 'Dataopslag',

    // CTA
    'cta.title': 'Klaar om zeker te weten wie u aanneemt?',
    'cta.desc': 'Plan een vrijblijvend gesprek. Wij lichten onze aanpak toe en bespreken welke screening past bij uw organisatie.',
    'cta.button': 'Plan een gesprek',

    // Services page
    'services.hero.title': 'Onze Diensten',
    'services.hero.subtitle': 'Van referentieverificatie tot digitale analyse—screening afgestemd op uw risicoprofiel en sector.',
    'services.background.title': 'Achtergrondverificatie',
    'services.background.desc': 'Verificatie van werkervaring, opleidingen en professionele referenties bij de bron.',
    'services.criminal.title': 'Strafrechtelijke Screening',
    'services.criminal.desc': 'Controle van justitiële documentatie en sanctielijsten in binnen- en buitenland.',
    'services.digital.title': 'Digitale Analyse',
    'services.digital.desc': 'OSINT-onderzoek naar online aanwezigheid, reputatie en digitale risico\'s.',
    'services.financial.title': 'Financiële Achtergrond',
    'services.financial.desc': 'Integriteitscontrole voor functies met financiële verantwoordelijkheid.',
    'services.cta.title': 'Aangepaste oplossing nodig?',
    'services.cta.desc': 'Elke organisatie heeft een uniek risicoprofiel. Laten we bespreken hoe wij onze diensten kunnen afstemmen op uw specifieke behoeften.',

    // FAQ
    'faq.title': 'Veelgestelde vragen',
    'faq.q1': 'Hoe lang duurt een screening?',
    'faq.a1': 'Standaard achtergrondonderzoeken zijn binnen 48-72 uur afgerond. Uitgebreide screenings, inclusief internationale verificaties, duren 5-7 werkdagen.',
    'faq.q2': 'Is toestemming van de kandidaat vereist?',
    'faq.a2': 'Ja. Wij werken volledig volgens de AVG. Voordat wij beginnen, regelen wij een transparant toestemmingsproces met de kandidaat.',
    'faq.q3': 'Wat is het verschil met een VOG?',
    'faq.a3': 'Een VOG toont alleen aan of iemand relevante strafrechtelijke antecedenten heeft. Onze screening verifieert ook werkervaring, opleidingen, referenties en digitale aanwezigheid.',
    'faq.q4': 'Bieden jullie internationale screening aan?',
    'faq.a4': 'Ja. Wij verifiëren gegevens in de meeste Europese landen en daarbuiten. Doorlooptijden en beschikbare checks variëren per land.',
    'faq.q5': 'Hoe waarborgen jullie databeveiliging?',
    'faq.a5': 'Wij hanteren enterprise-grade beveiligingsmaatregelen: versleutelde dataoverdracht, beveiligde opslag en regelmatige audits. Alle data blijft binnen de EU.',

    // About page
    'about.hero.title': 'Over Novumi',
    'about.hero.subtitle': 'Wij overbruggen traditioneel onderzoek met moderne digitale beveiliging.',
    'about.story.title': 'Ons Verhaal',
    'about.story.p1': 'Onze naam komt van het Latijnse woord "novum", wat nieuw of nieuwe feiten betekent. Het weerspiegelt onze missie: het blootleggen van relevante informatie die ertoe doet voor uw beslissingen.',
    'about.story.p2': 'Traditionele onderzoekers zijn uitstekend in achtergrondchecks maar missen vaak digitale red flags. Cybersecurity bedrijven begrijpen technische dreigingen maar zien soms de menselijke factor over het hoofd. Wij overbruggen deze kloof.',
    'about.values.title': 'Onze Waarden',
    'about.value1.title': 'Waarheid',
    'about.value1.desc': 'Wij achtervolgen feiten meedogenloos, ongeacht waar ze leiden.',
    'about.value2.title': 'Privacy',
    'about.value2.desc': 'Wij behandelen gevoelige informatie met de grootste zorg.',
    'about.value3.title': 'Helderheid',
    'about.value3.desc': 'Complexe bevindingen betekenen niets als ze niet begrepen kunnen worden.',

    // Contact page
    'contact.hero.title': 'Neem Contact Op',
    'contact.hero.subtitle': 'Vragen over onze diensten? Wij helpen u graag.',
    'contact.form.name': 'Naam',
    'contact.form.email': 'E-mail',
    'contact.form.phone': 'Telefoonnummer',
    'contact.form.jobTitle': 'Functie',
    'contact.form.company': 'Bedrijf',
    'contact.form.companySize': 'Bedrijfsgrootte',
    'contact.form.screenings': 'Verwachte screenings',
    'contact.form.interests': 'Interesse in',
    'contact.form.message': 'Bericht',
    'contact.form.submit': 'Verstuur bericht',
    'contact.form.success': 'Bericht verzonden! Wij nemen binnen 24 uur contact met u op.',
    'contact.info.title': 'Contact',
    'contact.info.email': 'info@novumi.nl',
    'contact.info.phone': '+31 (0)20 123 4567',
    'contact.info.location': 'Amsterdam, Nederland',

    // Footer
    'footer.privacy': 'Privacybeleid',
    'footer.terms': 'Algemene voorwaarden',
    'footer.rights': 'Alle rechten voorbehouden.',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.portal': 'Portal',

    // Hero
    'hero.title': 'Screening that finds what others miss.',
    'hero.subtitle': 'We combine traditional investigation with digital intelligence. Uncovering risks that standard checks miss.',
    'hero.cta.primary': 'Schedule a call',
    'hero.cta.secondary': 'View services',

    // Problem section
    'problem.title': 'The problem with standard screening',
    'problem.text': 'A criminal record check only tells you if someone was convicted—not if they\'re telling the truth. Standard screening agencies check databases but rarely call the previous employer. And no one looks at what\'s findable online.',

    // Solution section
    'solution.title': 'Our approach',
    'solution.text': 'Novumi combines the thoroughness of a traditional investigation firm with modern digital intelligence. We don\'t just verify—we investigate.',

    // Process section
    'process.title': 'How it works',
    'process.step1.title': 'Request',
    'process.step1.desc': 'Submit a request via our portal. We handle the consent process with the candidate.',
    'process.step2.title': 'Investigation',
    'process.step2.desc': 'Our team verifies information at primary sources and conducts digital investigation.',
    'process.step3.title': 'Report',
    'process.step3.desc': 'You receive a clear report with findings and risk indicators. Within 48-72 hours.',

    // Benefits
    'benefits.title': 'Why Novumi',
    'benefit1.title': 'Verification at the source',
    'benefit1.desc': 'We call previous employers. Contact educational institutions. Verify licenses at professional registers.',
    'benefit2.title': 'OSINT expertise',
    'benefit2.desc': 'We analyze social media, public records, and digital traces to find what traditional screening misses.',
    'benefit3.title': 'Reports you can act on',
    'benefit3.desc': 'No jargon or unclear findings. Our reports provide a clear picture with concrete risk indicators.',
    'benefit4.title': 'GDPR-compliant process',
    'benefit4.desc': 'Full compliance with GDPR and Dutch privacy law. Data stays within the EU.',

    // Trust signals
    'trust.turnaround': '48-72 hours',
    'trust.turnaround.label': 'Turnaround',
    'trust.compliant': 'GDPR-compliant',
    'trust.compliant.label': 'Privacy law',
    'trust.eu': 'EU data',
    'trust.eu.label': 'Data storage',

    // CTA
    'cta.title': 'Ready to know who you\'re hiring?',
    'cta.desc': 'Schedule a no-obligation call. We\'ll explain our approach and discuss which screening fits your organization.',
    'cta.button': 'Schedule a call',

    // Services page
    'services.hero.title': 'Our Services',
    'services.hero.subtitle': 'From reference verification to digital analysis—screening tailored to your risk profile and sector.',
    'services.background.title': 'Background Verification',
    'services.background.desc': 'Verification of work experience, education, and professional references at the source.',
    'services.criminal.title': 'Criminal Screening',
    'services.criminal.desc': 'Verification of criminal records and sanctions lists domestically and internationally.',
    'services.digital.title': 'Digital Analysis',
    'services.digital.desc': 'OSINT investigation into online presence, reputation, and digital risks.',
    'services.financial.title': 'Financial Background',
    'services.financial.desc': 'Integrity check for positions with financial responsibility.',
    'services.cta.title': 'Need a custom solution?',
    'services.cta.desc': 'Every organization has a unique risk profile. Let\'s discuss how we can tailor our services to your specific needs.',

    // FAQ
    'faq.title': 'Frequently asked questions',
    'faq.q1': 'How long does a screening take?',
    'faq.a1': 'Standard background investigations are completed within 48-72 hours. Comprehensive screenings, including international verifications, take 5-7 business days.',
    'faq.q2': 'Is candidate consent required?',
    'faq.a2': 'Yes. We work fully in accordance with GDPR. Before we begin, we arrange a transparent consent process with the candidate.',
    'faq.q3': 'What\'s the difference with a VOG?',
    'faq.a3': 'A VOG only shows if someone has relevant criminal history. Our screening also verifies work experience, education, references, and digital presence.',
    'faq.q4': 'Do you offer international screening?',
    'faq.a4': 'Yes. We verify information in most European countries and beyond. Turnaround times and available checks vary by country.',
    'faq.q5': 'How do you ensure data security?',
    'faq.a5': 'We employ enterprise-grade security measures: encrypted data transfer, secure storage, and regular audits. All data remains within the EU.',

    // About page
    'about.hero.title': 'About Novumi',
    'about.hero.subtitle': 'We bridge traditional investigation with modern digital security.',
    'about.story.title': 'Our Story',
    'about.story.p1': 'Our name comes from the Latin word "novum", meaning new or novel facts. It reflects our mission: to uncover the relevant information that matters for your decisions.',
    'about.story.p2': 'Traditional investigators excel at background checks but often miss digital red flags. Cybersecurity firms understand technical threats but may overlook the human element. We bridge this gap.',
    'about.values.title': 'Our Values',
    'about.value1.title': 'Truth',
    'about.value1.desc': 'We pursue facts relentlessly, regardless of where they lead.',
    'about.value2.title': 'Privacy',
    'about.value2.desc': 'We handle sensitive information with the utmost care.',
    'about.value3.title': 'Clarity',
    'about.value3.desc': 'Complex findings mean nothing if they can\'t be understood.',

    // Contact page
    'contact.hero.title': 'Get in Touch',
    'contact.hero.subtitle': 'Questions about our services? We\'re here to help.',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.phone': 'Phone number',
    'contact.form.jobTitle': 'Job title',
    'contact.form.company': 'Company',
    'contact.form.companySize': 'Company size',
    'contact.form.screenings': 'Expected screenings',
    'contact.form.interests': 'Interested in',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Send message',
    'contact.form.success': 'Message sent! We\'ll get back to you within 24 hours.',
    'contact.info.title': 'Contact',
    'contact.info.email': 'info@novumi.nl',
    'contact.info.phone': '+31 (0)20 123 4567',
    'contact.info.location': 'Amsterdam, Netherlands',

    // Footer
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.rights': 'All rights reserved.',
  },
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('nl')

  const t = (key: string): string => {
    return translations[language][key] || key
  }

  return (
    <I18nContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error('useI18n must be used within I18nProvider')
  }
  return context
}

export function LanguageToggle() {
  const { language, setLanguage } = useI18n()

  return (
    <button
      onClick={() => setLanguage(language === 'nl' ? 'en' : 'nl')}
      className="flex items-center gap-1.5 px-2.5 py-1.5 text-sm font-medium text-gray-500 hover:text-gray-900 rounded-md hover:bg-gray-100 transition-colors"
    >
      <span className={language === 'nl' ? 'text-gray-900' : ''}>NL</span>
      <span className="text-gray-300">/</span>
      <span className={language === 'en' ? 'text-gray-900' : ''}>EN</span>
    </button>
  )
}
