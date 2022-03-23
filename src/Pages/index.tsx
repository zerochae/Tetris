import * as S from "Pages/style.App";
import * as C from "Constants/index";
import * as H from "Utils/index";

import { useRef, useState } from "react";

import Display from "Components/Display/index.Display";
import StartButton from "Components/StartButton/index.StartButton";
import Stage from "Components/Stage/index.Stage";

const App = (): JSX.Element => {
  const [dropTime, setDropTime] = useState<null | number>(null);
  const [gameOver, setGameOver] = useState(true);

  const gameArea = useRef<HTMLDivElement>(null);

  const { player, updatePlayerPos, resetPlayer } = H.usePlayer();
  const { stage, setStage } = H.useStage(player, resetPlayer);

  const movePlayer = (dir: number) => {
    updatePlayerPos({ x: dir, y: 0, collided: false });
  };

  const keyUp = ({ keyCode }: { keyCode: number }): void => {
    if (keyCode === 40) {
      setDropTime(1000);
    }
  };

  const handleStartGame = (): void => {
    if (gameArea.current) gameArea.current.focus();
    setStage(C.createStage());
    setDropTime(1000);
    resetPlayer();
    setGameOver(false);
  };

  const move = ({
    keyCode,
    repeat,
  }: {
    keyCode: number;
    repeat: boolean;
  }): void => {
    if (keyCode === 37) {
      movePlayer(-1);
    } else if (keyCode === 39) {
      movePlayer(1);
    } else if (keyCode === 40) {
      if (repeat) return;
      setDropTime(30);
    } else if (keyCode === 38) {
    }
  };

  const drop = (): void => {
    updatePlayerPos({ x: 0, y: 1, collided: false });
  };

  H.useInterval(() => {
    drop();
  }, dropTime);

  return (
    <S.Container
      role={"button"}
      tabIndex={0}
      onKeyDown={(e) => move(e)}
      onKeyUp={keyUp}
      ref={gameArea}
    >
      <S.Outer>
        <S.Inner>
          {gameOver ? (
            <>
              <Display gameOver={gameOver} text={"Game Over"} />
              <StartButton callback={handleStartGame} />
            </>
          ) : (
            <>
              <Display text={`Score: `} />
              <Display text={`Rows: `} />
              <Display text={`Level: `} />
            </>
          )}
        </S.Inner>
        <Stage stage={stage} />
      </S.Outer>
    </S.Container>
  );
};

export default App;
