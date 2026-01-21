import { useState, FormEvent } from 'react'
import { Mail, Phone, MapPin, CheckCircle } from 'lucide-react'
import { PageLayout } from '@/components/layout'
import { Container, Button, Card } from '@/components/ui'
import { useI18n } from '@/lib/i18n'
import contactImage from '@/assets/illustrations/contact.svg'

export function ContactPage() {
  const { t, language } = useI18n()
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    jobTitle: '',
    companySize: '',
    screeningsPerYear: '',
    interests: [] as string[],
    message: '',
  })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    setSubmitted(true)
  }

  const handleInterestToggle = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }))
  }

  const contactInfo = [
    { icon: Mail, label: 'Email', value: t('contact.info.email'), href: `mailto:${t('contact.info.email')}` },
    { icon: Phone, label: language === 'nl' ? 'Telefoon' : 'Phone', value: t('contact.info.phone'), href: `tel:${t('contact.info.phone')}` },
    { icon: MapPin, label: language === 'nl' ? 'Locatie' : 'Location', value: t('contact.info.location'), href: null },
  ]

  const companySizes = language === 'nl'
    ? ['1-10 medewerkers', '11-50 medewerkers', '51-200 medewerkers', '201-500 medewerkers', '500+ medewerkers']
    : ['1-10 employees', '11-50 employees', '51-200 employees', '201-500 employees', '500+ employees']

  const screeningVolumes = language === 'nl'
    ? ['1-10 per jaar', '11-50 per jaar', '51-100 per jaar', '100-500 per jaar', '500+ per jaar']
    : ['1-10 per year', '11-50 per year', '51-100 per year', '100-500 per year', '500+ per year']

  const interestOptions = language === 'nl'
    ? ['Achtergrondverificatie', 'Referentiechecks', 'Diplomaverificatie', 'Digitale analyse', 'Strafrechtelijk onderzoek']
    : ['Background verification', 'Reference checks', 'Education verification', 'Digital analysis', 'Criminal screening']

  return (
    <PageLayout>
      {/* Hero */}
      <section className="pt-24 pb-12 lg:pt-32 lg:pb-16 bg-gradient-to-b from-neutral-50 to-white">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-heading font-bold text-primary-900 leading-tight">
              {t('contact.hero.title')}
            </h1>
            <p className="mt-4 text-xl text-neutral-600">
              {t('contact.hero.subtitle')}
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Form & Info */}
      <section className="py-12 lg:py-20">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Form */}
            <Card padding="lg">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-accent-600" />
                  </div>
                  <h3 className="text-2xl font-heading font-semibold text-primary-900">
                    {t('contact.form.success')}
                  </h3>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-primary-900 mb-1.5">
                        {t('contact.form.name')} *
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-primary-900 mb-1.5">
                        {t('contact.form.email')} *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-primary-900 mb-1.5">
                        {language === 'nl' ? 'Telefoonnummer' : 'Phone number'}
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="jobTitle" className="block text-sm font-medium text-primary-900 mb-1.5">
                        {language === 'nl' ? 'Functie' : 'Job title'} *
                      </label>
                      <input
                        type="text"
                        id="jobTitle"
                        required
                        value={formData.jobTitle}
                        onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
                        placeholder={language === 'nl' ? 'Bijv. HR Manager' : 'e.g. HR Manager'}
                        className="w-full px-4 py-2.5 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-primary-900 mb-1.5">
                      {t('contact.form.company')} *
                    </label>
                    <input
                      type="text"
                      id="company"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-2.5 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none transition-colors"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="companySize" className="block text-sm font-medium text-primary-900 mb-1.5">
                        {language === 'nl' ? 'Bedrijfsgrootte' : 'Company size'} *
                      </label>
                      <select
                        id="companySize"
                        required
                        value={formData.companySize}
                        onChange={(e) => setFormData({ ...formData, companySize: e.target.value })}
                        className="w-full px-4 py-2.5 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none transition-colors bg-white"
                      >
                        <option value="">{language === 'nl' ? 'Selecteer...' : 'Select...'}</option>
                        {companySizes.map(size => (
                          <option key={size} value={size}>{size}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="screeningsPerYear" className="block text-sm font-medium text-primary-900 mb-1.5">
                        {language === 'nl' ? 'Verwachte screenings' : 'Expected screenings'} *
                      </label>
                      <select
                        id="screeningsPerYear"
                        required
                        value={formData.screeningsPerYear}
                        onChange={(e) => setFormData({ ...formData, screeningsPerYear: e.target.value })}
                        className="w-full px-4 py-2.5 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none transition-colors bg-white"
                      >
                        <option value="">{language === 'nl' ? 'Selecteer...' : 'Select...'}</option>
                        {screeningVolumes.map(vol => (
                          <option key={vol} value={vol}>{vol}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-primary-900 mb-2">
                      {language === 'nl' ? 'Interesse in' : 'Interested in'}
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {interestOptions.map(interest => (
                        <button
                          key={interest}
                          type="button"
                          onClick={() => handleInterestToggle(interest)}
                          className={`px-3 py-1.5 text-sm rounded-full border transition-colors ${
                            formData.interests.includes(interest)
                              ? 'bg-accent-100 border-accent-500 text-accent-700'
                              : 'bg-white border-neutral-200 text-neutral-600 hover:border-neutral-300'
                          }`}
                        >
                          {interest}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-primary-900 mb-1.5">
                      {t('contact.form.message')}
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={language === 'nl' ? 'Vertel ons meer over uw behoeften...' : 'Tell us more about your needs...'}
                      className="w-full px-4 py-2.5 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none transition-colors resize-none"
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    {language === 'nl' ? 'Plan een demo' : 'Book a demo'}
                  </Button>
                </form>
              )}
            </Card>

            {/* Info */}
            <div>
              <div className="mb-8">
                <img src={contactImage} alt="" className="w-full max-w-sm" />
              </div>

              <h2 className="text-2xl font-heading font-semibold text-primary-900 mb-6">
                {t('contact.info.title')}
              </h2>

              <div className="space-y-6">
                {contactInfo.map(({ icon: Icon, label, value, href }, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-accent-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-accent-600" />
                    </div>
                    <div>
                      <p className="text-sm text-neutral-500">{label}</p>
                      {href ? (
                        <a href={href} className="text-primary-900 font-medium hover:text-accent-600 transition-colors">
                          {value}
                        </a>
                      ) : (
                        <p className="text-primary-900 font-medium">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </PageLayout>
  )
}
