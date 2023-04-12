import Image from "next/image";
import HeroBanner from "@/components/HeroBanner";
import Services from "@/components/Services";
import Action from "@/components/Homepage/Action";
import Industries from "@/components/Industries";
import Team from "@/components/Homepage/Team";
import Clients from "@/components/Homepage/Clients";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <div>
      <HeroBanner />
      <div className="mt-20">
        <Services />
      </div>
      <div className="mt-20">
        <Action />
      </div>
      <div className="mt-20">
        <Industries />
      </div>

      <div className="mt-20">
        <Team />
      </div>
      <div className="mt-20">
        <Clients />
      </div>

      <div className="mt-20">
        <Contact />
      </div>
    </div>
  );
}
