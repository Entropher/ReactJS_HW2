import Link from "next/link";
import styles from "./Navbar.module.css";

const Navbar = ({ data, title, logo }) => {
  return (
    <nav className={styles.header}>
      <div className={styles.navbarContainer}>
        <Link href="/" className={styles.navbarLogo}>
          <span className={styles.logoMark}>{logo}</span>
          <span>{title}</span>
        </Link>
        <div className={styles.navbarMenu}>
          {data.map((item) => (
            <div className={styles.navbarItem} key={item.id}>
              <Link href={item.url}>{item.name}</Link>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
