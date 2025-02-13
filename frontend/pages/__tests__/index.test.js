import { render, screen } from '@testing-library/react';
import Home from '../index';


const mockCountries = [
    { name: 'Namibia', flag: 'https://flagcdn.com/w320/na.png' },
    { name: 'Canada', flag: 'https://flagcdn.com/w320/ca.png' },
];

test('renders a list of two countries', () => {
    render(<Home countries={mockCountries} />);

    // Check if country names are displayed
    expect(screen.getByText('Namibia')).toBeInTheDocument();
    expect(screen.getByText('Canada')).toBeInTheDocument();

    // Check if flag images are displayed
    expect(screen.getByAltText('Namibia')).toHaveAttribute('src', 'https://flagcdn.com/w320/na.png')
    expect(screen.getByAltText('Canada')).toHaveAttribute('src', 'https://flagcdn.com/w320/ca.png')
});