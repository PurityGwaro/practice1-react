import React from 'react'
import styles from '../styling/myStyles.module.css'

export default function Header() {
  return (
    <div>
         <header>
            <nav  className={styles.navigation}>
            <img src='/images/repair.png' alt='image' className={styles.logo}/>
            <ul className={styles.list}>
              <li className>Pricing</li>
              <li className>About</li>
              <li className>Contact</li>
            </ul>
            </nav>
        </header>
    </div>
  )
}
