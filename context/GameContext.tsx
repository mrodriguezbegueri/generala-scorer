"use client"

import { Player } from '@/interfaces'
import { createContext } from 'react'

export interface ContextProps {
    players: Player[]

    setPlayers: () => void
    updateTotalScore: (player: Player) => void
}


export const GameContext = createContext ({} as ContextProps)