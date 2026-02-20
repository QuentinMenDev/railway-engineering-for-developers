import type { SymbolProps } from './types';

export default function EtcsLevel2({ style, ...props }: SymbolProps) {
  return (
    <svg viewBox="0 0 320 110" style={{ width: '100%', ...style }} {...props}>
      <text x="160" y="14" fill="var(--text-dim)" fontSize="10" fontFamily="JetBrains Mono, monospace" textAnchor="middle">ETCS Level 2</text>
      {/* Track */}
      <line x1="20" y1="70" x2="300" y2="70" stroke="var(--text-bright)" strokeWidth="2"/>
      {/* Train (EVC) */}
      <rect x="50" y="56" width="50" height="12" fill="var(--text-dim)" stroke="var(--text-bright)" strokeWidth="1" rx="2"/>
      <text x="75" y="65" fill="var(--bg)" fontSize="7" fontFamily="JetBrains Mono, monospace" textAnchor="middle">EVC</text>
      {/* Radio link */}
      <line x1="75" y1="56" x2="200" y2="30" stroke="var(--blue)" strokeWidth="1" strokeDasharray="3,2"/>
      <text x="130" y="38" fill="var(--blue)" fontSize="7" fontFamily="JetBrains Mono, monospace" textAnchor="middle">radio</text>
      {/* RBC box */}
      <rect x="180" y="18" width="45" height="18" fill="var(--bg-hover)" stroke="var(--blue)" strokeWidth="1.5" rx="2"/>
      <text x="202" y="30" fill="var(--blue)" fontSize="8" fontFamily="JetBrains Mono, monospace" textAnchor="middle">RBC</text>
      {/* IXL box */}
      <rect x="240" y="18" width="40" height="18" fill="var(--bg-hover)" stroke="var(--accent-secondary)" strokeWidth="1.5" rx="2"/>
      <text x="260" y="30" fill="var(--accent-secondary)" fontSize="8" fontFamily="JetBrains Mono, monospace" textAnchor="middle">IXL</text>
      <line x1="225" y1="27" x2="240" y2="27" stroke="var(--text-dim)" strokeWidth="1"/>
      {/* Eurobalises */}
      <rect x="120" y="68" width="8" height="4" fill="var(--accent)" rx="1"/>
      <rect x="180" y="68" width="8" height="4" fill="var(--accent)" rx="1"/>
      <text x="155" y="64" fill="var(--accent)" fontSize="7" fontFamily="JetBrains Mono, monospace" textAnchor="middle">balises</text>
      {/* Movement authority */}
      <line x1="100" y1="85" x2="250" y2="85" stroke="var(--accent-secondary)" strokeWidth="1.5"/>
      <polygon points="250,85 244,82 244,88" fill="var(--accent-secondary)"/>
      <text x="175" y="100" fill="var(--accent-secondary)" fontSize="8" fontFamily="JetBrains Mono, monospace" textAnchor="middle">Movement Authority</text>
    </svg>
  );
}
