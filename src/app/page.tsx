import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { WinrateSlider } from "../components/winrate-slider";
import SearchSection from "../components/searchSection";

export default function Home() {
  return (
    <div className="text-gray-700 dark:text-gray-300">
      <Header />
      <SearchSection />
      <Footer />
    </div>
  );
}
