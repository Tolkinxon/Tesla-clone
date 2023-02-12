import React from 'react'
import styles from '../styles/Home.module.css'

export default function SolarRoof() {
  return (
    <section className={styles.section}>
      <div className={styles.textsArea}>
        <h3>Solar Roof</h3>
        <p>Produce Clean Energy from Your Roof</p>
      </div>
      <div className={styles.buttons}>
        <div className={styles.btnMain}>
          <span className={styles.btn}>order now</span>
          <span className={styles.btn}>learn more</span>
        </div>
      </div>
    </section>
  )
}
