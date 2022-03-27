import * as C from "Constants/index";
import * as T from "Types/index";

import { useCallback, useState } from "react";

const usePlayer = () => {
  const [player, setPlayer] = useState({} as T.Player);

  const rotate = (matrix: T.Player["tetromino"]) => {
    const mtrx = matrix.map((_, i) => matrix.map((col) => col[i]));
    return mtrx.map((row) => row.reverse());
  };

  const playerRotate = (stage: T.Stage_H): void => {
    const clonedPlayer = JSON.parse(JSON.stringify(player));
    clonedPlayer.tetromino = rotate(clonedPlayer.tetromino);

    const posX = clonedPlayer.pos.x;
    let offset = 1;
    while (C.isColliding(clonedPlayer, stage, { x: 0, y: 0 })) {
      clonedPlayer.pos.x += offset;
      offset = -(offset + (offset > 0 ? 1 : -1));

      if (offset > clonedPlayer.tetromino[0].length) {
        clonedPlayer.pos.x = posX;
        return;
      }
    }

    setPlayer(clonedPlayer);
  };

  const updatePlayerPos = ({
    x,
    y,
    collided,
  }: {
    x: number;
    y: number;
    collided: boolean;
  }): void => {
    setPlayer((prev) => ({
      ...prev,
      pos: { x: prev.pos.x + x, y: prev.pos.y + y },
      // pos: { x: prev.pos.x += x, y: prev.pos.y += y },
      collided,
    }));
  };

  const resetPlayer = useCallback(
    (): void =>
      setPlayer({
        pos: { x: C.STAGE_WIDTH / 2 - 2, y: 0 },
        tetromino: C.randomTetromino().shape,
        collided: false,
      }),
    []
  );

  return { player, updatePlayerPos, resetPlayer, playerRotate };
};

export default usePlayer;
