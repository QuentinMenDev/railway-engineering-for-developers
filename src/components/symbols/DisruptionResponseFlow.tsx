import type { SymbolProps } from './types';

export default function DisruptionResponseFlow({ style, ...props }: SymbolProps) {
  return (
    <svg viewBox="0 0 400 110" style={{ width: '100%', ...style }} {...props}>
      <text x="200" y="14" fill="var(--text-dim)" fontSize="10" fontFamily="JetBrains Mono, monospace" textAnchor="middle">Disruption Response — Decision Flow</text>
      {/* Disruption event */}
      <rect x="150" y="25" width="100" height="20" fill="var(--red)" opacity="0.2" stroke="var(--red)" strokeWidth="1.5" rx="3"/>
      <text x="200" y="38" fill="var(--red)" fontSize="8" fontFamily="JetBrains Mono, monospace" textAnchor="middle">INCIDENT</text>
      {/* Arrows down */}
      <line x1="200" y1="45" x2="200" y2="52" stroke="var(--text-dim)" strokeWidth="1"/>
      <polygon points="200,52 197,48 203,48" fill="var(--text-dim)"/>
      {/* Decision branches */}
      <line x1="200" y1="52" x2="80" y2="65" stroke="var(--text-dim)" strokeWidth="1"/>
      <line x1="200" y1="52" x2="200" y2="65" stroke="var(--text-dim)" strokeWidth="1"/>
      <line x1="200" y1="52" x2="320" y2="65" stroke="var(--text-dim)" strokeWidth="1"/>
      {/* Option boxes */}
      <rect x="35" y="65" width="90" height="20" fill="var(--bg-hover)" stroke="var(--accent)" strokeWidth="1" rx="3"/>
      <text x="80" y="78" fill="var(--accent)" fontSize="7" fontFamily="JetBrains Mono, monospace" textAnchor="middle">Short-turn / Cancel</text>
      <rect x="155" y="65" width="90" height="20" fill="var(--bg-hover)" stroke="var(--blue)" strokeWidth="1" rx="3"/>
      <text x="200" y="78" fill="var(--blue)" fontSize="7" fontFamily="JetBrains Mono, monospace" textAnchor="middle">Divert / Reroute</text>
      <rect x="275" y="65" width="90" height="20" fill="var(--bg-hover)" stroke="var(--accent-secondary)" strokeWidth="1" rx="3"/>
      <text x="320" y="78" fill="var(--accent-secondary)" fontSize="7" fontFamily="JetBrains Mono, monospace" textAnchor="middle">Bus Replacement</text>
      {/* Recovery */}
      <line x1="80" y1="85" x2="200" y2="95" stroke="var(--text-dim)" strokeWidth="0.5"/>
      <line x1="200" y1="85" x2="200" y2="95" stroke="var(--text-dim)" strokeWidth="0.5"/>
      <line x1="320" y1="85" x2="200" y2="95" stroke="var(--text-dim)" strokeWidth="0.5"/>
      <text x="200" y="105" fill="var(--accent-secondary)" fontSize="8" fontFamily="JetBrains Mono, monospace" textAnchor="middle">→ Recovery Plan → Normal Service</text>
    </svg>
  );
}
