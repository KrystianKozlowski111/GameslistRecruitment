import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import Search from './Search';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);
jest.mock('axios');

describe('Search component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      games: {
        games: {
          results: [],
          count: 0,
        },
        error: '',
      },
    });
  });

  it('renders the header text', () => {
    render(
      <Provider store={store}>
        <Search />
      </Provider>
    );
    const headerText = screen.getByText(/Games DB/i);
    expect(headerText).toBeInTheDocument();
  });
});
