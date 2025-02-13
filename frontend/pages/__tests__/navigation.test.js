import { render, screen, fireEvent } from '@testing-library/react';
import Home from '../index';
import { useRouter } from 'next/router';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

const mockCountries = [
    { name: 'Namibia', flag: 'https://flagcdn.com/w320/na.png' },
];

test('navigates to the country details page when a flag is clicked', () => {

    const mockPush = jest.fn();
    useRouter.mockReturnValue({ push: mockPush });

    render(<Home countries={mockCountries} />);

    // Simulate clicking on a flag - get AltText for src
    const flag = screen.getByAltText('Namibia');
    fireEvent.click(flag);

    expect(mockPush).toHaveBeenCalledWith('/countries/Namibia');
});