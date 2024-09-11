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

      {/* product section */}
      <div>
        {/* first product */}
        <div>
          <img/>
          <p>Arctic Monkeys - AM</p>
          <p>$15.00</p>
        </div>
        {/* second product */}
        <div>
          <img/>
          <p>Arctic Monkeys - Suck it and See</p>
          <p>$10.00</p>
        </div>
      </div>
    </main>
  )
}
