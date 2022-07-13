import { render, screen } from '@testing-library/react';
import Credits from './Credits'
import { BlockContext } from '../../../context/BlockContext'
import { blockContextMock } from '../../../mocks/blocks'

describe('<Credits />', () => {
    test('should display total credits', () => {
        render(
            <BlockContext.Provider value={blockContextMock}>
                <Credits />
            </BlockContext.Provider>
        )

        expect(screen.getByText(`Credits ${blockContextMock.totalCredits}`)).toBeInTheDocument();
    })
})