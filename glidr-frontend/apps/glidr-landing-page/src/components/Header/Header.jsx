import { useState } from "react";
import styles from "../Header/Header.module.css";
import logo from "../../assets/glidr_logo.svg"

const navLinks = [
  { label: "Company", href: "/" },
  { label: "Supermarkets", href: "store" },
  { label: "Riders", href: "#" },
  { label: "More", href: "#" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>

        {/* Desktop nav */}
        <nav className={styles.desktopNav} aria-label="Main navigation">
          {navLinks.map(({ label, href }) => (
            <a key={label} href={href} className={styles.navLink}>
              {label}
            </a>
          ))}
        </nav>

        {/* Brand */}
        <a href="/" className={styles.brand} aria-label="Glidr home">
          <span className={styles.brandName}><img src={logo} alt="" /></span>
        </a>

        {/* CTA */}
        <a href="https://expo.dev/artifacts/eas/ETUnJUPxnZJhtBZ94a7UXcGOQcY98y46vNd5vveZhqQ.apk" className={styles.cta}>Use App</a>
        {/* <a href="https://expo.dev/artifacts/eas/ETUnJUPxnZJhtBZ94a7UXcGOQcY98y46vNd5vveZhqQ.apk"></a> */}

        {/* Hamburger */}
        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(o => !o)}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
        >
          <span className={menuOpen ? styles.barTop : styles.bar} />
          <span className={menuOpen ? styles.barHidden : styles.bar} />
          <span className={menuOpen ? styles.barBottom : styles.bar} />
        </button>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <nav className={styles.mobileNav} aria-label="Mobile navigation">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className={styles.mobileLink}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
          <a href="#" className={styles.mobileCta}>Use App</a>
        </nav>
      )}
    </header>
  );
}
