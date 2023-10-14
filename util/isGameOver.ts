import { Player } from "@/interfaces"

export const isGameOver = (players: Player[]): boolean => {
    let isOver = true

    if (players.length === 0) {
        return false
    }

    for( const player of players) {
        for (const value of player.values) {
            if (value === '912') {
                return true
            }

            if (value === '') {
                isOver = false
            }
        }
    }


    return isOver
}