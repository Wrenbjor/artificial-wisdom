import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

interface NavItem {
  path: string;
  label: string;
}

const navItems: NavItem[] = [
  { path: '/', label: 'Home' },
  { path: '/thesis', label: 'Thesis' },
  { path: '/observer', label: 'Observer' },
  { path: '/ember', label: 'Ember' },
  { path: '/pai-integration', label: 'PAI' },
  { path: '/architecture', label: 'Architecture' },
  { path: '/implementation', label: 'Implementation' },
];

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <Link to="/" className="navbar-logo">
          Artificial Wisdom
        </Link>
        <ul className="navbar-menu">
          {navItems.map((item) => (
            <li key={item.path} className="navbar-item">
              <Link
                to={item.path}
                className={`navbar-link ${location.pathname === item.path ? 'active' : ''}`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
