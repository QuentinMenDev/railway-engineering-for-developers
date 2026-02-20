import type { SymbolProps } from './types';

export default function TrackCircuit({ style, ...props }: SymbolProps) {
  return (
    <svg viewBox="0 0 320 100" style={{ width: '100%', ...style }} {...props}>
      <text x="160" y="14" fill="var(--text-dim)" fontSize="10" fontFamily="JetBrains Mono, monospace" textAnchor="middle">Track Circuit Principle</text>
      {/* Two rails */}
      <line x1="30" y1="38" x2="290" y2="38" stroke="var(--text-bright)" strokeWidth="2"/>
      <line x1="30" y1="52" x2="290" y2="52" stroke="var(--text-bright)" strokeWidth="2"/>
      {/* Battery */}
      <rect x="30" y="56" width="22" height="10" fill="var(--bg-hover)" stroke="var(--accent)" strokeWidth="1" rx="1"/>
      <text x="41" y="64" fill="var(--accent)" fontSize="6" fontFamily="JetBrains Mono, monospace" textAnchor="middle">BAT</text>
      {/* Relay */}
      <rect x="268" y="56" width="22" height="10" fill="var(--bg-hover)" stroke="var(--blue)" strokeWidth="1" rx="1"/>
      <text x="279" y="64" fill="var(--blue)" fontSize="6" fontFamily="JetBrains Mono, monospace" textAnchor="middle">RLY</text>
      {/* Current flow */}
      <text x="160" y="34" fill="var(--accent-secondary)" fontSize="7" fontFamily="JetBrains Mono, monospace" textAnchor="middle">current → relay energised = CLEAR</text>
      {/* Occupied text */}
      <text x="160" y="80" fill="var(--text-dim)" fontSize="8" fontFamily="JetBrains Mono, monospace" textAnchor="middle">axle short-circuits → relay drops = OCCUPIED</text>
      <text x="160" y="94" fill="var(--accent)" fontSize="7" fontFamily="JetBrains Mono, monospace" textAnchor="middle">fail-safe: power loss = OCCUPIED</text>
    </svg>
  );
}
