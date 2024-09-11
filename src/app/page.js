"use client";
import styles from '@/app/page.module.css';

export default function Home() {
  return (
    <main>
      <nav className={styles.nav}>
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Products</a>
      </nav>
    </main>
  )
}
