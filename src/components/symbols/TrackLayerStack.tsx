import type { SymbolProps } from './types';

export default function TrackLayerStack({ style, ...props }: SymbolProps) {
  return (
    <svg viewBox="0 0 300 130" style={{ width: '100%', ...style }} {...props}>
      <text x="150" y="14" fill="var(--text-dim)" fontSize="10" fontFamily="JetBrains Mono, monospace" textAnchor="middle">Track Layer Stack</text>
      {/* Stacked layers as simple rectangles */}
      <rect x="40" y="22" width="220" height="14" fill="var(--text-bright)" opacity="0.8" stroke="var(--text-bright)" strokeWidth="1"/>
      <text x="150" y="32" fill="var(--bg-raised)" fontSize="8" fontFamily="JetBrains Mono, monospace" textAnchor="middle">RAIL (60 kg/m)</text>
      <rect x="30" y="38" width="240" height="14" fill="var(--text-dim)" stroke="var(--text-bright)" strokeWidth="1"/>
      <text x="150" y="48" fill="var(--text-bright)" fontSize="8" fontFamily="JetBrains Mono, monospace" textAnchor="middle">SLEEPERS @ 600 mm c/c</text>
      <rect x="20" y="54" width="260" height="22" fill="var(--border)" stroke="var(--text-dim)" strokeWidth="1"/>
      <text x="150" y="68" fill="var(--text-dim)" fontSize="9" fontFamily="JetBrains Mono, monospace" textAnchor="middle">BALLAST 250–350 mm</text>
      <rect x="15" y="78" width="270" height="14" fill="var(--bg-raised)" stroke="var(--border-light)" strokeWidth="1"/>
      <text x="150" y="88" fill="var(--text-dim)" fontSize="8" fontFamily="JetBrains Mono, monospace" textAnchor="middle">SUB-BALLAST (filter layer)</text>
      <rect x="10" y="94" width="280" height="22" fill="var(--bg-hover)" stroke="var(--border-light)" strokeWidth="1"/>
      <text x="150" y="108" fill="var(--text-dim)" fontSize="9" fontFamily="JetBrains Mono, monospace" textAnchor="middle">SUBGRADE</text>
      {/* Arrow showing load path */}
      <line x1="285" y1="28" x2="285" y2="108" stroke="var(--accent)" strokeWidth="1.5"/>
      <polygon points="285,108 282,102 288,102" fill="var(--accent)"/>
      <text x="292" y="70" fill="var(--accent)" fontSize="8" fontFamily="JetBrains Mono, monospace" writingMode="tb">load path ↓</text>
    </svg>
  );
}
