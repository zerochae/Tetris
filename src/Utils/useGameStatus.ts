import * as C from "Constants/index";

import { useEffect, useState } from "react";

const useGameStatus = (rowsCleared: number) => {
  const [score, setScore] = useState(0);
  const [rows, setRows] = useState(0);
  const [level, setLevel] = useState(1);

  useEffect(() => {
    if (rowsCleared > 0) {

      setScore((prev) => prev + C.ROWPOINTS[rowsCleared - 1] * level);
      setRows((prev) => prev + rowsCleared);
    }
  }, [rowsCleared,level]);

  return { score, setScore, rows, setRows, level, setLevel };
};

export default useGameStatus;
