import Navbar from "@/components/Navbar";
import HeroSection from "./home/page";
import Cursor from "../components/Cursor";

export default function Home() {
  return (
    <div className='px-48 pt-16'>
      <Navbar />
      <HeroSection />
      <Cursor />
    </div>
  )
}