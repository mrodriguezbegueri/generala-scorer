"use client";

import { FC, PropsWithChildren, useReducer } from "react";
import { GameContext, gameReducer } from ".";
import { Player } from "@/interfaces";

export interface GameState {
  players: Player[];
}

const Game_INITIAL_STATE: GameState = {
  players: [
    {
      name: "Matufa",
      totalScore: 0,
    },
    {
      name: "Mamuchi",
      totalScore: 0,
    },
  ],
};

const GameProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(gameReducer, Game_INITIAL_STATE);

  const setPlayers = () => {
    dispatch({ type: "[Game]- Set Players", payload: Game_INITIAL_STATE.players });
  };

  const updateTotalScore = (player: Player) => {
    dispatch({ type: "[Game]- Update TotalScore", payload: player});
  };

  return (
    <GameContext.Provider
      value={{
        ...state,
        setPlayers,
        updateTotalScore
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameProvider;
