import { useEffect, useState } from 'react'
import { Button } from '../buttons/Button'

const navItems = ['Home', 'About', 'Services', 'Markets', 'Contact']

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12)
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeMenu()
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <header className={`site-header ${isScrolled ? 'site-header--scrolled' : ''}`}>
      <nav className="container navbar" aria-label="Primary navigation">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Quantitx home">
          <img className="brand-logo" src="/images/logo.png" alt="Quantitx" />
        </a>
        <div className="desktop-nav">
          {navItems.map((item) => <a className={item === 'Home' ? 'nav-link--active' : ''} href={`#${item.toLowerCase()}`} key={item} aria-current={item === 'Home' ? 'page' : undefined}>{item}</a>)}
        </div>
        <div className="account-actions">
          <a className="sign-in" href="#contact">Sign In</a>
          <Button href="#contact">Register <span aria-hidden="true">↗</span></Button>
        </div>
        <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen(!menuOpen)}>
          <span /><span />
        </button>
      </nav>
      <div className={`mobile-nav ${menuOpen ? 'mobile-nav--open' : ''}`} id="mobile-navigation" aria-hidden={!menuOpen}>
        {navItems.map((item) => <a className={item === 'Home' ? 'nav-link--active' : ''} href={`#${item.toLowerCase()}`} key={item} onClick={closeMenu}>{item}</a>)}
        <a className="mobile-sign-in" href="#contact" onClick={closeMenu}>Sign In</a>
        <Button href="#contact" onClick={closeMenu}>Register <span aria-hidden="true">↗</span></Button>
      </div>
    </header>
  )
}
