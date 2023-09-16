"use client"

import { Player } from '@/interfaces'
import { createContext } from 'react'

export interface ContextProps {
    players: Player[]
    currentPlayer: Player

    setPlayers: (players: Player[]) => void
    setCurrentPlayer: (player: Player) => void
    updateTotalScore: (player: Player, score: number) => void,
    setNextPlayerToCurrentPlayer: (player: Player) => void
}


export const GameContext = createContext ({} as ContextProps)