import { Tecnologies, Presentation, AboutMe, Expirience } from "@/components";
import Proyects from "@/components/Proyects";

export default function Home() {
  return (
    <main className="">
          <Presentation/>
          <Proyects/>
          <Expirience/>
          <Tecnologies/>
          <AboutMe/>
    </main>
  );
}
