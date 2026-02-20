import type { SymbolProps } from './types';

export default function AbsoluteBlockSection({ style, ...props }: SymbolProps) {
  return (
    <svg viewBox="0 0 340 100" style={{ width: '100%', ...style }} {...props}>
      <text x="170" y="14" fill="var(--text-dim)" fontSize="10" fontFamily="JetBrains Mono, monospace" textAnchor="middle">Absolute Block</text>
      {/* Track */}
      <line x1="20" y1="48" x2="320" y2="48" stroke="var(--text-bright)" strokeWidth="2"/>
      {/* Signal A — red */}
      <line x1="70" y1="48" x2="70" y2="28" stroke="var(--red)" strokeWidth="1.5"/>
      <circle cx="70" cy="25" r="4" fill="var(--red)"/>
      <text x="70" y="18" fill="var(--text-dim)" fontSize="7" fontFamily="JetBrains Mono, monospace" textAnchor="middle">Sig A</text>
      {/* Signal B — green */}
      <line x1="230" y1="48" x2="230" y2="28" stroke="var(--accent-secondary)" strokeWidth="1.5"/>
      <circle cx="230" cy="25" r="4" fill="var(--accent-secondary)"/>
      <text x="230" y="18" fill="var(--text-dim)" fontSize="7" fontFamily="JetBrains Mono, monospace" textAnchor="middle">Sig B</text>
      {/* Block section bracket */}
      <line x1="70" y1="58" x2="70" y2="65" stroke="var(--accent)" strokeWidth="1"/>
      <line x1="230" y1="58" x2="230" y2="65" stroke="var(--accent)" strokeWidth="1"/>
      <line x1="70" y1="65" x2="230" y2="65" stroke="var(--accent)" strokeWidth="1"/>
      <text x="150" y="78" fill="var(--accent)" fontSize="9" fontFamily="JetBrains Mono, monospace" textAnchor="middle">Block Section</text>
      <text x="150" y="92" fill="var(--text-dim)" fontSize="8" fontFamily="JetBrains Mono, monospace" textAnchor="middle">only one train permitted in section at a time</text>
    </svg>
  );
}
