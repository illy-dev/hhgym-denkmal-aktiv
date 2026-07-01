import { Button } from "./ui/button";
import { ArrowUpIcon } from "@radix-ui/react-icons";
import { Separator } from "./ui/separator";

export function Footer() {
    return (
        <footer className="bg-[#0B1424] px-6 py-8">
            <div className="bg-background rounded-3xl p-10 md:p-14">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

                    <div>
                        <img 
                            src="/hhgym/logo-mit-schriftzug.png" 
                            alt="Heinrich-Hertz-Gymnasium"
                            className="w-86"
                        />

                        <p className="leading-relaxed">
                            Das Projekt an der East Side Gallery 
                            2025/26 wurde gefördert von denkmal aktiv - Kulturerbe macht Schule, dem Schulprogramm der Deutschen Stiftung Denkmalschutz
                        </p>

                        <Button className="mt-4 rounded-full p-5" asChild>
                            <a href="https://hhgym.de/die-berliner-mauer-symbol-der-freiheit-oder-eines-gefaengnisses/" target="_blank" rel="noopener noreferrer">
                                Dokumentation des Projekts
                            </a>
                        </Button>

                    </div>


                    <div>
                        <h3 className="font-bold mb-2">
                            STANDORT
                        </h3>
                        <Separator className="mb-8 h-1 w-[9%] bg-primary" />

                        <ul className="space-y-3">
                            <li>Heinrich-Hertz-Gymnasium</li>
                            <li>Rigaer Straße 81-82</li>
                            <li>10247 Berlin</li>
                        </ul>
                    </div>

                    <div className="flex flex-col">
                        <h3 className="font-bold mb-2">
                            SOCIAL
                        </h3>
                        <Separator className="mb-8 h-1 w-[9%] bg-primary" />

                            <a href="https://www.youtube.com/c/HeinrichHertzGymnasiumBerlin" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                YouTube →
                            </a>
                            <a href="https://www.instagram.com/hhgym_berlin" target="_blank" rel="noopener noreferrer" className="hover:underline mt-3">
                                Instagram →
                            </a>
                            <a href="https://x.com/hhgym_berlin" target="_blank" rel="noopener noreferrer" className="hover:underline mt-3">
                                X →
                            </a>
                    </div>

                    <div>
                        <h3 className="font-bold mb-2">
                            KONTAKT
                        </h3>
                        <Separator className="mb-8 h-1 w-[9%] bg-primary" />

                        <p className="leading-relaxed">
                            Öffungszeiten Sekretariat:<br/>
                            Mo.- Fr.: 08:00 - 14.00 Uhr<br/>
                        </p>

                        <p className="mt-3">
                            030 422 620 80
                        </p>

                        <p className="mt-3">
                            sekretariat@hhgym.de
                        </p>
                    </div>

                </div>

            </div>

            <div className="mt-12">

                <h3 className="text-white font-bold mb-8">
                    UNSERE PARTNER
                </h3>

                <div className="flex flex-row items-center justify-around">
                    <a href="https://www.denkmal-aktiv.de" target="_blank" rel="noopener noreferrer">
                        <img src="/logos/denkmal_aktiv.jpg" className="h-32 w-auto object-contain hover:opacity-80 transition" />
                    </a>
                    <a href="https://www.stiftung-berliner-mauer.de/de/east-side-gallery" target="_blank" rel="noopener noreferrer">
                        <img src="/logos/ESG.jpg" className="h-32 w-auto object-contain hover:opacity-80 transition" />
                    </a>
                    <a href="https://www.bundesarchiv.de" target="_blank" rel="noopener noreferrer">
                        <img src="/logos/bundesarchiv.png" className="h-32 w-auto object-contain hover:opacity-80 transition" />
                    </a>
                </div>

            </div>



            <div className="border-t border-gray-600 mt-10 pt-6 flex flex-col md:flex-row justify-between text-gray-300">
                <p>© Heinrich-Hertz-Gymnasium</p>

                <div className="space-x-6 mt-4 md:mt-0">
                    <a href="https://hhgym.de/impressum" className="hover:underline">
                        Impressum
                    </a>
                    <a href="https://hhgym.de/datenschutz" className="hover:underline">
                        Datenschutz
                    </a>
                </div>

                    <Button
                        className="mt-4 md:mt-0 rounded-full p-4"
                        asChild
                    >
                        <a href="#top" aria-label="Zum Seitenanfang scrollen">
                            <ArrowUpIcon />
                        </a>
                    </Button>
            </div>


        </footer>
    );
}