import type { SymbolProps } from './types';

export default function InterfaceMatrix({ style, ...props }: SymbolProps) {
  return (
    <svg viewBox="0 0 360 140" style={{ width: '100%', ...style }} {...props}>
      <text x="180" y="14" fill="var(--text-dim)" fontSize="10" fontFamily="JetBrains Mono, monospace" textAnchor="middle">Interface Matrix — Disciplines</text>
      {/* Discipline nodes in a circle */}
      {[
        { x: 180, y: 35, label: 'Track' },
        { x: 280, y: 50, label: 'Sig' },
        { x: 310, y: 95, label: 'E&P' },
        { x: 240, y: 125, label: 'Telecoms' },
        { x: 120, y: 125, label: 'Civils' },
        { x: 50, y: 95, label: 'Struct' },
        { x: 80, y: 50, label: 'RS' },
      ].map((node, i) => (
        <g key={i}>
          <circle cx={node.x} cy={node.y} r="18" fill="var(--bg-hover)" stroke="var(--accent)" strokeWidth="1"/>
          <text x={node.x} y={node.y + 3} fill="var(--accent)" fontSize="7" fontFamily="JetBrains Mono, monospace" textAnchor="middle">{node.label}</text>
        </g>
      ))}
      {/* Interface lines (key ones) */}
      <line x1="180" y1="53" x2="280" y2="50" stroke="var(--border-light)" strokeWidth="0.8"/>
      <line x1="180" y1="53" x2="80" y2="50" stroke="var(--border-light)" strokeWidth="0.8"/>
      <line x1="280" y1="68" x2="310" y2="77" stroke="var(--border-light)" strokeWidth="0.8"/>
      <line x1="310" y1="113" x2="240" y2="125" stroke="var(--border-light)" strokeWidth="0.8"/>
      <line x1="120" y1="125" x2="50" y2="113" stroke="var(--border-light)" strokeWidth="0.8"/>
      <line x1="50" y1="77" x2="80" y2="68" stroke="var(--border-light)" strokeWidth="0.8"/>
      <line x1="80" y1="50" x2="280" y2="50" stroke="var(--red)" strokeWidth="1" strokeDasharray="3,2"/>
      <line x1="180" y1="53" x2="310" y2="95" stroke="var(--red)" strokeWidth="1" strokeDasharray="3,2"/>
      <line x1="180" y1="53" x2="50" y2="95" stroke="var(--red)" strokeWidth="1" strokeDasharray="3,2"/>
      <line x1="280" y1="68" x2="120" y2="107" stroke="var(--red)" strokeWidth="1" strokeDasharray="3,2"/>
      <line x1="80" y1="68" x2="240" y2="107" stroke="var(--red)" strokeWidth="1" strokeDasharray="3,2"/>
      {/* Legend */}
      <line x1="30" y1="14" x2="50" y2="14" stroke="var(--red)" strokeWidth="1" strokeDasharray="3,2"/>
      <text x="55" y="17" fill="var(--text-dim)" fontSize="7" fontFamily="JetBrains Mono, monospace">critical interfaces</text>
    </svg>
  );
}
