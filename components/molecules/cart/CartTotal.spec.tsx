import { render, screen, fireEvent } from '@testing-library/react';
import CartTotal from './CartTotal'
import { BlockContext } from '../../../context/BlockContext'
import { blockContextMock } from '../../../mocks/blocks'
import { getTotalBlockCredits } from '../../../helper/blockHelper'
import { BUY_ERROR } from '../../../constants/BlockConstants'
import { IBlockData } from '../../../interfaces/Block'

const onBlocksBuy = jest.fn()
describe('<CartTotal />', () => {

    const mockContext = {
        ...blockContextMock,
        onBlocksBuy
    }

    const renderComponent = (context: IBlockData | null) => {
        render(
            <BlockContext.Provider value={{...mockContext, ...context}}>
                <CartTotal />
            </BlockContext.Provider>
        )
    }

    test('should display total credits to buy from cart', () => {
        renderComponent(null)
        const cartCredits = getTotalBlockCredits(blockContextMock.cart)

        expect(screen.getByText(`${cartCredits} credits`)).toBeInTheDocument()
    })

    test('should display buy now button', () => {
        renderComponent(null)
        expect(screen.getByText('Buy now')).toBeInTheDocument()
    })

    test('should call onBlocksBuy on click of buy now button', () => {
        renderComponent(null)
        fireEvent.click(screen.getByText('Buy now'))

        expect(onBlocksBuy).toHaveBeenCalled()
    })

    test('should display error when trying to buy blocks having more credits than available credits', () => {
        renderComponent({...mockContext, totalCredits: 0})
        fireEvent.click(screen.getByText('Buy now'))

        expect(screen.getByText(BUY_ERROR)).toBeInTheDocument()
    })

    test('should display 0 credits when cart is empty', () => {
        renderComponent({...mockContext, cart: []})

        expect(screen.getByText('0 credits')).toBeInTheDocument()
    })
})