import Link from 'next/link'
import React from 'react'
import styles from '../styles/Home.module.css'
import dynamic from 'next/dynamic'
import { useState, useEffect } from 'react'
import { dataa } from './data'

export default function Navbar() {
  const [data, setData] = useState(dataa)
  const [sideBar, setSideBar] = useState(false)

  const showSideBar = () => {
    setSideBar(!sideBar)
  }

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
        <li className={styles.items} onClick={showSideBar}>
          Menu
        </li>
      </div>

      <div className={sideBar ? 'side-menu active' : 'side-menu'}>

        <img 
          onClick={showSideBar} 
          className='closeIcon' 
          src="/images/close.svg" 
          width={15} 
        />

        <ul className="sideBarNav">
          {data.map((item, index) => (
            <li className="hamburgerLinks" key={index}>
              <Link href={item.path} className="link">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
        
      </div>
    </nav>
  )
}
