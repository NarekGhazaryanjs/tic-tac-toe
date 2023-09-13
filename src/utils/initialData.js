const initialGridData = ["", "", "", "", "", "", "", "", ""];

const winCombinations = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [2, 4, 6],
  [2, 5, 8],
  [6, 7, 8],
  [1, 4, 7],
  [3, 4, 5],
];

const key_indexes = {
  X: {
    81: 0,
    87: 1,
    69: 2,
    65: 3,
    83: 4,
    68: 5,
    90: 6,
    88: 7,
    67: 8,
  },
  O: {
    73: 0,
    79: 1,
    80: 2,
    74: 3,
    75: 4,
    76: 5,
    78: 6,
    77: 7,
    188: 8,
  },
};

const initialScore = { X: 0, O: 0 };

export { initialGridData, winCombinations, key_indexes, initialScore };
