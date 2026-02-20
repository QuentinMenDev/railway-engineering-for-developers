import type { SymbolProps } from './types';

export default function ThirdRail({ style, ...props }: SymbolProps) {
  return (
    <svg viewBox="0 0 140 110" style={{ width: '100%', ...style }} {...props}>
      <text x="70" y="12" fill="var(--text-dim)" fontSize="8" fontFamily="JetBrains Mono, monospace" textAnchor="middle">Third Rail</text>
      {/* Running rails */}
      <line x1="20" y1="50" x2="120" y2="50" stroke="var(--text-bright)" strokeWidth="2"/>
      <line x1="20" y1="70" x2="120" y2="70" stroke="var(--text-bright)" strokeWidth="2"/>
      {/* Conductor rail */}
      <rect x="15" y="75" width="110" height="5" fill="var(--accent)" stroke="var(--accent)" strokeWidth="1" rx="1"/>
      <text x="70" y="95" fill="var(--accent)" fontSize="7" fontFamily="JetBrains Mono, monospace" textAnchor="middle">conductor rail</text>
      <text x="70" y="105" fill="var(--text-dim)" fontSize="7" fontFamily="JetBrains Mono, monospace" textAnchor="middle">660–750 V DC</text>
    </svg>
  );
}
