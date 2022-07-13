import React from 'react'
import { useBlockContext } from '../../../context/BlockContext'
import Card from '../../atoms/card/Card'
import styles from './CartItems.module.css'

function CartItems() {
  const { cart, onCartQuantityChange } = useBlockContext()
  if(cart?.length === 0) {
      return null
  }
  return (
    <div className={styles.cartItems}>
        {cart.map(({count, block}) => 
          <div key={block.id} className={styles.block} data-testid="cartItem">
            <Card 
              id={block.id} 
              displayName={block.displayName} 
              credits={block.metadata.blockPricingStrategy.credits * count} 
              cardStyle={styles.cartCard} 
              creditsStyle={styles.cartCredits}
              count={count}
              onQuantityChange={onCartQuantityChange}
            />
          </div>
        )}
    </div>
  )
}

export default CartItems