import type { SymbolProps } from './types';

export default function BoreholeLog({ style, ...props }: SymbolProps) {
  return (
    <svg viewBox="0 0 260 180" style={{ width: '100%', ...style }} {...props}>
      <text x="130" y="14" fill="var(--text-dim)" fontSize="10" fontFamily="JetBrains Mono, monospace" textAnchor="middle">Borehole Log</text>
      {/* Borehole column — simple stacked rectangles */}
      <rect x="80" y="25" width="40" height="20" fill="var(--accent-secondary)" opacity="0.3" stroke="var(--text-bright)" strokeWidth="1"/>
      <text x="128" y="38" fill="var(--text-dim)" fontSize="8" fontFamily="JetBrains Mono, monospace">Topsoil</text>
      <rect x="80" y="45" width="40" height="40" fill="var(--accent)" opacity="0.15" stroke="var(--text-bright)" strokeWidth="1"/>
      <text x="128" y="68" fill="var(--text-dim)" fontSize="8" fontFamily="JetBrains Mono, monospace">Clay</text>
      <rect x="80" y="85" width="40" height="35" fill="var(--bg-hover)" stroke="var(--text-bright)" strokeWidth="1"/>
      <text x="128" y="105" fill="var(--text-dim)" fontSize="8" fontFamily="JetBrains Mono, monospace">Sand</text>
      <rect x="80" y="120" width="40" height="40" fill="var(--border)" opacity="0.5" stroke="var(--text-bright)" strokeWidth="1"/>
      <text x="128" y="143" fill="var(--text-dim)" fontSize="8" fontFamily="JetBrains Mono, monospace">Rock</text>
      {/* Depth scale */}
      <text x="72" y="30" fill="var(--accent)" fontSize="8" fontFamily="JetBrains Mono, monospace" textAnchor="end">0m</text>
      <text x="72" y="90" fill="var(--accent)" fontSize="8" fontFamily="JetBrains Mono, monospace" textAnchor="end">5m</text>
      <text x="72" y="125" fill="var(--accent)" fontSize="8" fontFamily="JetBrains Mono, monospace" textAnchor="end">8m</text>
      <text x="72" y="163" fill="var(--accent)" fontSize="8" fontFamily="JetBrains Mono, monospace" textAnchor="end">15m</text>
      {/* Water table */}
      <line x1="75" y1="85" x2="125" y2="85" stroke="var(--blue)" strokeWidth="1.5" strokeDasharray="4,2"/>
      <text x="50" y="85" fill="var(--blue)" fontSize="8" fontFamily="JetBrains Mono, monospace" textAnchor="end">GWL ▼</text>
      {/* SPT N-values */}
      <text x="200" y="24" fill="var(--accent)" fontSize="8" fontFamily="JetBrains Mono, monospace" textAnchor="middle">SPT N</text>
      <text x="200" y="68" fill="var(--text-dim)" fontSize="9" fontFamily="JetBrains Mono, monospace" textAnchor="middle">N=18</text>
      <text x="200" y="105" fill="var(--text-dim)" fontSize="9" fontFamily="JetBrains Mono, monospace" textAnchor="middle">N=35</text>
      <text x="200" y="143" fill="var(--text-dim)" fontSize="9" fontFamily="JetBrains Mono, monospace" textAnchor="middle">N=50+</text>
    </svg>
  );
}
