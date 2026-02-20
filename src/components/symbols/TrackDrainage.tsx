import type { SymbolProps } from './types';

export default function TrackDrainage({ style, ...props }: SymbolProps) {
  return (
    <svg viewBox="0 0 300 130" style={{ width: '100%', ...style }} {...props}>
      <text x="150" y="14" fill="var(--text-dim)" fontSize="10" fontFamily="JetBrains Mono, monospace" textAnchor="middle">Track Drainage</text>
      {/* Simplified layers */}
      <rect x="40" y="80" width="220" height="20" fill="var(--bg-hover)" stroke="var(--border-light)" strokeWidth="0.5"/>
      <text x="150" y="93" fill="var(--text-dim)" fontSize="8" fontFamily="JetBrains Mono, monospace" textAnchor="middle">subgrade</text>
      <rect x="50" y="50" width="200" height="30" fill="var(--border)" opacity="0.5" stroke="var(--text-dim)" strokeWidth="1"/>
      <text x="150" y="70" fill="var(--text-dim)" fontSize="8" fontFamily="JetBrains Mono, monospace" textAnchor="middle">ballast</text>
      {/* Rails — simple rectangles */}
      <rect x="100" y="42" width="5" height="10" fill="var(--text-bright)" stroke="var(--text-bright)" strokeWidth="1"/>
      <rect x="195" y="42" width="5" height="10" fill="var(--text-bright)" stroke="var(--text-bright)" strokeWidth="1"/>
      {/* Water flow arrows */}
      <line x1="130" y1="58" x2="60" y2="75" stroke="var(--blue)" strokeWidth="1" strokeDasharray="2,2"/>
      <polygon points="60,75 66,72 64,78" fill="var(--blue)"/>
      <line x1="170" y1="58" x2="240" y2="75" stroke="var(--blue)" strokeWidth="1" strokeDasharray="2,2"/>
      <polygon points="240,75 234,72 236,78" fill="var(--blue)"/>
      {/* Cess drains */}
      <text x="40" y="110" fill="var(--blue)" fontSize="8" fontFamily="JetBrains Mono, monospace" textAnchor="middle">cess</text>
      <text x="260" y="110" fill="var(--blue)" fontSize="8" fontFamily="JetBrains Mono, monospace" textAnchor="middle">cess</text>
      {/* Rain */}
      <line x1="150" y1="22" x2="150" y2="40" stroke="var(--blue)" strokeWidth="0.5"/>
      <polygon points="150,40 148,36 152,36" fill="var(--blue)"/>
      <text x="150" y="30" fill="var(--blue)" fontSize="7" fontFamily="JetBrains Mono, monospace" textAnchor="middle" dy="-6">rain ↓</text>
    </svg>
  );
}
