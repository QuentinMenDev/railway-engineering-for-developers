import type { SymbolProps } from './types';

export default function PlatformLayouts({ style, ...props }: SymbolProps) {
  return (
    <svg viewBox="0 0 340 110" style={{ width: '100%', ...style }} {...props}>
      <text x="170" y="14" fill="var(--text-dim)" fontSize="10" fontFamily="JetBrains Mono, monospace" textAnchor="middle">Platform Layouts — Plan</text>
      {/* Side platforms */}
      <g transform="translate(10, 28)">
        <rect x="5" y="0" width="80" height="7" fill="var(--bg-hover)" stroke="var(--text-dim)" strokeWidth="1" rx="1"/>
        <line x1="5" y1="12" x2="85" y2="12" stroke="var(--text-bright)" strokeWidth="1.5"/>
        <line x1="5" y1="22" x2="85" y2="22" stroke="var(--text-bright)" strokeWidth="1.5"/>
        <rect x="5" y="27" width="80" height="7" fill="var(--bg-hover)" stroke="var(--text-dim)" strokeWidth="1" rx="1"/>
        <text x="45" y="50" fill="var(--text-dim)" fontSize="8" fontFamily="JetBrains Mono, monospace" textAnchor="middle">Side</text>
      </g>
      {/* Island platform */}
      <g transform="translate(120, 28)">
        <line x1="5" y1="5" x2="85" y2="5" stroke="var(--text-bright)" strokeWidth="1.5"/>
        <rect x="5" y="10" width="80" height="14" fill="var(--bg-hover)" stroke="var(--text-dim)" strokeWidth="1" rx="1"/>
        <line x1="5" y1="29" x2="85" y2="29" stroke="var(--text-bright)" strokeWidth="1.5"/>
        <text x="45" y="50" fill="var(--text-dim)" fontSize="8" fontFamily="JetBrains Mono, monospace" textAnchor="middle">Island</text>
      </g>
      {/* Bay platform */}
      <g transform="translate(230, 28)">
        <rect x="5" y="0" width="80" height="7" fill="var(--bg-hover)" stroke="var(--text-dim)" strokeWidth="1" rx="1"/>
        <line x1="5" y1="12" x2="85" y2="12" stroke="var(--text-bright)" strokeWidth="1.5"/>
        <line x1="5" y1="22" x2="50" y2="22" stroke="var(--text-bright)" strokeWidth="1.5"/>
        <line x1="50" y1="18" x2="50" y2="26" stroke="var(--text-bright)" strokeWidth="2.5"/>
        <rect x="5" y="26" width="45" height="7" fill="var(--bg-hover)" stroke="var(--text-dim)" strokeWidth="1" rx="1"/>
        <text x="45" y="50" fill="var(--text-dim)" fontSize="8" fontFamily="JetBrains Mono, monospace" textAnchor="middle">Bay</text>
      </g>
      <text x="170" y="98" fill="var(--text-dim)" fontSize="8" fontFamily="JetBrains Mono, monospace" textAnchor="middle">■ platform   ─ track   ┃ buffer stop</text>
    </svg>
  );
}
