import type { SymbolProps } from './types';

export default function BridgeTypes({ style, ...props }: SymbolProps) {
  return (
    <svg viewBox="0 0 340 120" style={{ width: '100%', ...style }} {...props}>
      <text x="170" y="14" fill="var(--text-dim)" fontSize="10" fontFamily="JetBrains Mono, monospace" textAnchor="middle">Bridge Types</text>
      {/* Arch */}
      <g transform="translate(10, 25)">
        <rect x="5" y="15" width="10" height="45" fill="var(--border)" stroke="var(--text-bright)" strokeWidth="1"/>
        <rect x="85" y="15" width="10" height="45" fill="var(--border)" stroke="var(--text-bright)" strokeWidth="1"/>
        <path d="M 15,40 Q 50,10 85,40" fill="none" stroke="var(--text-bright)" strokeWidth="1.5"/>
        <line x1="0" y1="15" x2="100" y2="15" stroke="var(--text-bright)" strokeWidth="1.5"/>
        <text x="50" y="75" fill="var(--text-dim)" fontSize="8" fontFamily="JetBrains Mono, monospace" textAnchor="middle">Arch</text>
      </g>
      {/* Beam/girder */}
      <g transform="translate(120, 25)">
        <polygon points="5,50 0,58 10,58" fill="var(--text-dim)" stroke="var(--text-bright)" strokeWidth="1"/>
        <polygon points="95,50 90,58 100,58" fill="var(--text-dim)" stroke="var(--text-bright)" strokeWidth="1"/>
        <rect x="5" y="15" width="90" height="35" fill="var(--border)" opacity="0.2" stroke="var(--text-bright)" strokeWidth="1.5"/>
        <text x="50" y="75" fill="var(--text-dim)" fontSize="8" fontFamily="JetBrains Mono, monospace" textAnchor="middle">Beam</text>
      </g>
      {/* Box girder */}
      <g transform="translate(230, 25)">
        <polygon points="5,50 0,58 10,58" fill="var(--text-dim)" stroke="var(--text-bright)" strokeWidth="1"/>
        <polygon points="95,50 90,58 100,58" fill="var(--text-dim)" stroke="var(--text-bright)" strokeWidth="1"/>
        <rect x="5" y="15" width="90" height="35" fill="var(--border)" opacity="0.2" stroke="var(--text-bright)" strokeWidth="1.5"/>
        <rect x="15" y="22" width="70" height="21" fill="var(--bg-raised)" stroke="var(--text-dim)" strokeWidth="0.5"/>
        <text x="50" y="75" fill="var(--text-dim)" fontSize="8" fontFamily="JetBrains Mono, monospace" textAnchor="middle">Box Girder</text>
      </g>
    </svg>
  );
}
