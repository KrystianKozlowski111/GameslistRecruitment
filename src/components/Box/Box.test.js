import React from 'react';
import { render } from '@testing-library/react';
import Box from './Box';

describe('Box component', () => {
  it('renders the game title', () => {
    const games = {
      games: {
        results: [
          {
            id: 1,
            name: 'Game Title',
            background_image: 'image.jpg',
            platforms: [
              { platform: { name: 'PC' } },
              { platform: { name: 'Playstation 4' } },
            ],
          },
        ],
      },
    };
    const { getByText } = render(<Box games={games} />);
    expect(getByText(/Game Title/i)).toBeInTheDocument();
  });

  it('renders the game image', () => {
    const games = {
      games: {
        results: [
          {
            id: 1,
            name: 'Game Title',
            background_image: 'image.jpg',
            platforms: [
              { platform: { name: 'PC' } },
              { platform: { name: 'Playstation 4' } },
            ],
          },
        ],
      },
    };
    const { getByAltText } = render(<Box games={games} />);
    expect(getByAltText(/Game Title/i)).toBeInTheDocument();
  });

  it('renders the game platforms', () => {
    const games = {
      games: {
        results: [
          {
            id: 1,
            name: 'Game Title',
            background_image: 'image.jpg',
            platforms: [
              { platform: { name: 'PC' } },
              { platform: { name: 'Playstation 4' } },
            ],
          },
        ],
      },
    };
    const { getByText } = render(<Box games={games} />);
    expect(getByText(/PC, Playstation 4/i)).toBeInTheDocument();
  });
});
