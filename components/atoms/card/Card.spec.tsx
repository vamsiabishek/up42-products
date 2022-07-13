import { render, screen, fireEvent } from '@testing-library/react';
import Card from './Card'

const addToCart = jest.fn();
const onQuantityChange = jest.fn();
describe('<Card />', () => {
    const defaultProps ={
        id: '123', 
        displayName: 'abc',
        credits: 10
    }
    test('should display displayName prop as card title', () => {
        render(<Card {...defaultProps}/>);

        expect(screen.getByText(defaultProps.displayName)).toBeInTheDocument();
    })

    test('should not display quantity dropdown and remove button when count and onQuantityChange props are not available', () => {
        render(<Card {...defaultProps}/>);

        expect(screen.queryByText('Qty:')).not.toBeInTheDocument();
        expect(screen.queryByText('remove')).not.toBeInTheDocument();
    })

    test('should display quantity dropdown and remove button when count and onQuantityChange props are available', () => {
        const updatedProps = {
            ...defaultProps,
            count: 1,
            onQuantityChange
        }
        render(<Card {...updatedProps}/>);

        expect(screen.queryByText('Qty: 1')).toBeInTheDocument();
        expect(screen.queryByText('remove')).toBeInTheDocument();
    })

    test('should call onQuantityChange method on click of remove button', () => {
        const updatedProps = {
            ...defaultProps,
            count: 1,
            onQuantityChange
        }
        render(<Card {...updatedProps}/>);

        const removeBtn = screen.queryByText('remove')
        fireEvent.click(removeBtn as Element)

        expect(onQuantityChange).toHaveBeenCalledWith(updatedProps.id, 0);
    })

    test('should not display Add to cart button when addToCart props is not available', () => {
        render(<Card {...defaultProps}/>);

        expect(screen.queryByText('Add to cart')).not.toBeInTheDocument();
    })

    test('should display Add to cart button when addToCart props is available', () => {
        const updatedProps = {
            ...defaultProps,
            addToCart
        }
        render(<Card {...updatedProps}/>);

        expect(screen.queryByText('Add to cart')).toBeInTheDocument();
    })

    test('should call addToCart method on click of Add to cart button', () => {
        const updatedProps = {
            ...defaultProps,
            addToCart
        }
        render(<Card {...updatedProps}/>);
        const addToCartBtn = screen.queryByText('Add to cart')
        fireEvent.click(addToCartBtn as Element)

        expect(addToCart).toHaveBeenCalledWith(updatedProps.id);
    })
})