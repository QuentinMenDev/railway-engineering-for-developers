import type { SymbolProps } from './types';

export default function Turnout({ style, ...props }: SymbolProps) {
  return (
    <svg viewBox="0 0 320 110" style={{ width: '100%', ...style }} {...props}>
      <text x="160" y="14" fill="var(--text-dim)" fontSize="10" fontFamily="JetBrains Mono, monospace" textAnchor="middle">Turnout — Schematic Plan</text>
      {/* Straight route (single line) */}
      <line x1="20" y1="45" x2="300" y2="45" stroke="var(--text-bright)" strokeWidth="2"/>
      {/* Diverging route */}
      <line x1="80" y1="45" x2="260" y2="85" stroke="var(--text-bright)" strokeWidth="2"/>
      {/* Switch toe marker */}
      <circle cx="80" cy="45" r="4" fill="var(--accent)" stroke="var(--accent)" strokeWidth="1"/>
      {/* Crossing point marker */}
      <line x1="225" y1="40" x2="225" y2="50" stroke="var(--red)" strokeWidth="2"/>
      <line x1="220" y1="45" x2="230" y2="45" stroke="var(--red)" strokeWidth="2"/>
      {/* Point machine */}
      <rect x="100" y="50" width="16" height="10" fill="var(--bg-raised)" stroke="var(--accent)" strokeWidth="1" rx="1"/>
      <text x="108" y="58" fill="var(--accent)" fontSize="7" fontFamily="JetBrains Mono, monospace" textAnchor="middle">M</text>
      {/* Labels */}
      <text x="80" y="30" fill="var(--accent)" fontSize="8" fontFamily="JetBrains Mono, monospace">toe (switch)</text>
      <text x="225" y="32" fill="var(--red)" fontSize="8" fontFamily="JetBrains Mono, monospace" textAnchor="middle">crossing</text>
      <text x="285" y="40" fill="var(--text-dim)" fontSize="8" fontFamily="JetBrains Mono, monospace">straight</text>
      <text x="265" y="95" fill="var(--text-dim)" fontSize="8" fontFamily="JetBrains Mono, monospace">diverge</text>
      {/* Facing arrow */}
      <polygon points="35,45 45,41 45,49" fill="var(--accent-secondary)"/>
      <text x="25" y="60" fill="var(--accent-secondary)" fontSize="7" fontFamily="JetBrains Mono, monospace">facing</text>
    </svg>
  );
}
