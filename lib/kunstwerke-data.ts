export interface Kunstwerk {
  id: string;
  src: string;
  alt: string;
  artist: string;
}

export const kunstwerkeData: Kunstwerk[] = [
  { id: "adrian", src: "/kunstwerke/Adrian.jpg", alt: "Kunstwerk von Adrian", artist: "Adrian" },
  { id: "ana-dumitrescu", src: "/kunstwerke/AnaDumitrescu1.jpg", alt: "Kunstwerk von Ana Dumitrescu", artist: "Ana Dumitrescu" },
  { id: "anna-sophia", src: "/kunstwerke/Anna_Sophia.jpg", alt: "Kunstwerk von Anna Sophia", artist: "Anna Sophia" },
  { id: "emil", src: "/kunstwerke/Emil.jpg", alt: "Kunstwerk von Emil", artist: "Emil" },
  { id: "emilio", src: "/kunstwerke/Emilio.jpg", alt: "Kunstwerk von Emilio", artist: "Emilio" },
  { id: "eyman-alex", src: "/kunstwerke/Eyman-Alex.jpg", alt: "Kunstwerk von Eyman und Alex", artist: "Eyman & Alex" },
  { id: "florian", src: "/kunstwerke/Florian.jpg", alt: "Kunstwerk von Florian", artist: "Florian" },
  { id: "jakob", src: "/kunstwerke/Jakob2.jpg", alt: "Kunstwerk von Jakob", artist: "Jakob" },
  { id: "johanna", src: "/kunstwerke/Johanna.jpg", alt: "Kunstwerk von Johanna", artist: "Johanna" },
  { id: "johannes", src: "/kunstwerke/Johannes.jpg", alt: "Kunstwerk von Johannes", artist: "Johannes" },
  { id: "jura", src: "/kunstwerke/Jura.jpg", alt: "Kunstwerk von Jura", artist: "Jura" },
  { id: "kerem-claas", src: "/kunstwerke/Kerem-Claas.jpg", alt: "Kunstwerk von Kerem und Claas", artist: "Kerem & Claas" },
  { id: "lennart", src: "/kunstwerke/Lennart.jpg", alt: "Kunstwerk von Lennart", artist: "Lennart" },
  { id: "leo-r", src: "/kunstwerke/LeoR.jpg", alt: "Kunstwerk von Leo R.", artist: "Leo R." },
  { id: "leo-t", src: "/kunstwerke/LeoT.jpg", alt: "Kunstwerk von Leo T.", artist: "Leo T." },
  { id: "magnus", src: "/kunstwerke/Magnus.jpg", alt: "Kunstwerk von Magnus", artist: "Magnus" },
  { id: "martin", src: "/kunstwerke/Martin.jpg", alt: "Kunstwerk von Martin", artist: "Martin" },
  { id: "mihael", src: "/kunstwerke/Mihael.jpg", alt: "Kunstwerk von Mihael", artist: "Mihael" },
  { id: "mohammed", src: "/kunstwerke/Mohammed.jpg", alt: "Kunstwerk von Mohammed", artist: "Mohammed" },
  { id: "oskar", src: "/kunstwerke/Oskar.jpg", alt: "Kunstwerk von Oskar", artist: "Oskar" },
  { id: "oyu", src: "/kunstwerke/Oyu.jpg", alt: "Kunstwerk von Oyu", artist: "Oyu" },
  { id: "pia", src: "/kunstwerke/Pia.jpg", alt: "Kunstwerk von Pia", artist: "Pia" },
  { id: "sza", src: "/kunstwerke/Sza.jpg", alt: "Kunstwerk von Sza", artist: "Sza" },
  { id: "tala-letizia", src: "/kunstwerke/Tala-Letizia.jpg", alt: "Kunstwerk von Tala und Letizia", artist: "Tala & Letizia" },
  { id: "tim", src: "/kunstwerke/Tim.jpg", alt: "Kunstwerk von Tim", artist: "Tim" },
];

export function getKunstwerk(id: string): Kunstwerk | undefined {
  return kunstwerkeData.find(werk => werk.id === id);
}
