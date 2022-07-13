import React from 'react'
import { useBlockContext } from '../../../context/BlockContext'
import styles from './Credits.module.css'

function Credits() {
    const { totalCredits } = useBlockContext()
    return (
        <div className={styles.credits} data-testid="totalCredits">Credits {totalCredits}</div>
    )
}

export default Credits