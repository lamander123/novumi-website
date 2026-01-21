import { cn } from '@/lib/cn'

interface LogoProps {
  variant?: 'light' | 'dark'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const sizes = {
  sm: { text: 'text-xl', prompt: 'text-sm' },
  md: { text: 'text-2xl', prompt: 'text-base' },
  lg: { text: 'text-3xl', prompt: 'text-lg' },
}

export function Logo({ variant = 'dark', size = 'md', className }: LogoProps) {
  const textColor = variant === 'light' ? 'text-white' : 'text-primary-900'
  const promptColor = variant === 'light' ? 'text-primary-200' : 'text-neutral-500'
  const sizeClasses = sizes[size]

  return (
    <div className={cn('flex flex-col', className)}>
      <span className={cn('font-heading font-bold leading-none', sizeClasses.text, textColor)}>
        Novumi
      </span>
      <span className={cn('font-mono leading-tight', sizeClasses.prompt, promptColor)}>
        &gt;_
      </span>
    </div>
  )
}
