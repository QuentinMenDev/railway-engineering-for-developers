import type { SymbolProps } from './types';

export default function CuttingEmbankment({ style, ...props }: SymbolProps) {
  return (
    <svg viewBox="0 0 360 130" style={{ width: '100%', ...style }} {...props}>
      <text x="180" y="14" fill="var(--text-dim)" fontSize="10" fontFamily="JetBrains Mono, monospace" textAnchor="middle">Cutting &amp; Embankment</text>
      {/* --- Cutting (left half) --- */}
      <line x1="10" y1="45" x2="170" y2="45" stroke="var(--text-dim)" strokeWidth="0.5" strokeDasharray="4,3"/>
      <line x1="45" y1="45" x2="75" y2="85" stroke="var(--text-bright)" strokeWidth="1.5"/>
      <line x1="125" y1="45" x2="95" y2="85" stroke="var(--text-bright)" strokeWidth="1.5"/>
      <line x1="75" y1="85" x2="95" y2="85" stroke="var(--text-bright)" strokeWidth="1.5"/>
      <rect x="79" y="80" width="12" height="5" fill="var(--text-dim)" stroke="var(--text-dim)" strokeWidth="0.5"/>
      <text x="85" y="105" fill="var(--text-dim)" fontSize="9" fontFamily="JetBrains Mono, monospace" textAnchor="middle">CUTTING</text>
      <text x="15" y="42" fill="var(--text-dim)" fontSize="7" fontFamily="JetBrains Mono, monospace">OGL</text>
      {/* --- Embankment (right half) --- */}
      <line x1="190" y1="85" x2="350" y2="85" stroke="var(--text-dim)" strokeWidth="0.5" strokeDasharray="4,3"/>
      <line x1="225" y1="85" x2="250" y2="50" stroke="var(--text-bright)" strokeWidth="1.5"/>
      <line x1="315" y1="85" x2="290" y2="50" stroke="var(--text-bright)" strokeWidth="1.5"/>
      <line x1="250" y1="50" x2="290" y2="50" stroke="var(--text-bright)" strokeWidth="1.5"/>
      <rect x="264" y="45" width="12" height="5" fill="var(--text-dim)" stroke="var(--text-dim)" strokeWidth="0.5"/>
      <text x="270" y="105" fill="var(--text-dim)" fontSize="9" fontFamily="JetBrains Mono, monospace" textAnchor="middle">EMBANKMENT</text>
      <text x="195" y="82" fill="var(--text-dim)" fontSize="7" fontFamily="JetBrains Mono, monospace">OGL</text>
      {/* Caption */}
      <text x="180" y="122" fill="var(--text-dim)" fontSize="8" fontFamily="JetBrains Mono, monospace" textAnchor="middle">OGL = original ground level — track sits below (cut) or above (fill)</text>
    </svg>
  );
}
