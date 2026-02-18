import type { CalloutProps } from '../../types';

export function Callout({ type = 'info', label, children }: CalloutProps) {
  return (
    <div className={`callout${type === 'analogy' ? ' analogy' : ''}`}>
      <div className="callout-label">{label || (type === 'analogy' ? 'Developer Analogy' : 'Note')}</div>
      <p style={{ margin: 0 }}>{children}</p>
    </div>
  );
}
