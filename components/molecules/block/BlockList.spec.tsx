import { render, screen } from '@testing-library/react';
import BlockList from './BlockList'
import { BlockContext } from '../../../context/BlockContext'
import { blockContextMock } from '../../../mocks/blocks'
import { IBlockData } from '../../../interfaces/Block'

describe('<BlockList />', () => {
    const renderComponent = (context: IBlockData | null) => {
        return render(
            <BlockContext.Provider value={{...blockContextMock, ...context}}>
                <BlockList />
            </BlockContext.Provider>
        )
    }
    test('should display all the blocks in the cart', () => {
        renderComponent(null)

        blockContextMock.blocks.forEach(block => expect(screen.getByText(block.displayName)).toBeInTheDocument())
    })
    test('should return null when blocks are empty', () => {
        const { container } = renderComponent({...blockContextMock, blocks: []})
        expect(container.firstChild).toBeNull();
    })

})