import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { ImageCaroussel } from "@/components/image-caroussel";

export default function BauMauer() {
    const images = [
        {
        src: "/doku/flucht.jpg",
        alt: "",
        source: "Von Bundesarchiv, Bild 183-S88411 / Heilig / CC-BY-SA 3.0, CC BY-SA 3.0 de, https://commons.wikimedia.org/w/index.php?curid=5436611"
        }
    ]

  return(
    <div className="min-h-screen bg-white pt-36 pb-4">
          <div className="max-w-4xl mx-auto px-4">

              <h1 className="text-4xl font-bold mb-2">Flucht</h1>
              <h2 className="text-xl mb-4">Jakob</h2>

              <ImageCaroussel images={images} />

            <div className="space-y-4 text-justify leading-relaxed">
                Wie Sie bestimmt schon wissen, sind aus der DDR knapp 2,8 Mio. Menschen geflohen. Doch haben Sie sich schon einmal gefragt, wie und warum dies passierte?
                <br />
                Schon kurz nach Kriegsende wollten einige Menschen, die in der Nähe des Übergangs der Besatzungszonen lebten bzw. gelebt hatten, eher in der amerikanischen, französischen oder britischen Besatzungszone als in der sowjetischen Besatzungszone leben. Nach der Gründung der BRD und der darauffolgenden Gründung der DDR verhielt es sich zunächst nicht anders, doch die Fluchtsströme sanken recht schnell auf ein jedoch immer noch recht hohes Niveau. Die Gründe dafür waren vor allem, dass die Bürger, die unbedingt den neu gegründeten Staat verlassen wollten, dies bereits getan hatten, und dass beide Staaten zunächst in ähnlich schlechtem Zustand waren; dennoch flohen immer noch sehr viele Menschen aus der DDR, viele davon Fachkräfte und Leute aus der Wissenschaft, die in der DDR ausgebildet wurden, dann aber nicht dort blieben. Dies war ein Problem für die DDR, deren Bevölkerungszahlen sanken. Daher errichtete sie im Jahr 1961 Zäune und Mauern, um die Flucht zu stoppen. Sie wurde nicht komplett gestoppt, jedoch deutlich reduziert, bis im Jahr 1989 Bürgerproteste dafür sorgten, dass diese Barrieren geöffnet wurden.
                <br />
                Doch warum flohen diese Bürger denn überhaupt? Anfangs (in den 50ern) war es zum einen die Angst vor dem Sozialismus und die Anziehungskraft der amerikanischen Kultur und andererseits die durch die Sowjetunion von ihrer Besatzungszone verlangten Reparationen, welche ihre wirtschaftliche Lage gegenüber den anderen Besatzungszonen zurückwarfen. Außerdem produzierte die DDR-Wirtschaft vor allem Industrieprodukte und weniger Konsumprodukte. In späteren Jahren war ein Hauptgrund die Mangelwirtschaft in der DDR, wodurch viele Produkte nicht erhältlich waren. Allerdings wurde hier einer der wichtigsten oder eher der wichtigste Grund noch nicht genannt: die Beschränkung der persönlichen Freiheit in der DDR.
                <br />
                Aufgrund dieser Faktoren sind vor dem Mauerbau etwa 2,7 Mio. und nach diesem 300.000 Menschen aus der DDR in die BRD geflüchtet. Während sie vor dem Mauerbau kaum Risiken in Kauf zu nehmen brauchten und beispielsweise von Ost- nach West-Berlin laufen konnten, war die Flucht nach diesem mit enormen Gefahren und Aufwand verbunden. Insgesamt starben 429 Menschen auf der Flucht von der DDR in die BRD, davon alleine 103 an der Berliner Mauer. Doch fast 100-mal mehr Menschen gelang diese Flucht. Dabei verwendeten diese Menschen verschiedenste Verfahren: von Booten über die Ostsee und Schwimmen durch Flüsse über das Fälschen von Papieren oder Stellen von Ausreiseanträgen bis hin zum Überwinden der Mauer durch Laufen oder Tunnelgraben. Manchmal sogar durch so außergewöhnliche Hilfsmittel wie einen Heißluftballon. Dabei wurden viele andere Möglichkeiten, wie das Reisen in den Kofferräumen anderer Menschen, erst durch Fluchthelfernde Menschen möglich, die zunächst aufgrund von Idealismus und später professionell den Flüchtenden halfen. Dies war natürlich auch mit großen persönlichen Risiken verbunden, falls eine Flucht nicht gelang.
                <br />
                In diesem Fall oder im Fall von IMs in der Fluchthelfergruppe wurden die Flüchtenden und Fluchthelfer durch die Staatssicherheit festgenommen und meist aufgrund ihrer Verbrechen zu teils sehr langen Haftstrafen verurteilt, da sog. „Republikflucht“ in der DDR ein Verbrechen darstellte. Zusätzlich konnten bis Mitte der 70er Republikflüchtige nicht in die DDR, also ihr Heimatland, zurückkehren.
                <br />
                Zusammenfassend lässt sich sagen, dass zunächst kaum Hindernisse für eine Flucht aus der DDR bestanden, es jedoch mehrere Gründe gab, weshalb viele Leute flohen; nach dem Mauerbau gestaltete sich die Flucht sehr schwierig und sehr gefährlich.
            </div>

            <Separator className="my-8 bg-gray-300" />
            <p className="text-sm pb-1">
                Neue Zahlen: So viele Deutsche kamen bei Flucht aus der DDR ums Leben
                <br />URL: <a className="hover:underline" href="https://www.berliner-zeitung.de/article/eiserner-vorhang-neue-zahlen-so-viele-deutsche-kamen-bei-flucht-aus-der-ddr-ums-leben-2159512">https://www.berliner-zeitung.de/article/eiserner-vorhang-neue-zahlen-so-viele-deutsche-kamen-bei-flucht-aus-der-ddr-ums-leben-2159512</a>
            </p>
            <p className="text-sm pb-1">
                Migration und Flucht in der BRD und der DDR bis 1989 | Geschichte der Migration | Ein- und Auswanderung | Zahlen und Studien | Mediendienst Integration
                <br />URL: <a className="hover:underline" href="https://mediendienst-integration.de/ein-und-auswanderung/geschichte-der-migration/migration-und-flucht-in-der-brd-und-der-ddr-bis-1989/">https://mediendienst-integration.de/ein-und-auswanderung/geschichte-der-migration/migration-und-flucht-in-der-brd-und-der-ddr-bis-1989/</a>
            </p>
            <p className="text-sm pb-1">
                Innerdeutsche Grenze - Mindestens 429 Menschen kamen bei Flucht aus DDR ums Leben
                <br />URL: <a className="hover:underline" href="https://www.deutschlandfunk.de/mindestens-429-menschen-kamen-bei-flucht-aus-ddr-ums-leben-100.html">https://www.deutschlandfunk.de/mindestens-429-menschen-kamen-bei-flucht-aus-ddr-ums-leben-100.html</a>
            </p>
            <p className="text-sm pb-1">
                Flucht aus der DDR: Geschichten von Risiko und Freiheit | ndr.de
                <br />URL: <a className="hover:underline" href="https://www.ndr.de/geschichte/schauplaetze/Flucht-aus-der-DDR-Geschichten-von-Risiko-und-Freiheit,flucht516.html">https://www.ndr.de/geschichte/schauplaetze/Flucht-aus-der-DDR-Geschichten-von-Risiko-und-Freiheit,flucht516.html</a>
            </p>
            <p className="text-sm pb-1">
                ZDF.de - Flucht in die Prager Botschaft
                <br />URL: <a className="hover:underline" href="https://web.archive.org/web/20041112075552/http:/www.zdf.de/ZDFde/inhalt/12/0,1872,2198668,00.html">https://web.archive.org/web/20041112075552/http:/www.zdf.de/ZDFde/inhalt/12/0,1872,2198668,00.html</a>
            </p>
            <p className="text-sm pb-1">
                Nicht mehr mitmachen - Ausreise als Ausweg | Kontraste - Auf den Spuren einer Diktatur | bpb.de
                <br />URL: <a className="hover:underline" href="https://www.bpb.de/themen/deutsche-teilung/kontraste/42440/nicht-mehr-mitmachen-ausreise-als-ausweg/">https://www.bpb.de/themen/deutsche-teilung/kontraste/42440/nicht-mehr-mitmachen-ausreise-als-ausweg/</a>
            </p>
            <p className="text-sm pb-1">
                Stasi Unterlagen Archiv
                <br />URL: <a className="hover:underline" href="https://web.archive.org/web/20230405111110/https:/www.stasi-unterlagen-archiv.de/assets/bstu/content_migration/DE/Wissen/MfS-Dokumente/MfsUndGrenze/Bestimmungen/1973-1980/BdL_Dok_Nr_3711_Bl_1-16.pdf">https://web.archive.org/web/20230405111110/https:/www.stasi-unterlagen-archiv.de/assets/bstu/content_migration/DE/Wissen/MfS-Dokumente/MfsUndGrenze/Bestimmungen/1973-1980/BdL_Dok_Nr_3711_Bl_1-16.pdf</a>
            </p>
            <p className="text-sm pb-1">
                Jugendopposition! | jugendopposition.de
                <br />URL: <a className="hover:underline" href="https://www.jugendopposition.de/jugendopposition/?id=211">https://www.jugendopposition.de/jugendopposition/?id=211</a>
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

