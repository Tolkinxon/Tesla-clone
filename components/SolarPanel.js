import React from 'react'
import styles from '../styles/Home.module.css'

export default function SolarPanel() {
  return (
    <section className={styles.section}>
      <div className={styles.textsArea}>
        <h3>Solar Panels</h3>
        <p>Lowest Cost Solar Panels In America</p>
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
