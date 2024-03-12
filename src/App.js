import { Route, Routes, Link } from "react-router-dom";
import styled from "styled-components";
import Home from "./components/Home";
import Pokemon from "./components/Pokemon";
import PageNotFound from "./components/PageNotFound";
import "./reset.css";

const App = () => (
  <Container>
    <Header>
      <Link to="/">
        <h1>Pokemon Search</h1>
      </Link>
    </Header>
    <Main>
      <Routes>
        <Route path="/:page?" element={<Home />} />
        <Route path="/pokemon/:name" element={<Pokemon />} />
        <Route path="*" element={PageNotFound} />
      </Routes>
    </Main>
  </Container>
);

const Container = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
const Header = styled.header`
  padding: 40px 16px;
  align-items: center;
  background-color: yellow;
  color: black;
  font-size: 4em;
`;
const Main = styled.main`
  flex: 1;
  padding: 20px 16px;
`;

export default App;
