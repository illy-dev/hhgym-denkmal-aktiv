import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { ImageCaroussel } from "@/components/image-caroussel";

export default function Grenzuebergang() {
    const images = [
        {
        src: "/doku/grenzuebergang.jpg",
        alt: "",
        source: "Von Bundesarchiv, Bild 183-1989-1110-031 / Kasper, Jan Peter / CC-BY-SA 3.0, CC BY-SA 3.0 de, https://commons.wikimedia.org/w/index.php?curid=5424809"
        }
    ]
  return(
    <div className="min-h-screen bg-white pt-36 pb-4">
          <div className="max-w-4xl mx-auto px-4">

              <h1 className="text-4xl font-bold mb-2">Grenzübergänge Berlin</h1>
              <h2 className="text-xl mb-4">Leo, Emil</h2>

              <ImageCaroussel images={images} />

            <div className="space-y-4 text-justify leading-relaxed">
                Während der Zeit der innerdeutschen Teilung spielten Grenzübergänge eine große Rolle. Vor allem die Übergänge an der Berliner Mauer und rund um Berlin waren von besonderer Bedeutung.
                <br />
                Checkpoint Charlie 
                <br />
                Der Grenzübergang Friedrich-/Zimmerstraße wurde im Laufe der Zeit immer wieder um- und ausgebaut und ist damit zum drittgrößten Grenzübergang der ehemaligen innerdeutschen Grenze herangewachsen. Als alliierter Kontrollpunkt Checkpoint Charlie ist der Übergang einer der international bekanntesten Orte des Kalten Krieges geworden. Hier spitzte sich die Konfrontation zwischen den Supermächten zu. Hier zeigten sich internationale Politiker und Stars. Er ist aber auch ein Ort waghalsiger Fluchtversuche und tragischer Todesfälle an der Berliner Mauer.
                <br />
                Bahnhof Friedrichstraße 
                <br />
                Bereits kurz nach dem Mauerbau 1961 wurde der Bahnhof in mehrere Bereiche geteilt, die nach und nach durch Wände und Zwischendecken baulich streng voneinander getrennt wurden. Spuren dieser Wände lassen sich noch heute in der Bahnhofshalle entdecken. Die unterirdische S‑Bahn sowie die U‑Bahn konnten nur noch von Westreisenden erreicht werden. Von dort aus ging es auch in Richtung des Grenzübergangs. Hier passierten Hunderte Reisende täglich die Grenze. Vor der kleinen Ausreisehalle ereigneten sich emotional aufgeladene Szenen. Durch diese Halle mussten alle, die in den Westen gelangen wollten. Es waren schmerzliche Abschiede, denn man wusste nicht, wann und ob man sich wiedersehen würde. Es flossen viele Tränen – am sogenannten „Tränenpalast“.
                <br />
                Glienicker Brücke 
                <br />
                Schon 1952, neun Jahre vor dem Mauerbau, wurde die Brücke für den privaten Autoverkehr gesperrt. Mit dem Mauerbau wurde der Grenzübergang dann gänzlich unpassierbar. Aufgrund ihrer Lage galt sie als besonders leicht zu überwachen. Deshalb wurde sie während des Kalten Krieges mehrfach zum Austausch von Agenten und Gefangenen zwischen Ost und West genutzt.Formularbeginn
            </div>

            <Separator className="my-8 bg-gray-300" />
            <p className="text-sm pb-1">
                Berliner Grossstadtgeschichten, Grenzübergangsstelle Bahnhof Friedrichstraße [online]
                <br />URL: <a className="hover:underline" href="https://grossstadtgeschichten-berlin.de/items/show/119">https://grossstadtgeschichten-berlin.de/items/show/119</a>
                <br />letzter Zugriff am 19.06.2026
            </p>
            <p className="text-sm pb-1">
                Stiftung Berliner Mauer, Der Grenzübergang [online]
                <br />URL: <a className="hover:underline" href="https://www.stiftung-berliner-mauer.de/de/checkpoint-charlie/historischer-ort/grenzuebergang-friedrichstrasse">https://www.stiftung-berliner-mauer.de/de/checkpoint-charlie/historischer-ort/grenzuebergang-friedrichstrasse</a>
                <br />letzter Zugriff am 19.06.2026
            </p>
            <p className="text-sm pb-1">
                Stiftung Haus der Geschichte der Bundesrepublik Deutschland, Tränenpalast - Ort der deutschen Teilung [online]
                <br />URL: <a className="hover:underline" href="https://www.hdg.de/traenenpalast/ausstellung">https://www.hdg.de/traenenpalast/ausstellung</a>
                <br />letzter Zugriff am 19.06.2026
            </p>
            <p className="text-sm pb-1">
                Landeshauptstadt Potsdam, Glienicker Brücke [online]
                <br />URL: <a className="hover:underline" href="https://www.potsdam.de/de/glienicker-bruecke">https://www.potsdam.de/de/glienicker-bruecke</a>
                <br />etzter Zugriff am 19.06.2026
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

