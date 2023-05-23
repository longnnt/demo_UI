import { InfoAtTop } from "./components/InfoAtTop/InfoAtTop";
import { Container } from "./pages/Container/Container";
import { Footer } from "./pages/Footer/Footer";
import { Header } from "./pages/Header/Header";

function App() {
  return (
    <div className="App">
      <InfoAtTop />
      <Header />
      <Container />
      <Footer />
    </div>
  );
}

export default App;
