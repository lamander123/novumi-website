import { ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react'
import { cn } from '@/lib/cn'

type ButtonBaseProps = {
  variant?: 'primary' | 'secondary' | 'accent' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

type ButtonAsButton = ButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never
  }

type ButtonAsLink = ButtonBaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string
  }

type ButtonProps = ButtonAsButton | ButtonAsLink

const variants = {
  primary: 'bg-primary-900 text-white hover:bg-primary-800 shadow-trust hover:shadow-trust-lg',
  secondary: 'bg-white text-primary-900 border-2 border-primary-900 hover:bg-primary-50',
  accent: 'bg-accent-500 text-white hover:bg-accent-600 shadow-trust hover:shadow-trust-lg',
  ghost: 'text-primary-900 hover:bg-primary-50',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200',
    variants[variant],
    sizes[size],
    className
  )

  if ('href' in props && props.href) {
    const { href, ...anchorProps } = props as ButtonAsLink
    const isExternal = href.startsWith('http')
    return (
      <a
        href={href}
        className={classes}
        {...(isExternal && { target: '_blank', rel: 'noopener noreferrer' })}
        {...anchorProps}
      >
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...(props as ButtonAsButton)}>
      {children}
    </button>
  )
}
