import Link from 'next/link'
import React from 'react'
import styles from '../styles/Home.module.css'
import dynamic from 'next/dynamic'
import { useState } from 'react'

export default function Navbar() {
  const [data, setData] = useState([])
  const takingData = dynamic(() => import('../components/data').then((data) => setData(data.data)))
  takingData()

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
      <div>
        <ul>
          {data.map((item, index) => (
            <li key={index}>
              <Link href={item.path}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
