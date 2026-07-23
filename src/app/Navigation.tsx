import Link from 'next/link';
import styles from './page.module.css';

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#success', label: 'Success' },
  { href: '#contact', label: 'Contact' },
];

export default function Navigation() {
  return (
    <nav className={styles.nav} aria-label="Primary navigation">
      <ul>
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
