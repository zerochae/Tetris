import React from "react";

import * as S from "Components/Cell/style.Cell";
import * as C from "Constants/index";
import * as T from "Types/index";

type CellProps = {
  type: T.Tetrominos;
};

const Cell = ({ type }: CellProps): JSX.Element => (
  <S.Container type={type} color={C.TETROMINOS[type].color}></S.Container>
);

export default React.memo(Cell);
