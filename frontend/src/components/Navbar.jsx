import React from 'react';
import { Link } from 'react-router-dom';
import { Sun, Moon } from 'lucide-react';

const Navbar = ({ theme, toggleTheme }) => {
  return (
    <nav style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '30px 0',
      borderBottom: '1px solid var(--border-color)',
      gap: '20px'
    }}>
      <Link to="/" style={{
        textDecoration: 'none',
        color: 'var(--primary-color)',
        fontSize: '32px',
        fontWeight: '900',
        fontFamily: '"Comic Sans MS", "Chalkboard SE", "cursive", sans-serif',
        letterSpacing: '4px',
        transform: 'rotate(-3deg)',
        display: 'inline-block',
        textShadow: '2px 2px 0px var(--border-color)'
      }}>
        OASIS
      </Link>
      <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        <Link to="/dashboard" style={{ textDecoration: 'none', color: 'var(--text-color)' }}>Dashboard</Link>
        <button
          onClick={toggleTheme}
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--text-color)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
