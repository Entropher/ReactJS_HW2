import styles from "./page.module.css";

export default async function Home() {
  let products;

  try {
    const response = await fetch("https://fakestoreapi.com/products", {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Product request failed");
    }

    products = await response.json();
  } catch {
    return (
      <div className={styles.page}>
        <header className={styles.header}>
          <p className={styles.eyebrow}>FAKE STORE / COLLECTION</p>
          <h1>Products</h1>
        </header>
        <p className={styles.message}>
          Unable to load products. Please try again later.
        </p>
      </div>
    );
  }

  const formatPrice = (price) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price);

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <p className={styles.eyebrow}>FAKE STORE / COLLECTION</p>
        <div className={styles.headingRow}>
          <h1>Products</h1>
          <span className={styles.count}>{products.length} items</span>
        </div>
        <p className={styles.subtitle}>Explore our online collection</p>
      </header>

      <main className={styles.grid}>
        {products.map((item) => (
          <article className={styles.product} key={item.id}>
            <div className={styles.imageWrap}>
              <img className={styles.image} src={item.image} alt={item.title} />
            </div>
            <div className={styles.details}>
              <p className={styles.category}>{item.category}</p>
              <h2 className={styles.title}>{item.title}</h2>
              <div className={styles.meta}>
                <span className={styles.price}>{formatPrice(item.price)}</span>
                <span className={styles.rating}>
                  <span>★</span> {item.rating.rate} ({item.rating.count})
                </span>
              </div>
            </div>
          </article>
        ))}
      </main>
    </div>
  );
}
