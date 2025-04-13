import Navbar from "@/components/HomePage/Navbar";
import Hero from "@/components/HomePage/HeroSection";
import ValueProposition from "@/components/HomePage/ValuePros";
import LearningPlatform from "@/components/HomePage/Learning";
export default function Home() {
  return (
    <div >
     <Navbar/>
    <Hero/>
    <ValueProposition/>
    <LearningPlatform/>
    </div>
  );
}
