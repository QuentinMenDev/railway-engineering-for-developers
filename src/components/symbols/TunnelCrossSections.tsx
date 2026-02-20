import type { SymbolProps } from './types';

export default function TunnelCrossSections({ style, ...props }: SymbolProps) {
  return (
    <svg viewBox="0 0 300 130" style={{ width: '100%', ...style }} {...props}>
      <text x="150" y="14" fill="var(--text-dim)" fontSize="10" fontFamily="JetBrains Mono, monospace" textAnchor="middle">Tunnel Cross-Sections</text>
      {/* Bored (circular) */}
      <g transform="translate(80, 72)">
        <circle cx="0" cy="0" r="40" fill="var(--bg-hover)" stroke="var(--text-bright)" strokeWidth="1.5"/>
        <line x1="-20" y1="22" x2="20" y2="22" stroke="var(--text-bright)" strokeWidth="1.5"/>
        <text x="0" y="52" fill="var(--text-dim)" fontSize="9" fontFamily="JetBrains Mono, monospace" textAnchor="middle">Bored (TBM)</text>
      </g>
      {/* Cut-and-cover (rectangular) */}
      <g transform="translate(220, 72)">
        <rect x="-40" y="-35" width="80" height="60" fill="var(--bg-hover)" stroke="var(--text-bright)" strokeWidth="1.5" rx="2"/>
        <line x1="-20" y1="15" x2="20" y2="15" stroke="var(--text-bright)" strokeWidth="1.5"/>
        <line x1="-50" y1="-40" x2="50" y2="-40" stroke="var(--text-dim)" strokeWidth="0.5" strokeDasharray="3,2"/>
        <text x="0" y="-44" fill="var(--text-dim)" fontSize="7" fontFamily="JetBrains Mono, monospace" textAnchor="middle">ground level</text>
        <text x="0" y="42" fill="var(--text-dim)" fontSize="9" fontFamily="JetBrains Mono, monospace" textAnchor="middle">Cut-and-Cover</text>
      </g>
    </svg>
  );
}
