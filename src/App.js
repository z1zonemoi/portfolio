import { useEffect } from "react";
import styled from "styled-components";

import Main from "./Main";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

function App() {
  useEffect(() => {
    const reFresh = () => {
      window.scrollTo(0, 0);
    };
    window.onbeforeunload = reFresh;
  }, []);

  return (
    <Container>
      <Main />
    </Container>
  );
}

export default App;
