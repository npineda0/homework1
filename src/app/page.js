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
      <div className={styles.productContainer}>
        {/* first product */}
        <div>
          <img src='https://upload.wikimedia.org/wikipedia/commons/e/e7/%22AM%22_%28Arctic_Monkeys%29.jpg'
          height='200px' width='200px'
          alt='AM'
          />
          <p>Arctic Monkeys - AM</p>
          <p>$15.00</p>
          <button>View</button>
        </div>
        {/* second product */}
        <div>
          <img src='https://upload.wikimedia.org/wikipedia/commons/f/f9/Suckitandsee.jpg'
          height='200px' width='200px'
          alt='Suck it and See'/>
          <p>Arctic Monkeys - Suck it and See</p>
          <p>$10.00</p>
          <button>View</button>
        </div>
      </div>
    </main>
  )
}
