import Link from "next/link";
import styles from "./page.module.css";

const items = [
  ["Expertise", "expertise"],
  ["Approach", "approach"],
  ["Results", "results"],
  ["About", "about"],
  ["Contact", "contact"],
];

export default function Navigation() {
  return (
    <nav className={styles.navigation} aria-label="Primary navigation">
      <ul>
        {items.map(([label, id]) => (
          <li key={id}>
            <Link href={`#${id}`}>{label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
