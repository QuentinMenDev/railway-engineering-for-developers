import type { SymbolProps } from './types';

export default function RailCrossSection({ style, ...props }: SymbolProps) {
  return (
    <svg viewBox="0 0 300 80" style={{ width: '100%', ...style }} {...props}>
      {/* Simple I-beam rail symbol */}
      <rect x="55" y="8" width="30" height="6" fill="var(--text-dim)" stroke="var(--text-bright)" strokeWidth="1.5"/>
      <rect x="65" y="14" width="10" height="30" fill="var(--text-dim)" stroke="var(--text-bright)" strokeWidth="1.5"/>
      <rect x="50" y="44" width="40" height="6" fill="var(--text-dim)" stroke="var(--text-bright)" strokeWidth="1.5"/>
      {/* Labels */}
      <text x="100" y="15" fill="var(--accent)" fontSize="10" fontFamily="JetBrains Mono, monospace">← head</text>
      <text x="100" y="34" fill="var(--accent)" fontSize="10" fontFamily="JetBrains Mono, monospace">← web</text>
      <text x="100" y="52" fill="var(--accent)" fontSize="10" fontFamily="JetBrains Mono, monospace">← foot</text>
      {/* Rolling resistance comparison */}
      <text x="200" y="20" fill="var(--text-dim)" fontSize="9" fontFamily="JetBrains Mono, monospace">steel/steel: 0.1–0.3%</text>
      <text x="200" y="35" fill="var(--text-dim)" fontSize="9" fontFamily="JetBrains Mono, monospace">rubber/road: 1–2%</text>
      <text x="200" y="55" fill="var(--accent)" fontSize="9" fontFamily="JetBrains Mono, monospace">≈ 10× advantage</text>
    </svg>
  );
}
