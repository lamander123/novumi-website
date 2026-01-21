import { ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react'
import { cn } from '@/lib/cn'

type ButtonBaseProps = {
  variant?: 'primary' | 'secondary' | 'ghost' | 'accent'
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
  primary: 'bg-gray-900 text-white hover:bg-gray-800 active:bg-gray-950',
  secondary: 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 hover:border-gray-300',
  ghost: 'text-gray-600 hover:text-gray-900 hover:bg-gray-100',
  accent: 'bg-accent-500 text-white hover:bg-accent-600 active:bg-accent-700',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-5 py-2.5 text-[15px]',
  lg: 'px-7 py-3 text-base',
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center font-medium rounded-lg transition-colors duration-150',
    'focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2',
    'disabled:opacity-50 disabled:cursor-not-allowed',
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
