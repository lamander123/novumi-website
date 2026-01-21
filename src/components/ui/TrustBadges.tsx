import { cn } from '@/lib/cn'

interface TrustBadgesProps {
  variant?: 'light' | 'dark'
  className?: string
}

export function TrustBadges({ variant = 'dark', className }: TrustBadgesProps) {
  const textColor = variant === 'light' ? 'text-white/70' : 'text-neutral-400'
  const badgeBg = variant === 'light' ? 'bg-white/10' : 'bg-neutral-100'
  const badgeText = variant === 'light' ? 'text-white' : 'text-neutral-700'
  const badgeBorder = variant === 'light' ? 'border-white/20' : 'border-neutral-200'

  return (
    <div className={cn('flex flex-col items-center gap-4', className)}>
      <p className={cn('text-sm font-medium', textColor)}>
        Trusted & Certified
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        {/* GDPR Badge */}
        <div className={cn('flex items-center gap-2 px-3 py-2 rounded-lg border', badgeBg, badgeBorder)}>
          <svg viewBox="0 0 24 24" className="w-5 h-5 text-blue-600" fill="currentColor">
            <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.18l6.9 3.45L12 11.09 5.1 7.63 12 4.18zM4 8.82l7 3.5v7.36l-7-3.5V8.82zm9 10.86v-7.36l7-3.5v7.36l-7 3.5z"/>
          </svg>
          <span className={cn('text-xs font-semibold', badgeText)}>GDPR</span>
        </div>

        {/* ISO 27001 Badge */}
        <div className={cn('flex items-center gap-2 px-3 py-2 rounded-lg border', badgeBg, badgeBorder)}>
          <svg viewBox="0 0 24 24" className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
          </svg>
          <span className={cn('text-xs font-semibold', badgeText)}>ISO 27001</span>
        </div>

        {/* NEN 4400 Badge */}
        <div className={cn('flex items-center gap-2 px-3 py-2 rounded-lg border', badgeBg, badgeBorder)}>
          <svg viewBox="0 0 24 24" className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
          </svg>
          <span className={cn('text-xs font-semibold', badgeText)}>NEN 4400</span>
        </div>

        {/* EU Data Badge */}
        <div className={cn('flex items-center gap-2 px-3 py-2 rounded-lg border', badgeBg, badgeBorder)}>
          <svg viewBox="0 0 24 24" className="w-5 h-5 text-blue-500" fill="currentColor">
            <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1.5"/>
            <circle cx="12" cy="5" r="1.5"/>
            <circle cx="12" cy="19" r="1.5"/>
            <circle cx="5" cy="12" r="1.5"/>
            <circle cx="19" cy="12" r="1.5"/>
            <circle cx="7.05" cy="7.05" r="1.2"/>
            <circle cx="16.95" cy="7.05" r="1.2"/>
            <circle cx="7.05" cy="16.95" r="1.2"/>
            <circle cx="16.95" cy="16.95" r="1.2"/>
          </svg>
          <span className={cn('text-xs font-semibold', badgeText)}>EU Data</span>
        </div>
      </div>
    </div>
  )
}
