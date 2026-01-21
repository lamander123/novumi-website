import { cn } from '@/lib/cn'

interface LogoProps {
  variant?: 'light' | 'dark'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const sizes = {
  sm: 'text-lg',
  md: 'text-xl',
  lg: 'text-2xl',
}

export function Logo({ variant = 'dark', size = 'md', className }: LogoProps) {
  const textColor = variant === 'light' ? 'text-white' : 'text-gray-900'

  return (
    <span className={cn('font-semibold tracking-tight', sizes[size], textColor, className)}>
      novumi
    </span>
  )
}
