import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { ImageCaroussel } from "@/components/image-caroussel";

export default function WandelEastSide() {
    const images = [
        {
        src: "/doku/wandel_1.png",
        alt: "",
        source: "East Side Gallery Kuss © Stiftung Berliner Mauer Foto: Günter Preuss"
        },
        {
        src: "/doku/wandel_2.png",
        alt: "",
        source: "Eigene Aufnahme"
        }
    ]

  return(
    <div className="min-h-screen bg-white pt-36 pb-4">
          <div className="max-w-4xl mx-auto px-4">

              <h1 className="text-4xl font-bold mb-2">Wandel der East Side Gallery (2008) und heute sichtbare Kunstwerke</h1>
              <h2 className="text-xl mb-4">Oskar, Martin</h2>

              <ImageCaroussel images={images} />

            <div className="space-y-4 text-justify leading-relaxed">
                Vor 2008
                <br />
                Zu Beginn des Jahres 2008 befand sich die East Side Gallery in einem sehr schlechten Zustand. Viele Bilder waren durch Witterungseinflüsse und Vandalismus zerstört und/oder stark beschädigt worden. Sowohl die Mauer als auch die darauf befindlichen Gemälde waren daher erheblich in Mitleidenschaft gezogen.
                <br />
                Ab Oktober 2008
                <br />
                Im Oktober 2008 begann die umfassende Sanierung der East Side Gallery. Für das Projekt wurde ein Budget von insgesamt 2,2 Millionen Euro bereitgestellt. Die Gesamtprojektleitung übernahm die Gesellschaft der behutsamen Stadterneuerung mbH (S.T.E.R.N.).
                Um Korrosionsschäden zu beseitigen, wurde zunächst die Stahlbewehrung freigelegt. Dabei mussten große Teile der vorhandenen Bilder entfernt werden. Anschließend wurden Schäden im Beton ausgebessert, Löcher verfüllt, Oberflächen verspachtelt und grundiert.
                Für die Neugestaltung der Kunstwerke wurden 87 der damals noch 115 lebenden Originalkünstler*innen nach Berlin eingeladen, ihre Werke erneut auf die Mauer zu malen. Dadurch entstanden die meisten Bilder neu. Einige Kunstschaffende nutzten die Gelegenheit, ihre Werke zu verändern oder ihnen neue Botschaften und Bedeutungen zu geben.
                Allerdings beteiligten sich nicht alle Originalkünstlerinnen und -künstler an dem Projekt. Einige lehnten die Sanierung sogar ab. Dadurch blieben einzelne Mauersegmente unbemalt. Zudem entstand die Initiative „Gründerinitiative East Side“, die forderte, die finanziellen Mittel direkt den Künstlern zur Verfügung zu stellen und die bestehenden Originalwerke zu restaurieren, anstatt sie zu entfernen und neu anzufertigen. Ziel war es, möglichst viele Originale zu erhalten.
                <br />
                Ab 2009
                <br />
                Die feierliche Wiedereröffnung der East Side Gallery fand am 6. November 2009 statt.
                <br />
                Von 2017 bis heute
                <br />
                Auch heute steht die East Side Gallery weiterhin vor Herausforderungen wie bspw. Beschädigungen durch Vandalismus und Witterungseinflüsse. Das gemeinsame Kunstwerk „Hands“ von Margaret Hunter und Peter Russell ist das einzige erhaltene Originalkunstwerk der East Side Gallery. Es wurde konserviert und zum Schutz vor weiteren Schäden mit Glas versehen. 
                Der Kunsthistoriker Leo Schmidt beschreibt den Zustand der Open-Air Galerie mit den Worten:
                „Es gehört zur Lebensgeschichte der Mauer, dass sie kaputt ist.“
            </div>

            <Separator className="my-8 bg-gray-300" />
            <p className="text-sm pb-1">
                Stiftung Berliner Mauer (2025): Die längste Open-Air Galerie der Welt. [online] 
                <br />URL: <a className="hover:underline" href="https://www.stiftung-berliner-mauer.de/de/east-side-gallery/historischer-ort/laengste-open-air-galerie">https://www.stiftung-berliner-mauer.de/de/east-side-gallery/historischer-ort/laengste-open-air-galerie</a>
                <br />[19.06.2026]
            </p>
            <p className="text-sm pb-1">
                Berlin.de (16. September 2025): East Side Gallery. [online]
                <br />URL: <a className="hover:underline" href="https://www.berlin.de/sehenswuerdigkeiten/3559756-3558930-east-side-gallery.html">https://www.berlin.de/sehenswuerdigkeiten/3559756-3558930-east-side-gallery.html</a>
                <br />[19.06.2026]
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

