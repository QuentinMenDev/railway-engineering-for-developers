import type { SymbolProps } from './types';

export default function StandardGauge({ style, ...props }: SymbolProps) {
  return (
    <svg viewBox="0 0 300 70" style={{ width: '100%', ...style }} {...props}>
      {/* Left rail (simple I-beam) */}
      <rect x="50" y="5" width="14" height="4" fill="var(--text-dim)" stroke="var(--text-bright)" strokeWidth="1"/>
      <rect x="54" y="9" width="6" height="20" fill="var(--text-dim)" stroke="var(--text-bright)" strokeWidth="1"/>
      <rect x="48" y="29" width="18" height="4" fill="var(--text-dim)" stroke="var(--text-bright)" strokeWidth="1"/>
      {/* Right rail (simple I-beam) */}
      <rect x="236" y="5" width="14" height="4" fill="var(--text-dim)" stroke="var(--text-bright)" strokeWidth="1"/>
      <rect x="240" y="9" width="6" height="20" fill="var(--text-dim)" stroke="var(--text-bright)" strokeWidth="1"/>
      <rect x="234" y="29" width="18" height="4" fill="var(--text-dim)" stroke="var(--text-bright)" strokeWidth="1"/>
      {/* Gauge dimension arrow */}
      <line x1="64" y1="18" x2="236" y2="18" stroke="var(--accent)" strokeWidth="1.5"/>
      <polygon points="64,18 70,15 70,21" fill="var(--accent)"/>
      <polygon points="236,18 230,15 230,21" fill="var(--accent)"/>
      <text x="150" y="15" fill="var(--accent)" fontSize="11" fontFamily="JetBrains Mono, monospace" textAnchor="middle">1,435 mm</text>
      {/* Sleeper bar */}
      <rect x="35" y="38" width="230" height="8" fill="var(--bg-hover)" stroke="var(--border-light)" strokeWidth="1" rx="1"/>
      {/* Labels */}
      <text x="150" y="60" fill="var(--text-dim)" fontSize="9" fontFamily="JetBrains Mono, monospace" textAnchor="middle">standard gauge — measured between inner faces of rails</text>
    </svg>
  );
}
