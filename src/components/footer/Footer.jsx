import styles from "./Footer.module.css";

const Footer = ({ list }) => {
  return (
    <footer className={styles.footer}>
      {list.map((item) => (
        <div key={item.id} className={styles.footerItem}>
          <p className={styles.itemTitle}>{item.name}</p>
        </div>
      ))}
    </footer>
  );
};

export default Footer;
