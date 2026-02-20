import type { SymbolProps } from './types';

export default function PointMachine({ style, ...props }: SymbolProps) {
  return (
    <svg viewBox="0 0 140 100" style={{ width: '100%', ...style }} {...props}>
      <text x="70" y="12" fill="var(--text-dim)" fontSize="8" fontFamily="JetBrains Mono, monospace" textAnchor="middle">Point Machine</text>
      {/* Track + diverge */}
      <line x1="10" y1="40" x2="130" y2="40" stroke="var(--text-bright)" strokeWidth="1.5"/>
      <line x1="40" y1="40" x2="100" y2="65" stroke="var(--text-bright)" strokeWidth="1.5"/>
      {/* Machine box */}
      <rect x="50" y="46" width="18" height="12" fill="var(--bg-hover)" stroke="var(--accent)" strokeWidth="1" rx="1"/>
      <text x="59" y="55" fill="var(--accent)" fontSize="7" fontFamily="JetBrains Mono, monospace" textAnchor="middle">M</text>
      <text x="70" y="80" fill="var(--text-dim)" fontSize="7" fontFamily="JetBrains Mono, monospace" textAnchor="middle">move + detect</text>
    </svg>
  );
}
