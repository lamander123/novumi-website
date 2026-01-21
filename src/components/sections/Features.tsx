import * as LucideIcons from 'lucide-react'
import { Container, Card } from '@/components/ui'
import { cn } from '@/lib/cn'

interface Feature {
  icon: string
  title: string
  description: string
}

interface FeaturesProps {
  title?: string
  subtitle?: string
  features: Feature[]
  columns?: 2 | 3 | 4
  variant?: 'cards' | 'simple'
}

const columnClasses = {
  2: 'md:grid-cols-2',
  3: 'md:grid-cols-2 lg:grid-cols-3',
  4: 'md:grid-cols-2 lg:grid-cols-4',
}

export function Features({
  title,
  subtitle,
  features,
  columns = 3,
  variant = 'cards',
}: FeaturesProps) {
  return (
    <section className="section bg-neutral-50">
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

        <div className={cn('grid gap-6 lg:gap-8', columnClasses[columns])}>
          {features.map((feature, index) => {
            const IconComponent =
              (LucideIcons as unknown as Record<string, LucideIcons.LucideIcon>)[feature.icon] ||
              LucideIcons.Circle

            if (variant === 'simple') {
              return (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-accent-600" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-primary-900">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-neutral-600">{feature.description}</p>
                  </div>
                </div>
              )
            }

            return (
              <Card key={index} hoverable padding="lg">
                <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mb-4">
                  <IconComponent className="w-6 h-6 text-accent-600" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-primary-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-neutral-600">{feature.description}</p>
              </Card>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
