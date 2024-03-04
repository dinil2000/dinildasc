// import React from 'react';
// import { render, fireEvent } from '@testing-library/react';
// import Audio from './Audio';

// describe('Audio', () => {
//   it('renders without crashing', () => {
//     const { container } = render(<Audio />);
//     expect(container).toBeInTheDocument();
//   });

//   it('plays audio when button is clicked', () => {
//     const mockPlay = jest.fn();
//     const { getByText } = render(<Audio play={mockPlay} />);
//     fireEvent.click(getByText('Play'));
//     expect(mockPlay).toHaveBeenCalled();
//   });
// });