import Footer from "@/components/Footer";
import MarqueeSlider from "@/components/Marquee";
import Navbar from "@/components/Navbar";
import Projetos from "@/components/Projetos";

export default function Home(){
  return(
    <div>
      <Navbar></Navbar>
      <div className="mt-[70px]">
        <video className=" aspect-video w-screen bg-slate-500" controls src="/" ></video>
      </div>
      <div className="mt-[200px]">
        <Projetos></Projetos>
      </div>
      <div className="mt-[300px]">
        <Footer></Footer>
      </div>
    </div>
    
  )
}
