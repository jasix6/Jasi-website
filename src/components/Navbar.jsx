import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        <Link to="/" className="navbar__logo">Jasi</Link>
        <div className="navbar__links">
          <Link
            to="/projects"
            className={`navbar__link ${location.pathname.startsWith('/projects') ? 'active' : ''}`}
          >
            Projects
          </Link>
          <Link
            to="/about"
            className={`navbar__link ${location.pathname === '/about' ? 'active' : ''}`}
          >
            About
          </Link>
          <a
            href="https://github.com/jasix6"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar__link"
          >
            GitHub
          </a>
        </div>
      </div>
    </nav>
  );
}
