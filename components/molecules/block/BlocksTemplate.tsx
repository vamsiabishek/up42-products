import React, { useState, useEffect } from 'react'
import styles from './BlocksTemplate.module.css'
import BlockList from './BlockList'
import Cart from '../cart/Cart'
import Credits from '../credits/Credits'
import { useBlockContext } from '../../../context/BlockContext'

function BlocksTemplate() {
  const { cart } = useBlockContext()
  const [hasCartItems, setHasCartItems] = useState(false)

  useEffect(() => {
    setHasCartItems(!!cart.length)
  }, [cart])

  return (
    <div className={styles.container}>
        <Credits />
        <div className={styles.content}>
            <div className={`${styles.blocks} ${!hasCartItems && styles.blocksFullWidth}`}>
                <BlockList />
            </div>
            {hasCartItems && 
              <div className={styles.cart}>
                  <Cart />
              </div>
            }
        </div>
    </div>
  )
}

export default BlocksTemplate