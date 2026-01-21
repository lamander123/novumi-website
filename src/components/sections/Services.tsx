import { useState } from 'react'
import * as LucideIcons from 'lucide-react'
import { ChevronDown } from 'lucide-react'
import { Container, Card, Button } from '@/components/ui'
import { cn } from '@/lib/cn'

interface Service {
  id: string
  icon: string
  title: string
  description: string
  details: string[]
}

interface ServicesProps {
  title?: string
  subtitle?: string
  services: Service[]
  variant?: 'grid' | 'accordion'
  showCTA?: boolean
}

export function Services({
  title,
  subtitle,
  services,
  variant = 'grid',
  showCTA = false,
}: ServicesProps) {
  const [openItem, setOpenItem] = useState<string | null>(null)

  return (
    <section className="section">
      <Container>
        {(title || subtitle) && (
          <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
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

        {variant === 'accordion' ? (
          <div className="max-w-3xl mx-auto space-y-4">
            {services.map((service) => {
              const IconComponent =
                (LucideIcons as unknown as Record<string, LucideIcons.LucideIcon>)[service.icon] ||
                LucideIcons.Circle
              const isOpen = openItem === service.id

              return (
                <Card key={service.id} padding="none" className="overflow-hidden">
                  <button
                    onClick={() => setOpenItem(isOpen ? null : service.id)}
                    className="w-full p-6 flex items-center gap-4 text-left hover:bg-neutral-50 transition-colors"
                  >
                    <div className="w-10 h-10 bg-accent-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-5 h-5 text-accent-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-heading font-semibold text-primary-900">
                        {service.title}
                      </h3>
                      <p className="text-sm text-neutral-600 mt-1">
                        {service.description}
                      </p>
                    </div>
                    <ChevronDown
                      className={cn(
                        'w-5 h-5 text-neutral-400 transition-transform',
                        isOpen && 'rotate-180'
                      )}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 border-t border-neutral-100">
                      <ul className="space-y-2">
                        {service.details.map((detail, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-2 text-neutral-700"
                          >
                            <span className="w-1.5 h-1.5 bg-accent-500 rounded-full mt-2 flex-shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </Card>
              )
            })}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {services.map((service) => {
              const IconComponent =
                (LucideIcons as unknown as Record<string, LucideIcons.LucideIcon>)[service.icon] ||
                LucideIcons.Circle

              return (
                <Card key={service.id} hoverable padding="lg">
                  <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-accent-600" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl text-primary-900">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-neutral-600">{service.description}</p>
                  <ul className="mt-4 space-y-2">
                    {service.details.slice(0, 4).map((detail, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-sm text-neutral-700"
                      >
                        <span className="w-1.5 h-1.5 bg-accent-500 rounded-full mt-1.5 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </Card>
              )
            })}
          </div>
        )}

        {showCTA && (
          <div className="text-center mt-12">
            <Button href="/contact">Get a Quote</Button>
          </div>
        )}
      </Container>
    </section>
  )
}
