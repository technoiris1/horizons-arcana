import Image from "next/image";
import Hero from "./components/hero";
export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center">
      <Hero />
    </div>
  );
}
