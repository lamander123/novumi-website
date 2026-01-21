import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { Container } from '@/components/ui'
import { cn } from '@/lib/cn'

interface FAQItem {
  question: string
  answer: string
}

interface FAQProps {
  title?: string
  subtitle?: string
  items: FAQItem[]
}

export function FAQ({ title, subtitle, items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="section">
      <Container size="md">
        {(title || subtitle) && (
          <div className="text-center mb-12">
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

        <div className="space-y-4">
          {items.map((item, index) => {
            const isOpen = openIndex === index

            return (
              <div
                key={index}
                className="border border-neutral-200 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left bg-white hover:bg-neutral-50 transition-colors"
                >
                  <span className="font-medium text-primary-900 pr-4">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={cn(
                      'w-5 h-5 text-neutral-400 flex-shrink-0 transition-transform',
                      isOpen && 'rotate-180'
                    )}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-4 bg-white border-t border-neutral-100">
                    <p className="text-neutral-600 pt-4">{item.answer}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
