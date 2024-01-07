import Navbar from "@/components/Navbar";
import HeroSection from "./home/page";
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