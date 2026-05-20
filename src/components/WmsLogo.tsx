/**
 * WMS logo — same geometry as original, with gradient + subtle glow.
 * Triangle + two slanted bars; blue → cyan gradient for a hotter look.
 */
export function WmsLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <defs>
        <linearGradient
          id="wms-gradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="50%" stopColor="#0ea5e9" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
        <filter id="wms-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="0.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {/* Downward-pointing triangle */}
      <path
        d="M6 4 L42 4 L24 28 Z"
        fill="url(#wms-gradient)"
        filter="url(#wms-glow)"
      />
      {/* Two slanted bars */}
      <rect
        x="26"
        y="6"
        width="4"
        height="22"
        rx="1"
        transform="rotate(8 28 17)"
        fill="url(#wms-gradient)"
        filter="url(#wms-glow)"
      />
      <rect
        x="34"
        y="6"
        width="4"
        height="22"
        rx="1"
        transform="rotate(8 36 17)"
        fill="url(#wms-gradient)"
        filter="url(#wms-glow)"
      />
    </svg>
  )
}
