import * as LucideIcons from 'lucide-react'
import { Container, Button } from '@/components/ui'
import { cn } from '@/lib/cn'

interface FeatureRowProps {
  title: string
  description: string
  icon: string
  imagePosition?: 'left' | 'right'
  cta?: { text: string; href: string }
  highlights?: string[]
}

export function FeatureRow({
  title,
  description,
  icon,
  imagePosition = 'right',
  cta,
  highlights,
}: FeatureRowProps) {
  const IconComponent =
    (LucideIcons as unknown as Record<string, LucideIcons.LucideIcon>)[icon] ||
    LucideIcons.Circle

  const isLeft = imagePosition === 'left'

  return (
    <section className="py-20 md:py-28">
      <Container>
        <div className={cn(
          'grid lg:grid-cols-2 gap-12 lg:gap-20 items-center',
          isLeft && 'lg:grid-flow-dense'
        )}>
          {/* Text content */}
          <div className={cn(isLeft && 'lg:col-start-2')}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-900 leading-tight">
              {title}
            </h2>
            <p className="mt-6 text-lg text-neutral-600 leading-relaxed">
              {description}
            </p>

            {highlights && highlights.length > 0 && (
              <ul className="mt-8 space-y-3">
                {highlights.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <LucideIcons.Check className="w-5 h-5 text-accent-500 mt-0.5 flex-shrink-0" />
                    <span className="text-neutral-700">{item}</span>
                  </li>
                ))}
              </ul>
            )}

            {cta && (
              <div className="mt-8">
                <Button href={cta.href}>{cta.text}</Button>
              </div>
            )}
          </div>

          {/* Icon/visual */}
          <div className={cn(
            'flex justify-center',
            isLeft && 'lg:col-start-1'
          )}>
            <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-primary-50 to-accent-50 rounded-3xl flex items-center justify-center">
              <IconComponent className="w-24 h-24 md:w-32 md:h-32 text-accent-500" strokeWidth={1.5} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
