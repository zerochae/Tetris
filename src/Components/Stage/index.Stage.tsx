import * as S from "Components/Stage/style.Stage";
import * as T from "Types/index";

import Cell from "Components/Cell/index.Cell";

type StageProps = {
  stage: T.Stage;
};

const Stage = ({ stage }: StageProps): JSX.Element => {
  return (
    <S.Container>
      {stage.map((row) =>
        row.map((cell, index) => <Cell key={index} type={cell[0]} />)
      )}
    </S.Container>
  );
};

export default Stage;
