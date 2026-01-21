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
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <Container>
        <div className="py-12 lg:py-16">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
            {/* Brand */}
            <div className="max-w-sm">
              <Logo size="md" />
              <p className="mt-4 text-sm text-neutral-500">
                {t('footer.tagline')}
              </p>
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-x-8 gap-y-2">
              {links.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-sm text-neutral-500 hover:text-primary-900 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-12 pt-8 border-t border-neutral-200 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-neutral-400">
              &copy; {currentYear} Novumi. {t('footer.rights')}
            </p>
            <div className="flex gap-6">
              <Link to="/privacy" className="text-sm text-neutral-400 hover:text-neutral-600">
                {t('footer.privacy')}
              </Link>
              <Link to="/terms" className="text-sm text-neutral-400 hover:text-neutral-600">
                {t('footer.terms')}
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
