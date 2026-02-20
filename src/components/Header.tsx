import { HamburgerIcon, TrainLogo } from './symbols';

interface HeaderProps {
  onToggleSidebar: () => void;
}

export default function Header({ onToggleSidebar }: HeaderProps) {
  return (
    <header className="header">
      <button className="menu-toggle" onClick={onToggleSidebar} aria-label="Toggle menu">
        <HamburgerIcon />
      </button>
      <div className="header-logo">
        <TrainLogo />
        <span className="header-title">Railway Engineering Course</span>
      </div>
      <span className="header-subtitle">A course for the curious developer</span>
    </header>
  );
}
