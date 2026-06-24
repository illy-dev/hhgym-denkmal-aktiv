import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { ImageCaroussel } from "@/components/image-caroussel";

export default function AbrissMauer() {
    const images = [
        {
        src: "/doku/schiess_1.png",
        alt: "",
        source: ""
        },
        {
        src: "/doku/schiess_2.jpg",
        alt: "",
        source: ""
        }
    ]

  return(
    <div className="min-h-screen bg-white pt-36 pb-4">
          <div className="max-w-4xl mx-auto px-4">

              <h1 className="text-4xl font-bold mb-2">Gab es einen Schießbefehl?</h1>
              <h2 className="text-xl mb-4">Anneka, Johanna</h2>

            <ImageCaroussel images={images} />

            <div className="space-y-4 text-justify leading-relaxed">
                Bis heute wirft die Debatte um die Todesopfer an der innerdeutschen Grenze die fundamentale Frage auf, wie ein Staat den Schießbefehl gegen seine eigenen Bürger juristisch und moralisch zu rechtfertigen versuchte. Stimmen, wie der Politiker Egon Krenz, leugnen bis heute den Schießbefehl an der Berliner Mauer. Nun stellt sich also die Frage: „Gab es damals wirklich einen Schießbefehl?“
                <br />
                Die 155 Kilometer lange Berliner Mauer, die ab dem 13. August 1961 die geteilte Stadt umschloss, war nicht nur ein stummes Symbol des Kalten Krieges, sondern auch der Schauplatz eines beispiellosen Grenzregimes. Am 24. August 1961 forderte die Mauer das erste Todesopfer durch Schusswaffen. Günter Litfin gilt als der erste DDR-Flüchtling, der den Versuch wagte, über die Sektorengrenze zu fliehen, und dabei durch gezielte Schüsse getötet wurde. Vertuscht werden konnte dies nicht, was eine große Empörung in der Bundesrepublik auslöste. Die DDR hielt dies allerdings nicht davon ab, die Angehörigen zu verhören und sie zu zwingen, den Tod als „tragischen Unfall“ zu bezeichnen. Zudem wurde Litfin in DDR-Presseberichten als „eine wegen verbrecherischer Handlungen verfolgte Person“ dargestellt. Das beantwortet jedoch noch nicht die Frage, ob es einen offiziellen Schießbefehl gab. Veröffentlichte Dokumente können bei der Beantwortung dieser Frage weiterhelfen.
                <br />
                Viele Leugner eines offiziellen Schießbefehls beziehen sich auf Dokumente zur Aussetzung des Schusswaffengebrauchs, in denen steht, die Waffe dürfe nur im Notfall oder zur Selbstverteidigung, nicht jedoch zum Stoppen eines Flüchtenden eingesetzt werden. Das Problem an dieser Quelle ist, dass diese Anweisung erst ab dem 3. April 1989, also wenige Monate vor dem Mauerfall, erfolgte. Was galt davor? Zuvor gab es kaum Einschränkungen für den tödlichen Schusswaffengebrauch gegen Flüchtlinge. Ganz im Gegenteil: Das Protokoll zur Sitzung des Politbüros des ZK der SED vom 22. August 1961 zeigt, dass der Einsatz der Schusswaffe gegen Grenzdurchbrüche ausdrücklich gefordert wurde. Das DDR-Grenzgesetz von 1982 legalisierte den Schusswaffengebrauch zur „Verhinderung von Grenzdurchbrüchen“ schließlich auch formal.
                <br />
                Um die praktische Umsetzung dieser Befehle zu überprüfen, hilft ein Blick auf die Berichte damaliger Grenzsoldaten, wie zum Beispiel die Befragung des Mauerschützen Ingo Heinrich in den Mauerschützenprozessen nach 1990. Er erschoss am 6. Februar 1989 Chris Gueffroy, das letzte Opfer, das an der Mauer durch Schüsse starb. Heinrich wurde unmittelbar nach dem Vorfall befördert, erhielt ein Leistungsabzeichen und eine Geldprämie. Vorgänge, die von der DDR-Führung vertuscht werden sollten. Sein Kollege Peter Schmett gehörte zur selben Postengruppe und bestätigte Heinrichs Äußerungen in den Prozessen.
                <br />
                Es ist eine historische Tatsache, dass zwischen 1961 und 1989 mindestens 140 Menschen an der Berliner Mauer ihr Leben verloren. Davon waren 101 Flüchtlinge, die erschossen wurden, ertranken oder bei ihrer Flucht tödlich verunglückten. Darüber hinaus starben 30 Passanten ohne Fluchtabsicht, ein sowjetischer Soldat sowie 8 Grenzsoldaten im Dienst. Höhere Schätzungen gehen von weit über 260 Todesopfern an der Mauer aus, da das DDR-Regime Todesfälle systematisch vertuschte. Zu diesen Opfern gehören auch mindestens fünf Kinder. Sie spielten am West-Berliner Ufer, fielen in die Spree, die in voller Breite zum Territorium Ost-Berlins gehörte, und ertranken. Rettungsaktionen von West-Berliner Seite wurden durch DDR-Grenzposten blockiert oder verzögert, sodass für diese Kinder jede Hilfe zu spät kam.
                <br />
                Letztendlich lässt sich die Frage, ob es den Schießbefehl wirklich gab, anhand der historischen Quellen, der Opferzahlen und der Gerichtsinterviews klar mit Ja beantworten. Auch wenn es kein einzelnes Dokument mit dem Titel „Schießbefehl“ für jeden Soldaten gab, so machten die Gesetze, Befehle und das Belohnungssystem der DDR-Führung unmissverständlich deutlich, dass ein Grenzdurchbruch um jeden Preis  zu verhindern war.
            </div>

            <Separator className="my-8 bg-gray-300" />
            <p className="text-sm pb-1">
                Hertle, Hans-Hermann (10.01.1012): „Grenzverletzer sind festzunehmen oder zu vernichten“. [online]
                <br />URL: <a className="hover:underline" href="https://www.bpb.de/themen/deutsche-einheit/deutsche-teilung-deutsche-einheit/52462/grenzverletzer-sind-festzunehmen-oder-zu-vernichten/">https://www.bpb.de/themen/deutsche-einheit/deutsche-teilung-deutsche-einheit/52462/grenzverletzer-sind-festzunehmen-oder-zu-vernichten/</a>
                <br />[Stand: 05.06.2026] 
            </p>
            <p className="text-sm pb-1">
                Reichel, Peter (13.08.2021): Linker Kommunalpolitiker nennt Mauerbau „letzten Ausweg vor einem Krieg“. [online] 
                <br />URL: <a className="hover:underline" href="https://www.welt.de/politik/deutschland/article233133457/Linker-Kommunalpolitiker-Die-Mauer-war-letzter-Ausweg-vor-Krieg.html">https://www.welt.de/politik/deutschland/article233133457/Linker-Kommunalpolitiker-Die-Mauer-war-letzter-Ausweg-vor-Krieg.html</a>
                <br />[Stand: 05.06.2026]
            </p>
            <p className="text-sm pb-1">
                Eser, Albin: Schuld und Entschuldbarkeit von Mauerschützen und ihren Befehlsgebern. [online] Homepage: Albert-Ludwigs-Universität-Freiburg
                <br />URL: <a className="hover:underline" href="https://freidok.uni-freiburg.de/files/6258/SKNSeNnRkJ_v7Zbs/Eser_Schuld_und_Entschuldbarkeit.pdf">https://freidok.uni-freiburg.de/files/6258/SKNSeNnRkJ_v7Zbs/Eser_Schuld_und_Entschuldbarkeit.pdf</a>
                <br />[PDF-Datei] [Stand: 05.06.2026]
            </p>
            <p className="text-sm pb-1">
                Chronik der Mauer:  Protokoll Nr. 45/61 der Sitzung des Politbüros des ZK der SED, 22.8.1961, in: Bundesarchiv (BA), DY 30/J IV 2/2/787, S. 1ff. [online] Homepage: Chroniken der Mauer
                <br />URL: <a className="hover:underline" href="https://www.chronik-der-mauer.de/system/files/dokument_pdf/58847_cdm-610822-PolitbueroProt.pdf">https://www.chronik-der-mauer.de/system/files/dokument_pdf/58847_cdm-610822-PolitbueroProt.pdf</a>
                <br />[PDF-Datei] [Stand: 05.06.2026]
            </p>
            <p className="text-sm pb-1">
                MDR (24.06.2021): Die Berliner Mauer und ihr letztes Opfer. [online]
                <br />URL: <a className="hover:underline" href="https://www.mdr.de/geschichte/ddr/mauer-grenze/berliner-mauer-letztes-opfer-chris-gueffroy-100.html">https://www.mdr.de/geschichte/ddr/mauer-grenze/berliner-mauer-letztes-opfer-chris-gueffroy-100.html</a>
                <br />[Stand: 05.06.2026]
            </p>
            <p className="text-sm pb-1">
                Bundeszentrale für politische Bildung (03.08.2021): Vor 60 Jahre: Bau der Berliner Mauer. [online]
                <br />URL: <a className="hover:underline" href="https://www.bpb.de/kurz-knapp/hintergrund-aktuell/337560/vor-60-jahren-bau-der-berliner-mauer/">https://www.bpb.de/kurz-knapp/hintergrund-aktuell/337560/vor-60-jahren-bau-der-berliner-mauer/</a>
                <br />[Stand: 05.06.2026]
            </p>
            <p className="text-sm pb-1">
                von Lüpke, Marc (11.08.2021): Wie der Westen sich für den Mauerbau revanchierte. [online]
                <br />URL: <a className="hover:underline" href="https://www.t-online.de/nachrichten/panorama/wissen/geschichte/id_90573878/mauerbau-vor-60-jahren-als-der-westen-die-ddr-in-grund-und-boden-droehnte.html">https://www.t-online.de/nachrichten/panorama/wissen/geschichte/id_90573878/mauerbau-vor-60-jahren-als-der-westen-die-ddr-in-grund-und-boden-droehnte.html</a>
                <br />[Stand: 05.06.2026]
            </p>
            <p className="text-sm pb-1">
                DPA (10.09.2014): Spektakuläre Fluchten aus der DDR. [online] Homepage: WELT
                <br />URL: <a className="hover:underline" href="https://www.welt.de/geschichte/article160308945/Weg-in-die-Freiheit-Spektakulaere-Fluchten-aus-der-DDR.html">https://www.welt.de/geschichte/article160308945/Weg-in-die-Freiheit-Spektakulaere-Fluchten-aus-der-DDR.html</a>
                <br />[Stand: 05.06.2026]
            </p>
            <p className="text-sm pb-1">
                Stiftung Berliner Mauer: Todesopfer an der Berliner Mauer. [online] Homepage: Stiftung Berliner Mauer
                <br />URL: <a className="hover:underline" href="https://www.stiftung-berliner-mauer.de/de/themen/todesopfer-berliner-mauer">https://www.stiftung-berliner-mauer.de/de/themen/todesopfer-berliner-mauer</a>
                <br />[Stand: 05.06.2026]
            </p>
            <p className="text-sm pb-1">
                Chronik der Mauer: Todesopfer. [online] Homepage: Chronik der Mauer
                <br />URL: <a className="hover:underline" href="https://www.chronik-der-mauer.de/todesopfer/">https://www.chronik-der-mauer.de/todesopfer/</a>
                <br />[Stand 05.06.2026]
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

