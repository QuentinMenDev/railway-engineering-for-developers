import type { SymbolProps } from './types';

export default function GripProjectStages({ style, ...props }: SymbolProps) {
  return (
    <svg viewBox="0 0 420 100" style={{ width: '100%', ...style }} {...props}>
      <text x="210" y="14" fill="var(--text-dim)" fontSize="10" fontFamily="JetBrains Mono, monospace" textAnchor="middle">GRIP Stages — Project Lifecycle</text>
      {/* Stage boxes */}
      {[
        { x: 10, label: '1', name: 'Output', color: 'var(--text-dim)' },
        { x: 65, label: '2', name: 'Feasib.', color: 'var(--text-dim)' },
        { x: 120, label: '3', name: 'Option', color: 'var(--blue)' },
        { x: 175, label: '4', name: 'Single', color: 'var(--blue)' },
        { x: 230, label: '5', name: 'Detail', color: 'var(--accent)' },
        { x: 285, label: '6', name: 'Build', color: 'var(--accent)' },
        { x: 340, label: '7', name: 'T&C', color: 'var(--accent-secondary)' },
        { x: 395, label: '8', name: 'Close', color: 'var(--accent-secondary)' },
      ].map((stage, i) => (
        <g key={i}>
          <rect x={stage.x} y="28" width="45" height="30" fill="var(--bg-hover)" stroke={stage.color} strokeWidth="1.5" rx="3"/>
          <text x={stage.x + 22} y="40" fill={stage.color} fontSize="9" fontFamily="JetBrains Mono, monospace" textAnchor="middle" fontWeight="bold">{stage.label}</text>
          <text x={stage.x + 22} y="52" fill={stage.color} fontSize="7" fontFamily="JetBrains Mono, monospace" textAnchor="middle">{stage.name}</text>
          {i < 7 && <line x1={stage.x + 45} y1="43" x2={stage.x + 55} y2="43" stroke="var(--text-dim)" strokeWidth="1"/>}
          {i < 7 && <polygon points={`${stage.x + 55},43 ${stage.x + 51},40 ${stage.x + 51},46`} fill="var(--text-dim)"/>}
        </g>
      ))}
      {/* Phase labels below */}
      <line x1="10" y1="65" x2="155" y2="65" stroke="var(--text-dim)" strokeWidth="0.5"/>
      <text x="82" y="78" fill="var(--text-dim)" fontSize="7" fontFamily="JetBrains Mono, monospace" textAnchor="middle">Define &amp; Select</text>
      <line x1="175" y1="65" x2="320" y2="65" stroke="var(--accent)" strokeWidth="0.5"/>
      <text x="247" y="78" fill="var(--accent)" fontSize="7" fontFamily="JetBrains Mono, monospace" textAnchor="middle">Design &amp; Build</text>
      <line x1="340" y1="65" x2="440" y2="65" stroke="var(--accent-secondary)" strokeWidth="0.5"/>
      <text x="385" y="78" fill="var(--accent-secondary)" fontSize="7" fontFamily="JetBrains Mono, monospace" textAnchor="middle">Deliver</text>
      {/* Gate reviews */}
      <text x="210" y="92" fill="var(--text-dim)" fontSize="7" fontFamily="JetBrains Mono, monospace" textAnchor="middle">▲ gate reviews between stages</text>
    </svg>
  );
}
