import { render, screen } from '@testing-library/react';
import BlocksTemplate from './BlocksTemplate'
import { BlockContext } from '../../../context/BlockContext'
import { blockContextMock } from '../../../mocks/blocks'
import { IBlockData } from '../../../interfaces/Block'

describe('<BlocksTemplate />', () => {
    const renderComponent = (context: IBlockData | null) => {
        return render(
            <BlockContext.Provider value={{...blockContextMock, ...context}}>
                <BlocksTemplate />
            </BlockContext.Provider>
        )
    }

    test('should display total credits', () => {
        renderComponent(null)
        expect(screen.getByText(`Credits ${blockContextMock.totalCredits}`)).toBeInTheDocument();
    })

    test('should display cart when cart is not empty', () => {
        renderComponent(null)
        expect(screen.getByText('Cart')).toBeInTheDocument();
    })

    test('should not display cart when cart is empty', () => {
        renderComponent({...blockContextMock, cart: []})
        expect(screen.queryByText('Cart')).not.toBeInTheDocument();
    })

    test('should display blocks list in full width when cart is empty', () => {
        const { container } = renderComponent({...blockContextMock, cart: []})
        expect(container.getElementsByClassName('blocksFullWidth').length).toBe(1);
    })

    test('should not display blocks list in full width when cart is not empty', () => {
        const { container } = renderComponent(null)
        expect(container.getElementsByClassName('blocksFullWidth').length).toBe(0);
    })

})