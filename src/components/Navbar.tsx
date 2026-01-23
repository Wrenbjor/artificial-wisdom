import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

interface NavItem {
  path: string;
  label: string;
}

const mainNavItems: NavItem[] = [
  { path: '/', label: 'Home' },
  { path: '/thesis', label: 'Thesis' },
  { path: '/observer', label: 'Observer' },
  { path: '/ember', label: 'Ember' },
  { path: '/pai-integration', label: 'PAI' },
  { path: '/architecture', label: 'Architecture' },
  { path: '/implementation', label: 'Implementation' },
];

const emberSourceNavItems: NavItem[] = [
  { path: '/ember-source', label: 'Overview' },
  { path: '/ember-core', label: 'Core' },
  { path: '/depth-framing', label: 'Depth Framing' },
  { path: '/ecsl-state', label: 'ECSL' },
  { path: '/mcp-schema', label: 'MCP Schema' },
  { path: '/ember-origin', label: 'Origin' },
  { path: '/subconscious', label: 'Subconscious' },
];

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <Link to="/" className="navbar-logo">
          Artificial Wisdom
        </Link>
        <div className="navbar-sections">
          <div className="navbar-section">
            <span className="navbar-section-label">Main</span>
            <ul className="navbar-menu">
              {mainNavItems.map((item) => (
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
          <div className="navbar-section">
            <span className="navbar-section-label">Ember Source</span>
            <ul className="navbar-menu">
              {emberSourceNavItems.map((item) => (
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
        </div>
      </div>
    </nav>
  );
}
