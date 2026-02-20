import type { SymbolProps } from './types';

export default function OleCatenary({ style, ...props }: SymbolProps) {
  return (
    <svg viewBox="0 0 140 110" style={{ width: '100%', ...style }} {...props}>
      <text x="70" y="12" fill="var(--text-dim)" fontSize="8" fontFamily="JetBrains Mono, monospace" textAnchor="middle">OLE / Catenary</text>
      {/* Mast */}
      <line x1="20" y1="22" x2="20" y2="90" stroke="var(--text-bright)" strokeWidth="1.5"/>
      {/* Arm */}
      <line x1="20" y1="28" x2="100" y2="28" stroke="var(--text-bright)" strokeWidth="1"/>
      {/* Contact wire */}
      <line x1="40" y1="50" x2="120" y2="50" stroke="var(--accent)" strokeWidth="1.5"/>
      {/* Dropper */}
      <line x1="70" y1="28" x2="70" y2="50" stroke="var(--text-dim)" strokeWidth="0.5"/>
      {/* Rail */}
      <line x1="30" y1="90" x2="120" y2="90" stroke="var(--text-bright)" strokeWidth="2"/>
      <text x="70" y="72" fill="var(--text-dim)" fontSize="7" fontFamily="JetBrains Mono, monospace" textAnchor="middle">25 kV AC</text>
    </svg>
  );
}
