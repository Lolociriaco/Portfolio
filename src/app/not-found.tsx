
import Link from "next/link";
import Image from "next/image";
import { Transition } from "@/components/shared/Transition";
import { Button } from "@/components/ui/Button";
import { montThin } from "@/lib/fonts";

export default function NotFound() {
  return (
    <section className="min-h-screen flex flex-row items-center justify-center bg-[#111827] text-white px-6 text-center">
        <div className="max-w-section w-full flex justify-center items-center ">

                <Image
                src="/images/img-404.png" // Put your image inside the public folder
                alt="404 Illustration"
                width={500}
                height={500}
                className="w-full max-w-[500px] mix-blend-lighten"
                priority
                />

            <Transition
                className="max-w-xl w-full"
            >

                <h1 className="text-2xl md:text-5xl font-bold text-red-400">404 Not Found</h1>
                <p className="text-xl md:text-2xl mt-4 mb-4 font-semibold">
                Whoops! That page doesn’t exist.
                </p>
                <Link href={"/"}>
                    <Button className={`${montThin.className} text-sm`}>Go back home</Button>
                </Link>
            </Transition>
        </div>
    </section>
  );
}
