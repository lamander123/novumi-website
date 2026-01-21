import { cn } from '@/lib/cn'

interface AnimatedHeroGraphicProps {
  className?: string
}

export function AnimatedHeroGraphic({ className }: AnimatedHeroGraphicProps) {
  return (
    <div className={cn('relative w-full max-w-lg mx-auto', className)}>
      <svg viewBox="0 0 400 300" className="w-full h-auto">
        {/* Background circles */}
        <circle cx="200" cy="150" r="120" fill="#f0fdf4" className="animate-pulse" style={{ animationDuration: '4s' }} />
        <circle cx="200" cy="150" r="90" fill="#dcfce7" className="animate-pulse" style={{ animationDuration: '3s' }} />

        {/* Floating document cards */}
        <g className="animate-float" style={{ animationDelay: '0s' }}>
          <rect x="80" y="60" width="70" height="90" rx="6" fill="white" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.1))" />
          <rect x="90" y="75" width="50" height="6" rx="3" fill="#e5e7eb" />
          <rect x="90" y="87" width="40" height="4" rx="2" fill="#f3f4f6" />
          <rect x="90" y="95" width="45" height="4" rx="2" fill="#f3f4f6" />
          <rect x="90" y="103" width="35" height="4" rx="2" fill="#f3f4f6" />
          <circle cx="105" cy="125" r="10" fill="#22c55e" opacity="0.2" />
          <path d="M100 125 L103 128 L110 121" stroke="#22c55e" strokeWidth="2" fill="none" strokeLinecap="round" />
        </g>

        <g className="animate-float" style={{ animationDelay: '0.5s' }}>
          <rect x="250" y="50" width="70" height="90" rx="6" fill="white" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.1))" />
          <rect x="260" y="65" width="50" height="6" rx="3" fill="#e5e7eb" />
          <rect x="260" y="77" width="40" height="4" rx="2" fill="#f3f4f6" />
          <rect x="260" y="85" width="45" height="4" rx="2" fill="#f3f4f6" />
          <rect x="260" y="93" width="35" height="4" rx="2" fill="#f3f4f6" />
          <circle cx="275" cy="115" r="10" fill="#22c55e" opacity="0.2" />
          <path d="M270 115 L273 118 L280 111" stroke="#22c55e" strokeWidth="2" fill="none" strokeLinecap="round" />
        </g>

        <g className="animate-float" style={{ animationDelay: '1s' }}>
          <rect x="165" y="160" width="70" height="90" rx="6" fill="white" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.1))" />
          <rect x="175" y="175" width="50" height="6" rx="3" fill="#e5e7eb" />
          <rect x="175" y="187" width="40" height="4" rx="2" fill="#f3f4f6" />
          <rect x="175" y="195" width="45" height="4" rx="2" fill="#f3f4f6" />
          <rect x="175" y="203" width="35" height="4" rx="2" fill="#f3f4f6" />
          <circle cx="190" cy="225" r="10" fill="#22c55e" opacity="0.2" />
          <path d="M185 225 L188 228 L195 221" stroke="#22c55e" strokeWidth="2" fill="none" strokeLinecap="round" />
        </g>

        {/* Central magnifying glass */}
        <g className="animate-search-move" style={{ transformOrigin: '200px 130px' }}>
          <circle cx="200" cy="130" r="35" fill="white" stroke="#0891b2" strokeWidth="4" filter="drop-shadow(0 4px 8px rgba(8,145,178,0.3))" />
          <circle cx="200" cy="130" r="25" fill="#ecfeff" />
          <line x1="225" y1="155" x2="250" y2="180" stroke="#0891b2" strokeWidth="6" strokeLinecap="round" />

          {/* Scan lines inside magnifying glass */}
          <g opacity="0.5">
            <rect x="185" y="118" width="30" height="3" rx="1.5" fill="#0891b2" className="animate-pulse" />
            <rect x="185" y="126" width="25" height="3" rx="1.5" fill="#0891b2" className="animate-pulse" style={{ animationDelay: '0.2s' }} />
            <rect x="185" y="134" width="28" height="3" rx="1.5" fill="#0891b2" className="animate-pulse" style={{ animationDelay: '0.4s' }} />
          </g>
        </g>

        {/* Connection lines */}
        <line x1="150" y1="100" x2="175" y2="115" stroke="#0891b2" strokeWidth="2" strokeDasharray="4 4" opacity="0.3" className="animate-pulse" />
        <line x1="250" y1="95" x2="225" y2="115" stroke="#0891b2" strokeWidth="2" strokeDasharray="4 4" opacity="0.3" className="animate-pulse" style={{ animationDelay: '0.3s' }} />
        <line x1="200" y1="165" x2="200" y2="185" stroke="#0891b2" strokeWidth="2" strokeDasharray="4 4" opacity="0.3" className="animate-pulse" style={{ animationDelay: '0.6s' }} />

        {/* Sparkles */}
        <circle cx="130" cy="180" r="3" fill="#0891b2" className="animate-ping" style={{ animationDuration: '2s' }} />
        <circle cx="270" cy="170" r="3" fill="#0891b2" className="animate-ping" style={{ animationDuration: '2s', animationDelay: '0.5s' }} />
        <circle cx="320" cy="100" r="2" fill="#0891b2" className="animate-ping" style={{ animationDuration: '2s', animationDelay: '1s' }} />
      </svg>
    </div>
  )
}
