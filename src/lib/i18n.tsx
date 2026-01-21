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
    'nav.portal': 'Klantenportaal',

    // Hero
    'hero.subtitle': 'In een wereld waar referenties vervalst kunnen worden en verledens verborgen blijven, heeft u iemand nodig die de waarheid kan vinden.',
    'hero.cta.primary': 'Start screening',
    'hero.cta.secondary': 'Bekijk diensten',
    'hero.cta.demo': 'Plan een demo',

    // Stats
    'stats.screenings': 'Screenings',
    'stats.clients': 'Klanten',
    'stats.accuracy': 'Nauwkeurigheid',
    'stats.countries': 'EU Landen',

    // Trust bar
    'trust.verified.title': 'Geverifieerd',
    'trust.verified.desc': 'Elke claim gecontroleerd bij officiële bronnen',
    'trust.secure.title': 'Veilig',
    'trust.secure.desc': 'AVG-compliant met enterprise-grade beveiliging',
    'trust.fast.title': 'Snel',
    'trust.fast.desc': 'Resultaten binnen 48-72 uur',

    // Process section
    'process.title': 'Hoe het werkt',
    'process.subtitle': 'Een eenvoudig en transparant proces van aanvraag tot rapport',
    'process.step1.title': 'Aanvraag indienen',
    'process.step1.desc': 'Vul het aanvraagformulier in met de gegevens van de kandidaat. Wij regelen de toestemmingsverklaring.',
    'process.step2.title': 'Onderzoek',
    'process.step2.desc': 'Ons team verifieert alle gegevens bij primaire bronnen en voert een grondige analyse uit.',
    'process.step3.title': 'Rapport ontvangen',
    'process.step3.desc': 'U ontvangt een helder rapport met alle bevindingen en een duidelijke risicobeoordeling.',

    // Features
    'feature1.title': 'Achtergrondverificatie die verder gaat',
    'feature1.desc': 'Standaard checks missen wat ertoe doet. Wij verifiëren werkgeschiedenis, opleidingen en professionele licenties bij primaire bronnen—niet alleen databases.',
    'feature1.point1': 'Directe verificatie bij instellingen',
    'feature1.point2': 'Internationale credential checks',
    'feature1.point3': 'Validatie van professionele licenties',

    'feature2.title': 'Digitale voetafdruk analyse',
    'feature2.desc': 'Risico bestaat vandaag online. Wij onderzoeken social media aanwezigheid, openbare registers en digitaal gedrag om te onthullen wat traditionele screening mist.',
    'feature2.point1': 'Social media onderzoek',
    'feature2.point2': 'Datalek exposure check',
    'feature2.point3': 'Online reputatie beoordeling',

    'feature3.title': 'Heldere, bruikbare rapportages',
    'feature3.desc': 'Geen jargon, geen giswerk. Onze rapporten geven u het complete beeld met duidelijke bevindingen en risicobeoordelingen waar u naar kunt handelen.',
    'feature3.point1': 'Executive summary met kernbevindingen',
    'feature3.point2': 'Risico-indicatoren uitgelicht',
    'feature3.point3': 'Ondersteunende documentatie bijgevoegd',

    // Testimonials
    'testimonials.title': 'Wat onze klanten zeggen',
    'testimonial1.quote': 'Novumi heeft ons geholpen een cruciale mismatch te ontdekken die andere screeningbedrijven hadden gemist. Hun grondigheid is onovertroffen.',
    'testimonial1.author': 'HR Director',
    'testimonial1.company': 'Tech Scale-up',
    'testimonial2.quote': 'De snelheid en duidelijkheid van hun rapporten heeft ons aanwervingsproces aanzienlijk verbeterd.',
    'testimonial2.author': 'Operations Manager',
    'testimonial2.company': 'Financiële Dienstverlening',

    // CTA
    'cta.title': 'Klaar voor betrouwbare aannamebeslissingen?',
    'cta.desc': 'Start met Novumi en ontdek de waarheid achter elke kandidaat.',
    'cta.button': 'Neem contact op',

    // Services page
    'services.hero.title': 'Onze Diensten',
    'services.hero.subtitle': 'Van standaard achtergrondchecks tot uitgebreide digitale onderzoeken—wij stemmen onze aanpak af op uw risicoprofiel.',
    'services.background.title': 'Achtergrondverificatie',
    'services.background.desc': 'Uitgebreide verificatie van werkgeschiedenis, opleidingen en professionele referenties.',
    'services.criminal.title': 'Strafrechtelijke Screening',
    'services.criminal.desc': 'Grondige controle van justitiële gegevens in meerdere jurisdicties.',
    'services.digital.title': 'Digitale Analyse',
    'services.digital.desc': 'Moderne screening die online aanwezigheid en digitaal gedrag onderzoekt.',
    'services.financial.title': 'Financiële Achtergrond',
    'services.financial.desc': 'Financiële integriteitscontrole voor functies met financiële verantwoordelijkheid.',
    'services.cta.title': 'Aangepaste oplossing nodig?',
    'services.cta.desc': 'Elke organisatie heeft een uniek risicoprofiel. Laten we bespreken hoe wij onze diensten kunnen afstemmen op uw specifieke behoeften.',

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
    'about.team.title': 'Ons Team',
    'about.team.subtitle': 'Een mix van onderzoeksexpertise, technische kennis en compliance-begrip.',

    // Contact page
    'contact.hero.title': 'Neem Contact Op',
    'contact.hero.subtitle': 'Vragen over onze diensten? Wij helpen u graag.',
    'contact.form.name': 'Naam',
    'contact.form.email': 'E-mail',
    'contact.form.company': 'Bedrijf',
    'contact.form.message': 'Bericht',
    'contact.form.submit': 'Verstuur bericht',
    'contact.form.success': 'Bericht verzonden! Wij nemen binnen 24 uur contact met u op.',
    'contact.info.title': 'Contact Informatie',
    'contact.info.email': 'info@novumi.nl',
    'contact.info.phone': '+31 (0)20 123 4567',
    'contact.info.location': 'Amsterdam, Nederland',

    // Footer
    'footer.tagline': 'Wij overbruggen traditioneel onderzoek met moderne digitale beveiliging.',
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
    'nav.portal': 'Client Portal',

    // Hero
    'hero.subtitle': 'In a world where credentials can be fabricated and histories hidden, you need someone who can find the truth.',
    'hero.cta.primary': 'Start screening',
    'hero.cta.secondary': 'View services',
    'hero.cta.demo': 'Book a demo',

    // Stats
    'stats.screenings': 'Screenings',
    'stats.clients': 'Clients',
    'stats.accuracy': 'Accuracy',
    'stats.countries': 'EU Countries',

    // Trust bar
    'trust.verified.title': 'Verified',
    'trust.verified.desc': 'Every claim checked against authoritative sources',
    'trust.secure.title': 'Secure',
    'trust.secure.desc': 'GDPR compliant with enterprise-grade security',
    'trust.fast.title': 'Fast',
    'trust.fast.desc': 'Results delivered within 48-72 hours',

    // Process section
    'process.title': 'How it works',
    'process.subtitle': 'A simple and transparent process from request to report',
    'process.step1.title': 'Submit request',
    'process.step1.desc': 'Fill out the request form with the candidate details. We handle the consent process.',
    'process.step2.title': 'Investigation',
    'process.step2.desc': 'Our team verifies all information against primary sources and conducts thorough analysis.',
    'process.step3.title': 'Receive report',
    'process.step3.desc': 'You receive a clear report with all findings and a straightforward risk assessment.',

    // Features
    'feature1.title': 'Background verification that goes deeper',
    'feature1.desc': 'Standard checks miss what matters. We verify employment history, education credentials, and professional licenses against primary sources—not just databases.',
    'feature1.point1': 'Direct verification with institutions',
    'feature1.point2': 'International credential checks',
    'feature1.point3': 'Professional license validation',

    'feature2.title': 'Digital footprint analysis',
    'feature2.desc': 'Risk today exists online. We examine social media presence, public records, and digital behavior patterns to reveal what traditional screening misses.',
    'feature2.point1': 'Social media review',
    'feature2.point2': 'Data breach exposure check',
    'feature2.point3': 'Online reputation assessment',

    'feature3.title': 'Clear, actionable reports',
    'feature3.desc': 'No jargon, no guesswork. Our reports give you the complete picture with clear findings and risk assessments you can act on.',
    'feature3.point1': 'Executive summary with key findings',
    'feature3.point2': 'Risk indicators highlighted',
    'feature3.point3': 'Supporting documentation included',

    // Testimonials
    'testimonials.title': 'What our clients say',
    'testimonial1.quote': 'Novumi helped us discover a critical mismatch that other screening companies had missed. Their thoroughness is unmatched.',
    'testimonial1.author': 'HR Director',
    'testimonial1.company': 'Tech Scale-up',
    'testimonial2.quote': 'The speed and clarity of their reports has significantly improved our hiring process.',
    'testimonial2.author': 'Operations Manager',
    'testimonial2.company': 'Financial Services',

    // CTA
    'cta.title': 'Ready to make confident hiring decisions?',
    'cta.desc': 'Get started with Novumi and discover the truth behind every candidate.',
    'cta.button': 'Contact us',

    // Services page
    'services.hero.title': 'Our Services',
    'services.hero.subtitle': 'From standard background checks to comprehensive digital investigations—we tailor our approach to your risk profile.',
    'services.background.title': 'Background Verification',
    'services.background.desc': 'Comprehensive verification of employment history, education, and professional credentials.',
    'services.criminal.title': 'Criminal Screening',
    'services.criminal.desc': 'Thorough criminal background checks across multiple jurisdictions.',
    'services.digital.title': 'Digital Analysis',
    'services.digital.desc': 'Modern screening that examines online presence and digital behavior.',
    'services.financial.title': 'Financial Background',
    'services.financial.desc': 'Financial integrity verification for positions with fiscal responsibility.',
    'services.cta.title': 'Need a custom solution?',
    'services.cta.desc': 'Every organization has a unique risk profile. Let\'s discuss how we can tailor our services to your specific needs.',

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
    'about.team.title': 'Our Team',
    'about.team.subtitle': 'A blend of investigative expertise, technical knowledge, and compliance understanding.',

    // Contact page
    'contact.hero.title': 'Get in Touch',
    'contact.hero.subtitle': 'Questions about our services? We\'re here to help.',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.company': 'Company',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Send message',
    'contact.form.success': 'Message sent! We\'ll get back to you within 24 hours.',
    'contact.info.title': 'Contact Information',
    'contact.info.email': 'info@novumi.nl',
    'contact.info.phone': '+31 (0)20 123 4567',
    'contact.info.location': 'Amsterdam, Netherlands',

    // Footer
    'footer.tagline': 'Bridging traditional investigation with modern digital security.',
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
      className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-neutral-600 hover:text-primary-900 rounded-full hover:bg-neutral-100 transition-colors"
    >
      <span className={language === 'nl' ? 'font-semibold text-primary-900' : ''}>NL</span>
      <span className="text-neutral-300">|</span>
      <span className={language === 'en' ? 'font-semibold text-primary-900' : ''}>EN</span>
    </button>
  )
}
