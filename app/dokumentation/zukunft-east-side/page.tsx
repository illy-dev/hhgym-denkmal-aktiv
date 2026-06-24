import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { ImageCaroussel } from "@/components/image-caroussel";

export default function ZukunftEastSide() {

  return(
    <div className="min-h-screen bg-white pt-36 pb-4">
          <div className="max-w-4xl mx-auto px-4">

              <h1 className="text-4xl font-bold mb-2">Denkmal und East Side Gallery / Zukunft der East Side Gallery (Schäden, Umgang mit Schäden, Pflege und Erhalt)</h1>
              <h2 className="text-xl mb-4">Tim, Tala, Letizia, Pia, Mohamed</h2>


            <div className="space-y-4 text-justify leading-relaxed">
                Schutz der East Side Gallery – Ein Denkmal unter Druck
                <br />
                Die East Side Gallery ist weit mehr als nur eine bemalte Mauer. Sie ist ein Symbol für Freiheit, Erinnerung und den Fall der Berliner Mauer. Doch wie schützt man ein Denkmal, das Tag für Tag Wind, Wetter und Millionen von Besuchern ausgesetzt ist?
                <br />
                Genau darin liegt das größte Problem. In einem Expertengespräch mit der Leiterin der East Side Gallery, Anna von Arnim-Rosenthal, fand darüber ein Austausch statt. Die East Side Gallery befindet sich mitten im öffentlichen Raum. Es rauschen nicht nur Autos vorbei, sondern auch Regen und Sonne greifen die Farben an, und immer wieder hinterlassen Menschen ihre Spuren. Risse ziehen sich durch die Mauer, Farbe blättert ab und Rost frisst sich langsam aber sicher durch die Betonmauer. Das Denkmal altert und das lässt sich leider nicht vollständig verhindern.
                <br />
                Besonders schwierig ist der Umgang mit Vandalismus. Immer wieder werden Kunstwerke beschmiert oder beschädigt. So wurde der berühmte „Bruderkuss“ von Klimaaktivisten mit rotem Grafitti besprüht: Eine Aktion, die nicht heimlich vonstatten ablief, sondern bewusst vollbracht wurde. Zwar konnte die Farbe entfernt werden, doch der Schutzanstrich des Bildes wurde dabei beschädigt. Die Restaurierung kostete mehrere tausend Euro. Dabei stellt sich vor allem folgende Frage: Wo endet Protest und wo beginnt die Zerstörung von Geschichte?
                <br />
                Auch die Rückseite der East Side Gallery sorgt für Diskussionen. Eigentlich soll sie weiß bleiben und an die frühere Grenzanlage erinnern, doch ständig entstehen dort neue Graffiti und Beschmierungen. Für die einen ist das Sachbeschädigung, für die anderen Ausdruck von Kreativität und Teil der Geschichte dieses besonderen Ortes.
                <br />
                Die East Side Gallery steht deshalb vor einem schwierigen Dilemma: Einerseits soll sie als Denkmal bewahrt werden, andererseits lebt sie gerade von ihrer Offenheit und ihrer engen Verbindung zu den Menschen. Beides miteinander zu vereinen, ist eine große Herausforderung.
                <br />
                <br />
                Die Zukunft der East Side Gallery – Bewahren oder verändern?
                <br />
                Wie wird die East Side Gallery in zwanzig Jahren aussehen? Werden die berühmten Bilder noch existieren oder nur noch auf alten Fotografien zu sehen sein? Diese Fragen beschäftigen Denkmalpfleger, Restauratoren und Historiker gleichermaßen.
                <br />
                Dabei steht aber fest, dass die Zeit ihre Spuren hinterlässt. Deshalb werden bereits heute verschiedene Ideen diskutiert. Soll die Mauer überdacht werden, um sie vor Regen und Sonne zu schützen? Soll der Verkehr reduziert werden, damit weniger Erschütterungen entstehen? Oder müssen völlig neue Wege gefunden werden, um dieses einzigartige Denkmal zu bewahren?
                <br />
                Dabei geht es um mehr als nur Farbe und Beton. Es geht um die Bedeutung eines Ortes, der weltweit für Freiheit und den Zusammenbruch der deutschen Teilung steht. Die größte Herausforderung besteht darin, die East Side Gallery zu erhalten, ohne ihr die Seele zu nehmen.
                <br />
                Besonders eindrucksvoll beschreibt dies die Zukunftsvision von Anna von Armin-Rosenthal, während eines Vortages. Auf die Nachfrage hin, wie sie sich die East Side Gallery in 20 Jahren wünscht, antwortete sie mit ihrer Traumvorstellung: „Also wenn wir Wunschkonzert spielen: Mauerbilder, die gut erhalten sind und gut gepflegt werden.“ Doch damit endet ihre Vorstellung nicht. Gleichzeitig wünscht sie sich, dass auf der Rückseite auch in Zukunft zeitgenössische Künstlerinnen und Künstler ihre Ideen verwirklichen können.
                <br />
                Diese Vision verbindet Vergangenheit und Gegenwart. Die historischen Kunstwerke auf der Vorderseite bleiben erhalten, während auf der Rückseite neue Kunst entsteht. Die East Side Gallery wäre dann nicht nur ein Denkmal der Geschichte, sondern auch ein Ort, an dem Geschichte weitergeschrieben wird, lebendig, offen und immer im Wandel.
            </div>

            <Separator className="my-8 bg-gray-300" />

            <div className="flex justify-between items-center pt-8">
                <Link href="/dokumentation" className="text-blue-600 hover:text-blue-800">
                ← Zurück zu Dokumentationen
                </Link>

        </div>
          </div>
      </div>
  );
}

