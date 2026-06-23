

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const zitate: { body: string; author: string }[] = [
  {
  body: "Die East Side Gallery im Herzen Berlins ist für die Gesellschaft ein prägendes Symbol. Sie dokumentiert die gesellschaftlichen Geschehnisse in der DDR und dient somit als ‚Warnmal‘",
  author: "Alex"
  },
  {
  body: "Nach dem Fall der Berliner Mauer im November 1989 wurde der erhaltene Mauerabschnitt von Künstlerinnen und Künstlern aus vielen Ländern bemalt. Dabei thematisieren die Kunstwerke Frieden, Freiheit und Hoffnung. Dadurch wurde aus einem Symbol der Unterdrückung ein Ort der Erinnerung und Begegnung.",
  author: "Letizia"
  },
  {
  body: "Die East Side Gallery ist ein Ort, welcher historisch gesehen ganz klar ein Teil der Trennung Berlins ist. Ehemalige Mauerstücke werden meistens als Mahnmal genutzt und sollen an die Unterdrückung und an das Unrecht erinnern. Die East Side Gallery ist aber besonders. Sie wurde durch freischaffende Künstler zurückerobert und zu einer Projektionsfläche von Kreativität, Freiheit, Persönlichkeit und Individualität. Die Bilder erzählen Geschichten, werfen Fragen auf und beschäftigen sich mit zahlreichen gesellschaftlichen Themen. Sie ist der Kontrast zu Gedenkstätten, Denkmalen und Mahnmalen. Das macht sie so besonders. Sie wirkt aktiv gegen Unterdrückung und kann so als Symbol der Freiheit und Einheit gesehen werden",
  author: "Johannes"
  },
  {
    body: "Freiheit bedeutet, sich frei bewegen zu können. Freiheit bedeutet, denken zu dürfen ohne Einschränkung. Die East Side Gallery ist ein Zeichen für Freiheit, denn sie verschönert die Mauer, die nun keine Bedrohung mehr für uns darstellt. Die Mauer war lange ein Zeichen der Unterdrückung, doch man könnte sagen, dass die East Side Gallery die Symbolik verändert. Doch vielleicht führt die Symbolik auch weiter: Auf der Rückseite der East Side Gallery darf immer noch nicht Kunst frei ausgelebt werden. Das zeigt, dass immer noch nicht jede Form der Meinungsäußerung akzeptiert ist, sondern nur in einem „kontrollierten Rahmen“ Kunst [an die Mauer] angebracht werden darf.",
    author: "Anna",
  },
  {
    body: "Die East Side Gallery lässt jeden Menschen frei die ehemalige Grenze zwischen Ost- und Westberlin überqueren. Ohne Beschränkung, ohne Verbote, ohne Repression und ohne Angst um das eigene Leben. Das zeigt die Privilegien in unserer freien, modernen Gesellschaft und steht damit für die die Freiheit des geeinten Deutschlands. [Sie] mahnt auch gleichzeitig vor Unterdrückung in der DDR.",
    author: "Magnus",
  },
  {
    body: "Für mich ist die East Side Gallery hauptsächlich ein Symbol der Freiheit und Einheit, da sie zeigt, wie Kunst Grenzen überwinden kann und dass sich Bevölkerungen ohne Gewalt, ihre Freiheit erkämpfen konnte. Damit konnten durch Einheit, Zuversicht und Hoffnung die Grenzen und Unterdrückung dieser Mauer überwunden werden.",
    author: "Emil",
  },
  {
    body: "Die Künstler diskutieren in ihren Werken den Niederriss des Gefängnisses, die erworbene Freiheit sowie die Einheit. Die Einheit wurde durch die Bemalung 1990 zelebriert und erinnert bis heute an die Teilung.",
    author: "Johanna",
  },
  {
    body: "Die Tatsache, dass Künstler auf der Mauer malen durften, ist ein Argument für das Freiheitssymbol. Allerdings gibt es jetzt auch Verbote, sie neu zu [be]malen, selbst auf Wunsch der Künstler. Zusätzlich dürfen keine neuen Kunstwerke hinzugefügt werden. Dies steht eher für die Symbolik eines Gefängnisses. Der Fakt, dass neue Kunstwerke auch teilweise übermalt und somit ihre Botschaften ‚eliminiert‘ werden, sowie der historische Hintergrund mit der Mauer als Eingrenzung, stehen für die Symbolik der Unterdrückung.",
    author: "Ana",
  },
  {
    body: "Die verbliebenden Reste der East Side Gallery sollten auf jeden Fall als ein Zeichen von Freiheit angesehen werden. Die Zusammenarbeit zwischen den Menschen wird durch die verschiedenen Mauerbilder deutlich dargestellt. Außerdem zeigt sich dadurch die freie Meinungsäußerung und Demokratie. Die Mauer erinnert, wie wichtig Demokratie und Menschrechte sind, und daran, dass sich ein solches Ereignis nie wiederholen darf.",
    author: "Tim",
  },
  {
    body: "Die East Side Gallery markiert den Wandel vom Gefängnis zur Freiheit. Während die Mauer früher als ein Instrument der Unterdrückung den Bürgern ihre Grundrechte entzog, steht sie heute nach der Wiedervereinigung für die deutsche Einheit. Die East Side Gallery ist ein Paradox für mich, weil sie gleichzeitig als Symbol der Unterdrückung und der Freiheit bezeichnet werden kann. [...] Jetzt ist sie primär ein Symbol der Freiheit, da die schöpferische Kraft der Kunst die einstige Unterdrückung überwunden hat.",
    author: "Veronika",
  },
  {
    body: "Für mich überwiegt die Bedeutung der Freiheit und Einheit. Die Bilder stehen für Demokratie und die Überwindung von Grenzen. Außerdem besuchen Menschen aus aller Welt die East Side Gallery, um sich über die Geschichte zu informieren und an die Bedeutung der Freiheit erinnert zu werden.",
    author: "Pia",
  },
  {
    body: "Ein Grund, dass die East Side Gallery eher für Freiheit steht, ist, dass die Bilder auf der Ostseite gemalt wurden wo es vor dem Mauerfall nicht erlaubt war. Außerdem zeigen viele Bilder das Ereignis vom 9. November 1989 und somit das Gelangen an Freiheit.",
    author: "Jura",
  },
  {
    body: "Die East Side Gallery ist ein Symbol der Freiheit und Einheit, weil sie die Überwindung der Zeit der Unterdrückung zeigt, in welcher man für das Aussprechen seiner eigenen Meinung ins Gefängnis kommen konnte.",
    author: "Emilio",
  },
  {
    body: "Andererseits könnte man die East Side Gallery auch als Symbol der Unterdrückung deuten, da sie auch an die Mauer erinnert, die einst Berlin [und ganz Deutschland] teilte, und somit auch an Unterdrückung und Überwachung erinnert, die zur Zeit der DDR herrschten.",
    author: "Claas",
  },
  {
    body: "Meiner Meinung nach ist sie ein Symbol für Frieden, da sie auch Friedenssymbole trägt.",
    author: "Lennart",
  },
  {
    body: "Die East Side Gallery ist ein ehemaliger Abschnitt eines ‚Bauwerks‘, das Menschen eingesperrt und ihre Bewegung eingeschränkt hat, was gegen das Symbol von Freiheit spricht. [...] Aber: Auf ihr sind Kunstwerke, die Freiheit ausdrücken. Sie war zwar ein Instrument der Unterdrückung, jedoch ist sie nun kein solches Instrument mehr. Stattdessen kann sie als Mahnmal gegen Unterdrückung betrachtet werden.",
    author: "Jakob",
  },
  {
    body: "Für das Symbol der Einheit spricht, dass die Mauer nach dem Mauerfall bemalt wurde und heute an die Wiedervereinigung erinnert. Viele Werke stehen für Frieden und Freiheit. Gleichzeitig war die East Side Gallery früher ein Teil der Berliner Mauer. Die Mauer trennte Familien, Freunde und Mitbürger und schränkte somit die Freiheit der Menschen in der DDR ein. Deshalb erinnert sie auch an Leid und Unterdrückung.",
    author: "Mohamed",
  },
]

export function Zitate() {
  return (
    <Carousel className="w-[80%]">
      <CarouselContent className="-ml-1">
        {zitate.map((zitat, index) => (
          <CarouselItem key={index} className="basis-full pl-1 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex h-full flex-col justify-between p-6">
                  <p className="text-sm leading-6 text-slate-700">{zitat.body}</p>
                  <p className="mt-4 text-right text-xs font-semibold text-slate-900">— {zitat.author}</p>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
