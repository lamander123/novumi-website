import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { Container, Logo, Button } from '@/components/ui'
import { useI18n, LanguageToggle } from '@/lib/i18n'
import { cn } from '@/lib/cn'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const { t } = useI18n()
  const isHomePage = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { href: '/', label: t('nav.home') },
    { href: '/services', label: t('nav.services') },
    { href: '/about', label: t('nav.about') },
    { href: '/contact', label: t('nav.contact') },
  ]

  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-200',
      scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
    )}>
      <Container>
        <nav className="flex items-center justify-between h-16">
          {/* Logo - only show on non-home pages */}
          {!isHomePage ? (
            <Link to="/" className="flex-shrink-0">
              <Logo size="sm" />
            </Link>
          ) : (
            <div className="w-20" />
          )}

          {/* Navigation links - centered */}
          <div className="hidden lg:flex lg:items-center lg:gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  'px-4 py-2 text-sm transition-colors rounded-full',
                  location.pathname === link.href
                    ? 'text-primary-900 font-medium bg-neutral-100/80'
                    : 'text-neutral-600 hover:text-primary-900 hover:bg-neutral-100/50'
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="hidden lg:flex lg:items-center lg:gap-3">
            <LanguageToggle />
            <Button variant="primary" size="sm" href="https://app.novumi.com">
              {t('nav.portal')}
            </Button>
          </div>

          {/* Mobile */}
          <div className="flex items-center gap-2 lg:hidden">
            {!isHomePage && (
              <Link to="/" className="mr-2">
                <Logo size="sm" />
              </Link>
            )}
            <div className="flex-1" />
            <LanguageToggle />
            <button
              type="button"
              className="p-2 text-neutral-600"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </Container>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-neutral-100 shadow-lg">
          <Container>
            <div className="py-4 flex flex-col gap-1">
              {links.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={cn(
                    'px-4 py-3 text-base rounded-lg',
                    location.pathname === link.href
                      ? 'text-primary-900 font-medium bg-neutral-50'
                      : 'text-neutral-600'
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-4 pt-4 border-t border-neutral-100">
                <Button variant="primary" href="https://app.novumi.com" className="w-full">
                  {t('nav.portal')}
                </Button>
              </div>
            </div>
          </Container>
        </div>
      )}
    </header>
  )
}
