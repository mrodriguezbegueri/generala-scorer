import { Player } from "@/interfaces"

export const isGameOver = (players: Player[]): boolean => {

    if (players.length === 0) {
        return false
    }

    for( const player of players) {
        for (const value of player.values) {
            if (value === '') {
                return false;
            }
        }
    }


    return true
}