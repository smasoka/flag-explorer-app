import { render, screen } from '@testing-library/react';
import CountryDetails from '../countries/[name]';

const mockCountry = {
    name: 'Namibia',
    flag: 'https://flagcdn.com/w320/na.png',
    population: 2540000,
    capital: 'Windhoek',
  };

test('renders country details', () => {
    render(<CountryDetails country={mockCountry} error={false} />);
  
    expect(screen.getByText('Namibia')).toBeInTheDocument();
    expect(screen.getByAltText('Namibia')).toHaveAttribute('src', 'https://flagcdn.com/w320/na.png');
    expect(screen.getByText('Population: 2540000')).toBeInTheDocument();
    expect(screen.getByText('Capital: Windhoek')).toBeInTheDocument();
});
