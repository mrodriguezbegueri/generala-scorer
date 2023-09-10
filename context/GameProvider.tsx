"use client";

import { FC, PropsWithChildren, useReducer } from "react";
import { GameContext, gameReducer } from ".";
import { Player } from "@/interfaces";
import { GAME_VALUES } from "@/constants";

export interface GameState {
  players: Player[];
  currentPlayer: Player
}

const Game_INITIAL_STATE: GameState = {
  currentPlayer: {
    name: "Matufa",
    values: Array(Object.keys(GAME_VALUES).length).fill(""),
    totalScore: 0
  },
  players: [
    {
      name: "Matufa",
      values: Array(Object.keys(GAME_VALUES).length).fill(""),
      totalScore: 0
    },
    {
      name: "Mamuchi",
      values: Array(Object.keys(GAME_VALUES).length).fill(""),
      totalScore: 0
    },
  ],
};

const GameProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(gameReducer, Game_INITIAL_STATE);

  const setPlayers = () => {
    dispatch({ type: "[Game]- Set Players", payload: Game_INITIAL_STATE.players });
  };

  const updateTotalScore = (player: Player, score: number) => {
    dispatch({ type: "[Game]- Update TotalScore", payload: {player, score}});
  };

  const setCurrentPlayer = (player: Player) => {
    dispatch({ type: "[Game]- Set CurrentPlayer", payload: player });
  };

  return (
    <GameContext.Provider
      value={{
        ...state,
        setPlayers,
        setCurrentPlayer,
        updateTotalScore
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameProvider;
