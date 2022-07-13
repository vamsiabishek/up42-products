import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Credits from '../credits/Credits'
import QuantityDropdown from '../dropdown/QuantityDropdown'
import styles from './Card.module.css'

interface Props {
    id: string; 
    displayName: string;
    credits: number;
    addToCart?: (id: string) => void;
    creditsStyle?: string;
    cardStyle?: string;
    count?: number;
    onQuantityChange?: (id: string, amount: number) => void;
}

function CardComponent({id, displayName, credits, addToCart, creditsStyle, cardStyle, count, onQuantityChange}: Props) {

  const onAddToCart = () => {
    addToCart && addToCart(id)
  }

  const onQuantitySelect = (qty: number) => {
    onQuantityChange && onQuantityChange(id, qty);
  }

  return (
    <Card className={`${styles.card} ${cardStyle}`}>
       <Card.Body className={styles.content}>
        <Card.Title>{displayName}</Card.Title>
        <div className={count ? styles.details : ''}>
          {count && onQuantityChange &&
            <div>
                <QuantityDropdown selectedValue={count} onSelect={onQuantitySelect} />
                <Button variant="link" onClick={() => onQuantityChange(id, 0)}>remove</Button>
            </div>
          }
          <Credits credits={credits} creditsStyle={creditsStyle} />
        </div>
        {addToCart && <Button variant="primary" onClick={onAddToCart}>Add to cart</Button>}
      </Card.Body>
    </Card>
  )
}

export default CardComponent