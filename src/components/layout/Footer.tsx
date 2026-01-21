import { Link } from 'react-router-dom'
import { Container, Logo } from '@/components/ui'
import { useI18n } from '@/lib/i18n'

export function Footer() {
  const { t } = useI18n()
  const currentYear = new Date().getFullYear()

  const links = [
    { href: '/', label: t('nav.home') },
    { href: '/services', label: t('nav.services') },
    { href: '/about', label: t('nav.about') },
    { href: '/contact', label: t('nav.contact') },
  ]

  return (
    <footer className="border-t border-gray-200">
      <Container>
        <div className="py-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            {/* Brand */}
            <div className="flex items-center gap-8">
              <Logo size="sm" />
              <nav className="hidden md:flex gap-6">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Mobile links */}
            <nav className="flex flex-wrap gap-4 md:hidden">
              {links.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Bottom */}
          <div className="mt-8 pt-8 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <p className="text-sm text-gray-400">
              &copy; {currentYear} Novumi. {t('footer.rights')}
            </p>
            <div className="flex gap-6">
              <Link to="/privacy" className="text-sm text-gray-400 hover:text-gray-600 transition-colors">
                {t('footer.privacy')}
              </Link>
              <Link to="/terms" className="text-sm text-gray-400 hover:text-gray-600 transition-colors">
                {t('footer.terms')}
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
