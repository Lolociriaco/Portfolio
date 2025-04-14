
import { cardData } from "@/seed/data"
import { ProyectItem } from "./ui/ProyectItem"
import { mont } from "@/lib/fonts"

export default function Proyects() {

  return (
    <section id="proyects"
      className="flex flex-col justify-center items-center w-full margin_section">
      <div className="w-full max_w_section">
        <h2 className={`${mont.className} md:text-5xl font-semibold mb-10`}>
          Proyectos Descatables
        </h2>
        <div className="flex flex-col justify-center w-full items-center">
          {
            cardData.map((item) => (
                <ProyectItem {...item} key={item.title}/>
            ))
          }
        </div>
      </div>
    </section>
  )
}
