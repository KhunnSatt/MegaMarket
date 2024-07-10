import Container from "./layouts/Container";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";

function App() {
  return (
    <>
      <Header/>
      <Container>
        <div>Hello Container</div>
      </Container>
      <Footer/>
    </>
  );
}

export default App;
