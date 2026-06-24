import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { ImageCaroussel } from "@/components/image-caroussel";

export default function FallMauer() {
      const images = [
    {
      src: "/doku/fall.jpg",
      alt: "",
      source: "Öffnung des Grenzübergangs am Potsdamer Platz | Foto vom 12. November 1989 | Vollständiges Bild und Bildnachweis (CC BY SA 3.0,  Gabriele Greaney, via Wir-waren-so-frei.de)"
    }
  ]

  return(
    <div className="min-h-screen bg-white pt-36 pb-4">
          <div className="max-w-4xl mx-auto px-4">

              <h1 className="text-4xl font-bold mb-2">Der Fall der Mauer</h1>
              <h2 className="text-xl mb-4">Johannes, Magnus</h2>

            <ImageCaroussel images={images} />

            <div className="space-y-4 text-justify leading-relaxed">
                Das dysfunktionale System der Planwirtschaft in der DDR, und damit auch ihre gesamte Wirtschaft, fällt nach und nach auseinander. In den 1980er Jahren ist die DDR faktisch pleite. Die Freiheit der Bürger wird vom autoritären SED-Regime stark eingeschränkt. Ausreiseverbote, ein gescheiterter Wohnungsmarkt und leere Supermärkte lösen große Unzufriedenheit in der Bevölkerung aus und die Menschen gehen – trotz Repressionen für nichtstaatliche Demonstrationen – in den sogenannten „Montagsdemos“ auf die Straße und setzen sich für mehr Freiheit und eine funktionierende Wirtschaft ein…
                <br />
                09. November 1989, 18:56 Uhr, Günter Schabowski verliest in einer Pressekonferenz einen Zettel und verkündet so, dass Privatreisen ins Ausland ab sofort ohne Voraussetzungen möglich seien. Die Frage, wann dies in Kraft trete, beantwortet er mit: „Das gilt, nach meiner Kenntnis, ist das sofort, unverzüglich“.
                <br />
                Knapp anderthalb Stunden später, um 20:30 Uhr strömen Ost- und Westberliner zu den Grenzübergängen. Da die Nachricht im Fernsehen verbreitet wurde, stoßen mehr und mehr Schaulustige hinzu.
                <br />
                Um 22:45 Uhr wird der Druck der Masse an der Bornholmer Straße so groß, dass sich die Grenzsoldaten unter Befehl von Harald Jäger befehlswidrig, nach anfänglicher Unsicherheit, dazu entscheiden, die Schlagbäume zu öffnen. 
                <br />
                Euphorisch stürmen tausende Berliner über die nun praktisch geöffnete Grenze. In diesem historischen Moment treffen Ost- und Westberliner an der Mauer aufeinander. Seit dem 13. August 1963 trennte die Mauer Berlin. Nun wird sie mit Vorschlaghammern und Meißeln durch die Hände der Berliner in einem Fest der Freude wortwörtlich zu Fall gebracht.
                <br />
                Der Fall der Berliner Mauer, als Ergebnis einer friedlichen Revolution, löst in gesamt Europa eine Welle der Unabhängigkeitsbewegungen aus – Die Wende. Am 11. März 1990 erklärt Litauen seine Unabhängigkeit, weitere Staaten folgen und am 03. Oktober 1990 besiegelt die Wiedervereinigung das Ende 41 Jahre Deutscher Teilung.
            </div>

            <Separator className="my-8 bg-gray-300" />
            <p className="text-sm pb-1">
                Bayerischer Rundfunk - 25 jahre Mauerfall (2008)
                <br />URL: <a className="hover:underline" href="https://www.br.de/unternehmen/inhalt/25-jahre-mauerfall-208.html">https://www.br.de/unternehmen/inhalt/25-jahre-mauerfall-208.html</a>
            </p>
            <p className="text-sm pb-1">
                RBB24 - Die abgelesene Maueröffnung
                <br />URL: <a className="hover:underline" href="https://www.rbb24.de/panorama/beitrag/2024/11/9-november-zettel-berlin-reiseregelung-ddr-pk-guenter-schabowski-interview-steffen-pappert.html">https://www.rbb24.de/panorama/beitrag/2024/11/9-november-zettel-berlin-reiseregelung-ddr-pk-guenter-schabowski-interview-steffen-pappert.html</a>
            </p>
            <p className="text-sm pb-1">
                Bundeszentrale für politische Bildung - Mauerfall
                <br />URL: <a className="hover:underline" href="https://www.bpb.de/themen/deutsche-einheit/mauerfall/">https://www.bpb.de/themen/deutsche-einheit/mauerfall/</a>
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

