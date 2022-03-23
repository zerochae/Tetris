import * as S from "Components/StartButton/style.StartButton";

type StartButtonProps = {
  callback: () => void;
};

const StartButton = ({ callback }: StartButtonProps) => {
  return <S.Container onClick={callback}>Start Game</S.Container>;
};

export default StartButton;
