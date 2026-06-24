import { Item, ItemContent, ItemTitle, ItemDescription, ItemActions, ItemHeader } from "@/components/ui/item";
import { ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Dokumentation() {
  return (
    <>
      <div className="text-left p-6 pt-36">
        <h1 className="text-3xl md:text-5xl font-bold max-w-[60%]">Dokumentationen von Schülern</h1>
        <p>Hier sind Dokumentationen, die im Rahmen des Projekts entstanden sind:</p>
      </div>
            
      <div className="flex w-full flex-row flex-wrap gap-4 m-6 overflow-hidden">

            {/** BAU DER MAUER */}
            <Item asChild className="w-[90%] md:w-[20%]">
              <Link href="/dokumentation/bau-mauer">
                <ItemHeader className="relative aspect-square w-full overflow-hidden">
                  <Image
                    src="/doku/mauerbau.jpg"
                    alt="test"
                    fill
                    className="object-cover rounded-sm"
                  />
                </ItemHeader>
                <ItemContent>
                  <ItemTitle>Bau der Mauer</ItemTitle>
                  <ItemDescription>
                    Geschichte des Baus der Mauer 1961
                  </ItemDescription>
                </ItemContent>
                <ItemActions>
                  <ChevronRightIcon className="size-4" />
                </ItemActions>
              </Link>
            </Item>

            {/** AUSBAU GRENZE */}
            <Item asChild className="w-[90%] md:w-[20%]">
              <Link href="/dokumentation/ausbau-grenze">
                <ItemHeader className="relative aspect-square w-full overflow-hidden">
                  <Image
                    src="/doku/ausbau_grenze_2.jpg"
                    alt=""
                    fill
                    className="object-cover rounded-sm"
                  />
                </ItemHeader>
                <ItemContent>
                  <ItemTitle>Ausbau der Grenzanlagen</ItemTitle>
                  <ItemDescription>
                    Veränderungen der Grenzanlage 1961-1989
                  </ItemDescription>
                </ItemContent>
                <ItemActions>
                  <ChevronRightIcon className="size-4" />
                </ItemActions>
              </Link>
            </Item>

            {/** ABRISS */}
            <Item asChild className="w-[90%] md:w-[20%]">
              <Link href="/dokumentation/abriss-mauer">
                <ItemHeader className="relative aspect-square w-full overflow-hidden">
                  <Image
                    src="/doku/abriss.jpg"
                    alt=""
                    fill
                    className="object-cover rounded-sm"
                  />
                </ItemHeader>
                <ItemContent>
                  <ItemTitle>Abriss der Mauer</ItemTitle>
                  <ItemDescription>
                    Abriss der Mauer nach dem Mauerfall 1989
                  </ItemDescription>
                </ItemContent>
                <ItemActions>
                  <ChevronRightIcon className="size-4" />
                </ItemActions>
              </Link>
            </Item>

            {/** ENTSTHEUNG EAST SIDE */}
            <Item asChild className="w-[90%] md:w-[20%]">
              <Link href="/dokumentation/entstehung-east-side">
                <ItemHeader className="relative aspect-square w-full overflow-hidden">
                  <Image
                    src="/doku/entstehung_east_side.jpg"
                    alt=""
                    fill
                    className="object-cover rounded-sm"
                  />
                </ItemHeader>
                <ItemContent>
                  <ItemTitle>Entstehung der East-Side-Gallery</ItemTitle>
                  <ItemDescription>
                    Entstehung der East-Side-Gallery nach dem Mauerfall 1989
                  </ItemDescription>
                </ItemContent>
                <ItemActions>
                  <ChevronRightIcon className="size-4" />
                </ItemActions>
              </Link>
            </Item>

            {/** FALL */}
            <Item asChild className="w-[90%] md:w-[20%]">
              <Link href="/dokumentation/fall">
                <ItemHeader className="relative aspect-square w-full overflow-hidden">
                  <Image
                    src="/doku/fall.jpg"
                    alt=""
                    fill
                    className="object-cover rounded-sm"
                  />
                </ItemHeader>
                <ItemContent>
                  <ItemTitle>Fall der Mauer</ItemTitle>
                  <ItemDescription>
                    Geschichte zum Fall der Mauer 1989
                  </ItemDescription>
                </ItemContent>
                <ItemActions>
                  <ChevronRightIcon className="size-4" />
                </ItemActions>
              </Link>
            </Item>

            {/** FLUCHT */}
            <Item asChild className="w-[90%] md:w-[20%]">
              <Link href="/dokumentation/flucht">
                <ItemHeader className="relative aspect-square w-full overflow-hidden">
                  <Image
                    src="/doku/flucht.jpg"
                    alt=""
                    fill
                    className="object-cover rounded-sm"
                  />
                </ItemHeader>
                <ItemContent>
                  <ItemTitle>Flucht</ItemTitle>
                  <ItemDescription>
                    Fluchten aus der DDR
                  </ItemDescription>
                </ItemContent>
                <ItemActions>
                  <ChevronRightIcon className="size-4" />
                </ItemActions>
              </Link>
            </Item>

            {/** Grenzübergang */}
            <Item asChild className="w-[90%] md:w-[20%]">
              <Link href="/dokumentation/grenzuebergang">
                <ItemHeader className="relative aspect-square w-full overflow-hidden">
                  <Image
                    src="/doku/grenzuebergang.jpg"
                    alt=""
                    fill
                    className="object-cover rounded-sm"
                  />
                </ItemHeader>
                <ItemContent>
                  <ItemTitle>Grenzübergang</ItemTitle>
                  <ItemDescription>
                    Übergange zwischen der DDR und BRD in Berlin
                  </ItemDescription>
                </ItemContent>
                <ItemActions>
                  <ChevronRightIcon className="size-4" />
                </ItemActions>
              </Link>
            </Item>

            {/** maueropfer */}
            <Item asChild className="w-[90%] md:w-[20%]">
              <Link href="/dokumentation/maueropfer">
                <ItemHeader className="relative aspect-square w-full overflow-hidden">
                  <Image
                    src="/doku/maueropfer.jpg"
                    alt=""
                    fill
                    className="object-cover rounded-sm"
                  />
                </ItemHeader>
                <ItemContent>
                  <ItemTitle>Maueropfer</ItemTitle>
                  <ItemDescription>
                    Opfer bei Fluchtversuchen aus der DDR
                  </ItemDescription>
                </ItemContent>
                <ItemActions>
                  <ChevronRightIcon className="size-4" />
                </ItemActions>
              </Link>
            </Item>

            {/** minecraft */}
            <Item asChild className="w-[90%] md:w-[20%]">
              <Link href="/dokumentation/minecraft">
                <ItemHeader className="relative aspect-square w-full overflow-hidden">
                  <Image
                    src="/doku/minecraft_1.jpg"
                    alt=""
                    fill
                    className="object-cover rounded-sm"
                  />
                </ItemHeader>
                <ItemContent>
                  <ItemTitle>Minecraft Mauer-Modell</ItemTitle>
                  <ItemDescription>
                    Modell der Berliner Mauer in Minecraft
                  </ItemDescription>
                </ItemContent>
                <ItemActions>
                  <ChevronRightIcon className="size-4" />
                </ItemActions>
              </Link>
            </Item>

            {/** schiess */}
            <Item asChild className="w-[90%] md:w-[20%]">
              <Link href="/dokumentation/schiess-befehl">
                <ItemHeader className="relative aspect-square w-full overflow-hidden">
                  <Image
                    src="/doku/schiess_2.jpg"
                    alt=""
                    fill
                    className="object-cover rounded-sm"
                  />
                </ItemHeader>
                <ItemContent>
                  <ItemTitle>Gab es einen Schießbefehl?</ItemTitle>
                  <ItemDescription>
                    Durften Grenzwächter auf Flüchtende Schießen?
                  </ItemDescription>
                </ItemContent>
                <ItemActions>
                  <ChevronRightIcon className="size-4" />
                </ItemActions>
              </Link>
            </Item>

            {/** wandel east sidew */}
            <Item asChild className="w-[90%] md:w-[20%]">
              <Link href="/dokumentation/wandel-east-side">
                <ItemHeader className="relative aspect-square w-full overflow-hidden">
                  <Image
                    src="/doku/wandel_1.png"
                    alt=""
                    fill
                    className="object-cover rounded-sm"
                  />
                </ItemHeader>
                <ItemContent>
                  <ItemTitle>Wandel der East-Side-Gallery</ItemTitle>
                  <ItemDescription>
                    Veränderung der Kunstwerke über die Zeit
                  </ItemDescription>
                </ItemContent>
                <ItemActions>
                  <ChevronRightIcon className="size-4" />
                </ItemActions>
              </Link>
            </Item>

            {/** zukunft east sidew */}
            <Item asChild className="w-[90%] md:w-[20%]">
              <Link href="/dokumentation/zukunft-east-side">
                <ItemHeader className="relative aspect-square w-full overflow-hidden">
                  <Image
                    src="/doku/wandel_2.png"
                    alt=""
                    fill
                    className="object-cover rounded-sm"
                  />
                </ItemHeader>
                <ItemContent>
                  <ItemTitle>Wandel der East-Side-Gallery</ItemTitle>
                  <ItemDescription>
                    Umgang mit Schäden, Pflege und Erhalt
                  </ItemDescription>
                </ItemContent>
                <ItemActions>
                  <ChevronRightIcon className="size-4" />
                </ItemActions>
              </Link>
            </Item>

          </div>

    </>
  );
}
