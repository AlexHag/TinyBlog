import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import Home from './Pages/Home';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText("Tiny Blog");
  expect(linkElement).toBeInTheDocument();
});

test('renders the correct number of post cards', async () => {
  const {container} = render(<Home />);
  const postCards = container.getElementsByClassName('one-post');
  expect(postCards.length).toBe(5); // assuming that there are 5 post cards that should be rendered
});