import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Main from "./pages/Main";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </Container>
  );
}

export default App;
