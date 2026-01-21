import { Container, Button, AnimatedLogo } from '@/components/ui'

interface HeroAnimatedProps {
  tagline: string
  primaryCTA?: { text: string; href: string }
  secondaryCTA?: { text: string; href: string }
}

export function HeroAnimated({
  tagline,
  primaryCTA,
  secondaryCTA,
}: HeroAnimatedProps) {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-50/50 to-white" />

      <Container className="relative z-10 py-20 md:py-28 lg:py-36">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center">
            <AnimatedLogo variant="dark" size="xl" className="items-center" />
          </div>

          <p className="mt-8 text-xl md:text-2xl text-neutral-600 leading-relaxed max-w-2xl mx-auto">
            {tagline}
          </p>

          {(primaryCTA || secondaryCTA) && (
            <div className="mt-10 flex flex-wrap gap-4 justify-center">
              {primaryCTA && (
                <Button variant="primary" size="lg" href={primaryCTA.href}>
                  {primaryCTA.text}
                </Button>
              )}
              {secondaryCTA && (
                <Button variant="secondary" size="lg" href={secondaryCTA.href}>
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
