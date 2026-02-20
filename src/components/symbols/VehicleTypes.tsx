import type { SymbolProps } from './types';

export default function VehicleTypes({ style, ...props }: SymbolProps) {
  return (
    <svg viewBox="0 0 340 90" style={{ width: '100%', ...style }} {...props}>
      <text x="170" y="14" fill="var(--text-dim)" fontSize="10" fontFamily="JetBrains Mono, monospace" textAnchor="middle">Rolling Stock Types</text>
      {/* Locomotive */}
      <g transform="translate(10, 22)">
        <rect x="5" y="8" width="70" height="28" fill="var(--text-dim)" stroke="var(--text-bright)" strokeWidth="1" rx="3"/>
        <circle cx="22" cy="44" r="5" fill="none" stroke="var(--text-bright)" strokeWidth="1.5"/>
        <circle cx="58" cy="44" r="5" fill="none" stroke="var(--text-bright)" strokeWidth="1.5"/>
        <text x="40" y="60" fill="var(--text-dim)" fontSize="8" fontFamily="JetBrains Mono, monospace" textAnchor="middle">Loco</text>
      </g>
      {/* EMU */}
      <g transform="translate(120, 22)">
        <rect x="5" y="12" width="90" height="24" fill="var(--text-dim)" stroke="var(--text-bright)" strokeWidth="1" rx="4"/>
        <circle cx="22" cy="44" r="5" fill="none" stroke="var(--text-bright)" strokeWidth="1.5"/>
        <circle cx="78" cy="44" r="5" fill="none" stroke="var(--text-bright)" strokeWidth="1.5"/>
        <line x1="48" y1="12" x2="48" y2="5" stroke="var(--accent)" strokeWidth="1"/>
        <line x1="42" y1="5" x2="54" y2="5" stroke="var(--accent)" strokeWidth="1.5"/>
        <text x="50" y="60" fill="var(--text-dim)" fontSize="8" fontFamily="JetBrains Mono, monospace" textAnchor="middle">EMU</text>
      </g>
      {/* Wagon */}
      <g transform="translate(240, 22)">
        <rect x="5" y="8" width="70" height="28" fill="var(--bg-hover)" stroke="var(--text-bright)" strokeWidth="1" rx="2"/>
        <circle cx="22" cy="44" r="5" fill="none" stroke="var(--text-bright)" strokeWidth="1.5"/>
        <circle cx="58" cy="44" r="5" fill="none" stroke="var(--text-bright)" strokeWidth="1.5"/>
        <text x="40" y="60" fill="var(--text-dim)" fontSize="8" fontFamily="JetBrains Mono, monospace" textAnchor="middle">Wagon</text>
      </g>
    </svg>
  );
}
