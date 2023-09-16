import { GAME_VALUES } from "@/constants";
import { Player } from "@/interfaces";

export const createNewPlayers = (namesValues: string[]): Player[] => {
  const players: Player[] = [];

  namesValues.forEach((name) => {
    players.push({
      name: name,
      values: Array(Object.keys(GAME_VALUES).length).fill(""),
      totalScore: 0,
    });
  });

  return players;
};
