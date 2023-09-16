import { Player } from "@/interfaces";

export const getWinner = (players: Player[]): Player | null => {
    let max = -Infinity; // Inicializamos con un valor muy bajo
    let winnerPlayer = null;
  
    for (const player of players) {
      const totalPlayer = player.values.reduce((accum, value) => Number(accum) + Number(value), 0);
      console.log('totalPlayer', totalPlayer)
  
      if (totalPlayer > max) {
        max = totalPlayer;
        winnerPlayer = player;
      }
    }
  
    return winnerPlayer;
  }
  
