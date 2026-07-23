import styles from "./page.module.css";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#success", label: "Results" },
  { href: "#contact", label: "Contact" },
];

export default function Navigation() {
  return (
    <nav aria-label="Primary navigation">
      <ul className={styles.navList}>
        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
