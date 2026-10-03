import styles from "./ProductItem.module.css";

export default function ProductItem({ product }) {
  const price = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(product.price);

  return (
    <article className={styles.product}>
      <div className={styles.imageWrap}>
        <img className={styles.image} src={product.image} alt={product.title} />
      </div>
      <div className={styles.details}>
        <p className={styles.category}>{product.category}</p>
        <h2 className={styles.title}>{product.title}</h2>
        <div className={styles.meta}>
          <span className={styles.price}>{price}</span>
          <span className={styles.rating}>
            <span>★</span> {product.rating.rate} ({product.rating.count})
          </span>
        </div>
      </div>
    </article>
  );
}
