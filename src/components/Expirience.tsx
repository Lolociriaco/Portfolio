
import { aboutMeData } from "@/seed/data"
import { div } from "framer-motion/client"

export const Expirience = () => {
  return (
        <section className="flex flex-col items-center w-full p-5 lg:px-10 xl:px-20">
          <div className="flex flex-col items-center w-full max-w-[1400px] border rounded-lg border-gray-800 py-10 gap-10">
            <h2 className="text-3xl font-semibold">About me</h2>
            <ul className="flex gap-10 flex-wrap">
            {
              aboutMeData.map((data, index) => (
                  (
                      index === 0 &&
                      <div key={index}>
                          <h3>{ data.title }</h3>
                          <p>{ data.description }</p>
                      </div>
                  )
              ))
            }
            </ul>
          </div>
        </section>
  )
}




