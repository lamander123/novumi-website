import { Container, Button } from '@/components/ui'
import { cn } from '@/lib/cn'

interface HeroProps {
  headline: string
  subheadline: string
  primaryCTA?: { text: string; href: string }
  secondaryCTA?: { text: string; href: string }
  variant?: 'default' | 'centered' | 'minimal'
}

export function Hero({
  headline,
  subheadline,
  primaryCTA,
  secondaryCTA,
  variant = 'default',
}: HeroProps) {
  const isCentered = variant === 'centered'
  const isMinimal = variant === 'minimal'

  return (
    <section
      className={cn(
        'relative overflow-hidden',
        isMinimal ? 'py-16 md:py-20' : 'py-20 md:py-32',
        'bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900'
      )}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(8, 145, 178, 0.3) 0%, transparent 50%),
                             radial-gradient(circle at 75% 75%, rgba(8, 145, 178, 0.2) 0%, transparent 50%)`,
          }}
        />
      </div>

      <Container className="relative z-10">
        <div
          className={cn(
            'max-w-4xl',
            isCentered && 'mx-auto text-center'
          )}
        >
          <h1
            className={cn(
              'font-heading font-bold text-white leading-tight',
              isMinimal
                ? 'text-3xl md:text-4xl lg:text-5xl'
                : 'text-4xl md:text-5xl lg:text-6xl'
            )}
          >
            {headline}
          </h1>
          <p
            className={cn(
              'mt-6 text-lg md:text-xl text-primary-100 leading-relaxed',
              isCentered ? 'max-w-2xl mx-auto' : 'max-w-2xl'
            )}
          >
            {subheadline}
          </p>

          {(primaryCTA || secondaryCTA) && (
            <div
              className={cn(
                'mt-8 flex flex-wrap gap-4',
                isCentered && 'justify-center'
              )}
            >
              {primaryCTA && (
                <Button variant="accent" size="lg" href={primaryCTA.href}>
                  {primaryCTA.text}
                </Button>
              )}
              {secondaryCTA && (
                <Button
                  variant="ghost"
                  size="lg"
                  href={secondaryCTA.href}
                  className="text-white border border-white/30 hover:bg-white/10"
                >
                  {secondaryCTA.text}
                </Button>
              )}
            </div>
          )}
        </div>
      </Container>
    </section>
  )
}
