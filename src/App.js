import "./App.css";
import styled from "styled-components";
import Header from "./components/Header";
import Products from "./pages/ProductsPage";

const Container = styled.div`
  width: 100%;
`;

function App() {
  return (
    <Container className="App">
      <Header />
      <Products />
    </Container>
  );
}

export default App;
