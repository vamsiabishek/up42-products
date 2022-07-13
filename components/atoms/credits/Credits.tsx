import React from 'react'
import styles from './Credits.module.css'

export default function Credits({credits, creditsStyle}: {credits: number, creditsStyle?: string}) {
  return (
    <p className={`${styles.credits} ${creditsStyle}`}>{credits} credits</p>
  )
}
