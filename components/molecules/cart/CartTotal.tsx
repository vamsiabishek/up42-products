import React, {useEffect, useState} from 'react'
import Button from 'react-bootstrap/Button';
import { useBlockContext } from '../../../context/BlockContext'
import Credits from '../../atoms/credits/Credits'
import { getTotalBlockCredits } from '../../../helper/blockHelper'
import ErrorMsg from '../../atoms/error/ErrorMsg'
import { BUY_ERROR } from '../../../constants/BlockConstants'
import styles from './CartTotal.module.css'

function CartTotal() {
    const { cart, onBlocksBuy, totalCredits } = useBlockContext()
    const [buyCredits, setBuyCredits] = useState(0)
    const [error, setError] = useState('')

    useEffect(() => {
        if (cart.length) {
            setBuyCredits(getTotalBlockCredits(cart))
        } else {
            setBuyCredits(0)
        }
        setError('')
    }, [cart])

    const handleBuyNow = () => {
        if(buyCredits <= totalCredits) {
            onBlocksBuy()
        } else {
            setError(BUY_ERROR)
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.cartTotal}>
                <span className={styles.total}>total:</span>
                <Credits credits={buyCredits} />
            </div>
            <Button variant="primary" className={styles.buyBtn} onClick={handleBuyNow}>Buy now</Button>
            <ErrorMsg msg={error} />
        </div>
    )
}

export default CartTotal