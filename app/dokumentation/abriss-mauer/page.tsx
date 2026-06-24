import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { ImageCaroussel } from "@/components/image-caroussel";

export default function AbrissMauer() {
  const images = [
    {
      src: "/doku/abriss.jpg",
      alt: "",
      source: "Loch durch einen 'Mauerspecht'"
    }
  ]

  return(
    <div className="min-h-screen bg-white pt-36 pb-4">
          <div className="max-w-4xl mx-auto px-4">

              <h1 className="text-4xl font-bold mb-2">Abriss der Berliner Mauer</h1>
              <h2 className="text-xl mb-4">Alexander, Claas</h2>

              <ImageCaroussel images={images} />

            <div className="space-y-4 text-justify leading-relaxed">
              Nach dem Fall der Mauer am 9. November 1989 wurden bereits erste Teile der Mauer durch die Bevölkerung, sogenannte Mauerspechte, mithilfe von Hämmern und Meißel entfernt, und neue Grenzübergänge geschaffen. Ende Dezember 1989 beschloss die DDR-Regierung den Abriss aller Grenzanlagen an der innerdeutschen Grenze. Der offizielle Abriss der Berliner Mauer begann am 13. Juni 1990 an der Ecke Bernauer Straße / Ackerstraße zwischen den Bezirken Berlin-Wedding und Mitte. An diesem Tag feierten Menschen auf dem ehemaligen Todesstreifen ein Volksfest, das den Auftakt für den systematischen Abbau aller innerdeutschen Grenzanlagen markierte. Bis zum 1. Juli 1990 sind bereits über hundert Grenzübergänge für den Verkehr geöffnet. Allein in Berlin wurden hunderte Kilometer Sperrgräben, Grenzzaun, Mauer und Signalanlagen abgebaut.
              <br />
              Der Abriss der Berliner Mauer war ein Schritt zur deutschen Wiedervereinigung, die am 3. Oktober 1990 vollzogen wurde. Die Entfernung der Mauer beendete die physische Trennung Berlins und leitete das Ende der DDR und des Ostblocks ein.
            </div>

            <Separator className="my-8 bg-gray-300" />
            <p className="text-sm pb-1">
                Wegmann, Rebecca (2025): Als die Berliner Mauer abgerissen wurde: Historische Bilder aus dem Sommer 1990
                <br />URL: <a className="hover:underline" href="https://www.geo.de/wissen/weltgeschichte/berliner-mauer-wird-offizell-abgerissen-35805278.html">https://www.geo.de/wissen/weltgeschichte/berliner-mauer-wird-offizell-abgerissen-35805278.html</a>
            </p>
            <p className="text-sm pb-1">
                Schultz, Erwin (2025): Mauerabriss am Brandenburger Tor 1990
                <br />URL: <a className="hover:underline" href="https://berlinmorgen.de/2025/04/28/mauerabriss-am-brandenburger-tor/">https://berlinmorgen.de/2025/04/28/mauerabriss-am-brandenburger-tor/</a>
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

