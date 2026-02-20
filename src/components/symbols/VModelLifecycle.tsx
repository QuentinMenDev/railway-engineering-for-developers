import type { SymbolProps } from './types';

export default function VModelLifecycle({ style, ...props }: SymbolProps) {
  return (
    <svg viewBox="0 0 400 150" style={{ width: '100%', ...style }} {...props}>
      <text x="200" y="14" fill="var(--text-dim)" fontSize="10" fontFamily="JetBrains Mono, monospace" textAnchor="middle">V-Model — Systems Engineering Lifecycle</text>
      {/* Left side (decomposition) */}
      <rect x="10" y="30" width="80" height="18" fill="var(--bg-hover)" stroke="var(--accent)" strokeWidth="1" rx="2"/>
      <text x="50" y="42" fill="var(--accent)" fontSize="7" fontFamily="JetBrains Mono, monospace" textAnchor="middle">Requirements</text>
      <rect x="50" y="55" width="80" height="18" fill="var(--bg-hover)" stroke="var(--accent)" strokeWidth="1" rx="2"/>
      <text x="90" y="67" fill="var(--accent)" fontSize="7" fontFamily="JetBrains Mono, monospace" textAnchor="middle">System Design</text>
      <rect x="90" y="80" width="80" height="18" fill="var(--bg-hover)" stroke="var(--accent)" strokeWidth="1" rx="2"/>
      <text x="130" y="92" fill="var(--accent)" fontSize="7" fontFamily="JetBrains Mono, monospace" textAnchor="middle">Detail Design</text>
      {/* Bottom (implementation) */}
      <rect x="150" y="105" width="100" height="22" fill="var(--bg-hover)" stroke="var(--accent-secondary)" strokeWidth="1.5" rx="3"/>
      <text x="200" y="119" fill="var(--accent-secondary)" fontSize="8" fontFamily="JetBrains Mono, monospace" textAnchor="middle">Build / Code</text>
      {/* Right side (integration/test) */}
      <rect x="270" y="80" width="80" height="18" fill="var(--bg-hover)" stroke="var(--blue)" strokeWidth="1" rx="2"/>
      <text x="310" y="92" fill="var(--blue)" fontSize="7" fontFamily="JetBrains Mono, monospace" textAnchor="middle">Unit Test</text>
      <rect x="270" y="55" width="80" height="18" fill="var(--bg-hover)" stroke="var(--blue)" strokeWidth="1" rx="2"/>
      <text x="310" y="67" fill="var(--blue)" fontSize="7" fontFamily="JetBrains Mono, monospace" textAnchor="middle">Integration</text>
      <rect x="310" y="30" width="80" height="18" fill="var(--bg-hover)" stroke="var(--blue)" strokeWidth="1" rx="2"/>
      <text x="350" y="42" fill="var(--blue)" fontSize="7" fontFamily="JetBrains Mono, monospace" textAnchor="middle">Validation</text>
      {/* Connecting lines (V shape) */}
      <line x1="50" y1="48" x2="90" y2="55" stroke="var(--text-dim)" strokeWidth="0.8"/>
      <line x1="130" y1="73" x2="150" y2="80" stroke="var(--text-dim)" strokeWidth="0.8"/>
      <line x1="170" y1="98" x2="200" y2="105" stroke="var(--text-dim)" strokeWidth="0.8"/>
      <line x1="200" y1="105" x2="250" y2="98" stroke="var(--text-dim)" strokeWidth="0.8"/>
      <line x1="270" y1="80" x2="250" y2="73" stroke="var(--text-dim)" strokeWidth="0.8"/>
      <line x1="310" y1="55" x2="350" y2="48" stroke="var(--text-dim)" strokeWidth="0.8"/>
      {/* Horizontal trace arrows */}
      <line x1="90" y1="39" x2="310" y2="39" stroke="var(--red)" strokeWidth="0.8" strokeDasharray="4,3"/>
      <line x1="130" y1="64" x2="270" y2="64" stroke="var(--red)" strokeWidth="0.8" strokeDasharray="4,3"/>
      <line x1="170" y1="89" x2="270" y2="89" stroke="var(--red)" strokeWidth="0.8" strokeDasharray="4,3"/>
      {/* Trace label */}
      <text x="200" y="36" fill="var(--red)" fontSize="6" fontFamily="JetBrains Mono, monospace" textAnchor="middle">traceability</text>
    </svg>
  );
}
