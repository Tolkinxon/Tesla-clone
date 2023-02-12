import React from 'react'
import styles from '../styles/Home.module.css'
import Reveal from 'react-reveal/Reveal'


export default function Accessories() {
  return (
    <section className={styles.section}>
      <Reveal effect='showing'>
        <div className={styles.textsArea}>
          <h3>Accessories</h3>
          <p></p>
        </div>
      </Reveal>
      <Reveal effect='showing2'>
        <div className={styles.buttons}>
          <div className={styles.btnMain}>
            <span className={styles.btn}>shop now</span>
          </div>
        </div>
      </Reveal>

    </section>
  )
}
