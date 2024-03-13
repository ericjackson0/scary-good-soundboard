import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders donation link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Roswell Park/i);
  expect(linkElement).toBeInTheDocument();
});
