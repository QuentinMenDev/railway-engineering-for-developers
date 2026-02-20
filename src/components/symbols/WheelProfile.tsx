import type { SymbolProps } from './types';

export default function WheelProfile({ style, ...props }: SymbolProps) {
  return (
    <svg viewBox="0 0 280 100" style={{ width: '100%', ...style }} {...props}>
      <text x="140" y="14" fill="var(--text-dim)" fontSize="10" fontFamily="JetBrains Mono, monospace" textAnchor="middle">Wheel Profile</text>
      {/* Simplified wheel — rectangle with flange */}
      <rect x="60" y="30" width="120" height="20" fill="var(--text-dim)" stroke="var(--text-bright)" strokeWidth="1.5" rx="2"/>
      <rect x="45" y="28" width="18" height="24" fill="var(--text-dim)" stroke="var(--text-bright)" strokeWidth="1.5" rx="1"/>
      {/* Taper line */}
      <line x1="65" y1="48" x2="175" y2="52" stroke="var(--accent)" strokeWidth="1" strokeDasharray="3,2"/>
      {/* Rail */}
      <rect x="55" y="52" width="130" height="10" fill="var(--border)" stroke="var(--text-bright)" strokeWidth="1" rx="1"/>
      {/* Labels */}
      <text x="43" y="22" fill="var(--accent)" fontSize="8" fontFamily="JetBrains Mono, monospace" textAnchor="middle">flange</text>
      <text x="120" y="44" fill="var(--text-bright)" fontSize="8" fontFamily="JetBrains Mono, monospace" textAnchor="middle">tread</text>
      <text x="200" y="58" fill="var(--text-dim)" fontSize="7" fontFamily="JetBrains Mono, monospace">rail</text>
      <text x="200" y="45" fill="var(--accent)" fontSize="7" fontFamily="JetBrains Mono, monospace">1:20 taper</text>
      <text x="140" y="82" fill="var(--text-dim)" fontSize="8" fontFamily="JetBrains Mono, monospace" textAnchor="middle">conical tread enables self-centering</text>
    </svg>
  );
}
