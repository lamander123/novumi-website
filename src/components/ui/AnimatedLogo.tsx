import { useState, useEffect } from 'react'
import { cn } from '@/lib/cn'

interface AnimatedLogoProps {
  variant?: 'light' | 'dark'
  size?: 'md' | 'lg' | 'xl'
  className?: string
}

const phrases = [
  'novum',
  'a novelty',
  'a new thing',
  'an innovation',
]

const sizes = {
  md: {
    text: 'text-4xl',
    prompt: 'text-xl',
    cursor: 'w-2.5 h-5',
  },
  lg: {
    text: 'text-5xl md:text-6xl',
    prompt: 'text-2xl md:text-3xl',
    cursor: 'w-3 h-6 md:w-4 md:h-8',
  },
  xl: {
    text: 'text-6xl md:text-7xl lg:text-8xl',
    prompt: 'text-2xl md:text-3xl lg:text-4xl',
    cursor: 'w-3 h-6 md:w-4 md:h-8 lg:w-5 lg:h-10',
  },
}

export function AnimatedLogo({
  variant = 'dark',
  size = 'lg',
  className
}: AnimatedLogoProps) {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  const textColor = variant === 'light' ? 'text-white' : 'text-primary-900'
  const cursorColor = variant === 'light' ? 'bg-white' : 'bg-primary-900'
  const sizeClasses = sizes[size]

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex]

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (displayText.length < currentPhrase.length) {
          setDisplayText(currentPhrase.slice(0, displayText.length + 1))
        } else {
          // Pause at end of phrase
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        // Deleting
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1))
        } else {
          setIsDeleting(false)
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentPhraseIndex])

  return (
    <div className={cn('flex flex-col items-start', className)}>
      <div className={cn('font-heading font-bold tracking-tight', sizeClasses.text, textColor)}>
        Novumi
      </div>
      <div className="flex items-center mt-1">
        <span className={cn('font-mono font-bold', sizeClasses.prompt, textColor)}>
          &gt;_
        </span>
        <span className={cn('font-mono ml-2', sizeClasses.prompt, textColor)}>
          {displayText}
        </span>
        <span
          className={cn(
            'inline-block ml-1 animate-blink',
            sizeClasses.cursor,
            cursorColor
          )}
        />
      </div>
    </div>
  )
}
