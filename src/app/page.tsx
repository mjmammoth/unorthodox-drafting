import { NavBar } from "../components/navbar";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { Heroes } from "../components/heroes";
import { App } from "../components/app";
import { WinrateSlider } from "../components/winrate-slider";

export default function Home() {
  return (
    <div className="text-gray-700 dark:text-gray-300">
      <Header />
      <Heroes />
      <App />
      <WinrateSlider />
      <Footer />
    </div>
  );
}
