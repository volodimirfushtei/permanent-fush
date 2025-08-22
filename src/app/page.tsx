import Image from "next/image";
import NavBar from "@/components/nav-bar";

export default function Home() {
  return (
    <div className="font-sans">
      <main className="flex ">
         <NavBar children={undefined}>
         </NavBar>
      </main>
    </div>
  );
}
