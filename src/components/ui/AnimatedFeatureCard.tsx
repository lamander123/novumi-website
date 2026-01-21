import { useEffect, useRef, useState, ReactNode } from 'react'
import { cn } from '@/lib/cn'

interface AnimatedFeatureCardProps {
  icon: ReactNode
  title: string
  description: string
  delay?: number
  className?: string
}

export function AnimatedFeatureCard({
  icon,
  title,
  description,
  delay = 0,
  className,
}: AnimatedFeatureCardProps) {
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={cardRef}
      className={cn(
        'group bg-white rounded-2xl p-8 shadow-sm border border-neutral-100 transition-all duration-500 hover:shadow-lg hover:border-accent-200 hover:-translate-y-1',
        isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-8',
        className
      )}
      style={{ animationDelay: `${delay}s` }}
    >
      {/* Icon with hover animation */}
      <div className="w-14 h-14 bg-accent-50 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:bg-accent-100">
        {icon}
      </div>

      <h3 className="text-xl font-heading font-semibold text-primary-900 group-hover:text-accent-700 transition-colors">
        {title}
      </h3>

      <p className="mt-3 text-neutral-600 leading-relaxed">
        {description}
      </p>

      {/* Animated underline on hover */}
      <div className="mt-4 h-0.5 bg-accent-500 w-0 group-hover:w-12 transition-all duration-300" />
    </div>
  )
}
