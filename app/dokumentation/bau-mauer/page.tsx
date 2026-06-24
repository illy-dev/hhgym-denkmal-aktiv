import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { ImageCaroussel } from "@/components/image-caroussel";

export default function BauMauer() {
    const images = [
        {
        src: "/doku/mauerbau.jpg",
        alt: "",
        source: "Mauerbau in Berlin im August 1961. Bundesarchiv, Bild 173-1321 / Helmut J. Wolf / CC-BY-SA 3.0"
        }
    ]

  return(
    <div className="min-h-screen bg-white pt-36 pb-4">
          <div className="max-w-4xl mx-auto px-4">

              <h1 className="text-4xl font-bold mb-2">Bau der Mauer 1961</h1>
              <h2 className="text-xl mb-4">Lennart, Florian, Jura</h2>

              <ImageCaroussel images={images} />

            <div className="space-y-4 text-justify leading-relaxed">
            Viele ostdeutsche Bürger waren mit dem damaligen politischen System nicht zufrieden. Deshalb setzte bereits Ende der 1940er Jahre eine schnell wachsende Fluchtbewegung ein. Bis zum August 1961 hatte die DDR etwa ein Sechstel ihrer Bevölkerung verloren. Da die SED die Grenze der DDR zur Bundesrepublik bereits 1952 abriegeln ließ, nutzten viele Menschen die noch offenen Sektorengrenzen in Berlin.
            <br />Um diese Massenflucht zu unterbinden, entstand die Idee des Mauerbaus. Der Bau der Berliner Mauer war unter strenger Geheimhaltung von Erich Honecker, dem damaligen für Sicherheitsfragen zuständigen Sekretär der SED, vorbereitet worden.
            <br />Am frühen Morgen des Sonntags, dem 13. August 1961, begannen 10.000 Volks- und Grenzpolizisten mit dem Bau der Berliner Mauer. Sie rissen das Straßenpflaster auf und errichteten aus Asphaltstücken und Steinen Barrikaden. Außerdem wurden Betonpfähle in den Boden gerammt und Stacheldraht dazwischen gespannt. Bis auf 13 Kontrollpunkte wurde die DDR vollständig von West-Berlin abgeriegelt.
            <br />In der Nacht vom 17. auf den 18. August wurde der Stacheldraht durch eine Mauer aus Hohlblocksteinen ersetzt. Die Absperrung verlief entlang der sowjetischen Sektorengrenze und wurde zum sichtbarsten Symbol des Ost-West-Konflikts.
            <br />Die Sperranlagen schnitten mehr als 50.000 Ost-Berliner von ihren Arbeitsplätzen im Westen ab. Zudem wurde das Berliner Verkehrsnetz über Nacht an der Sektorengrenze zerschnitten.
            <br />Jörg Hildebrandt, ein Zeitzeuge des Mauerbaus, der im Pfarrhaus an der Bernauer Straße lebte, beschrieb die Folgen des Mauerbaus mit den Worten: „Von einem Tag auf den anderen waren Nachbarn, Freunde und Verwandte getrennt.“
            <br />Trotz des Stacheldrahts und der Mauer konnte die Fluchtbewegung nicht vollständig gestoppt werden. Deshalb wurden die Grenzsperren in Berlin bis 1989 immer weiter ausgebaut und perfektioniert.
            </div>

            <Separator className="my-8 bg-gray-300" />
            <p className="text-sm pb-1">
                Andreas/Volkwein, Johanna/Würz, Markus(02.10.2017): 13. August 1961: Mauerbau, in: Lebendiges Museum Online, Stiftung Haus der Geschichte der Bundesrepublik Deutschland, 
                <br />URL: <a className="hover:underline" href="http://www.hdg.de/lemo/kapitel/geteiltes-deutschland-gruenderjahre/mauerbau/13-august-1961-mauerbau.html">http://www.hdg.de/lemo/kapitel/geteiltes-deutschland-gruenderjahre/mauerbau/13-august-1961-mauerbau.html</a>
                <br />Zuletzt besucht am: 19.06.2026
            </p>
            <p className="text-sm pb-1">
                Die Berliner Mauer, in: Stiftung Berliner Mauer, 
                <br />URL: <a className="hover:underline" href="https://www.stiftung-berliner-mauer.de/de/themen/die-berliner-mauer">https://www.stiftung-berliner-mauer.de/de/themen/die-berliner-mauer</a>
                <br />Zuletzt besucht am: 19.06.2026
            </p>
            <p className="text-sm pb-1">
                2026: 13. August 1961: Bundestag verurteilt den Mauerbau, in: Deutscher Bundestag,
                <br />URL: <a className="hover:underline" href="https://www.bundestag.de/dokumente/textarchiv/1961-08-13-mauerbau-436214">https://www.bundestag.de/dokumente/textarchiv/1961-08-13-mauerbau-436214</a>
            </p>
            <p className="text-sm pb-1">
                Juli 2025: Bau der Berliner Mauer, in: Landeszentrale für politische Bildung Baden-Württemberg,
                <br />URL: <a className="hover:underline" href="https://www.lpb-bw.de/mauerbau">https://www.lpb-bw.de/mauerbau</a>
                <br />
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

