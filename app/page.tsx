import Cta from "@/components/cards/Cta";
import Experience from "@/components/cards/Experience";
import ExpertArea from "@/components/cards/ExpertArea";
import Profile from "@/components/cards/Profile";
import Projects from "@/components/cards/Projects";
import Service from "@/components/cards/Service";
import Image from "next/image";

export default function Home() {
  return (
    <main className="space-y-8">
      <Profile/>  
      <Experience/> 
      <ExpertArea/>
      <Projects/>   
      <Service/>
      <Cta/>
    </main>
  );
}
