

import Hero from "@/components/Hero";
import Footer from "@/components/footer";
import ServicesSection from "@/components/services-section";
import Prices from "@/components/prices";
import AboutSection from "@/components/about";
import Contacts from "@/components/contacts";
import NotFound from "@/components/notfound";
export default function Home() {
  return (
    <div className="font-sans overflow-hidden ">
      <main className="flex flex-col w-screen">

          <Hero children={undefined}/>
          <ServicesSection children={undefined} />
          <Prices children={undefined}/>
          <AboutSection />
          <Contacts />
          <NotFound />
          <Footer children={undefined} />

      </main>
    </div>
  );
}
