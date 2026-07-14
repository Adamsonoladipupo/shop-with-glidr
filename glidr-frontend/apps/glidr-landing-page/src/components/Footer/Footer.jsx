import { GlidrLogo } from "../../assets/illustrations";
import styles from "./Footer.module.css";
import logo from "../../assets/glidr_logo_fff.svg"

const navColumns = [
  {
    title: "Company",
    links: [
      { label: "Vendor", href: "#" },
      { label: "Riders", href: "#" },
      { label: "Ads", href: "#" },
      { label: "GlidrStore", href: "#" },
    ],
  },
  {
    title: "Products",
    links: [
      { label: "Vendor", href: "#" },
      { label: "Riders", href: "#" },
      { label: "Ads", href: "#" },
      { label: "GlidrStore", href: "#" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Vendor", href: "#" },
      { label: "Riders", href: "#" },
      { label: "Ads", href: "#" },
      { label: "GlidrStore", href: "#" },
    ],
  },
];

const socialLinks = [
  {
    name: "LinkedIn",
    href: "#",
    color: "#0A66C2",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <rect x="1" y="1" width="14" height="14" rx="3" stroke="currentColor" strokeWidth="1.2" />
        <line x1="5" y1="6.5" x2="5" y2="11.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <circle cx="5" cy="4.5" r="0.8" fill="currentColor" />
        <path d="M8 11.5 V8.5 C8 7.5 9 6.5 10 6.5 C11 6.5 11.5 7.2 11.5 8.5 V11.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "#",
    color: "#1877F2",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.2" />
        <path d="M10 5.5 H9 C8.4 5.5 8 5.9 8 6.5 V8 H10 L9.7 10 H8 V14" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "#",
    color: "#E1306C",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <rect x="2" y="2" width="12" height="12" rx="4" stroke="currentColor" strokeWidth="1.2" />
        <circle cx="8" cy="8" r="2.5" stroke="currentColor" strokeWidth="1.2" />
        <circle cx="11.2" cy="4.8" r="0.7" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "Twitter",
    href: "#",
    color: "#1DA1F2",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path d="M14 3 C13.3 3.4 12.5 3.6 11.7 3.7 C10.9 2.9 9.8 2.5 8.6 2.7 C7.1 2.9 6 4.2 6 5.7 V6.5 C4.1 6.5 2.4 5.6 1.3 4.1 C1.3 4.1 -0.3 8.5 4 10.5 C3 11.2 1.8 11.6 0.5 11.5 C1.7 12.3 3.1 12.8 4.7 12.8 C9.5 12.8 12.1 8.8 12.1 5.3 C12.1 5.2 12.1 5.1 12.1 5 C12.8 4.4 13.5 3.8 14 3 Z" stroke="currentColor" strokeWidth="1" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Top grid */}
        <div className={styles.grid}>
          {/* Brand */}
          <div className={styles.brand}>
            <a href="/" className={styles.brandLink} aria-label="Glidr home">
              <a href="/" className={styles.brand} aria-label="Glidr home">
                <span className={styles.brandName}><img src={logo} alt="" /></span>
              </a>
            </a>
            <p className={styles.brandDesc}>
              Simplify shopping experience from product discovery to checkout.
            </p>
          </div>

          {/* Nav columns */}
          <nav className={styles.navGrid} aria-label="Footer navigation">
            {navColumns.map(col => (
              <div key={col.title} className={styles.navCol}>
                <h3 className={styles.colTitle}>{col.title}</h3>
                <ul className={styles.linkList}>
                  {col.links.map(link => (
                    <li key={link.label}>
                      <a href={link.href} className={styles.navLink}>{link.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        {/* Bottom bar */}
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Glidr Ltd. All rights reserved.
          </p>
          <ul className={styles.socialList} aria-label="Social media links">
            {socialLinks.map(s => (
              <li key={s.name}>
                <a
                  href={s.href}
                  className={styles.socialLink}
                  style={{ "--social-color": s.color }}
                  aria-label={`Follow us on ${s.name}`}
                >
                  {s.icon}
                  <span>{s.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
