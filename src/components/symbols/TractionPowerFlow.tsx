import type { SymbolProps } from './types';

export default function TractionPowerFlow({ style, ...props }: SymbolProps) {
  return (
    <svg viewBox="0 0 340 70" style={{ width: '100%', ...style }} {...props}>
      <text x="170" y="14" fill="var(--text-dim)" fontSize="10" fontFamily="JetBrains Mono, monospace" textAnchor="middle">Traction Power Flow</text>
      {/* OLE */}
      <rect x="5" y="28" width="45" height="20" fill="var(--bg-hover)" stroke="var(--accent)" strokeWidth="1" rx="2"/>
      <text x="27" y="42" fill="var(--accent)" fontSize="7" fontFamily="JetBrains Mono, monospace" textAnchor="middle">25kV</text>
      <line x1="50" y1="38" x2="62" y2="38" stroke="var(--text-dim)" strokeWidth="1"/>
      <polygon points="62,38 57,35 57,41" fill="var(--text-dim)"/>
      {/* Transformer */}
      <rect x="62" y="28" width="45" height="20" fill="var(--bg-hover)" stroke="var(--text-bright)" strokeWidth="1" rx="2"/>
      <text x="84" y="42" fill="var(--text-bright)" fontSize="7" fontFamily="JetBrains Mono, monospace" textAnchor="middle">XFMR</text>
      <line x1="107" y1="38" x2="119" y2="38" stroke="var(--text-dim)" strokeWidth="1"/>
      <polygon points="119,38 114,35 114,41" fill="var(--text-dim)"/>
      {/* Inverter */}
      <rect x="119" y="28" width="50" height="20" fill="var(--bg-hover)" stroke="var(--blue)" strokeWidth="1" rx="2"/>
      <text x="144" y="42" fill="var(--blue)" fontSize="7" fontFamily="JetBrains Mono, monospace" textAnchor="middle">INVERTER</text>
      <line x1="169" y1="38" x2="181" y2="38" stroke="var(--text-dim)" strokeWidth="1"/>
      <polygon points="181,38 176,35 176,41" fill="var(--text-dim)"/>
      {/* Motor */}
      <rect x="181" y="28" width="48" height="20" fill="var(--bg-hover)" stroke="var(--accent-secondary)" strokeWidth="1" rx="2"/>
      <text x="205" y="42" fill="var(--accent-secondary)" fontSize="7" fontFamily="JetBrains Mono, monospace" textAnchor="middle">MOTOR</text>
      <line x1="229" y1="38" x2="241" y2="38" stroke="var(--text-dim)" strokeWidth="1"/>
      <polygon points="241,38 236,35 236,41" fill="var(--text-dim)"/>
      {/* Wheel */}
      <rect x="241" y="28" width="45" height="20" fill="var(--bg-hover)" stroke="var(--text-bright)" strokeWidth="1" rx="2"/>
      <text x="263" y="42" fill="var(--text-bright)" fontSize="7" fontFamily="JetBrains Mono, monospace" textAnchor="middle">WHEEL</text>
      {/* Regen */}
      <text x="170" y="62" fill="var(--accent-secondary)" fontSize="7" fontFamily="JetBrains Mono, monospace" textAnchor="middle">← regen braking returns energy to OLE</text>
    </svg>
  );
}
