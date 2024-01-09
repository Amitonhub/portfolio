import Navbar from "@/components/Navbar";
import HeroSection from "../components/HeroSection";
import Cursor from "../components/Cursor";
import TechStack from "@/components/TechStack";

export default function Home() {
  return (<>
    <Cursor />
    <div className='h-lvh'>
      <Navbar />
      <HeroSection />
    </div>
    <TechStack />
  </>
  )
}