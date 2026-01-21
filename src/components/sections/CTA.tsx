import { Container, Button } from '@/components/ui'
import { cn } from '@/lib/cn'

interface CTAProps {
  headline: string
  description?: string
  primaryButton: { text: string; href: string }
  secondaryButton?: { text: string; href: string }
  variant?: 'default' | 'centered'
  background?: 'primary' | 'accent' | 'gradient'
}

const backgrounds = {
  primary: 'bg-primary-900',
  accent: 'bg-accent-600',
  gradient: 'bg-gradient-to-r from-primary-900 via-primary-800 to-primary-900',
}

export function CTA({
  headline,
  description,
  primaryButton,
  secondaryButton,
  variant = 'centered',
  background = 'gradient',
}: CTAProps) {
  const isCentered = variant === 'centered'

  return (
    <section className={cn('py-16 md:py-20', backgrounds[background])}>
      <Container size="md">
        <div className={cn(isCentered && 'text-center')}>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">
            {headline}
          </h2>
          {description && (
            <p
              className={cn(
                'mt-4 text-lg text-primary-100',
                isCentered && 'max-w-2xl mx-auto'
              )}
            >
              {description}
            </p>
          )}
          <div
            className={cn(
              'mt-8 flex flex-wrap gap-4',
              isCentered && 'justify-center'
            )}
          >
            <Button
              variant="accent"
              size="lg"
              href={primaryButton.href}
              className={background === 'accent' ? 'bg-white text-accent-600 hover:bg-neutral-100' : ''}
            >
              {primaryButton.text}
            </Button>
            {secondaryButton && (
              <Button
                variant="ghost"
                size="lg"
                href={secondaryButton.href}
                className="text-white border border-white/30 hover:bg-white/10"
              >
                {secondaryButton.text}
              </Button>
            )}
          </div>
        </div>
      </Container>
    </section>
  )
}
