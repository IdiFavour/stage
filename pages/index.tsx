import Image from "next/image";
import HeroBanner from "@/components/HeroBanner";
import Services from "@/components/Services";
export default function Home() {
  return (
    <div>
      <HeroBanner />
      <div className="mt-20">
        <Services />
      </div>
    </div>
  );
}
