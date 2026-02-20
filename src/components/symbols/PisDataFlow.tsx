import type { SymbolProps } from './types';

export default function PisDataFlow({ style, ...props }: SymbolProps) {
  return (
    <svg viewBox="0 0 300 70" style={{ width: '100%', ...style }} {...props}>
      <text x="150" y="14" fill="var(--text-dim)" fontSize="10" fontFamily="JetBrains Mono, monospace" textAnchor="middle">PIS Data Flow</text>
      {/* Source */}
      <rect x="5" y="28" width="55" height="20" fill="var(--bg-hover)" stroke="var(--accent)" strokeWidth="1" rx="2"/>
      <text x="32" y="42" fill="var(--accent)" fontSize="7" fontFamily="JetBrains Mono, monospace" textAnchor="middle">Darwin</text>
      <line x1="60" y1="38" x2="77" y2="38" stroke="var(--text-dim)" strokeWidth="1"/>
      <polygon points="77,38 72,35 72,41" fill="var(--text-dim)"/>
      {/* CIS */}
      <rect x="77" y="28" width="60" height="20" fill="var(--bg-hover)" stroke="var(--blue)" strokeWidth="1" rx="2"/>
      <text x="107" y="42" fill="var(--blue)" fontSize="7" fontFamily="JetBrains Mono, monospace" textAnchor="middle">CIS Server</text>
      {/* Outputs */}
      <line x1="137" y1="34" x2="160" y2="28" stroke="var(--text-dim)" strokeWidth="0.8"/>
      <line x1="137" y1="38" x2="160" y2="38" stroke="var(--text-dim)" strokeWidth="0.8"/>
      <line x1="137" y1="42" x2="160" y2="48" stroke="var(--text-dim)" strokeWidth="0.8"/>
      <rect x="160" y="20" width="55" height="14" fill="var(--bg-hover)" stroke="var(--accent)" strokeWidth="0.8" rx="2"/>
      <text x="187" y="30" fill="var(--accent)" fontSize="7" fontFamily="JetBrains Mono, monospace" textAnchor="middle">Displays</text>
      <rect x="160" y="35" width="55" height="11" fill="var(--bg-hover)" stroke="var(--text-dim)" strokeWidth="0.8" rx="2"/>
      <text x="187" y="43" fill="var(--text-dim)" fontSize="6" fontFamily="JetBrains Mono, monospace" textAnchor="middle">PA / Audio</text>
      <rect x="160" y="47" width="55" height="11" fill="var(--bg-hover)" stroke="var(--accent-secondary)" strokeWidth="0.8" rx="2"/>
      <text x="187" y="55" fill="var(--accent-secondary)" fontSize="6" fontFamily="JetBrains Mono, monospace" textAnchor="middle">App / Web</text>
    </svg>
  );
}
