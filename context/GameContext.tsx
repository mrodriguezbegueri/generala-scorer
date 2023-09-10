"use client"

import { Player } from '@/interfaces'
import { createContext } from 'react'

export interface ContextProps {
    players: Player[]
    currentPlayer: Player

    setPlayers: () => void
    setCurrentPlayer: (player: Player) => void
    updateTotalScore: (player: Player, score: number) => void
}


export const GameContext = createContext ({} as ContextProps)