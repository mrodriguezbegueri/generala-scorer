"use client"

import { FC, PropsWithChildren, useReducer } from 'react'
import { GameContext, gameReducer } from '.'

export interface GameState {
   players: number[]
}

const Game_INITIAL_STATE: GameState = {
   players: [...Array(2)].map((index) => index + 1)
}


const GameProvider:FC<PropsWithChildren> = ({ children }) => {

   const [state, dispatch] = useReducer(gameReducer, Game_INITIAL_STATE)

   const setPlayers = () => {
    dispatch({type: '[Game]- Set Players', payload: Game_INITIAL_STATE.players})
   }

  return (
    <GameContext.Provider value={{
       ...state,
       setPlayers
    }}>
       { children }
   </GameContext.Provider>
  )
}

export default GameProvider