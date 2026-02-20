import type { SymbolProps } from './types';

export default function FibreRingTopology({ style, ...props }: SymbolProps) {
  return (
    <svg viewBox="0 0 280 100" style={{ width: '100%', ...style }} {...props}>
      <text x="140" y="14" fill="var(--text-dim)" fontSize="10" fontFamily="JetBrains Mono, monospace" textAnchor="middle">Fibre Ring Topology</text>
      {/* Nodes */}
      <rect x="15" y="35" width="45" height="18" fill="var(--bg-hover)" stroke="var(--accent)" strokeWidth="1" rx="2"/>
      <text x="37" y="47" fill="var(--accent)" fontSize="7" fontFamily="JetBrains Mono, monospace" textAnchor="middle">Node A</text>
      <rect x="117" y="22" width="45" height="18" fill="var(--bg-hover)" stroke="var(--accent)" strokeWidth="1" rx="2"/>
      <text x="139" y="34" fill="var(--accent)" fontSize="7" fontFamily="JetBrains Mono, monospace" textAnchor="middle">Node B</text>
      <rect x="220" y="35" width="45" height="18" fill="var(--bg-hover)" stroke="var(--accent)" strokeWidth="1" rx="2"/>
      <text x="242" y="47" fill="var(--accent)" fontSize="7" fontFamily="JetBrains Mono, monospace" textAnchor="middle">Node C</text>
      <rect x="117" y="55" width="45" height="18" fill="var(--bg-hover)" stroke="var(--accent)" strokeWidth="1" rx="2"/>
      <text x="139" y="67" fill="var(--accent)" fontSize="7" fontFamily="JetBrains Mono, monospace" textAnchor="middle">Node D</text>
      {/* Ring connections */}
      <line x1="60" y1="40" x2="117" y2="33" stroke="var(--accent-secondary)" strokeWidth="1.5"/>
      <line x1="162" y1="33" x2="220" y2="40" stroke="var(--accent-secondary)" strokeWidth="1.5"/>
      <line x1="220" y1="48" x2="162" y2="60" stroke="var(--accent-secondary)" strokeWidth="1.5"/>
      <line x1="117" y1="60" x2="60" y2="48" stroke="var(--accent-secondary)" strokeWidth="1.5"/>
      <text x="140" y="50" fill="var(--accent-secondary)" fontSize="7" fontFamily="JetBrains Mono, monospace" textAnchor="middle">ring</text>
      <text x="140" y="88" fill="var(--text-dim)" fontSize="7" fontFamily="JetBrains Mono, monospace" textAnchor="middle">resilient: survives single fibre break</text>
    </svg>
  );
}
