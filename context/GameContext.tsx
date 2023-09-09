"use client"

import { createContext } from 'react'

export interface ContextProps {
    players: number[]

    setPlayers: () => void
}


export const GameContext = createContext ({} as ContextProps)