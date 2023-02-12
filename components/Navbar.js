import Link from 'next/link'
import React from 'react'
import styles from '../styles/Home.module.css'

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link href="/">
        <img
          src="/images/logo.svg "
          alt="tesla logo"
          loading="lazy"
          className="teslaLogo"
          width={130}
        />
      </Link>

      <ul className={styles.navbar6}>
        <li className={styles.items}>Model S</li>
        <li className={styles.items}>Model 3</li>
        <li className={styles.items}>Model X</li>
        <li className={styles.items}>Model Y</li>
        <li className={styles.items}>Solar Roof</li>
        <li className={styles.items}>Solar Panels</li>
      </ul>
      <div className={styles.menu}>
        <li className={styles.items}>Shop</li>
        <li className={styles.items}>Account</li>
        <li className={styles.items}>Menu</li>
      </div>
    </nav>
  )
}
