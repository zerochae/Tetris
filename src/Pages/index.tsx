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

  const { player, updatePlayerPos, resetPlayer, playerRotate } = H.usePlayer();
  const { stage, setStage, rowsCleared } = H.useStage(player, resetPlayer);
  const { score, setScore, rows, setRows, level, setLevel } =
    H.useGameStatus(rowsCleared);

  const movePlayer = (dir: number) => {
    if (!C.isColliding(player, stage, { x: dir, y: 0 })) {
      updatePlayerPos({ x: dir, y: 0, collided: false });
    }
  };

  const dropBlock = () => {
    setDropTime(100000);
    // setDropTime(1000);
  };

  const keyUp = ({ keyCode }: { keyCode: number }): void => {
    if (!gameOver) {
      if (keyCode === 40) {
        setDropTime(1000 / level + 200);
      }
    }
  };

  const handleStartGame = (): void => {
    if (gameArea.current) gameArea.current.focus();
    setStage(C.createStage());
    setDropTime(1000);
    resetPlayer();
    setScore(0);
    setLevel(1);
    setRows(0);
    setGameOver(false);
  };

  const move = ({
    keyCode,
    repeat,
  }: {
    keyCode: number;
    repeat: boolean;
  }): void => {
    if (!gameOver) {
      if (keyCode === 37) {
        movePlayer(-1);
      } else if (keyCode === 39) {
        movePlayer(1);
      } else if (keyCode === 40) {
        if (repeat) return;
        setDropTime(30);
      } else if (keyCode === 38) {
        playerRotate(stage);
      } else if (keyCode === 32) {
        dropBlock();
      }
    }
  };

  const drop = (): void => {
    if (rows > level * 10) {
      setLevel((prev) => prev + 1);
      setDropTime(1000 / level + 200);
    }

    if (!C.isColliding(player, stage, { x: 0, y: 1 })) {
      updatePlayerPos({ x: 0, y: 1, collided: false });
    } else {
      if (player.pos.y < 1) {
        console.log("game over");
        setGameOver(true);
        setDropTime(null);
      }
      updatePlayerPos({ x: 0, y: 0, collided: true });
    }
  };

  H.useInterval(() => {
    drop();
  }, dropTime);

  return (
    <S.Container
      role={"button"}
      tabIndex={0}
      onKeyDown={move}
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
              <Display text={`Score: ${score}`} />
              <Display text={`Rows: ${rows}`} />
              <Display text={`Level: ${level}`} />
            </>
          )}
        </S.Inner>
        <Stage stage={stage} />
      </S.Outer>
    </S.Container>
  );
};

export default App;
