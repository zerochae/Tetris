import * as C from "Constants/index";

export const createStage = () =>
  Array.from(Array(C.STAGE_HEIGHT), () => Array(C.STAGE_WIDTH).fill([0,'clear']));

export const randomTetromino = () => {
  const tetrominos = ["I", "J", "L", "O", "S", "T", "Z"] as (keyof typeof C.TETROMINOS)[];
  const randTetromino = tetrominos[Math.floor(Math.random() * tetrominos.length)];
  return C.TETROMINOS[randTetromino]
};
