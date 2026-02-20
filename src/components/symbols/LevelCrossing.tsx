import type { SymbolProps } from './types';

export default function LevelCrossing({ style, ...props }: SymbolProps) {
  return (
    <svg viewBox="0 0 140 100" style={{ width: '100%', ...style }} {...props}>
      <text x="70" y="12" fill="var(--text-dim)" fontSize="8" fontFamily="JetBrains Mono, monospace" textAnchor="middle">Level Crossing</text>
      {/* Track (vertical) */}
      <line x1="70" y1="22" x2="70" y2="85" stroke="var(--text-bright)" strokeWidth="2"/>
      {/* Road (horizontal) */}
      <rect x="15" y="42" width="110" height="14" fill="var(--bg-hover)" stroke="var(--text-dim)" strokeWidth="1" rx="1"/>
      {/* Barriers */}
      <line x1="30" y1="40" x2="30" y2="28" stroke="var(--red)" strokeWidth="1.5"/>
      <line x1="30" y1="28" x2="60" y2="28" stroke="var(--red)" strokeWidth="1.5"/>
      <line x1="110" y1="58" x2="110" y2="70" stroke="var(--red)" strokeWidth="1.5"/>
      <line x1="110" y1="70" x2="80" y2="70" stroke="var(--red)" strokeWidth="1.5"/>
      <text x="70" y="95" fill="var(--text-dim)" fontSize="7" fontFamily="JetBrains Mono, monospace" textAnchor="middle">half-barrier</text>
    </svg>
  );
}
