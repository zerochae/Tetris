import * as C from "Constants/index";
import * as T from "Types/index";

import { useEffect, useState } from "react";

const useStage = (player: T.Player, resetPlayer: () => void) => {
  const [stage, setStage] = useState(C.createStage());

  type StageCell = [string | number, string];
  type Stage = StageCell[][];

  useEffect(() => {
    if (!player.pos) return;

    const updateStage = (prevStage: Stage): Stage => {
      const newStage = prevStage.map(
        (row) =>
          row.map((cell) =>
            cell[1] === "clear" ? [0, "clear"] : cell
          ) as StageCell[]
      );
      player.tetromino.forEach((row, y) => {
        row.forEach((value, x) => {
          if (value !== 0) {
            newStage[y + player.pos.y][x + player.pos.x] = [
              value,
              `${player.collided ? "merged" : "clear"}`,
            ];
          }
        });
      });
      return newStage;
    };

    setStage((prev) => updateStage(prev));
  }, [player.collided, player.pos?.x, player.pos?.y, player.tetromino]);

  return { stage, setStage };
};

export default useStage;
