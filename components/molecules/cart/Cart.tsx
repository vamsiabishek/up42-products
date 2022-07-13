import React from 'react'
import CartItems from './CartItems'
import CartTotal from './CartTotal'
import styles from './Cart.module.css'

function Cart() {
  return (
    <div>
      <p className={styles.title}>Cart</p>
      <CartItems />
      <CartTotal />
    </div>
  )
}

export default Cart