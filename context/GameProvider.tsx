"use client";

import { FC, PropsWithChildren, useReducer } from "react";
import { GameContext, gameReducer } from ".";
import { Player } from "@/interfaces";

export interface GameState {
  players: Player[];
  currentPlayer: Player;
}

const Game_INITIAL_STATE: GameState = {
  currentPlayer: {
    name: "default",
    values: [],
    totalScore: 0,
  },
  players: [],
};

const GameProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(gameReducer, Game_INITIAL_STATE);

  const setPlayers = (players: Player[]) => {
    dispatch({ type: "[Game]- Set Players", payload: players });
  };

  const updateTotalScore = (player: Player, score: number) => {
    dispatch({ type: "[Game]- Update TotalScore", payload: { player, score } });
  };

  const setCurrentPlayer = (player: Player) => {
    dispatch({ type: "[Game]- Set CurrentPlayer", payload: player });
  };

  const setNextPlayerToCurrentPlayer = (player: Player) => {
    dispatch({
      type: "[Game]- Set NextPlayer to CurrentPlayer",
      payload: {
        players: state.players,
        player
      },
    });
  };

  return (
    <GameContext.Provider
      value={{
        ...state,
        setPlayers,
        setCurrentPlayer,
        updateTotalScore,
        setNextPlayerToCurrentPlayer,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameProvider;
