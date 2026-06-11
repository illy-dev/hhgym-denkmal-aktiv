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
        <div className="mx-auto max-w-4xl px-4 text-left">
          <h1 className="text-4xl font-bold">Willkommen zum HHGYM Denkmal Aktiv Projekt!</h1>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-4xl px-4 text-right">
          <h1 className="text-4xl font-bold">Willkommen zum HHGYM Denkmal Aktiv Projekt!</h1>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-4xl font-bold">Willkommen zum HHGYM Denkmal Aktiv Projekt!</h1>
        </div>
      </section>
    </>
  );
}
