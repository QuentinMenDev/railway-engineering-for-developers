import type { SymbolProps } from './types';

export default function TractionPowerChain({ style, ...props }: SymbolProps) {
  return (
    <svg viewBox="0 0 340 80" style={{ width: '100%', ...style }} {...props}>
      <text x="170" y="14" fill="var(--text-dim)" fontSize="10" fontFamily="JetBrains Mono, monospace" textAnchor="middle">Traction Power Chain</text>
      {/* Grid */}
      <rect x="10" y="28" width="45" height="20" fill="var(--bg-hover)" stroke="var(--text-bright)" strokeWidth="1" rx="2"/>
      <text x="32" y="42" fill="var(--text-bright)" fontSize="7" fontFamily="JetBrains Mono, monospace" textAnchor="middle">GRID</text>
      {/* Arrow */}
      <line x1="55" y1="38" x2="72" y2="38" stroke="var(--text-dim)" strokeWidth="1"/>
      <polygon points="72,38 67,35 67,41" fill="var(--text-dim)"/>
      {/* Feeder */}
      <rect x="72" y="28" width="55" height="20" fill="var(--bg-hover)" stroke="var(--accent)" strokeWidth="1" rx="2"/>
      <text x="99" y="42" fill="var(--accent)" fontSize="7" fontFamily="JetBrains Mono, monospace" textAnchor="middle">FEEDER</text>
      {/* Arrow */}
      <line x1="127" y1="38" x2="144" y2="38" stroke="var(--text-dim)" strokeWidth="1"/>
      <polygon points="144,38 139,35 139,41" fill="var(--text-dim)"/>
      {/* TSC */}
      <rect x="144" y="28" width="40" height="20" fill="var(--bg-hover)" stroke="var(--blue)" strokeWidth="1" rx="2"/>
      <text x="164" y="42" fill="var(--blue)" fontSize="7" fontFamily="JetBrains Mono, monospace" textAnchor="middle">TSC</text>
      {/* Arrow */}
      <line x1="184" y1="38" x2="201" y2="38" stroke="var(--text-dim)" strokeWidth="1"/>
      <polygon points="201,38 196,35 196,41" fill="var(--text-dim)"/>
      {/* OLE */}
      <line x1="201" y1="38" x2="270" y2="38" stroke="var(--accent)" strokeWidth="2"/>
      <text x="235" y="33" fill="var(--accent)" fontSize="7" fontFamily="JetBrains Mono, monospace" textAnchor="middle">25 kV</text>
      {/* Train */}
      <rect x="270" y="28" width="50" height="20" fill="var(--text-dim)" stroke="var(--text-bright)" strokeWidth="1" rx="2"/>
      <text x="295" y="42" fill="var(--bg)" fontSize="7" fontFamily="JetBrains Mono, monospace" textAnchor="middle">TRAIN</text>
      {/* Return */}
      <text x="170" y="68" fill="var(--text-dim)" fontSize="7" fontFamily="JetBrains Mono, monospace" textAnchor="middle">return path via running rails</text>
    </svg>
  );
}
