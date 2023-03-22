import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Nav from "./components/Nav";
import Main from "./pages/Main";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <Container>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </Container>
  );
}

export default App;
