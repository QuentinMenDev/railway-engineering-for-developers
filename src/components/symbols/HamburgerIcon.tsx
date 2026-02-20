import type { SymbolProps } from './types';

export default function HamburgerIcon({ style, ...props }: SymbolProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      style={{ width: 24, height: 24, ...style }}
      {...props}
    >
      <path d="M3 12h18M3 6h18M3 18h18"/>
    </svg>
  );
}
