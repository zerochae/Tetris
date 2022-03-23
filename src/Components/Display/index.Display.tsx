import * as S from "Components/Display/style.Display";

type DisplayProps = {
  gameOver?: boolean;
  text: string;
};

const Display = ({ gameOver, text }: DisplayProps): JSX.Element => (
  <S.Container gameOver={gameOver}>{text}</S.Container>
);

export default Display;
