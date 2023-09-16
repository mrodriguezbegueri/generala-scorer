import { Player } from "@/interfaces";
import { GameState } from ".";
import { getNextPlayer } from "@/util/getNextPlayer";

type GameActionType =
  | { type: "[Game]- Set Players"; payload: Player[] }
  | { type: "[Game]- Update TotalScore"; payload: { player: Player, score: number } }
  | { type: "[Game]- Set CurrentPlayer"; payload: Player }
  | { type: "[Game]- Set NextPlayer to CurrentPlayer"; payload: {player: Player, players: Player[]} }

export const gameReducer = (state: GameState, action: GameActionType): GameState => {
  switch (action.type) {
    case "[Game]- Set Players":
      return {
        ...state,
        players: action.payload
      };
      case "[Game]- Update TotalScore":
      return {
        ...state,
        players: state.players.map ( player => {
          if (player.name === action.payload.player.name) {
            player.totalScore = action.payload.score
          }
          return player
        })
      };
      case "[Game]- Set CurrentPlayer":
      return {
        ...state,
        currentPlayer: action.payload
      };
      case "[Game]- Set NextPlayer to CurrentPlayer":
        const position = action.payload.players.findIndex((player) => player.name === action.payload.player.name)
        const nextPlayer = getNextPlayer(action.payload.players, position)
      return {
        ...state,
        currentPlayer: nextPlayer
      };
      
    default:
      return state;
  }
};
