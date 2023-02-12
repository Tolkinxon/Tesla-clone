import React from 'react'
import styles from '../styles/Home.module.css'
import Reveal from 'react-reveal/Reveal'



export default function ModelY() {
  return (
    <section className={styles.section}>
      <Reveal effect='showing'>
        <div className={styles.textsArea}>
            <h3>Model Y</h3>
            <p>
              Order Online
              <span className={styles.touchless}>Touchless delivery</span>
            </p>
        </div>
      </Reveal>

      <Reveal effect='showing2'>
          <div className={styles.buttons}>
            <div className={styles.btnMain}>
              <span className={styles.btn}>custom order</span>
              <span className={styles.btn}>exciting invertory</span>
            </div>
          </div>
      </Reveal>

  </section>
  )
}
