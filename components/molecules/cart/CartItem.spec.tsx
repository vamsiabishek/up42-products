import { render, screen } from '@testing-library/react';
import CartItems from './CartItems'
import { BlockContext } from '../../../context/BlockContext'
import { blockContextMock } from '../../../mocks/blocks'
import { IBlockData } from '../../../interfaces/Block'

describe('<CartItems />', () => {
    const renderComponent = (context: IBlockData | null) => {
        return render(
            <BlockContext.Provider value={{...blockContextMock, ...context}}>
                <CartItems />
            </BlockContext.Provider>
        )
    }
    test('should display all the blocks in the cart', () => {
        renderComponent(null)

        blockContextMock.cart.forEach(({block}) => expect(screen.getByText(block.displayName)).toBeInTheDocument())
    })
    test('should return null when cart is empty', () => {
        const { container } = renderComponent({...blockContextMock, cart: []})
        expect(container.firstChild).toBeNull();
    })

})