import { Player } from "@/interfaces";

export const getWinner = (players: Player[]): Player | null => {
    let max = -Infinity;
    let winnerPlayer = null;
  
    for (const player of players) {
      const totalPlayer = player.values.reduce((accum, value) => Number(accum) + Number(value), 0);
  
      if (totalPlayer > max) {
        max = totalPlayer;
        winnerPlayer = player;
      }
    }
  
    return winnerPlayer;
  }
  
