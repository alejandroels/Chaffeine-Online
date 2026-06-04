import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { LandingSections } from "@/components/sections/LandingSections";
import { SmoothScroll } from "@/components/ui/SmoothScroll";

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <Header />
      <main>
        <LandingSections />
      </main>
      <Footer />
    </>
  );
}
