import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { ImageCaroussel } from "@/components/image-caroussel";

export default function EntstehungEastSide() {
    const images = [
        {
        src: "/doku/entstehung_east_side.jpg",
        alt: "",
        source: "Christine MacLean und Muriel Raoux im Gespräch an der East Side Gallery, 1990"
        }
    ]

  return(
    <div className="min-h-screen bg-white pt-36 pb-4">
          <div className="max-w-4xl mx-auto px-4">

              <h1 className="text-4xl font-bold mb-2">Entstehung der East Side Gallery</h1>
              <h2 className="text-xl mb-4">Veronika</h2>

              <ImageCaroussel images={images} />

            <div className="space-y-4 text-justify leading-relaxed">
                Wenn Sie auch nur einmal geplant haben, als Tourist nach Berlin zu kommen, hätten Sie für den Anfang unbedingt begonnen, nach Empfehlungen bei Ihren Freunden oder Menschen in den sozialen Netzwerken zu fragen. Auf die Frage, was man denn in Berlin besuchen sollte, hätten Sie mit einer riesigen Wahrscheinlichkeit die Antwort erhalten: East Side Gallery. Jeder kennt diese Sehenswürdigkeit, aber bei weitem nicht alle haben darüber nachgedacht, wie genau die Idee entstand, das Symbol der Trennung Deutschlands in die längste Galerie der Welt zu verwandeln.
                <br />
                Zum ersten Mal erschien diese Idee bei David Monti und Heike Stephan. Zuerst begann David im Herbst 1989 in Ost-Berlin Verhandlungen mit dem Kulturministerium. Der Anlass war seine Idee, die Mauer, die sich in der Mühlenstraße befindet, in ein Kunstobjekt zu verwandeln. Nach einigen weiteren Treffen mit dem Verteidigungsministerium der DDR erhielt der Künstler die Erlaubnis zur Realisierung seines Objekts. Danach gab es im März 1990 viele Gespräche mit verschiedenen Organisationen bezüglich des Sponsorings. Von Februar bis September 1990 arbeiteten 118 Künstler aus 21 verschiedenen Ländern an der Bemalung der Mauer. Viele Künstler lernten sich erst bei der offiziellen Eröffnung am 28. September 1990 kennen, da die Künstler davor einen unterschiedlichen Zeitplan hatten und zu unterschiedlichen Jahreszeiten arbeiteten. Koordinatoren des Prozesses waren David Monti und seine Assistentin Christine MacLean. Der Prozess lief wie folgt ab: Jeder Interessierte konnte seine Skizze zur Prüfung einreichen, wonach Christine sie genehmigte. Die Hauptbedingung, die der Ministerrat der DDR stellte, war, dass die Bilder den Themen Freiheit, Demokratie und Humanität gewidmet sein sollten.
                <br />
                Die offizielle Eröffnung der East Side Gallery fand am 29. September 1990 statt, und ein Jahr später erhielt sie den Status eines Baudenkmals. Die bekanntesten Werke hier bleiben der „Trabant“ und der „Bruderkuss“. Zur Erhaltung der Galerie gründete Kani Alavi 1996 die Künstlerinitiative, dank der im Jahr 2000 300 Meter der Mauer (33 Bilder) restauriert wurden und 2009 eine vollständige Restaurierung unter Teilnahme von 87 Künstlern durchgeführt wurde. Heute ist dieses Mahnmal das wichtigste Symbol der Erinnerung an den Kalten Krieg, den Fall von Regimen und den Triumph von Frieden und Demokratie.
            </div>

            <Separator className="my-8 bg-gray-300" />
            <p className="text-sm pb-1">
                Stiftung Berliner Mauer „Die längste Open-Air Galerie der Welt“
                <br />URL: <a className="hover:underline" href="https://www.stiftung-berliner-mauer.de/de/east-side-gallery/historischer-ort/laengste-open-air-galerie">https://www.stiftung-berliner-mauer.de/de/east-side-gallery/historischer-ort/laengste-open-air-galerie</a>
            </p>
            <p className="text-sm pb-1">
                East Side Galley Ausstellung „Entstehung Und Erhalt der East Side Gallery“
                <br />URL: <a className="hover:underline" href="https://www.eastsidegalleryausstellung.de/themen/die-east-side-gallery/entstehung-und-erhalt-der-east-side-gallery/">https://www.eastsidegalleryausstellung.de/themen/die-east-side-gallery/entstehung-und-erhalt-der-east-side-gallery/</a>
            </p>
            <p className="text-sm pb-1">
                Visit Berlin „East Side Galley“
                <br />URL: <a className="hover:underline" href="https://www.visitberlin.de/de/east-side-gallery">https://www.visitberlin.de/de/east-side-gallery</a>
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

