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
      'fixed top-0 left-0 right-0 z-50 transition-all duration-150',
      scrolled
        ? 'bg-white/80 backdrop-blur-md border-b border-gray-200'
        : 'bg-white/60 backdrop-blur-sm'
    )}>
      <Container>
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <Logo size="sm" />
          </Link>

          {/* Navigation links - desktop */}
          <div className="hidden lg:flex lg:items-center lg:gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  'px-3 py-2 text-[15px] font-medium transition-colors rounded-md',
                  location.pathname === link.href
                    ? 'text-gray-900'
                    : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side - desktop */}
          <div className="hidden lg:flex lg:items-center lg:gap-3">
            <LanguageToggle />
            <Button variant="primary" size="sm" href="https://app.novumi.nl">
              {t('nav.portal')}
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-3 lg:hidden">
            <LanguageToggle />
            <button
              type="button"
              className="p-2 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </Container>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <Container>
            <div className="py-4 flex flex-col gap-1">
              {links.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={cn(
                    'px-3 py-2.5 text-[15px] font-medium rounded-md transition-colors',
                    location.pathname === link.href
                      ? 'text-gray-900 bg-gray-50'
                      : 'text-gray-600 hover:bg-gray-50'
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-4 pt-4 border-t border-gray-100">
                <Button variant="primary" href="https://app.novumi.nl" className="w-full">
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
