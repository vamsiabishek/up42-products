import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BlockContextProvider, { BlockContext } from './BlockContext'
import { blockContextMock } from '../mocks/blocks'
import { IBlockData } from '../interfaces/Block'
import BlockTemplate from '../components/molecules/block/BlocksTemplate'

describe('<BlockContextProvider />', () => {

    const { blocks } = blockContextMock
    const initialCredits = 10000
    const blockItem = 3

    const renderComponent = (context: IBlockData | null) => {
        return render(
            <BlockContextProvider data={blocks}>
                <BlockTemplate />
            </BlockContextProvider>
        )
    }

    beforeEach(() => {
        renderComponent(null)
        const addTocartBtn = screen.queryAllByText('Add to cart')[blockItem]
        fireEvent.click(addTocartBtn);
    })

    test('should add a block to cart on click of add to cart button', () => {
        expect(screen.queryAllByTestId('cartItem')).toHaveLength(1);
    })

    test('should click of buy now the total credits must be debited and cart is cleared', () => {
        const removeFromCartBtn = screen.queryAllByText('remove')[0]
        fireEvent.click(removeFromCartBtn);

        expect(screen.queryAllByTestId('cartItem')).toHaveLength(0);
    })

    test('should debit the total credits and empty the cart on click of buy now button', () => {
        fireEvent.click(screen.queryByText('Buy now') as Element);

        expect(screen.queryAllByTestId('cartItem')).toHaveLength(0);
        expect(screen.queryByTestId('totalCredits')).toHaveTextContent(`Credits ${initialCredits - blocks[blockItem].metadata.blockPricingStrategy.credits}`);
    })

    test('should increase the quantity by one on click of add to cart if the block is already added to the cart ', () => {
        const addTocartBtn = screen.queryAllByText('Add to cart')[blockItem]
        fireEvent.click(addTocartBtn);

        expect(screen.queryAllByText('Qty: 2')).toHaveLength(1);
    })
})