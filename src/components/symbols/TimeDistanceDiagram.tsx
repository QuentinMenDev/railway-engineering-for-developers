import type { SymbolProps } from './types';

export default function TimeDistanceDiagram({ style, ...props }: SymbolProps) {
  return (
    <svg viewBox="0 0 400 140" style={{ width: '100%', ...style }} {...props}>
      <text x="200" y="14" fill="var(--text-dim)" fontSize="10" fontFamily="JetBrains Mono, monospace" textAnchor="middle">Time-Distance (String) Diagram</text>
      {/* Y-axis (stations) */}
      <line x1="60" y1="25" x2="60" y2="120" stroke="var(--text-dim)" strokeWidth="1"/>
      {/* X-axis (time) */}
      <line x1="60" y1="120" x2="380" y2="120" stroke="var(--text-dim)" strokeWidth="1"/>
      {/* Station labels */}
      <text x="55" y="35" fill="var(--text-dim)" fontSize="7" fontFamily="JetBrains Mono, monospace" textAnchor="end">Stn A</text>
      <text x="55" y="60" fill="var(--text-dim)" fontSize="7" fontFamily="JetBrains Mono, monospace" textAnchor="end">Stn B</text>
      <text x="55" y="85" fill="var(--text-dim)" fontSize="7" fontFamily="JetBrains Mono, monospace" textAnchor="end">Stn C</text>
      <text x="55" y="115" fill="var(--text-dim)" fontSize="7" fontFamily="JetBrains Mono, monospace" textAnchor="end">Stn D</text>
      {/* Station grid lines */}
      <line x1="60" y1="32" x2="380" y2="32" stroke="var(--border)" strokeWidth="0.5" strokeDasharray="2,3"/>
      <line x1="60" y1="57" x2="380" y2="57" stroke="var(--border)" strokeWidth="0.5" strokeDasharray="2,3"/>
      <line x1="60" y1="82" x2="380" y2="82" stroke="var(--border)" strokeWidth="0.5" strokeDasharray="2,3"/>
      <line x1="60" y1="112" x2="380" y2="112" stroke="var(--border)" strokeWidth="0.5" strokeDasharray="2,3"/>
      {/* Time labels */}
      <text x="80" y="132" fill="var(--text-dim)" fontSize="7" fontFamily="JetBrains Mono, monospace">06:00</text>
      <text x="180" y="132" fill="var(--text-dim)" fontSize="7" fontFamily="JetBrains Mono, monospace">07:00</text>
      <text x="280" y="132" fill="var(--text-dim)" fontSize="7" fontFamily="JetBrains Mono, monospace">08:00</text>
      {/* Fast train (A→D, stopping at B only) */}
      <polyline points="80,32 120,57 125,57 180,112" fill="none" stroke="var(--accent)" strokeWidth="1.5"/>
      {/* Stopping train (A→D, all stops) */}
      <polyline points="100,32 140,57 148,57 190,82 198,82 260,112" fill="none" stroke="var(--blue)" strokeWidth="1.5"/>
      {/* Return train (D→A) */}
      <polyline points="200,112 250,82 255,82 300,57 308,57 360,32" fill="none" stroke="var(--accent-secondary)" strokeWidth="1.5"/>
      {/* Legend */}
      <line x1="240" y1="28" x2="260" y2="28" stroke="var(--accent)" strokeWidth="1.5"/>
      <text x="265" y="31" fill="var(--text-dim)" fontSize="7" fontFamily="JetBrains Mono, monospace">fast</text>
      <line x1="290" y1="28" x2="310" y2="28" stroke="var(--blue)" strokeWidth="1.5"/>
      <text x="315" y="31" fill="var(--text-dim)" fontSize="7" fontFamily="JetBrains Mono, monospace">stopping</text>
    </svg>
  );
}
