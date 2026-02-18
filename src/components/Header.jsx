export default function Header({ onToggleSidebar }) {
  return (
    <header className="header">
      <button className="menu-toggle" onClick={onToggleSidebar} aria-label="Toggle menu">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12h18M3 6h18M3 18h18"/></svg>
      </button>
      <div className="header-logo">
        <svg viewBox="0 0 28 28" fill="none">
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
        <span className="header-title">Railway Engineering Course</span>
      </div>
      <span className="header-subtitle">A course for the curious developer</span>
    </header>
  );
}
