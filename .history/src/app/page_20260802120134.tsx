import Hero from "@components/hero";
import Footer from "@/components/footer";
import ServicesSection from "@/components/services-section";
import Prices from "@/components/prices";
import { services } from "@/data/favors";
import ClarityProvider from "@/components/ClarityProvider";
export default function Home() {
  return (
    <div className="font-sans overflow-hidden ">
      <main className="flex flex-col w-screen">
        <Hero />
        <ServicesSection services={services} />
        <Prices />
        <Footer />
      </main>
    </div>
  );
}
