import type { SymbolProps } from './types';

export default function TrainLogo({ style, ...props }: SymbolProps) {
  return (
    <svg viewBox="0 0 28 28" fill="none" style={{ ...style }} {...props}>
      <rect x="2" y="18" width="24" height="3" rx="1" fill="var(--accent)"/>
      <rect x="4" y="21" width="2" height="4" rx="0.5" fill="var(--text-dim)"/>
      <rect x="10" y="21" width="2" height="4" rx="0.5" fill="var(--text-dim)"/>
      <rect x="16" y="21" width="2" height="4" rx="0.5" fill="var(--text-dim)"/>
      <rect x="22" y="21" width="2" height="4" rx="0.5" fill="var(--text-dim)"/>
      <rect x="6" y="8" width="16" height="10" rx="2" fill="var(--bg-raised)" stroke="var(--accent)" strokeWidth="1.5"/>
      <circle cx="11" cy="13" r="2" fill="var(--accent)"/>
      <circle cx="17" cy="13" r="2" fill="var(--accent)"/>
      <rect x="8" y="5" width="4" height="4" rx="1" fill="var(--bg-raised)" stroke="var(--accent)" strokeWidth="1"/>
    </svg>
  );
}
