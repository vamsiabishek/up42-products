import { render, screen } from '@testing-library/react';
import Credits from './Credits'

describe('<Credits />', () => {
    test('should display credits', () => {
        render(<Credits credits={10}/>);

        expect(screen.getByText('10 credits')).toBeInTheDocument();
    })
})