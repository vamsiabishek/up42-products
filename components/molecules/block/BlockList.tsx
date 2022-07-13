import React from 'react'
import { useBlockContext } from '../../../context/BlockContext'
import Card from '../../atoms/card/Card'
import styles from './BlockList.module.css'

function BlockList() {
    const { blocks, addToCart } = useBlockContext()
    if(blocks?.length === 0) {
        return null
    }
    return (
      <div className={styles.container}>
          {blocks.map(block => 
            <div key={block.id} className={styles.block}>
              <Card id={block.id} displayName={block.displayName} credits={block.metadata.blockPricingStrategy.credits} addToCart={addToCart}/>
            </div>
          )}
      </div>
    )
}

export default BlockList