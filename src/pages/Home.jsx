import Hero from "./components/Hero";
import ImpairmentCards from "./components/ImpairmentCards";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Explanation from "./components/Explanation";

export default function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <main className="max-w-screen-lg mx-auto w-full">
          <Hero />
          <Explanation />
          <ImpairmentCards />
        </main>
        <Footer />
      </header>
    </div>
  );
}
