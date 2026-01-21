import * as LucideIcons from 'lucide-react'
import { Container } from '@/components/ui'

interface TrustItem {
  icon: string
  title: string
  description: string
}

interface TrustBarProps {
  items: TrustItem[]
}

export function TrustBar({ items }: TrustBarProps) {
  return (
    <section className="py-16 bg-neutral-50 border-y border-neutral-200">
      <Container>
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {items.map((item, index) => {
            const IconComponent =
              (LucideIcons as unknown as Record<string, LucideIcons.LucideIcon>)[item.icon] ||
              LucideIcons.Circle

            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-trust mb-4">
                  <IconComponent className="w-6 h-6 text-accent-600" />
                </div>
                <h3 className="font-heading font-semibold text-primary-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-neutral-600">
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
