type GameValue = {
  label: string;
  values: number[];
};

export const GAME_VALUES: Record<string, GameValue> = {
  "1": {
    label: "1",
    values: [0, 1, 2, 3, 4, 5],
  },
  "2": {
    label: "2",
    values: [0, 2, 4, 6, 8, 10],
  },
  "3": {
    label: "3",
    values: [0, 3, 6, 9, 12, 15],
  },
  "4": {
    label: "4",
    values: [0, 4, 8, 12, 16, 20],
  },
  "5": {
    label: "5",
    values: [0, 5, 10, 15, 20, 25],
  },
  "6": {
    label: "6",
    values: [0, 6, 12, 18, 24, 30],
  },
  "7": {
    label: "Escalera",
    values: [0, 20, 25],
  },
  "8": {
    label: "Full",
    values: [0, 30, 35],
  },
  "9": {
    label: "Poker",
    values: [0, 40, 45],
  },
  "10": {
    label: "Generala",
    values: [0, 50],
  },
  "11": {
    label: "Doble Generala",
    values: [0, 100],
  },
};
