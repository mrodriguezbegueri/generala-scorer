import { Player } from '../interfaces';

export const getNextPlayer = (players: Player[], position: number): Player => {

    if (position >= 0 && position < players.length - 1) {
        return players[position + 1]
    }

    return players[0]
}