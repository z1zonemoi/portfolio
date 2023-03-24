import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Main from "./pages/Main";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

function App() {
  useEffect(() => {
    window.onbeforeunload = function pushRefresh() {
      window.scrollTo(0, 0);
    };
  }, []);

  return (
    <Container>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </Container>
  );
}

export default App;
