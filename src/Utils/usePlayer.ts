import * as C from "Constants/index";
import * as T from "Types/index";

import { useCallback, useState } from "react";

const usePlayer = () => {
  const [player, setPlayer] = useState({} as T.Player);

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
      pos: { x: (prev.pos.x += x), y: (prev.pos.y += y) },
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

  return { player, updatePlayerPos, resetPlayer };
};

export default usePlayer;
