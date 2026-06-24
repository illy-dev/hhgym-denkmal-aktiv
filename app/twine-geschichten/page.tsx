import { Item, ItemContent, ItemTitle, ItemDescription, ItemActions } from "@/components/ui/item";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";

export default function TwineGeschichten() {
  return (
    <>
          <div className="text-left p-6 pt-36">
        <h1 className="text-3xl md:text-5xl font-bold max-w-[60%]">Interaktive Geschichten von Schülern</h1>
        <p>Hier sind Interaktive Geschichten, die im Rahmen des Projekts entstanden sind:</p>
      </div>

      <div className="flex w-full flex-row flex-wrap gap-4 p-6 overflow-hidden justify-center">
          <Item asChild className="w-[90%] md:w-[20%]" variant='outline'>
            <a href="/twine/undercover.html"  target="_blank" rel="noopener noreferrer">
              <ItemContent>
                <ItemTitle>Undercover</ItemTitle>
                <ItemDescription>
                  Mohamed, Pia
                </ItemDescription>
              </ItemContent>
              <ItemActions>
                <ChevronRightIcon className="size-4" />
              </ItemActions>
            </a>
          </Item>

          <Item asChild className="w-[90%] md:w-[20%]" variant='outline'>
            <a href="/twine/das_doppelte_spiel.html" target="_blank" rel="noopener noreferrer">
              <ItemContent>
                <ItemTitle>Das doppelte Spiel</ItemTitle>
                <ItemDescription>
                  Tala, Letizia
                </ItemDescription>
              </ItemContent>
              <ItemActions>
                <ChevronRightIcon className="size-4" />
              </ItemActions>
            </a>
          </Item>

          <Item asChild className="w-[90%] md:w-[20%]" variant='outline'>
            <a href="/twine/der_auftrag.html" target="_blank" rel="noopener noreferrer">
              <ItemContent>
                <ItemTitle>Der Auftrag</ItemTitle>
                <ItemDescription>
                  Eymen, Kerem
                </ItemDescription>
              </ItemContent>
              <ItemActions>
                <ChevronRightIcon className="size-4" />
              </ItemActions>
            </a>
          </Item>

          <Item asChild className="w-[90%] md:w-[20%]" variant='outline'>
            <a href="/twine/der_dieb.html" target="_blank" rel="noopener noreferrer">
              <ItemContent>
                <ItemTitle>Der Dieb</ItemTitle>
                <ItemDescription>
                  Ana, Johanna
                </ItemDescription>
              </ItemContent>
              <ItemActions>
                <ChevronRightIcon className="size-4" />
              </ItemActions>
            </a>
          </Item>

          <Item asChild className="w-[90%] md:w-[20%]" variant='outline'>
            <a href="/twine/DerFreundImWesten(Oskar).html" target="_blank" rel="noopener noreferrer">
              <ItemContent>
                <ItemTitle>Der Freund im Westen</ItemTitle>
                <ItemDescription>
                  Oskar
                </ItemDescription>
              </ItemContent>
              <ItemActions>
                <ChevronRightIcon className="size-4" />
              </ItemActions>
            </a>
          </Item>

          <Item asChild className="w-[90%] md:w-[20%]" variant='outline'>
            <a href="/twine/die_frage_der_loyalität.html" target="_blank" rel="noopener noreferrer">
              <ItemContent>
                <ItemTitle>Die Frage der Loyalität</ItemTitle>
                <ItemDescription>
                  Sophia, Anna
                </ItemDescription>
              </ItemContent>
              <ItemActions>
                <ChevronRightIcon className="size-4" />
              </ItemActions>
            </a>
          </Item>

          <Item asChild className="w-[90%] md:w-[20%]" variant='outline'>
            <a href="/twine/Ein_Mann_Eine_Geschichte.html" target="_blank" rel="noopener noreferrer">
              <ItemContent>
                <ItemTitle>Ein Mann, Eine Geschichte. Welche Rolle spielt die Pizza?</ItemTitle>
                <ItemDescription>
                  Mihael, Tim
                </ItemDescription>
              </ItemContent>
              <ItemActions>
                <ChevronRightIcon className="size-4" />
              </ItemActions>
            </a>
          </Item>

          <Item asChild className="w-[90%] md:w-[20%]" variant='outline'>
            <a href="/twine/anwesen_der_unsichtbaren_beobachter.html" target="_blank" rel="noopener noreferrer">
              <ItemContent>
                <ItemTitle>Das Anwesen der unsichtbaren Beobachter</ItemTitle>
                <ItemDescription>
                  Florian, Lennart
                </ItemDescription>
              </ItemContent>
              <ItemActions>
                <ChevronRightIcon className="size-4" />
              </ItemActions>
            </a>
          </Item>

          <Item asChild className="w-[90%] md:w-[20%]" variant='outline'>
            <a href="/twine/flucht_aus_der_ddr.html" target="_blank" rel="noopener noreferrer">
              <ItemContent>
                <ItemTitle>Flucht aus der DDR</ItemTitle>
                <ItemDescription>
                  Leo, Adrian, Martin
                </ItemDescription>
              </ItemContent>
              <ItemActions>
                <ChevronRightIcon className="size-4" />
              </ItemActions>
            </a>
          </Item>

          <Item asChild className="w-[90%] md:w-[20%]" variant='outline'>
            <a href="/twine/flucht_vom_tierpark.html" target="_blank" rel="noopener noreferrer">
              <ItemContent>
                <ItemTitle>Flucht vom Tierpark</ItemTitle>
                <ItemDescription>
                  Alexander, Claas
                </ItemDescription>
              </ItemContent>
              <ItemActions>
                <ChevronRightIcon className="size-4" />
              </ItemActions>
            </a>
          </Item>

          <Item asChild className="w-[90%] md:w-[20%]" variant='outline'>
            <a href="/twine/ich_muss_los.html" target="_blank" rel="noopener noreferrer">
              <ItemContent>
                <ItemTitle>Ich muss los</ItemTitle>
                <ItemDescription>
                  Veronika, Oyu
                </ItemDescription>
              </ItemContent>
              <ItemActions>
                <ChevronRightIcon className="size-4" />
              </ItemActions>
            </a>
          </Item>

          <Item asChild className="w-[90%] md:w-[20%]" variant='outline'>
            <a href="/twine/massnahme_d.html" target="_blank" rel="noopener noreferrer">
              <ItemContent>
                <ItemTitle>Maßnahme D</ItemTitle>
                <ItemDescription>
                  Johannes, Magnus 
                </ItemDescription>
              </ItemContent>
              <ItemActions>
                <ChevronRightIcon className="size-4" />
              </ItemActions>
            </a>
          </Item>

          <Item asChild className="w-[90%] md:w-[20%]" variant='outline'>
            <a href="/twine/1_schafft_flucht.html" target="_blank" rel="noopener noreferrer">
              <ItemContent>
                <ItemTitle>NUR 1% SCHAFFT DIESE FLUCHT?! (STASI SCHOCKIERT)</ItemTitle>
                <ItemDescription>
                  Jura, Jakob, Emilio
                </ItemDescription>
              </ItemContent>
              <ItemActions>
                <ChevronRightIcon className="size-4" />
              </ItemActions>
            </a>
          </Item>

          <Item asChild className="w-[90%] md:w-[20%]" variant='outline'>
            <a href="/twine/stasi_escape_room.html" target="_blank" rel="noopener noreferrer">
              <ItemContent>
                <ItemTitle>Stasi-Escape-Room</ItemTitle>
                <ItemDescription>
                  Leo, Emil
                </ItemDescription>
              </ItemContent>
              <ItemActions>
                <ChevronRightIcon className="size-4" />
              </ItemActions>
            </a>
          </Item>

          <Item asChild className="w-[90%] md:w-[20%]" variant='outline'>
            <a href="/twine/ein_familienurlaub_mit_folgen.html" target="_blank" rel="noopener noreferrer">
              <ItemContent>
                <ItemTitle>Ein Familienurlaub mit Folgen</ItemTitle>
                <ItemDescription>
                  Sza, Anneka
                </ItemDescription>
              </ItemContent>
              <ItemActions>
                <ChevronRightIcon className="size-4" />
              </ItemActions>
            </a>
          </Item>
      </div>
    </>
  );
}
