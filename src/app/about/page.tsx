import Navbar from "@/components/HomePage/Navbar"
import Hero from "@/components/about/Hero"
import Values from "@/components/about/Value"
import Team from "@/components/about/Team"
import Partners from "@/components/about/Partners"
import Footer from "@/components/HomePage/Footer"
import MetricCard from "@/components/about/Metrics"
export default function AboutUs(){
    return (
        <div>
          <Navbar/>  
          <Hero/>
          <Values/>
          <Team/>
          <Partners/>
            <MetricCard/>
          <Footer/>
        </div>
    )
}