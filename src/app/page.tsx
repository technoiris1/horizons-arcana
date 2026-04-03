import Image from "next/image";
import Hero from "./components/hero";
import Footer from "./components/footer";
import Info from "./components/info";
export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col bg-linear-to-b from-[#a6d8ff] via-[#cbb6ff] to-[#9fd6ff]">
      <Hero />
      <Info />
      <Footer />
    </main>
  );
}
