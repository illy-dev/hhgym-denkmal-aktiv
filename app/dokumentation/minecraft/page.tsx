import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { ImageCaroussel } from "@/components/image-caroussel";

export default function Minecraft() {
    const images = [
        {
        src: "/doku/minecraft_1.jpg",
        alt: "",
        source: ""
        },
        {
        src: "/doku/minecraft_2.jpg",
        alt: "",
        source: ""
        },
        {
        src: "/doku/minecraft_3.jpg",
        alt: "",
        source: "Grenzanlage Wedding/Prenzlauer Berg, 1973. Quelle: Wikimedia / Karl-Ludwig Lange. CC BY-SA 3.0"
        },
        {
        src: "/doku/minecraft_4.jpg",
        alt: "",
        source: ""
        },
        {
        src: "/doku/minecraft_5.png",
        alt: "",
        source: "Frau an der Berliner Mauer im Westsektor, wartet darauf, ihre Ostberliner Freunde und Verwandten zu sehen. Quelle: Wikimedia / Library of Congress; Public Domain. Original: http://hdl.loc.gov/loc.pnp/cph.3c08561"
        },
    ]

  return(
    <div className="min-h-screen bg-white pt-36 pb-4">
          <div className="max-w-4xl mx-auto px-4">

              <h1 className="text-4xl font-bold mb-2">Minecraft Mauer-Modell</h1>
              <h2 className="text-xl mb-4">Eymen, Kerem</h2>

              <ImageCaroussel images={images} />

            <div className="space-y-4 text-justify leading-relaxed">
                Für unser Projekt haben wir zwei Modelle der Berliner Mauer in dem Videospiel Minecraft erstellt. Das erste Modell zeigt die Situation im Jahr 1961, als die Mauer gebaut wurde. Das zweite Modell stellt das Jahr 1989 dar, als die Berliner Mauer fiel und die Teilung Deutschlands beendet wurde. Durch die beiden Modelle können die Veränderungen zwischen Anfang und Ende der Mauerzeit gut verglichen werden.
                <br />
                Bei der Gestaltung haben wir darauf geachtet, wichtige Merkmale der jeweiligen Zeit darzustellen und die Perspektive der Bürger einzubauen. Das Modell von 1961 zeigt die ersten Grenzanlagen und die Trennung zwischen Ost- und West-Berlin. Im Modell von 1989 werden die weiter ausgebauten Grenzanlagen sowie die Ereignisse rund um den Fall der Mauer sichtbar.
                <br />
                Um unsere Modelle möglichst realistisch zu gestalten, haben wir auch echte historische Fotos als Vergleich genutzt. Diese Bilder halfen uns dabei, Details wie das Aussehen der Mauer, die Grenzanlagen und die Umgebung genauer nachzubilden. Durch den Vergleich mit den Originalfotos konnten wir überprüfen, ob unsere Modelle die historischen Gegebenheiten korrekt darstellen.
                <br />
                Die Arbeit an den Modellen hat uns geholfen, die Geschichte der Berliner Mauer besser zu verstehen. Besonders deutlich wurde, wie stark die Mauer das Leben der Menschen beeinflusste und welche Bedeutung ihr Fall im Jahr 1989 hatte. Insgesamt zeigen die Modelle anschaulich die Entwicklung der Berliner Mauer von ihrem Bau bis zu ihrem Ende.
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

