import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/cn'

interface Step {
  num: string
  title: string
  description: string
}

interface AnimatedProcessProps {
  steps: Step[]
  className?: string
}

export function AnimatedProcess({ steps, className }: AnimatedProcessProps) {
  const [activeStep, setActiveStep] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  // Intersection observer to trigger animation when in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Auto-advance through steps
  useEffect(() => {
    if (!isVisible) return

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [isVisible, steps.length])

  return (
    <div ref={containerRef} className={cn('relative', className)}>
      {/* Progress bar */}
      <div className="absolute top-8 left-0 right-0 h-1 bg-neutral-200 rounded-full mx-auto max-w-2xl hidden md:block">
        <div
          className="h-full bg-accent-500 rounded-full transition-all duration-500"
          style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
        />
      </div>

      {/* Steps */}
      <div className="grid md:grid-cols-3 gap-8 lg:gap-12 pt-16">
        {steps.map((step, i) => (
          <div
            key={i}
            className={cn(
              'relative text-center transition-all duration-500',
              isVisible ? 'animate-slide-up' : 'opacity-0',
              activeStep === i ? 'scale-105' : 'scale-100 opacity-70'
            )}
            style={{ animationDelay: `${i * 0.2}s` }}
            onClick={() => setActiveStep(i)}
          >
            {/* Step number */}
            <div
              className={cn(
                'w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300 cursor-pointer',
                activeStep === i
                  ? 'bg-accent-500 text-white shadow-lg shadow-accent-500/30'
                  : 'bg-neutral-100 text-neutral-400'
              )}
            >
              <span className="text-2xl font-bold">{step.num}</span>
            </div>

            {/* Animated icon for active step */}
            {activeStep === i && (
              <div className="absolute -top-2 left-1/2 -translate-x-1/2">
                <div className="w-20 h-20 rounded-full bg-accent-100 animate-ping opacity-20" />
              </div>
            )}

            {/* Content */}
            <h3
              className={cn(
                'text-xl font-heading font-semibold transition-colors duration-300',
                activeStep === i ? 'text-primary-900' : 'text-neutral-500'
              )}
            >
              {step.title}
            </h3>
            <p
              className={cn(
                'mt-2 transition-colors duration-300',
                activeStep === i ? 'text-neutral-600' : 'text-neutral-400'
              )}
            >
              {step.description}
            </p>
          </div>
        ))}
      </div>

      {/* Step indicator dots for mobile */}
      <div className="flex justify-center gap-2 mt-8 md:hidden">
        {steps.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveStep(i)}
            className={cn(
              'w-2 h-2 rounded-full transition-all',
              activeStep === i ? 'bg-accent-500 w-6' : 'bg-neutral-300'
            )}
          />
        ))}
      </div>
    </div>
  )
}
