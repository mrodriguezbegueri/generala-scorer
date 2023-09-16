import { Player } from "@/interfaces"

export const isGameOver = (players: Player[]): boolean => {

    for( const player of players) {
        for (const value of player.values) {
            if (value === '') {
                return false; // El juego no ha terminado si se encuentra un valor vacío
            }
        }
    }


    return true
}