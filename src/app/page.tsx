import Navbar from "@/components/HomePage/Navbar";
import Hero from "@/components/HomePage/HeroSection";
import ValueProposition from "@/components/HomePage/ValuePros";
import LearningPlatform from "@/components/HomePage/Learning";
import CommunityMetrics from "@/components/HomePage/Metrics";
import LatestContent from "@/components/HomePage/LatestContent";
import Newsletter from "@/components/HomePage/NewsLetter";
import Footer from "@/components/HomePage/Footer";
export default function Home() {
  return (
    <div >
     <Navbar/>
    <Hero/>
    <ValueProposition/>
    <LearningPlatform/>
    <CommunityMetrics/>
    <LatestContent/>
    <Newsletter/>
    <Footer/>
    </div>
  );
}
