import { Zitate } from "@/components/zitate-caroussel";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section id="top" className="relative h-[80vh] w-full">
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
            <p className="pb-2">denkmal aktiv - Projekt an der East Side Gallery</p>
            <h1 className="sm:text-3xl md:text-5xl font-bold max-w-[60%]">Eine Galerie. Ein Mahnmal. Ein Denkmal</h1>
            <Separator className="my-4 h-2 w-[7.5%] bg-primary" />
            <p className="max-w-[80%] md:max-w-[45%] py-4 space-y-4">Während der Wende in den 1980er Jahren wurde die East Side Gallery zu einer wichtigen Plattform für künstlerische Ausdrucksformen und politische Botschaften.
            <br />Zum einen entstanden interaktive Geschichten, die während der DDR-Zeit spielen und den Nutzerinnen und Nutzern ermöglichen, eigene Entscheidungen zu treffen, deren Folgen den Verlauf der Handlung beeinflussen. Dadurch wird die Lebenssituation der Menschen in der damaligen Zeit nachvollziehbar und die Einschränkungen durch das politische System werden erfahrbar gemacht.
            <br />Ein weiteres Projekt beschäftigt sich mit den Kunstwerken der East Side Gallery. Dabei wurden eigene überarbeitete Versionen einzelner Mauerbilder erstellt, die sich mit den ursprünglichen Botschaften auseinandersetzen und diese aus heutiger Sicht neu interpretieren.
            <br />Das dritte Projekt vermittelt wichtige Informationen über die Berliner Mauer, die Grenze der DDR und die Entstehung sowie Bedeutung der East Side Gallery.
            </p>
          </div>
          </div>
          <div className="flex flex-wrap gap-4 pt-4">
          <Button className="rounded-full p-5" asChild>
            <Link href="/twine-geschichten">Interaktive Geschichten</Link>
          </Button>
          <Button className="rounded-full p-5" asChild>
            <Link href="/kunstwerke">Neu-Interpretierte Kunstwerke</Link>
          </Button>
          <Button className="rounded-full p-5" asChild>
            <Link href="/dokumentation">Erklärtexte</Link>
          </Button>
          </div>
      </section >

      <section
        className="relative overflow-hidden py-12 px-12 text-white"
        style={{
          backgroundImage: `linear-gradient(90deg, #101115 0%, #101115 35%, rgba(16, 17, 21, 0.7) 70%, transparent 100%), url('/mauerbild1.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative z-10">
          <div className="text-left">
            <p className="pb-2">Die East Side Gallery – Ein Symbol der Freiheit und Einheit oder ein Symbol der Unterdrückung und eines Gefängnisses?</p>
            <h1 className="sm:text-3xl md:text-5xl font-bold max-w-[60%]">Zitate von Schülern</h1>
            <Separator className="my-4 h-2 w-[7.5%] bg-primary" />
          </div>
          <div className="flex items-center justify-center pt-4">
            <Zitate />
          </div>
        </div>
      </section>

    </>
  );
}
