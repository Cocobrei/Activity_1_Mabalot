import { useState } from 'react'
import './Header.css'

const navigation = [
  { label: 'Home', href: '#home' },
  { label: 'Destinations', href: '#destinations' },
  { label: 'Culture', href: '#culture' },
  { label: 'Plan Your Trip', href: '#plan' },
]

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="site-header">
      <a className="brand" href="#home" onClick={closeMenu} aria-label="Pangasinan tourism home">
        <span className="brand-mark" aria-hidden="true">
          <svg viewBox="0 0 48 48" role="img">
            <path d="M7 31c6-1 8-7 13-7s7 5 12 5 7-4 9-5v13H7Z" />
            <path d="M8 19c4-1 7-3 10-7 1 6 4 9 8 11-7 0-12-1-18-4Z" />
            <circle cx="36" cy="12" r="5" />
          </svg>
        </span>
        <span className="brand-copy">
          <strong>Pangasinan</strong>
          <small>Province of possibilities</small>
        </span>
      </a>

      <button
        className="menu-toggle"
        type="button"
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span /><span /><span />
      </button>

      <nav
        id="primary-navigation"
        className={`primary-nav ${menuOpen ? 'is-open' : ''}`}
        aria-label="Primary navigation"
      >
        {navigation.map((item, index) => (
          <a key={item.label} className={index === 0 ? 'active' : ''} href={item.href} onClick={closeMenu}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  )
}

export default Header
