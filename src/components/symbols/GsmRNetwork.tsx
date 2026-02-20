import type { SymbolProps } from './types';

export default function GsmRNetwork({ style, ...props }: SymbolProps) {
  return (
    <svg viewBox="0 0 320 90" style={{ width: '100%', ...style }} {...props}>
      <text x="160" y="14" fill="var(--text-dim)" fontSize="10" fontFamily="JetBrains Mono, monospace" textAnchor="middle">GSM-R Network</text>
      {/* Train */}
      <rect x="10" y="30" width="50" height="16" fill="var(--text-dim)" stroke="var(--text-bright)" strokeWidth="1" rx="2"/>
      <text x="35" y="41" fill="var(--bg)" fontSize="7" fontFamily="JetBrains Mono, monospace" textAnchor="middle">Train</text>
      {/* Radio */}
      <line x1="60" y1="38" x2="90" y2="38" stroke="var(--blue)" strokeWidth="1" strokeDasharray="3,2"/>
      <text x="75" y="32" fill="var(--blue)" fontSize="6" fontFamily="JetBrains Mono, monospace" textAnchor="middle">radio</text>
      {/* BTS */}
      <rect x="90" y="30" width="35" height="16" fill="var(--bg-hover)" stroke="var(--blue)" strokeWidth="1" rx="2"/>
      <text x="107" y="41" fill="var(--blue)" fontSize="7" fontFamily="JetBrains Mono, monospace" textAnchor="middle">BTS</text>
      <line x1="125" y1="38" x2="140" y2="38" stroke="var(--text-dim)" strokeWidth="1"/>
      {/* BSC */}
      <rect x="140" y="30" width="35" height="16" fill="var(--bg-hover)" stroke="var(--blue)" strokeWidth="1" rx="2"/>
      <text x="157" y="41" fill="var(--blue)" fontSize="7" fontFamily="JetBrains Mono, monospace" textAnchor="middle">BSC</text>
      <line x1="175" y1="38" x2="190" y2="38" stroke="var(--text-dim)" strokeWidth="1"/>
      {/* MSC */}
      <rect x="190" y="30" width="35" height="16" fill="var(--bg-hover)" stroke="var(--accent)" strokeWidth="1" rx="2"/>
      <text x="207" y="41" fill="var(--accent)" fontSize="7" fontFamily="JetBrains Mono, monospace" textAnchor="middle">MSC</text>
      <line x1="225" y1="38" x2="240" y2="38" stroke="var(--text-dim)" strokeWidth="1"/>
      {/* Control */}
      <rect x="240" y="30" width="65" height="16" fill="var(--bg-hover)" stroke="var(--accent-secondary)" strokeWidth="1" rx="2"/>
      <text x="272" y="41" fill="var(--accent-secondary)" fontSize="7" fontFamily="JetBrains Mono, monospace" textAnchor="middle">Control Centre</text>
      {/* Fibre backbone */}
      <line x1="90" y1="55" x2="305" y2="55" stroke="var(--accent-secondary)" strokeWidth="1.5"/>
      <text x="200" y="68" fill="var(--accent-secondary)" fontSize="7" fontFamily="JetBrains Mono, monospace" textAnchor="middle">fibre backbone</text>
    </svg>
  );
}
