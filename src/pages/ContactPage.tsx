import { useState, FormEvent } from 'react'
import { Mail, Phone, MapPin, CheckCircle, Loader2 } from 'lucide-react'
import { PageLayout } from '@/components/layout'
import { Container, Button, Card } from '@/components/ui'
import { SEO } from '@/components/SEO'
import { useI18n } from '@/lib/i18n'

export function ContactPage() {
  const { t, language } = useI18n()
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
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

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      setSubmitted(true)
    } catch {
      setError(
        language === 'nl'
          ? 'Er is iets misgegaan. Probeer het opnieuw of mail ons direct.'
          : 'Something went wrong. Please try again or email us directly.'
      )
    } finally {
      setLoading(false)
    }
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

  const inputClasses = 'w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-gray-900 outline-none transition-colors text-gray-900 placeholder:text-gray-400'
  const labelClasses = 'block text-sm font-medium text-gray-900 mb-1.5'

  return (
    <PageLayout>
      <SEO
        title={language === 'nl' ? 'Contact' : 'Contact'}
        description={t('contact.hero.subtitle')}
        canonical="/contact"
      />

      {/* Hero */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16">
        <Container size="md">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 tracking-tight leading-[1.1]">
              {t('contact.hero.title')}
            </h1>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              {t('contact.hero.subtitle')}
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Form & Info */}
      <section className="py-12 md:py-20">
        <Container>
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-20">
            {/* Form */}
            <div className="lg:col-span-3">
              <Card padding="lg">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-12 h-12 bg-accent-50 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-6 h-6 text-accent-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {t('contact.form.success')}
                    </h3>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className={labelClasses}>
                          {t('contact.form.name')} *
                        </label>
                        <input
                          type="text"
                          id="name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className={inputClasses}
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className={labelClasses}>
                          {t('contact.form.email')} *
                        </label>
                        <input
                          type="email"
                          id="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className={inputClasses}
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="phone" className={labelClasses}>
                          {t('contact.form.phone')}
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className={inputClasses}
                        />
                      </div>
                      <div>
                        <label htmlFor="jobTitle" className={labelClasses}>
                          {t('contact.form.jobTitle')} *
                        </label>
                        <input
                          type="text"
                          id="jobTitle"
                          required
                          value={formData.jobTitle}
                          onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
                          placeholder={language === 'nl' ? 'Bijv. HR Manager' : 'e.g. HR Manager'}
                          className={inputClasses}
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="company" className={labelClasses}>
                        {t('contact.form.company')} *
                      </label>
                      <input
                        type="text"
                        id="company"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className={inputClasses}
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="companySize" className={labelClasses}>
                          {t('contact.form.companySize')} *
                        </label>
                        <select
                          id="companySize"
                          required
                          value={formData.companySize}
                          onChange={(e) => setFormData({ ...formData, companySize: e.target.value })}
                          className={`${inputClasses} bg-white`}
                        >
                          <option value="">{language === 'nl' ? 'Selecteer...' : 'Select...'}</option>
                          {companySizes.map(size => (
                            <option key={size} value={size}>{size}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="screeningsPerYear" className={labelClasses}>
                          {t('contact.form.screenings')} *
                        </label>
                        <select
                          id="screeningsPerYear"
                          required
                          value={formData.screeningsPerYear}
                          onChange={(e) => setFormData({ ...formData, screeningsPerYear: e.target.value })}
                          className={`${inputClasses} bg-white`}
                        >
                          <option value="">{language === 'nl' ? 'Selecteer...' : 'Select...'}</option>
                          {screeningVolumes.map(vol => (
                            <option key={vol} value={vol}>{vol}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className={labelClasses}>
                        {t('contact.form.interests')}
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {interestOptions.map(interest => (
                          <button
                            key={interest}
                            type="button"
                            onClick={() => handleInterestToggle(interest)}
                            className={`px-3 py-1.5 text-sm rounded-lg border transition-colors ${
                              formData.interests.includes(interest)
                                ? 'bg-gray-900 border-gray-900 text-white'
                                : 'bg-white border-gray-200 text-gray-600 hover:border-gray-300'
                            }`}
                          >
                            {interest}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className={labelClasses}>
                        {t('contact.form.message')}
                      </label>
                      <textarea
                        id="message"
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder={language === 'nl' ? 'Vertel ons meer over uw behoeften...' : 'Tell us more about your needs...'}
                        className={`${inputClasses} resize-none`}
                      />
                    </div>

                    {error && (
                      <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                        {error}
                      </div>
                    )}

                    <Button type="submit" className="w-full" size="lg" disabled={loading}>
                      {loading ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          {language === 'nl' ? 'Verzenden...' : 'Sending...'}
                        </>
                      ) : (
                        t('contact.form.submit')
                      )}
                    </Button>
                  </form>
                )}
              </Card>
            </div>

            {/* Info */}
            <div className="lg:col-span-2">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">
                {t('contact.info.title')}
              </h2>

              <div className="space-y-6">
                {contactInfo.map(({ icon: Icon, label, value, href }, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <Icon className="w-5 h-5 text-gray-400 mt-0.5" strokeWidth={1.5} />
                    <div>
                      <p className="text-sm text-gray-500">{label}</p>
                      {href ? (
                        <a href={href} className="text-gray-900 font-medium hover:text-accent-600 transition-colors">
                          {value}
                        </a>
                      ) : (
                        <p className="text-gray-900 font-medium">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-4">
                  {language === 'nl' ? 'Responstijd' : 'Response time'}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {language === 'nl'
                    ? 'Wij reageren binnen 24 uur op alle aanvragen. Voor dringende zaken kunt u ons telefonisch bereiken.'
                    : 'We respond to all inquiries within 24 hours. For urgent matters, you can reach us by phone.'}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </PageLayout>
  )
}
