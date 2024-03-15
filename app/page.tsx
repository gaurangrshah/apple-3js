import { Hero } from "./_components/hero";
import { Highlights } from "./_components/highlights";
import { NavBar } from "./_components/nav-bar";

export default function LandingPage() {
  return (
    <main className="bg-black">
      <NavBar />
      <Hero />
      <Highlights />
    </main>
  );
}
