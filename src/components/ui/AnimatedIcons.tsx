import { cn } from '@/lib/cn'

interface AnimatedIconProps {
  className?: string
}

// Animated magnifying glass that searches
export function SearchingAnimation({ className }: AnimatedIconProps) {
  return (
    <div className={cn('relative w-32 h-32', className)}>
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Document/profile cards that appear */}
        <g className="animate-fade-in-out" style={{ animationDelay: '0s' }}>
          <rect x="10" y="20" width="25" height="30" rx="3" fill="#e5e7eb" stroke="#d1d5db" strokeWidth="1" />
          <rect x="14" y="25" width="17" height="3" rx="1" fill="#9ca3af" />
          <rect x="14" y="31" width="12" height="2" rx="1" fill="#d1d5db" />
          <rect x="14" y="35" width="15" height="2" rx="1" fill="#d1d5db" />
        </g>

        <g className="animate-fade-in-out" style={{ animationDelay: '0.3s' }}>
          <rect x="38" y="15" width="25" height="30" rx="3" fill="#e5e7eb" stroke="#d1d5db" strokeWidth="1" />
          <rect x="42" y="20" width="17" height="3" rx="1" fill="#9ca3af" />
          <rect x="42" y="26" width="12" height="2" rx="1" fill="#d1d5db" />
          <rect x="42" y="30" width="15" height="2" rx="1" fill="#d1d5db" />
        </g>

        <g className="animate-fade-in-out" style={{ animationDelay: '0.6s' }}>
          <rect x="65" y="20" width="25" height="30" rx="3" fill="#e5e7eb" stroke="#d1d5db" strokeWidth="1" />
          <rect x="69" y="25" width="17" height="3" rx="1" fill="#9ca3af" />
          <rect x="69" y="31" width="12" height="2" rx="1" fill="#d1d5db" />
          <rect x="69" y="35" width="15" height="2" rx="1" fill="#d1d5db" />
        </g>

        {/* Magnifying glass that moves */}
        <g className="animate-search-move">
          <circle cx="45" cy="60" r="15" fill="none" stroke="#0891b2" strokeWidth="3" />
          <line x1="56" y1="71" x2="68" y2="83" stroke="#0891b2" strokeWidth="3" strokeLinecap="round" />
          <circle cx="45" cy="60" r="10" fill="#0891b2" fillOpacity="0.1" />
        </g>
      </svg>
    </div>
  )
}

// Animated checkmark verification
export function VerificationAnimation({ className }: AnimatedIconProps) {
  return (
    <div className={cn('relative w-32 h-32', className)}>
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Shield background */}
        <path
          d="M50 10 L85 25 L85 50 C85 70 70 85 50 95 C30 85 15 70 15 50 L15 25 Z"
          fill="#f0fdf4"
          stroke="#22c55e"
          strokeWidth="2"
          className="animate-shield-pulse"
        />

        {/* Checkmark that draws itself */}
        <path
          d="M30 50 L45 65 L70 35"
          fill="none"
          stroke="#22c55e"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="animate-draw-check"
          style={{
            strokeDasharray: 60,
            strokeDashoffset: 60,
          }}
        />
      </svg>
    </div>
  )
}

// Animated document scanning
export function ScanningAnimation({ className }: AnimatedIconProps) {
  return (
    <div className={cn('relative w-32 h-32', className)}>
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Document */}
        <rect x="20" y="10" width="60" height="80" rx="4" fill="#f9fafb" stroke="#e5e7eb" strokeWidth="2" />

        {/* Document lines */}
        <rect x="30" y="25" width="40" height="4" rx="2" fill="#e5e7eb" />
        <rect x="30" y="35" width="35" height="4" rx="2" fill="#e5e7eb" />
        <rect x="30" y="45" width="40" height="4" rx="2" fill="#e5e7eb" />
        <rect x="30" y="55" width="30" height="4" rx="2" fill="#e5e7eb" />
        <rect x="30" y="65" width="38" height="4" rx="2" fill="#e5e7eb" />
        <rect x="30" y="75" width="25" height="4" rx="2" fill="#e5e7eb" />

        {/* Scanning line */}
        <rect
          x="20"
          y="20"
          width="60"
          height="3"
          fill="#0891b2"
          className="animate-scan-line"
          style={{ opacity: 0.8 }}
        />

        {/* Scan glow effect */}
        <rect
          x="20"
          y="20"
          width="60"
          height="8"
          fill="url(#scanGradient)"
          className="animate-scan-line"
        />

        <defs>
          <linearGradient id="scanGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0891b2" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#0891b2" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

// Animated network/connection graphic
export function NetworkAnimation({ className }: AnimatedIconProps) {
  return (
    <div className={cn('relative w-32 h-32', className)}>
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Connection lines */}
        <line x1="50" y1="50" x2="20" y2="25" stroke="#e5e7eb" strokeWidth="2" className="animate-line-pulse" style={{ animationDelay: '0s' }} />
        <line x1="50" y1="50" x2="80" y2="25" stroke="#e5e7eb" strokeWidth="2" className="animate-line-pulse" style={{ animationDelay: '0.2s' }} />
        <line x1="50" y1="50" x2="20" y2="75" stroke="#e5e7eb" strokeWidth="2" className="animate-line-pulse" style={{ animationDelay: '0.4s' }} />
        <line x1="50" y1="50" x2="80" y2="75" stroke="#e5e7eb" strokeWidth="2" className="animate-line-pulse" style={{ animationDelay: '0.6s' }} />

        {/* Center node */}
        <circle cx="50" cy="50" r="12" fill="#0891b2" className="animate-node-pulse" />
        <circle cx="50" cy="50" r="6" fill="white" />

        {/* Outer nodes */}
        <circle cx="20" cy="25" r="8" fill="#0a1f44" className="animate-node-pulse" style={{ animationDelay: '0.1s' }} />
        <circle cx="80" cy="25" r="8" fill="#0a1f44" className="animate-node-pulse" style={{ animationDelay: '0.3s' }} />
        <circle cx="20" cy="75" r="8" fill="#0a1f44" className="animate-node-pulse" style={{ animationDelay: '0.5s' }} />
        <circle cx="80" cy="75" r="8" fill="#0a1f44" className="animate-node-pulse" style={{ animationDelay: '0.7s' }} />

        {/* Data packets moving along lines */}
        <circle r="3" fill="#0891b2" className="animate-packet-1">
          <animateMotion dur="2s" repeatCount="indefinite" path="M50,50 L20,25" />
        </circle>
        <circle r="3" fill="#0891b2" className="animate-packet-2">
          <animateMotion dur="2s" repeatCount="indefinite" path="M50,50 L80,75" begin="0.5s" />
        </circle>
      </svg>
    </div>
  )
}

// Animated loading/processing dots
export function ProcessingAnimation({ className }: AnimatedIconProps) {
  return (
    <div className={cn('flex items-center gap-2', className)}>
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="w-3 h-3 bg-accent-500 rounded-full animate-bounce"
          style={{ animationDelay: `${i * 0.15}s` }}
        />
      ))}
    </div>
  )
}
