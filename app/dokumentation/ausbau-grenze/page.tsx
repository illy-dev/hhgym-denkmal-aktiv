import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { ImageCaroussel } from "@/components/image-caroussel";

export default function AusbauGrenze() {
  const images = [
    {
      src: "/doku/ausbau_grenze_1.png",
      alt: "Abbildung zu Veränderungen der Grenzanlagen in den 1980er Jahren",
      source: "Ericmetro - Eigenes Werk, based on File:2010-03-20-mauer-berlin-by-RalfR-03.jpg., Gemeinfrei, https://commons.wikimedia.org/w/index.php?curid=24634566"
    },
    {
      src: "/doku/ausbau_grenze_2.jpg",
      alt: "Grenzstreifen an der Mühlenstraße Richtung Oberbaumbrücke",
      source: "Grenzstreifen an der Mühlenstraße Richtung Oberbaumbrücke, Berlin 1988, © Stiftung Berliner Mauer, Foto: Hagen Koch.jpg"
    }
  ]

  return(
    <div className="min-h-screen bg-white pt-36 pb-4">
          <div className="max-w-4xl mx-auto px-4">

              <h1 className="text-4xl font-bold mb-2">Ausbau der Grenzanlagen</h1>
              <h2 className="text-xl mb-4">Emilio, Sza</h2>


              <ImageCaroussel images={images} />

            <div className="space-y-4 text-justify leading-relaxed">
            Die Mauer wird in verschiedene Generationen eingeteilt, die den Fortschritt des Ausbaus der Grenzanlagen zeigen.
            <br />
            Die erste Etappe bestand darin, eine feste Grenze zu ziehen, um die Flüchtenden schnellstmöglich aufzuhalten, weshalb Berlin in der Nacht vom 13. August 1961 erstmals durch einen Stacheldrahtzaun abgeriegelt wurde. Auf die provisorische Grenze folgten dann schon zwei Tage später Betonelemente und Hohlblocksteine, welche das Durchbrechen mit einem Auto unmöglich machen sollten. Ein Jahr später entstand im Juni die sogenannte „Hinterlandmauer“, eine weitere der vielen Mauern, die die Berliner Mauer bildeten. Schließlich wurden 1965 die bisherigen Bauteile ersetzt, und es wurden Betonplatten zwischen Stahl- oder Betonpfosten eingesetzt. Zuletzt wurde diese Mauer mit einer Betonröhre oben drauf abgeschlossen.
            <br />
            In den 1970er Jahren wurden der Grenzstreifen und die Mauer massiv ausgebaut. Die neue „Grenzmauer 75“ hatte einen 50–70 m breiten Grenzstreifen und 3 m hohe massenangefertigte Betonplatten. Man hat elektronische Signalzäune eingebaut, die Alarme auslösten, sobald man mit ihnen in Kontakt kam, automatische Schießanlagen, die automatisch schossen, sobald einer wagte, den sogenannten Todesstreifen zu betreten. Außerdem wurden die Grenzanlagen mit Kfz-Sperranlagen, Wegen, Lichttrassen, elektronischen Zaunanlagen und Meldesystemen ausgestattet.
            <br />
            Anfang der 80er kam man schließlich zu der Auffassung, dass auf Flüchtlinge zu schießen das Ansehen der angeblich demokratischen Republik verschlechterte. Um zukünftig weniger schießen zu müssen, setzte man auf die zu der Zeit höchste Technologie. Man wollte Sensoren und Elektronik verstärkt einsetzen, wie z. B. Bewegungsmelder. Doch bevor diese Pläne umgesetzt werden konnten, war es schon 1989. Die Mauer fiel, und im nachfolgenden Jahr hörte auch der Staat, der die Mauer errichtete, auf zu existieren.
            </div>

            <Separator className="my-8 bg-gray-300" />
            <p className="text-sm pb-1">
                Muntermann Natalie (2021-03-11): Der Ausbau der Mauer [online]
                <br />URL: <a className="hover:underline" href="https://www.planet-wissen.de/geschichte/deutsche_geschichte/die_berliner_mauer/ddr-der-ausbau-der-mauer-100.html">https://www.planet-wissen.de/geschichte/deutsche_geschichte/die_berliner_mauer/ddr-der-ausbau-der-mauer-100.html</a>
            </p>
            <p className="text-sm pb-1">
                Berliner Mauer – Geschichte und Dokumentation des „Antifaschistischen Schutzwalls“ (2014-11) [online, archiviert]
                <br />URL: <a className="hover:underline" href="https://web.archive.org/web/20141129031121/http://www.berliner-mauer.de/drei-generationen-der-berliner-mauer/mauerbau-dritte-generation/stuetzwandelemente-der-grenzmauer-75/stuetzwandelement-ul-1241.html">https://web.archive.org/web/20141129031121/http://www.berliner-mauer.de/drei-generationen-der-berliner-mauer/mauerbau-dritte-generation/stuetzwandelemente-der-grenzmauer-75/stuetzwandelement-ul-1241.html</a>

            </p>

            <div className="flex justify-between items-center pt-8">
                <Link href="/dokumentation" className="text-blue-600 hover:text-blue-800">
                ← Zurück zu Dokumentationen
                </Link>

        </div>
          </div>
      </div>
  );
}

