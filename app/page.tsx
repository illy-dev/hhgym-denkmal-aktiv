import { Zitate } from "@/components/zitate-caroussel";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="relative h-[80vh] w-full">
        <Image
          src="/photo-wall-texture-pattern.jpg"
          alt="HHGYM Background Pattern"
          fill
          className="object-cover"
          priority
        />
        <a className="absolute bottom-2 left-4 text-sm text-black hover:underline" href="https://www.magnific.com/de/fotos-kostenlos/foto-des-wandtexturmusters_230311652.htm#fromView=search&page=1&position=11&uuid=8cefe435-0259-44b2-b2f4-145b11d5d646&query=berlin+wall">
          Bild von Mateus Andre auf Magnific
        </a>
      </section>

      <section className="py-12 px-12">
        <div className="md:flex">
          <div className="text-left">
            <p className="pb-2">HIER STEHT NOCH WAS</p>
            <h1 className="sm:text-3xl md:text-5xl font-bold max-w-[60%]">Denkmalaktiv Projekt an der East Side Gallery</h1>
            <p className="max-w-[80%] py-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim aliquam dignissimos in itaque praesentium, quasi fugit, libero reprehenderit quos eius nemo vitae, non unde totam fuga? Id voluptatibus minima rerum!</p>
          </div>
          <div>
              <Image 
              src="/mauerbild1.jpg"
              alt="Mauer bild"
              width={800}
              height={1600}
              className="rounded-xl"
              />
            </div>
          </div>
      </section >

      <section className="py-12 px-12">
        <div className="text-left">
            <p className="pb-2">Die East Side Gallery – Ein Symbol der Freiheit und Einheit oder ein Symbol der Unterdrückung und eines Gefängnisses?</p>
            <h1 className="sm:text-3xl md:text-5xl font-bold max-w-[60%]">Zitate von Schülern</h1>
          </div>
        <div className="flex justify-center items-center pt-4">
        <Zitate />
        </div>
      </section>

    </>
  );
}
