import Navbar from "@/components/Navbar";
import HeroSection from "./home/page";

export default function Home() {
  return (
    <div className='px-48 pt-16'>
      <Navbar />
      <HeroSection />
    </div>
  )
}