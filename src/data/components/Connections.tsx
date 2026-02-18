import type { ConnectionsProps } from '../../types';

export function Connections({ items, goTo }: ConnectionsProps) {
  return (
    <div className="connections">
      <h4>Connections to Other Disciplines</h4>
      {items.map((item, i) => (
        <div key={i} className="connection-item">
          <span className="connection-arrow">→</span>
          <span className="connection-link" onClick={() => goTo(item.target)}>{item.label}</span>
          {' — '}{item.desc}
        </div>
      ))}
    </div>
  );
}
