import { GameState } from '.';

type GameActionType = { type: '[Game]- Set Players', payload: number[] };

export const gameReducer = (state: GameState, action: GameActionType): GameState => {
  switch (action.type) {
    case '[Game]- Set Players':
      return {
        ...state,
        players: action.payload
      };

    default:
      return state
  }
};