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
            <p className="pb-2">Ein Schülerprojekt des Heinrich-Hertz-Gymnasiums im Rahmen von „denkmal aktiv“ im Schuljahr 2025/26</p>
            <h1 className="sm:text-3xl md:text-5xl font-bold max-w-[60%]">Eine Galerie. Ein Mahnmal. Ein Denkmal.</h1>
            <Separator className="my-4 h-2 w-[7.5%] bg-primary" />
            <p className="max-w-[80%] md:max-w-[45%] py-4 space-y-4">Die Berliner Mauer und insbesondere die East Side Gallery als eines der bekanntesten Symbole der deutschen Teilung und Wiedervereinigung stehen im Mittelpunkt unseres Projekts. Als längstes erhaltenes Teilstück der ehemaligen Grenzanlage verbindet die East Side Gallery Geschichte, Kunst und Erinnerung auf einzigartige Weise. Wir setzen uns damit auseinander, wie dieses Denkmal als Zeugnis von Unterdrückung und als Ort der Hoffnung auf Freiheit  verstanden werden kann.
            <br/>Im Rahmen mehrerer Projektphasen haben Schülerinnen und Schüler der Klasse 10-3 die Berliner Mauer und die East Side Gallery im Besonderen erkundet, ihre Entstehung dokumentiert und sich intensiv mit der historischen und politischen Dimension dieses Denkmals beschäftigt. Dabei entstanden folgende zentrale Ergebnisse:
            </p>
            <ul>
              <li><a href="https://hhgym.de/die-berliner-mauer-symbol-der-freiheit-oder-eines-gefaengnisses/" className="text-blue-500 hover:underline">&bull; Berichte zum Projektverlauf</a></li>
              <li><Link href="/kunstwerke" className="text-blue-500 hover:underline">&bull; Künstlerische Dialoge zu ausgewählten Mauerbildern der East Side Gallery</Link></li>
              <li><Link href="/dokumentation" className="text-blue-500 hover:underline">&bull; Dokumentation der Geschichte der East Side Gallery</Link></li>
              <li><Link href="/twine-geschichten" className="text-blue-500 hover:underline">&bull; Frei erfundene Geschichten zum Alltagsleben in der DDR und zur Arbeit der Stasi</Link></li>
              <li><a href="#zitate" className="text-blue-500 hover:underline">&bull; Urteil zur Leitfrage</a></li>
            </ul>
            <p className="max-w-[80%] md:max-w-[45%] py-4 space-y-4">
            Diese Arbeiten verbinden historische Recherche, kreative Auseinandersetzung und künstlerische Interpretation. Sie machen die Vergangenheit erlebbar und regen zum Nachdenken über Freiheit, Grenzen und gesellschaftliche Verantwortung an. 
            <br />
            Diese Homepage wurde von Schülern des Wahlpflichtkurses Informatik im Jahrgang 10 unter der Leitung von Dr. Stefan Warm erstellt. Hier präsentieren wir die Projektergebnisse, geben Einblicke in unsere Exkursionen und laden Sie ein, sich mit uns auf Spurensuche zu begeben – zwischen Vergangenheit und Gegenwart, zwischen Mauer und Freiheit.
            <br />
            Ein besonderer Dank gilt unseren fachlichen Partnern von der Gedenkstätte Berliner Mauer: Anja Bellmann (Historisch-politische Bildung), Anna von Arnim-Rosenthal (East Side Gallery) sowie Sophie Buchholz und Pit Stoye vom Stasi-Unterlagen-Archiv. Ihre interessanten Vorträge, kompetenten Workshops, informativen Führungen und das bereitgestellte Material haben unser Projekt nachhaltig bereichert und den Weg geebnet. Für die Ermöglichung dieses Projektes gilt unser Dank der Deutschen Stiftung Denkmalschutz, insbesondere dem Team von denkmal aktiv.

            </p>
          </div>
          </div>
          {/*BUTTONS WERDEN NICHT MEHR GEBRAUCHT LASSE ABER TROTZDEM FALLS NOCH SPÄTER DRIN
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
          </div>*/}
      </section >

      <section
        className="relative overflow-hidden py-12 px-12 text-white"
        style={{
          backgroundImage: `linear-gradient(90deg, #101115 0%, #101115 35%, rgba(16, 17, 21, 0.7) 70%, transparent 100%), url('/mauerbild1.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative z-10" id="zitate">
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
