import { Player } from "@/interfaces";

export const isCurrentPlayer = (currentPlayer: Player, selectedPlayer: Player): boolean => {
    return currentPlayer.name === selectedPlayer.name
}