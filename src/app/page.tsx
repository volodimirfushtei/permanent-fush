

import Hero from "@/components/Hero";
import Footer from "@/components/footer";
import ServicesSection from "@/components/services-section";
export default function Home() {
  return (
    <div className="font-sans overflow-hidden ">
      <main className="flex flex-col w-screen">
          <Hero children={undefined}/>
          <ServicesSection children={undefined} />
          <Footer children={undefined} />






      </main>
    </div>
  );
}
