import { useState, FormEvent } from 'react'
import { Container, Button, Card } from '@/components/ui'
import { Mail, Phone, MapPin } from 'lucide-react'

interface ContactInfo {
  email: string
  phone: string
  location: string
}

interface ContactFormProps {
  title?: string
  subtitle?: string
  contactInfo: ContactInfo
}

export function ContactForm({ title, subtitle, contactInfo }: ContactFormProps) {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    setSubmitted(true)
  }

  return (
    <section className="section bg-neutral-50">
      <Container>
        {(title || subtitle) && (
          <div className="text-center max-w-3xl mx-auto mb-12">
            {title && (
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-900">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-4 text-lg text-neutral-600">{subtitle}</p>
            )}
          </div>
        )}

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact info */}
          <div>
            <h3 className="font-heading font-semibold text-xl text-primary-900 mb-6">
              Get in Touch
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-accent-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-accent-600" />
                </div>
                <div>
                  <p className="font-medium text-primary-900">Email</p>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="text-neutral-600 hover:text-accent-600 transition-colors"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-accent-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-accent-600" />
                </div>
                <div>
                  <p className="font-medium text-primary-900">Phone</p>
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="text-neutral-600 hover:text-accent-600 transition-colors"
                  >
                    {contactInfo.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-accent-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-accent-600" />
                </div>
                <div>
                  <p className="font-medium text-primary-900">Location</p>
                  <p className="text-neutral-600">{contactInfo.location}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <Card padding="lg">
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-verified-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="font-heading font-semibold text-xl text-primary-900">
                  Message Sent
                </h3>
                <p className="mt-2 text-neutral-600">
                  We'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-primary-900 mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-primary-900 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-primary-900 mb-1"
                  >
                    Company (optional)
                  </label>
                  <input
                    type="text"
                    id="company"
                    value={formState.company}
                    onChange={(e) =>
                      setFormState({ ...formState, company: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-primary-900 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none transition-colors resize-none"
                  />
                </div>

                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            )}
          </Card>
        </div>
      </Container>
    </section>
  )
}
