type GameValue = {
  label: string;
  values: number[];
};

export const GAME_VALUES: Record<string, GameValue> = {
  "1": {
    label: "1",
    values: [1, 2, 3, 4, 5],
  },
  "2": {
    label: "2",
    values: [2, 4, 6, 8, 10],
  },
  "3": {
    label: "3",
    values: [3, 6, 9, 12, 15],
  },
  "4": {
    label: "4",
    values: [4, 8, 12, 16, 20],
  },
  "5": {
    label: "5",
    values: [5, 10, 15, 20, 25],
  },
  "6": {
    label: "6",
    values: [6, 12, 18, 24, 30],
  },
  "7": {
    label: "Escalera",
    values: [20, 25],
  },
  "8": {
    label: "Full",
    values: [30, 35],
  },
  "9": {
    label: "Poker",
    values: [40, 45],
  },
  "10": {
    label: "Generala",
    values: [50],
  },
  "11": {
    label: "Doble Generala",
    values: [100],
  },
};
