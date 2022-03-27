import * as C from "Constants/index";
import * as T from "Types/index";

export const createStage = () =>
  Array.from(Array(C.STAGE_HEIGHT), () =>
    Array(C.STAGE_WIDTH).fill([0, "clear"])
  );

export const randomTetromino = () => {
  const tetrominos = ["I", "J", "L", "O", "S", "T", "Z", "A","B","C","SI"] as T.Tetrominos[];

  const randTetromino =
    tetrominos[Math.floor(Math.random() * tetrominos.length)];
  return C.TETROMINOS[randTetromino];
};

export const isColliding = (
  player: T.Player,
  stage: T.Stage_H,
  { x: moveX, y: moveY }: { x: number; y: number }
) => {
  for (let y = 0; y < player.tetromino.length; y++) {
    for (let x = 0; x < player.tetromino[y].length; x++) {
      if (player.tetromino[y][x] !== 0) {
        if (
          !stage[y + player.pos.y + moveY] ||
          !stage[y + player.pos.y + moveY][x + player.pos.x + moveX] ||
          stage[y + player.pos.y + moveY][x + player.pos.x + moveX][1] !==
            "clear"
        ) {
          return true;
        }
      }
    }
  }

  return false;
};
