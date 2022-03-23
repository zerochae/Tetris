import * as C from "Constants/index";

export type StageCell = [Tetrominos, string];

export type Stage = StageCell[][];

export type Tetrominos = keyof typeof C.TETROMINOS;

export type Player = {
  pos: {
    x: number;
    y: number;
  };
  tetromino: (string | number)[][];
  collided: boolean;
};
