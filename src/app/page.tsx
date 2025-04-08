import { Presentation, AboutMe, Expirience, Contact } from "@/components";
import Proyects from "@/components/Proyects";

export default function Home() {
  return (
    <main className="">
          <Presentation/>
          <Proyects/>
          <Expirience/>
          <AboutMe/>
          <Contact/>
    </main>
  );
}
