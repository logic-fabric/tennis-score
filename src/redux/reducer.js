export const initialState = {
  player1: 0,
  player2: 0,
  advantage: null,
  winner: null,
  playing: true,
};

export function scoreReducer(state = initialState, action) {
  switch (action.type) {
    case "reset game":
      return initialState;

    case "play pause":
      if (state.winner) {
        return state;
      }

      return {
        ...state,
        playing: !state.playing,
      };

    case "point scored":
      if (state.winner) {
        return state;
      }

      if (!state.palying) {
        return state;
      }

      const player = action.payload.player;
      const otherPlayer = player === "player1" ? "player2" : "player1";
      const playerCurrentScore = state[player];

      if (playerCurrentScore <= 15) {
        return {
          ...state,
          [player]: playerCurrentScore + 15,
        };
      }

      if (playerCurrentScore === 30) {
        return {
          ...state,
          [player]: 40,
        };
      }

      if (playerCurrentScore === 40) {
        if (state[otherPlayer] !== 40 || state.advantage === player) {
          return {
            ...state,
            winner: player,
          };
        }

        if (state.advantage === null) {
          return {
            ...state,
            advantage: player,
          };
        }

        return {
          ...state,
          advantage: null,
        };
      }
      break;

    default:
      return state;
  }
}
