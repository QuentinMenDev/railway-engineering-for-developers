import type { SymbolProps } from './types';

export default function CatenarySystem({ style, ...props }: SymbolProps) {
  return (
    <svg viewBox="0 0 320 110" style={{ width: '100%', ...style }} {...props}>
      <text x="160" y="14" fill="var(--text-dim)" fontSize="10" fontFamily="JetBrains Mono, monospace" textAnchor="middle">Catenary System</text>
      {/* Two masts */}
      <line x1="30" y1="25" x2="30" y2="90" stroke="var(--text-bright)" strokeWidth="1.5"/>
      <line x1="290" y1="25" x2="290" y2="90" stroke="var(--text-bright)" strokeWidth="1.5"/>
      {/* Catenary wire (curved) */}
      <path d="M 50,30 Q 160,55 270,30" fill="none" stroke="var(--text-dim)" strokeWidth="1"/>
      <text x="160" y="52" fill="var(--text-dim)" fontSize="7" fontFamily="JetBrains Mono, monospace" textAnchor="middle">catenary wire</text>
      {/* Droppers */}
      <line x1="100" y1="36" x2="100" y2="60" stroke="var(--text-dim)" strokeWidth="0.5"/>
      <line x1="160" y1="45" x2="160" y2="60" stroke="var(--text-dim)" strokeWidth="0.5"/>
      <line x1="220" y1="36" x2="220" y2="60" stroke="var(--text-dim)" strokeWidth="0.5"/>
      {/* Contact wire (straight) */}
      <line x1="50" y1="60" x2="270" y2="60" stroke="var(--accent)" strokeWidth="1.5"/>
      <text x="285" y="58" fill="var(--accent)" fontSize="7" fontFamily="JetBrains Mono, monospace">contact</text>
      {/* Rail */}
      <line x1="20" y1="90" x2="300" y2="90" stroke="var(--text-bright)" strokeWidth="2"/>
      {/* Caption */}
      <text x="160" y="105" fill="var(--text-dim)" fontSize="7" fontFamily="JetBrains Mono, monospace" textAnchor="middle">contact wire staggered ±200 mm for even pantograph wear</text>
    </svg>
  );
}
