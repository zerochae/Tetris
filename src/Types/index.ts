import * as C from "Constants/index";

export type StageCell = [Tetrominos, string];

export type Stage = StageCell[][];

export type Tetrominos = keyof typeof C.TETROMINOS;
