import type { SymbolProps } from './types';

export default function FlatJunctionConflict({ style, ...props }: SymbolProps) {
  return (
    <svg viewBox="0 0 400 120" style={{ width: '100%', ...style }} {...props}>
      <text x="200" y="14" fill="var(--text-dim)" fontSize="10" fontFamily="JetBrains Mono, monospace" textAnchor="middle">Capacity Constraints — Flat Junction</text>
      {/* Main line (horizontal) */}
      <line x1="20" y1="55" x2="380" y2="55" stroke="var(--text-bright)" strokeWidth="2"/>
      <line x1="20" y1="70" x2="380" y2="70" stroke="var(--text-bright)" strokeWidth="2"/>
      {/* Branch line diverging */}
      <line x1="200" y1="55" x2="300" y2="25" stroke="var(--text-bright)" strokeWidth="2"/>
      <line x1="210" y1="55" x2="310" y2="25" stroke="var(--text-bright)" strokeWidth="2"/>
      {/* Branch line converging */}
      <line x1="200" y1="70" x2="300" y2="100" stroke="var(--text-bright)" strokeWidth="2"/>
      <line x1="210" y1="70" x2="310" y2="100" stroke="var(--text-bright)" strokeWidth="2"/>
      {/* Conflict point */}
      <circle cx="205" cy="62" r="12" fill="none" stroke="var(--red)" strokeWidth="1.5" strokeDasharray="3,2"/>
      <text x="205" y="66" fill="var(--red)" fontSize="7" fontFamily="JetBrains Mono, monospace" textAnchor="middle">conflict</text>
      {/* Labels */}
      <text x="40" y="50" fill="var(--text-dim)" fontSize="8" fontFamily="JetBrains Mono, monospace">Up Main →</text>
      <text x="330" y="80" fill="var(--text-dim)" fontSize="8" fontFamily="JetBrains Mono, monospace">← Down Main</text>
      <text x="310" y="22" fill="var(--accent)" fontSize="7" fontFamily="JetBrains Mono, monospace">Branch</text>
      {/* Headway indicator */}
      <line x1="80" y1="78" x2="160" y2="78" stroke="var(--accent)" strokeWidth="1"/>
      <polygon points="80,78 86,75 86,81" fill="var(--accent)"/>
      <polygon points="160,78 154,75 154,81" fill="var(--accent)"/>
      <text x="120" y="90" fill="var(--accent)" fontSize="7" fontFamily="JetBrains Mono, monospace" textAnchor="middle">min headway</text>
    </svg>
  );
}
