import React from 'react';
import { render, screen } from '@testing-library/react';
import GameplayBoard from './components/GameplayBoard.component';

test('renders learn react link', () => {
  render(<GameplayBoard />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
