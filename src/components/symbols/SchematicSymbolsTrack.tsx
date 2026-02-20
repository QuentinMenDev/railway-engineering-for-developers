import type { SymbolProps } from './types';

export default function SchematicSymbolsTrack({ style, ...props }: SymbolProps) {
  return (
    <svg viewBox="0 0 340 170" style={{ width: '100%', ...style }} {...props}>
      <text x="170" y="14" fill="var(--text-dim)" fontSize="10" fontFamily="JetBrains Mono, monospace" textAnchor="middle">Schematic Drawing Symbols</text>
      {/* Track line */}
      <line x1="20" y1="45" x2="320" y2="45" stroke="var(--text-bright)" strokeWidth="2"/>
      {/* Turnout symbol */}
      <line x1="60" y1="45" x2="100" y2="65" stroke="var(--text-bright)" strokeWidth="2"/>
      <text x="75" y="78" fill="var(--text-dim)" fontSize="8" fontFamily="JetBrains Mono, monospace" textAnchor="middle">turnout</text>
      {/* Stop signal — filled circle on stick */}
      <line x1="140" y1="45" x2="140" y2="28" stroke="var(--red)" strokeWidth="1.5"/>
      <circle cx="140" cy="26" r="4" fill="var(--red)"/>
      <text x="140" y="19" fill="var(--text-dim)" fontSize="7" fontFamily="JetBrains Mono, monospace" textAnchor="middle">stop</text>
      {/* Distant signal — triangle on stick */}
      <line x1="180" y1="45" x2="180" y2="28" stroke="var(--accent)" strokeWidth="1.5"/>
      <polygon points="180,26 175,32 185,32" fill="var(--accent)"/>
      <text x="180" y="19" fill="var(--text-dim)" fontSize="7" fontFamily="JetBrains Mono, monospace" textAnchor="middle">dist</text>
      {/* Track section — bracket */}
      <line x1="210" y1="50" x2="210" y2="55" stroke="var(--blue)" strokeWidth="1"/>
      <line x1="280" y1="50" x2="280" y2="55" stroke="var(--blue)" strokeWidth="1"/>
      <line x1="210" y1="55" x2="280" y2="55" stroke="var(--blue)" strokeWidth="1" strokeDasharray="3,2"/>
      <text x="245" y="65" fill="var(--blue)" fontSize="7" fontFamily="JetBrains Mono, monospace" textAnchor="middle">track section</text>
      {/* Buffer stop */}
      <line x1="320" y1="38" x2="320" y2="52" stroke="var(--text-bright)" strokeWidth="3"/>
      <text x="315" y="34" fill="var(--text-dim)" fontSize="7" fontFamily="JetBrains Mono, monospace" textAnchor="end">buffer</text>
      {/* Double track with crossover */}
      <line x1="20" y1="110" x2="320" y2="110" stroke="var(--text-bright)" strokeWidth="2"/>
      <line x1="20" y1="130" x2="320" y2="130" stroke="var(--text-bright)" strokeWidth="2"/>
      <line x1="130" y1="110" x2="170" y2="130" stroke="var(--text-bright)" strokeWidth="2"/>
      <line x1="170" y1="110" x2="210" y2="130" stroke="var(--text-bright)" strokeWidth="2"/>
      <text x="170" y="148" fill="var(--text-dim)" fontSize="8" fontFamily="JetBrains Mono, monospace" textAnchor="middle">scissors crossover</text>
      <text x="30" y="105" fill="var(--accent)" fontSize="8" fontFamily="JetBrains Mono, monospace">Up →</text>
      <text x="290" y="143" fill="var(--accent)" fontSize="8" fontFamily="JetBrains Mono, monospace">← Dn</text>
    </svg>
  );
}
