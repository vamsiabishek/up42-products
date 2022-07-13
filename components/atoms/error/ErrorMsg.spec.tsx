import { render, screen } from '@testing-library/react';
import ErrorMsg from './ErrorMsg'

describe('<ErrorMsg />', () => {
    test('should display error message', () => {
        render(<ErrorMsg msg="Invalid"/>);

        expect(screen.getByText('Invalid')).toBeInTheDocument();
    })

    test('should return null when there is no error message', () => {
        const { container } = render(<ErrorMsg msg=""/>);

        expect(container.firstChild).toBeNull();
    })

    test('should return null when there is no error message', () => {
        const { container } = render(<ErrorMsg />);

        expect(container.firstChild).toBeNull();
    })
})