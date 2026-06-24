import Hero from "./components/Hero";
import GameRates from "./components/GameRates";
import GameRatesGrid from "./components/GameRatesGrid";
import Features from "./components/Features";
import MobileFeatures from "./components/MobileFeature";
import HowToPlay from "./components/HowToPlay";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div>
      <Hero />
      <GameRates />
      <GameRatesGrid />
      <Features />
      <MobileFeatures />
      <HowToPlay />
      <Footer />
    </div>
  );
}

export default App;
