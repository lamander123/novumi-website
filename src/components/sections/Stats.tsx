import { Container } from '@/components/ui'
import { cn } from '@/lib/cn'

interface Stat {
  value: string
  label: string
}

interface StatsProps {
  stats: Stat[]
  variant?: 'default' | 'banner'
}

export function Stats({ stats, variant = 'default' }: StatsProps) {
  const isBanner = variant === 'banner'

  return (
    <section
      className={cn(
        isBanner
          ? 'py-12 bg-primary-900'
          : 'section bg-neutral-50'
      )}
    >
      <Container>
        <div
          className={cn(
            'grid gap-8',
            stats.length === 3
              ? 'md:grid-cols-3'
              : 'grid-cols-2 md:grid-cols-4'
          )}
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className={cn(
                'text-center',
                isBanner ? 'text-white' : ''
              )}
            >
              <div
                className={cn(
                  'text-4xl md:text-5xl font-heading font-bold',
                  isBanner ? 'text-accent-400' : 'text-accent-500'
                )}
              >
                {stat.value}
              </div>
              <div
                className={cn(
                  'mt-2 text-sm md:text-base',
                  isBanner ? 'text-primary-200' : 'text-neutral-600'
                )}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
