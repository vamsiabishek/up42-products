import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import QuantityDropdown from './QuantityDropdown'

const onSelect = jest.fn();
describe('<QuantityDropdown />', () => {

    test('should render dropdown button', () => {
        const { container } = render(<QuantityDropdown selectedValue={1} onSelect={onSelect}/>);

        expect(container.querySelectorAll('button')).toHaveLength(1);
    })

    test('should display 5 options on click of dropdown button', async() => {
        const { container } = render(<QuantityDropdown selectedValue={1} onSelect={onSelect}/>);
        const dropdownBtn = container.querySelectorAll('button')[0]
        fireEvent.click(dropdownBtn)

        await waitFor(() => {
            expect(container.querySelectorAll('a')).toHaveLength(5);
        });
        
    })

    test('should call onSelect prop on selecting an option from dropdown', async () => {
        const { container } = render(<QuantityDropdown selectedValue={3} onSelect={onSelect}/>);
        const dropdownBtn = container.querySelectorAll('button')[0]
        fireEvent.click(dropdownBtn)
        const firstOption = container.querySelectorAll('a')[0]
        fireEvent.click(firstOption)

        await waitFor(() => {
            expect(onSelect).toHaveBeenCalledWith(1);
        });
    })
})