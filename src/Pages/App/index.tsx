import * as S from "Pages/App/style.App";

const App = (): JSX.Element => {
  return (
    <S.Container role={"button"} tabIndex={0}>
      <S.Inner>Start here!</S.Inner>
    </S.Container>
  );
};

export default App;
