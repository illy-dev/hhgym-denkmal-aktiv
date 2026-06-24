import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { ImageCaroussel } from "@/components/image-caroussel";

export default function MauerOpfer() {
  const images = [
    {
      src: "/doku/maueropfer.jpg",
      alt: "",
      source: "Stiftung Berliner Mauer, Foto: Günther Schaefer, 2009"
    },
  ]

  return(
    <div className="min-h-screen bg-white pt-36 pb-4">
          <div className="max-w-4xl mx-auto px-4">

              <h1 className="text-4xl font-bold mb-2">Maueropfer</h1>
              <h2 className="text-xl mb-4">Mihael, Adrina, Leo</h2>


              <ImageCaroussel images={images} />

            <div className="space-y-4 text-justify leading-relaxed">
                Als Maueropfer bezeichnet man die Menschen, die zwischen 1961 und 1989 an der Berliner Mauer oder im direkten Zusammenhang mit dem DDR-Grenzregime starben. Die Berliner Mauer wurde am 13. August 1961 errichtet, weil die DDR verhindern wollte, dass immer mehr Menschen in den Westen flohen. Dadurch entstand mitten durch Berlin eine streng bewachte Grenze mit Wachtürmen, Stacheldraht, Signalzäunen und bewaffneten Grenzsoldaten. Trotzdem versuchten viele Menschen zu fliehen, weil sie frei leben, reisen oder ihre Familien wiedersehen wollten. Einige gruben Tunnel, versteckten sich in Autos, sprangen aus Häusern an der Grenze oder versuchten, die Sperranlagen zu überwinden.
                <br />
                Die Todesursachen waren unterschiedlich. Manche Menschen wurden erschossen, andere ertranken, stürzten ab, verunglückten mit Fahrzeugen oder starben durch die gefährlichen Grenzanlagen. Besonders bekannte Todesopfer sind Peter Fechter, der 1962 nach einem Fluchtversuch verletzt im Grenzstreifen liegen blieb und starb, sowie Chris Gueffroy, der 1989 als letztes Opfer durch Schüsse an der Berliner Mauer getötet wurde. Auch Günter Litfin zählt zu den ersten bekannten Todesopfern.
                <br />
                Der öffentliche Umgang mit den Maueropfern war lange Zeit sehr unterschiedlich. In der DDR wurden viele Todesfälle verschwiegen, verharmlost oder als Straftaten dargestellt. Im Westen lösten solche Fälle dagegen oft Trauer, Wut und Proteste aus. Heute erinnern Gedenkstätten, Kreuze, Tafeln und Namen an die Opfer. Besonders die Gedenkstätte Berliner Mauer zeigt, dass hinter jeder Zahl ein echtes Leben, eine Familie und der Wunsch nach Freiheit standen.
            </div>

            <Separator className="my-8 bg-gray-300" />
            <p className="text-sm pb-1">
                Stiftung Berliner Mauer 2025: Todesopfer an der Berliner Mauer [online]
                <br />URL: <a className="hover:underline" href="https://www.stiftung-berliner-mauer.de/de/themen/todesopfer-berliner-mauer">https://www.stiftung-berliner-mauer.de/de/themen/todesopfer-berliner-mauer</a>
                <br />(19.06.2026)
            </p>
            <p className="text-sm pb-1">
                Stiftung Berliner Mauer: Todesopfer [online]
                <br />URL: <a className="hover:underline" href="https://www.chronik-der-mauer.de/todesopfer/?letter=G">https://www.chronik-der-mauer.de/todesopfer/?letter=G</a>
                <br />(19.06.2026)
            </p>
            <p className="text-sm pb-1">
                Thorsten Denkler 17.05.2010: Des Erinnerns ist jeder würdig [online]
                <br />URL: <a className="hover:underline" href="https://www.sueddeutsche.de/politik/maueropfer-des-erinnerns-ist-jeder-wuerdig-1.162406">https://www.sueddeutsche.de/politik/maueropfer-des-erinnerns-ist-jeder-wuerdig-1.162406</a>
                <br />(19.06.2026)
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

