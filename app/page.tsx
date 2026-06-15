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

      <section className="py-12">
        <div className="px-4 text-left">
          <h1 className="text-4xl font-bold">Denkmalaktiv Projekt an der East Side Gallery</h1>
          <p className="max-w-[40%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim aliquam dignissimos in itaque praesentium, quasi fugit, libero reprehenderit quos eius nemo vitae, non unde totam fuga? Id voluptatibus minima rerum!</p>
        </div>
          <Image 
          src=""
          
          />
      </section>

    </>
  );
}
