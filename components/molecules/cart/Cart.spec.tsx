import { render, screen } from '@testing-library/react';
import Cart from './Cart'

describe('<Cart />', () => {
    test('should load the cart component', () => {
        render(<Cart />);

        expect(screen.getByText('Cart')).toBeInTheDocument();
    })
})