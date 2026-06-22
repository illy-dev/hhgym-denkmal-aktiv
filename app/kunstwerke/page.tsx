"use client";

import { ArtworkItem } from "@/components/artwork-item";

export default function Kunstwerke() {
  const kunstwerke: { src: string; alt: string }[] = [
    { src: "/kunstwerke/Adrian.jpg", alt: "Kunstwerk von Adrian" },
    { src: "/kunstwerke/AnaDumitrescu1.jpg", alt: "Kunstwerk von Ana Dumitrescu" },
    { src: "/kunstwerke/Anna_Sophia.jpg", alt: "Kunstwerk von Anna Sophia" },
    { src: "/kunstwerke/Emil.jpg", alt: "Kunstwerk von Emil" },
    { src: "/kunstwerke/Emilio.jpg", alt: "Kunstwerk von Emilio" },
    { src: "/kunstwerke/Eyman-Alex.jpg", alt: "Kunstwerk von Eyman und Alex" },
    { src: "/kunstwerke/Florian.jpg", alt: "Kunstwerk von Florian" },
    { src: "/kunstwerke/Jakob2.jpg", alt: "Kunstwerk von Jakob" },
    { src: "/kunstwerke/Johanna.jpg", alt: "Kunstwerk von Johanna" },
    { src: "/kunstwerke/Johannes.jpg", alt: "Kunstwerk von Johannes" },
    { src: "/kunstwerke/Jura.jpg", alt: "Kunstwerk von Jura" },
    { src: "/kunstwerke/Kerem-Claas.jpg", alt: "Kunstwerk von Kerem und Claas" },
    { src: "/kunstwerke/Lennart.jpg", alt: "Kunstwerk von Lennart" },
    { src: "/kunstwerke/LeoR.jpg", alt: "Kunstwerk von Leo R." },
    { src: "/kunstwerke/LeoT.jpg", alt: "Kunstwerk von Leo T." },
    { src: "/kunstwerke/Magnus.jpg", alt: "Kunstwerk von Magnus" },
    { src: "/kunstwerke/Martin.jpg", alt: "Kunstwerk von Martin" },
    { src: "/kunstwerke/Mihael.jpg", alt: "Kunstwerk von Mihael" },
    { src: "/kunstwerke/Mohammed.jpg", alt: "Kunstwerk von Mohammed" },
    { src: "/kunstwerke/Oskar.jpg", alt: "Kunstwerk von Oskar" },
    { src: "/kunstwerke/Oyu.jpg", alt: "Kunstwerk von Oyu" },
    { src: "/kunstwerke/Pia.jpg", alt: "Kunstwerk von Pia" },
    { src: "/kunstwerke/Sza.jpg", alt: "Kunstwerk von Sza" },
    { src: "/kunstwerke/Tala-Letizia.jpg", alt: "Kunstwerk von Tala und Letizia" },
    { src: "/kunstwerke/Tim.jpg", alt: "Kunstwerk von Tim" },
  ];

  return (
    <>
      <div className="text-left p-6 pt-36">
        <h1 className="sm:text-3xl md:text-5xl font-bold max-w-[60%]">Kunstwerke von Schülern</h1>
        <p>Hier sind einige der Kunstwerke, die im Rahmen des Projekts an der East Side Gallery entstanden sind:</p>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
        {kunstwerke.map((werk, index) => (
          <ArtworkItem key={index} src={werk.src} alt={werk.alt} />
        ))}
      </div>
    </>
  );
}
