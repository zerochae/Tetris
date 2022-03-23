import * as S from "Pages/style.App";
import * as C from "Constants/index";

import { useState } from "react";

import Display from "Components/Display/index.Display";
import StartButton from "Components/StartButton/index.StartButton";
import Stage from "Components/Stage/index.Stage";

const App = (): JSX.Element => {
  const [dropTime, setDropTime] = useState<null | number>(null);
  const [gameOver, setGameOver] = useState(true);

  return (
    <S.Container role={"button"} tabIndex={0}>
      <S.Outer>
        <S.Inner>
          {gameOver ? (
            <>
              <Display gameOver={gameOver} text={"Game Over"} />
              <StartButton callback={() => null} />
            </>
          ) : (
            <>
              <Display text={`Score: `} />
              <Display text={`Rows: `} />
              <Display text={`Level: `} />
            </>
          )}
        </S.Inner>
        <Stage stage={C.createStage()} />
      </S.Outer>
    </S.Container>
  );
};

export default App;
