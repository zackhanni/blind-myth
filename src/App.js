import "./App.css";
import Hero from "./components/Hero";
import ImpairmentCards from "./components/ImpairmentCards";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <main className="max-w-screen-lg mx-auto w-full">
          <Hero />
          <ImpairmentCards />
        </main>
        <Footer />
      </header>
    </div>
  );
}

export default App;
