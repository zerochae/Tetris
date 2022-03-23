import styled from "styled-components";

import * as C from "Constants/index";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(${C.STAGE_WIDTH}, 30px);
  grid-template-rows: repeat(${C.STAGE_HEIGHT}, 30px);
  grid-gap: 1px;
  border: 1px solid #777;
  background-color: #222;
`;
