export const setGames = (games) => ({
  type: 'games/setGames',
  payload: games,
});
export const setError = (error) => ({
  type: 'games/setError',
  payload: error,
});
