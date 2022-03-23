import * as S from "Components/Cell/style.Cell";
import * as C from "Constants/index";
import React from "react";

type CellProps = {
  type: keyof typeof C.TETROMINOS;
};

const Cell = ({ type }: CellProps): JSX.Element => (
  <S.Container type={type} color={C.TETROMINOS[type].color}></S.Container>
);

export default React.memo(Cell);
