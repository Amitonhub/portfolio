import Navbar from "@/components/Navbar";
import HeroSection from "../components/HeroSection";
import Cursor from "../components/Cursor";

export default function Home() {
  return (<>
    <Cursor />
    <div className='px-48 pt-14'>
      <Navbar />
      <HeroSection />
    </div>
  </>
  )
}