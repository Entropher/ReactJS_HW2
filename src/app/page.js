"use client";

import { useEffect, useState } from "react";
import ProductItem from "../components/ProductItem/ProductItem";
import styles from "./page.module.css";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");

        if (!response.ok) {
          throw new Error("პროდუქტების მოთხოვნა ვერ შესრულდა");
        }

        const result = await response.json();
        setProducts(result);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <p className={styles.eyebrow}>ონლაინ მაღაზია / კოლექცია</p>
        <div className={styles.headingRow}>
          <h1>პროდუქტები</h1>
          {!loading && !error && (
            <span className={styles.count}>{products.length} პროდუქტი</span>
          )}
        </div>
        <p className={styles.subtitle}>დაათვალიერეთ ჩვენი ონლაინ კოლექცია</p>
      </header>

      {loading && <p className={styles.message}>იტვირთება</p>}
      {error && <p className={styles.message}>მოხდა შეცდომა</p>}
      {!loading && !error && (
        <main className={styles.grid}>
          {products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </main>
      )}
    </div>
  );
}
