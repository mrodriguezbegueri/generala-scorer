import { Player } from "@/interfaces";
import { GameState } from ".";

type GameActionType =
  | { type: "[Game]- Set Players"; payload: Player[] }
  | { type: "[Game]- Update TotalScore"; payload: Player };

export const gameReducer = (state: GameState, action: GameActionType): GameState => {
  switch (action.type) {
    case "[Game]- Set Players":
      return {
        ...state,
        players: action.payload,
      };
      case "[Game]- Update TotalScore":
      return {
        ...state,
        players: state.players.map ( player => {
          if (player.name === action.payload.name) {
            player.totalScore = action.payload.totalScore
          }
          return player
        })
      };

    default:
      return state;
  }
};
