export const resetGame = () => ({ type: "reset game" });

export const playPause = () => ({ type: "play pause" });

export const pointScored = (player) => ({
  type: "point scored",
  payload: { player: player },
});
