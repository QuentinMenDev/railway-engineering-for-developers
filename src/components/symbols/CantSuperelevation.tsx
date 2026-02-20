import type { SymbolProps } from './types';

export default function CantSuperelevation({ style, ...props }: SymbolProps) {
  return (
    <svg viewBox="0 0 300 120" style={{ width: '100%', ...style }} {...props}>
      {/* Simple tilted sleeper bar with two rail marks */}
      <g transform="translate(150, 55)">
        <g transform="rotate(-6)">
          {/* Sleeper as a simple bar */}
          <rect x="-110" y="0" width="220" height="10" fill="var(--bg-hover)" stroke="var(--border-light)" strokeWidth="1" rx="1"/>
          {/* Left (low) rail — small rectangle */}
          <rect x="-95" y="-8" width="8" height="10" fill="var(--text-bright)" stroke="var(--text-bright)" strokeWidth="1"/>
          {/* Right (high) rail — small rectangle */}
          <rect x="87" y="-8" width="8" height="10" fill="var(--text-bright)" stroke="var(--text-bright)" strokeWidth="1"/>
        </g>
      </g>
      {/* Horizontal datum */}
      <line x1="30" y1="68" x2="270" y2="68" stroke="var(--text-dim)" strokeWidth="0.5" strokeDasharray="4,3"/>
      {/* Cant dimension D */}
      <line x1="245" y1="42" x2="245" y2="68" stroke="var(--accent)" strokeWidth="1.5"/>
      <polygon points="245,42 242,48 248,48" fill="var(--accent)"/>
      <polygon points="245,68 242,62 248,62" fill="var(--accent)"/>
      <text x="258" y="58" fill="var(--accent)" fontSize="11" fontFamily="JetBrains Mono, monospace">D</text>
      {/* Labels */}
      <text x="50" y="35" fill="var(--text-dim)" fontSize="9" fontFamily="JetBrains Mono, monospace">inner (low)</text>
      <text x="200" y="30" fill="var(--text-dim)" fontSize="9" fontFamily="JetBrains Mono, monospace">outer (high)</text>
      {/* Force arrows */}
      <line x1="150" y1="28" x2="190" y2="28" stroke="var(--red)" strokeWidth="1.5"/>
      <polygon points="190,28 184,25 184,31" fill="var(--red)"/>
      <text x="155" y="22" fill="var(--red)" fontSize="8" fontFamily="JetBrains Mono, monospace">centrifugal</text>
      <line x1="150" y1="32" x2="150" y2="50" stroke="var(--blue)" strokeWidth="1.5"/>
      <polygon points="150,50 147,44 153,44" fill="var(--blue)"/>
      <text x="130" y="50" fill="var(--blue)" fontSize="8" fontFamily="JetBrains Mono, monospace">g</text>
      {/* Caption */}
      <text x="150" y="95" fill="var(--text-dim)" fontSize="9" fontFamily="JetBrains Mono, monospace" textAnchor="middle">D = cant (superelevation)</text>
      <text x="150" y="108" fill="var(--text-dim)" fontSize="8" fontFamily="JetBrains Mono, monospace" textAnchor="middle">outer rail raised to counteract centrifugal force</text>
    </svg>
  );
}
