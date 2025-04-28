import { Presentation, AboutMe, Training, Contact } from "@/components";
import Proyects from "@/components/Proyects";

export default function Home() {
  return (
    <main className="">
          <Presentation/>
          <Proyects/>
          <Training/>
          <AboutMe/>
          <Contact/>
    </main>
  );
}
