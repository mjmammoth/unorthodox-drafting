import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import InteractiveArea from "@/components/interactiveArea";

export default async function Home() {
  return (
    <div className="text-gray-700 dark:text-gray-300">
      <Header />
      <InteractiveArea />
      <Footer />
    </div>
  );
}
