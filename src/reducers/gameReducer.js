import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  games: [],
  error: null,
};

const gameSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
    setGames: (state, action) => {
      state.games = action.payload;
      state.error = null;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.games = [];
    },
  },
});

export const { setGames, setError } = gameSlice.actions;

export default gameSlice.reducer;
