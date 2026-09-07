import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, profile } from "../data/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="container navbar-inner">
          <a href="#home" className="navbar-logo">
            {profile.name.split(" ")[0]} <span>{profile.name.split(" ")[1]}</span>
          </a>

          <nav className="navbar-links" aria-label="Primary">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="navbar-actions">
            <a href="#contact" className="btn btn-primary navbar-cta">
              Let's Connect
            </a>
            <button
              className="navbar-burger"
              aria-label="Open menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(true)}
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-overlay ${menuOpen ? "open" : ""}`} onClick={closeMenu} />

      <aside className={`mobile-menu ${menuOpen ? "open" : ""}`} aria-hidden={!menuOpen}>
        <div className="mobile-menu-head">
          <span className="navbar-logo">
            {profile.name.split(" ")[0]} <span>{profile.name.split(" ")[1]}</span>
          </span>
          <button className="navbar-burger" aria-label="Close menu" onClick={closeMenu}>
            <X size={20} />
          </button>
        </div>
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} onClick={closeMenu}>
            {link.label}
          </a>
        ))}
        <a href="#contact" className="btn btn-primary" style={{ marginTop: 20 }} onClick={closeMenu}>
          Let's Connect
        </a>
      </aside>
    </>
  );
}
