import React from 'react'
import styles from '../styles/Home.module.css'


export default function ModelS() {
  return (
    <section className={styles.section}>
    <div className={styles.textsArea}>
      <h3>Model S</h3>
      <p>
        Order Online
        <span className={styles.touchless}>Touchless delivery</span>
      </p>
    </div>
    <div className={styles.buttons}>
      <div className={styles.btnMain}>
        <span className={styles.btn}>custom order</span>
        <span className={styles.btn}>exciting invertory</span>
      </div>
    </div>
  </section>
  )
}
