import React from 'react'
import styles from '../styling/myStyles.module.css'
export default function MainContent() {
  return (
    <div className={styles.main}>
        <h1>Reasons why I am going to succeed in 2022:</h1>
        <ul className={styles.list2}>
            <li>I am strong and intelligent</li>
            <li>God is always there for me</li>
            <li>I shall put my best foot forward</li>
            <li>I shall make mum proud</li>
            <li>I shall go out of the way to be the best version of myself
              in everything I do.
            </li>
            <li>I finish what I start, ALWAYS!!</li>
        </ul>
        <hr className={styles.line}/>
    </div>
  )
}
