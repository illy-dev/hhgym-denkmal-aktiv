export interface Kunstwerk {
  id: string;
  src: string;
  alt: string;
  artist: string;
  mult_img: boolean;
  img2?: string;
  img3?: string;
  titel: string;
  body: string;
  original_src: string;
  original_alt: string;
  original_source: string;
}

export const kunstwerkeData: Kunstwerk[] = [
  { id: "adrian", src: "/kunstwerke/Adrian.jpg", alt: "Kunstwerk von Adrian", artist: "Adrian", mult_img: false,
    body: "",
    original_src: "/kunstwerke/original/diagonale.jpg",
    original_alt: "Diagonale Lösung des Problems",
    original_source: "Michail Serebrjakow, Diagonale Lösung des Problems, 2009 © Stiftung Berliner Mauer, Foto: Günther Schaefer",
    titel: "Diagonale Lösung des Problems – 2026"
    },
  { id: "ana-dumitrescu", src: "/kunstwerke/AnaDumitrescu1.jpg", alt: "Kunstwerk von Ana Dumitrescu", artist: "Ana Dumitrescu", mult_img: true, img2: "/kunstwerke/AnaDumitrescu2.jpg", img3: "/kunstwerke/AnaDumitrescu3.jpg",
    body: `
    Ich habe mir das Mauerbild ,,Wir haben versucht, Farben über die Mauer hinübergelangen zu lassen” von den Stellvertretenden Durstenden aus dem Jahr 1990 ausgesucht.
    Mir haben die Abstraktheit und die Kreativität, mit der das Mauerbild entstanden ist, sowie die Farbgebung gefallen. 

    Das Bild stellt mit Farbe, die von der anderen Mauerseite auf die Wand geworfen wurde, den Fall des Eisernen Vorhangs in Ungarn dar. Es repräsentiert die Sehnsucht nach Freiheit, Hoffnung, Angst und die Gefangenheit in der Vergangenheit. Dieser Mix an Emotionen sowie das auftreibende Gefühl beim Fall wird sowohl durch Technik als auch durch Farbe dargestellt. 

    Zuerst habe ich mir Informationen zum Fall des Eisernen Vorhangs in Ungarn herausgesucht. Dabei sind mir viele Bilder ins Auge gesprungen, weshalb ich mich für einen Mix aus Fotocollage und einer 3D-Mauer entschieden habe. 
    Ich wollte die Emotionen des Mauerbilds nämlich in eine reale Situation übertragen. 
    Deshalb habe ich mir Bilder als Primärquellen von Protesten und dem stalinistischen Diktator Mátyás Rákosi, der für hunderttausende Tote verantwortlich ist, herausgesucht. 
    Diese Bilder sollten an das Geschehen der Vergangenheit erinnern.
    Nun sollte aber auch die Hoffnung und Sehnsucht nach Frieden erkennbar sein. Ein klassisches Symbol dafür ist ein weißer Vogel. 
    Ich habe bewusst auf einen Vogel im eigentlichen Sinne verzichtet und stattdessen eine Klassenkameradin in weißer Kleidung fotografiert. Denn so können Gefühle besser transponiert werden.
    Im Hintergrund sieht man wortwörtlich einen ,,eisernen Vorhang”.
    Und zuletzt habe ich das Symbol des Kommunismus, Hammer und Sichel, eingefügt. Dieses ist bewusst in der Hand eines Protestierenden auf Mátyás Kehle gerichtet. Es zeigt, dass der Kommunismus, der zu seiner Macht verhalf, auch sein Fall ist.
    Farben habe ich nur bei Elementen verwendet, die herausstechen sollten, wie die Flaggen, Hammer und Sichel sowie der ,,Vogel”.
    Als nächstes sieht man eine Pappmauer, die recht heruntergekommen und instabil aussieht. Dies habe ich durch sehr viel (wirklich sehr viel) Tesafilm erreicht. Dies repräsentiert den langsam, aber stetigen Zerfall des menschenverachtenden Regimes.
    Innerhalb der Mauer sind kleine Protestschilder versteckt, die die Sehnsucht nach Frieden, Freiheit und mehr aussprechen.
    Auf der anderen Seite der Mauer habe ich eine Art Strichmännchenfigur aus Zahnstochern mit einem Farbeimer aufgeklebt. Dies ist der Künstler des originalen Werks. Gleichzeitig soll er auch das Volk und ihre Gefühle darstellen, weshalb er kein Gesicht und keine deutlich identifizierbaren Körpereigenschaften hat. 
    Mit seinem Farbeimer wirft er über die Mauer - auf die andere Seite. Dabei habe ich die Farbspritzer ähnlich wie auf dem Mauerbild auf die Fotocollage verteilt.
    Die partielle Verdeckung von Bildelementen zeigt, dass eine neue Ära anbricht. 
    Die Zeiten sind vorbei. Es besteht die Hoffnung auf einen Neuanfang.
    `,
    original_src: "/kunstwerke/original/wir_haben_versucht_farben.jpg",
    original_alt: "Wir haben versucht, Farben über die Mauer hinübergelangen zu lassen",
    original_source: "Stellvertretende Durstende, Wir haben versucht, Farben über die Mauer hinübergelangen zu lassen, 2009 © Stiftung Berliner Mauer, Foto: Günther Schaefer",
    titel: "Wir haben versucht, Farben über die Mauer hinübergelangen zu lassen – 2026"
   },
  { id: "anna-sophia", src: "/kunstwerke/Anna_Sophia.jpg", alt: "Kunstwerk von Anna und Sophia", artist: "Anna & Sophia", mult_img: false,
    body: `
    Als Dialogpartner für unser Projekt haben wir das Kunstwerk von Ditmar Reiter „ohne Titel“ genutzt. Das Motiv ist ein grüner Wald aus der Perspektive eines Spaziergängers. 
    Das Werk ist sehr schlicht gehalten, mit hauptsächlich Grün- und Brauntönen und nur minimalen Kontrasten. Dieses Bild hat uns angesprochen, weil es eine ruhige und angenehme Atmosphäre schafft. In kleinen schwarzen Buchstaben steht dezentral geschrieben: „So stark / Und doch verletzbar / Das Volk, der Wald / Der Mensch, der Baum.“ Es thematisiert also Zusammenhalt und die Stärke, die daraus entsteht.
    
    In unserem Projekt haben wir das Thema Stärke erneut aufgegriffen und uns der Frage gewidmet: „Was macht uns stark?“ — vor allem bezogen auf unsere Gesellschaft. Diese Frage bildet auch den Titel unseres Projekts. Um sie zu beantworten, wollten wir mit verschiedenen Symbolen arbeiten: für Frieden, Liebe, Mut und Diversität. Das zentrale Motiv des Baumes haben wir als dreidimensionales Objekt aus Pappe umgesetzt. Die Farbenfreude des Baumes steht für Diversität und für die Stärke, die aus unseren Unterschieden hervorgeht. An dem Baum hängen kleine Linoldrucke mit Symbolen zu den bereits genannten Themen. Wir haben Linoldruck gewählt, weil er betont, dass der Aufbau von Stärke Zeit und Geduld braucht.
    
    Unser Werk soll vermitteln, dass es nicht einfach ist, stark zu sein, und dass wir alle mithelfen müssen, unsere Gesellschaft und den Zusammenhalt zu stärken — vor allem, weil alles seine Zeit braucht. Wir möchten zeigen, dass wir gemeinsam wachsen können, wenn wir aufeinander achten. Unser Wunsch ist, dass dieses Kunstwerk in den Menschen Hoffnung weckt. Denn auch wenn es schwer ist, Stärke zu finden, ist sie doch immer da: in jeder liebevollen Geste, in jedem helfenden Wort, in jeder friedvollen Lösung eines Konflikts. Wir hoffen, dieses Werk kann daran erinnern.
    `,
    original_src: "/kunstwerke/original/ohne_titel.jpg",
    original_alt: "Ohne Titel",
    original_source: "Ditmar Reiter, Ohne Titel, 2009 © Stiftung Berliner Mauer, Foto: Günther Schaefer",
    titel: "Was macht uns stark?"
  },
  { id: "emil", src: "/kunstwerke/Emil.jpg", alt: "Kunstwerk von Emil", artist: "Emil", mult_img: false, 
    body: `
    Rosemarie Schinzlers „Wachsen lassen“ zählt zu den eindrücklichsten Arbeiten der East Side Gallery: Ein Betonhohlkörper in der Mauer beherbergt ein Bäumchen aus ihrem Garten. Anders als viele flächige Wandbilder bringt dieses Werk reale Dreidimensionalität und die lebendige Kunst der Natur zusammen. Das zierliche Gewächs symbolisiert den Mut zum Aufbruch in eine unbekannte Welt, die noch viel zu geben hat. Das angedeutete weiße Herz in der Bildmitte verweist auf Nächstenliebe; mit dem Appell „Wachsen lassen“ ruft Schinzler dazu auf, das Lebendige zu achten und zu bewahren. 

    Dieses Motiv berührt mich, weil es Zuversicht, innere Stärke und Entschlusskraft ausstrahlt — die Hoffnung, dass aus Kleinem Großes entstehen kann. Auch unscheinbare Lebewesen verdienen Schutz, damit sie zu neuer Kraft heranwachsen können. 

    In meinem Beitrag habe ich das Original in die Gegenwart geholt: die Pflanze ist gewachsen. Ruhe und Fürsorge haben ihr neue Energie gegeben; ihr Aufbruch ist jetzt kraftvoller und sichtbarer. Sie durchbricht die starren Grenzen der Mauer und macht so die Dynamik des Lebens erfahrbar. In meiner Arbeit wächst die Pflanze nicht nur symbolisch: Sprossachse und Blattwerk breiten sich aus, selbst eine kleine weiße Blüte — als Verweis auf das Herz im Original — bahnt sich ihren Weg. Dadurch verändert sie nicht nur das Bild; sie formt die Umgebung neu und löst die Mauer in ihrer Struktur auf.

    Farblich setzte ich bewusst auf starke, kontrastreiche Töne: Vorherrschend sind Blautöne, entlehnt am Original, die sich mit satten, dunklen Grauschichten der Mauer kontrastieren. Die Mauer zerfällt unter der aufstrebenden Kraft; die Pflanze leuchtet in einem vitalen Grün. Die Materialwahl — Pappe und Pappmaché — bildet die haptische Grundlage. Acryl, Schwamm-Tupfen und Einritzungen erzeugen die raue, brüchige Textur der Mauer; die markanten Farbkontraste betonen Risse, Bewegung und Symbolik. 

    Grenzen mögen existieren und unüberwindlich erscheinen, doch mit Ruhe, Nächstenliebe und Zuversicht lässt sich das Unmögliche überwinden. Ich lade Betrachter:innen ein, sich mit der Pflanze zu verbinden — ihren langen Weg zu erahnen, die stille Kraft zu spüren, die aus Geduld und Fürsorge entsteht, und so das Potenzial des Unscheinbaren zu erkennen.
    `,
    original_src: "/kunstwerke/original/wachsen_lassen.jpg",
    original_alt: "Wachsen lassen",
    original_source: "Rosemarie Schinzler, Wachsen lassen, 2009 © Stiftung Berliner Mauer, Foto: Günther Schaefer",
    titel: "Ruhe und Kraft"
  },
  { id: "emilio", src: "/kunstwerke/Emilio.jpg", alt: "Kunstwerk von Emilio", artist: "Emilio", mult_img: false,
    body: `
    Ich habe das Bild „Es geschah im November“ von Kani Alavi gewählt. Mich hat sofort das Motiv der Mauer mit einer Menschenmasse angesprochen.

    Es zeigt die Berliner Mauer, die von der unteren linken Ecke bis zur oberen rechten Ecke verläuft; in der Mitte ist sie jedoch aufgebrochen, und eine Menschenmenge dringt durch die Lücke in Richtung des Betrachters. Das Werk spiegelt die Nacht des 9. November 1989 wider, in der die Mauer fiel, und zeigt die Menschen aus dem Osten, die nach langer Zeit der Einsperrung in den Westen dürfen. Die Gesichter der Menschen wirken besorgt oder verängstigt, weil sie die Erfahrungen der Zeit vor dem Mauerfall widerspiegeln. Viele Menschen aus der DDR lebten jahrzehntelang mit Einschränkungen, Überwachung und der Trennung von Familie und Freunden im Westen. Der Moment des Mauerfalls war deshalb nicht nur ein Grund zur Freude, sondern auch ein überwältigender und ungewohnter Augenblick voller Unsicherheit.

    Während Kani Alavis Werk den Moment zeigt, in dem eine Mauer geöffnet wird und Menschen ihre Freiheit zurückgewinnen, zeigt meine Neuinterpretation das Gegenteil. Die Mauer bleibt geschlossen. Die Menschen auf der anderen Seite können die Grenze nicht überwinden und bleiben von ihrem Ziel getrennt. Dadurch verändert sich die ursprüngliche Aussage des Bildes. Aus einem Symbol für Befreiung und Hoffnung wird ein Symbol für Begrenzung, Ausgrenzung und das Warten auf eine Möglichkeit, ein neues Leben beginnen zu können. 

    Bei der Umsetzung habe ich mich auf Acrylfarben beschränkt. Die Mauer wird am Ende über das Bild gelegt und mit Kreppband abgeklebt, damit gerade Linien entstehen. Dadurch wirkt die Grenze kontrolliert, streng und unüberwindbar. Gleichzeitig bleiben die Menschen durch die Spalten zwischen den Gitterstäben sichtbar. Sie wirken dadurch nicht verschwunden, sondern weiterhin eingeschlossen auf ihrer Seite der Grenze. Die Gitterstäbe erzeugen eine Distanz, machen aber gleichzeitig deutlich, dass sich hinter der Grenze einzelne Menschen mit eigenen Geschichten und Hoffnungen befinden. 

    Mit meinem Werk wollte ich an nach wie vor bestehende Mauern erinnern, die Länder trennen und Menschen an ihrem Standort festhalten. Besonders am Beispiel der mexikanisch-amerikanischen Grenze, an der Menschen aus Süd- und Mittelamerika versuchen, in die USA zu gelangen, wird deutlich, dass Mauern nicht nur aus Beton bestehen, sondern auch politische und gesellschaftliche Grenzen darstellen. Viele Menschen verlassen ihre Heimat, weil sie sich ein sichereres Leben, bessere Zukunftschancen oder Schutz vor schwierigen Lebensbedingungen erhoffen. Der Weg in ein anderes Land ist jedoch oft mit großen Risiken verbunden, da Menschen ohne legale Einreisemöglichkeiten auf gefährliche Fluchtwege angewiesen sind und häufig jahrelang in Unsicherheit leben. weil sie sich ein besseres Leben erhoffen. Der Betrachter soll durch das Bild zum Nachdenken über das Thema illegale Migration angeregt werden.
    `,
    original_src: "/kunstwerke/original/es_geschah_im_november.jpg",
    original_alt: "Es geschah im November",
    original_source: "Kani Alavi, Es geschah im November, 2009 © Stiftung Berliner Mauer, Foto: Günther Schaefer",
    titel: "Es geschieht in Mexiko"
   },
   { id: "eymen-alex", src: "/kunstwerke/Eymen-Alex.jpg", alt: "Kunstwerk von Eymen und Alex", artist: "Eymen & Alex", mult_img: false,
    body: `    
    Für unseren künstlerischen Dialog haben wir das Mauerbild von Peter Lorenz gewählt. Dieses Werk hat uns besonders angesprochen, weil es den Mauerfall nicht nur als historisches Ereignis darstellt, sondern auch die politischen Veränderungen und Unsicherheiten dieser Zeit sichtbar macht. Besonders interessant fanden wir die Verbindung von Hoffnung, Chaos und Neuanfang, die im Originalbild deutlich wird. Deshalb wollten wir uns mit den Ursachen der Teilung Berlins und der Rolle der Supermächte im Kalten Krieg auseinandersetzen. Das Werk entstand 1990 als Teil der East Side Gallery. Es zeigt in einer abstrakten Komposition den Fall der Berliner Mauer und die politischen Umbrüche dieser Zeit. In der linken Bildhälfte sind das Brandenburger Tor sowie Fragmente der Flaggen Deutschlands, der USA und Russlands zu erkennen. Die rechte Bildhälfte symbolisiert Chaos, Zusammenbruch und den anschließenden Neuanfang. Peter Lorenz thematisiert damit das Ende alter Ideologien und die Veränderungen, die der Mauerfall mit sich brachte. Das Bild steht somit für Freiheit, Wandel und die Überwindung politischer Grenzen. In unserer Arbeit haben wir die Grundidee des Originals aufgegriffen und weiterentwickelt. Während Peter Lorenz vor allem die Folgen des Mauerfalls darstellt, beschäftigen wir uns stärker mit den politischen Kräften hinter der Teilung Berlins. Das Bild ist durch eine klare Komposition in zwei Hälften gegliedert. Auf der linken Seite befindet sich West-Berlin mit dem KaDeWe und dem Olympiastadion. Die rechte Seite zeigt Ost-Berlin mit dem Fernsehturm und dem Brandenburger Tor als bekannte Wahrzeichen. Über beiden Stadthälften schweben Hände. Sie symbolisieren die USA und die UdSSR, die während des Kalten Krieges großen Einfluss auf Berlin ausübten. Die Hände steuern die Menschen und sogar die Sehenswürdigkeiten wie Marionetten. Durch diese Symbolik möchten wir verdeutlichen, dass Berlin nicht nur eine geteilte Stadt war, sondern auch zum Schauplatz eines globalen Machtkampfes wurde. Für die Gestaltung verwenden wir Acrylfarben auf DIN-A2-Format. In die Sehenswürdigkeit darzustellen haben wir Pappe benutzt um eine dreidimensionalit herzustellen. Die übergroßen Hände bilden dabei den Mittelpunkt des Bildes und lenken den Blick auf die politische Aussage. Uns war wichtig, historische Fakten mit einer eigenen Interpretation zu verbinden. Das Thema hat für uns auch heute noch Bedeutung. Obwohl die Berliner Mauer längst verschwunden ist, beeinflussen politische Konflikte und Machtkämpfe weiterhin das Leben vieler Menschen. Durch unsere Veränderung des Originals wollten wir zeigen, dass hinter historischen Ereignissen oft Interessen großer Staaten stehen, deren Auswirkungen die Bevölkerung unmittelbar spürt. Unsere Arbeit soll die Betrachterinnen und Betrachter dazu anregen, über Freiheit, politische Einflussnahme und die Bedeutung der deutschen Wiedervereinigung nachzudenken. Gleichzeitig soll sie verdeutlichen, wie wichtig es ist, aus der Geschichte zu lernen und demokratische Werte zu schützen.
    `,
    original_src: "/kunstwerke/original/ohne_titel_peter.jpg",
    original_alt: "Ohne Titel",
    original_source: "Peter Lorenz, Ohne Titel, 2009 © Stiftung Berliner Mauer, Foto: Günther Schaefer",
    titel: "Geteilte Macht"
   },
  { id: "florian", src: "/kunstwerke/Florian.jpg", alt: "Kunstwerk von Florian", artist: "Florian", mult_img: false,
    body: `
    Das Bild von Thierry Noir mit seinen bunten, einfachen Köpfen hat mich sofort angesprochen. Die Figuren sind sehr reduziert und wirken fast kindlich. Trotzdem haben sie eine starke Präsenz. Noir setzte Farbe und Wiederholung ein, um der grauen Mauer etwas Menschliches und Widerständiges entgegenzustellen. Diese Kombination aus klarer Bildsprache und politischer Dringlichkeit wollte ich in die Gegenwart holen.
    
    Noirs Werk zeigt eine Reihe abstrakter, stilisierter, farbiger Köpfe, dicht aneinandergereiht auf der Mauer. Die Figuren sind flächig und in kräftigen Farben gehalten. Sie stehen symbolisch für die junge Generation, für Hoffnung, Zusammenhalt sowie die Forderung nach Demokratie und Frieden. Durch die ständige Wiederholung entsteht Bewegung, die die trennende Wirkung der Mauer fast aufhebt.
    
    Ich habe Noirs Motiv übernommen und inhaltlich verschoben: Gleiche Köpfe, aber in ungleichen Räumen. Auf einem großformatigen Blatt habe ich die Fläche mehrfach mittig geteilt, orientiert am Goldenen Schnitt, sodass unterschiedlich große Felder entstanden, die sich spiralförmig anordnen. In jedes Feld habe ich einen Kopf gesetzt, der Noirs Bildsprache nahekommt. Die verschiedenen Feldgrößen stehen für ungleiche Lebens‑ und Entwicklungschancen, denen junge Menschen heute trotz gleicher Identität begegnen. Die Komposition arbeitet mit Rhythmus und Wiederholung, bricht die Harmonie aber bewusst durch ungleiche Proportionen. So wird soziale Ungleichheit sichtbar.
    
    Die Farben bleiben dem Original treu: Leuchtende, vielfältige Töne stehen für Diversität und Lebendigkeit. Durch die wiederholte Anordnung entsteht eine Balance zwischen Gemeinschaft und Zerlegung in einzelne Teile. Mir war wichtig, Noirs einfache, ikonische Bildsprache zu respektieren und zugleich eine kritische Aktualisierung vorzunehmen, die auf heutige soziale Unterschiede hinweist.
    
    Das Thema ist für mich sehr aktuell. Junge Menschen wachsen heute in einer Welt auf, in der Chancen und Räume durch strukturelle Ungleichheiten oft ungerecht verteilt sind. Ich habe bewusst Noirs Bildsprache gewählt, weil sie leicht zugänglich ist und Raum für eigene Deutungen lässt. Mein Werk soll nicht belehren, sondern zum Nachdenken anregen: Es soll die Betrachterinnen und Betrachter dazu bringen, über die Verteilung von Chancen nachzudenken und die eigene Rolle in gesellschaftlichen Strukturen zu hinterfragen.
    
    Noirs Bild wirkt, als wären die Räume für alle gleich. In meinem Werk nutze ich diese Räume bewusst als Metapher für Chancen und stelle dem die heutige Realität gegenüber: Chancen und Räume sind oft ungleich und unfair verteilt. Ich möchte damit zum Nachdenken anregen und zeigen, dass wir die Rahmenbedingungen so verändern müssen, dass wirklich alle dieselben Möglichkeiten bekommen.
    `,
    original_src: "/kunstwerke/original/hommage.jpg",
    original_alt: "Hommage an die junge Generation",
    original_source: "Thierry Noir, Hommage an die junge Generation, 2009 © Stiftung Berliner Mauer, Foto: Günther Schaefer",
    titel: "Aktualisierte Hommage an die junge Generation – 2026"
   },
  { id: "jakob", src: "/kunstwerke/Jakob2.jpg", alt: "Kunstwerk von Jakob", artist: "Jakob", mult_img: true, img2: "/kunstwerke/Jakob.jpg",
    body: `
    Yomas „Berlin bei Nacht“ ist zugleich düster und leicht hoffnungsvoll. Ein gewundener Pfad führt aus dunklen Feldern auf eine Stadt zu, die in warmem Gelb-Orange gegen das vorherrschende Blau leuchtet. Der Weg — dunkelgelb bis schwarz — schlängelt sich durchs Gras; links liegt eine rote Coladose, rechts glimmt eine Zigarette. Über der Stadt wölbt sich ein gewaltiger Drachenkopf, dreimal so hoch wie die Stadt, aus dessen Nüstern Flammen züngeln. Neben ihm schwebt ein von leuchtenden Ringen umgebenes kleines Gestirn, dessen Ringe am Bildrand verschwinden; der sternenübersäte Himmel verstärkt die surreale Szenerie.
    
    Für Yoma steht der Drache als Metapher: Geld- und Machtgier, Umweltzerstörung und Hass. Die verstreuten Abfallzeichen — Dose, Zigarette — verdichten diese Lesart; der Kosmos dagegen signalisiert einen Ausweg: das Wiederfinden eines Gleichgewichts und das Besinnen auf das Gemeinwohl. Das Bild ist ein Appell, aus kollektiven Fehlern zu lernen.
    
    Ich habe das Motiv aktualisiert und in den Raum übertragen, um zu zeigen, dass wir heute klarere Einsichten in die Ursachen vieler Probleme haben. Neben Acrylfarbe kamen Pappe, Holz, Modelliermasse und farbiges Transparentpapier zum Einsatz. Die Umweltverschmutzung habe ich verstärkt dargestellt — sie ist inzwischen realer und sichtbarer. Ein Flammenbündel zerstört die Stadt, ein anderes wird durch Wasser abgeschwächt: Symbolik für bereits eingeleitete Gegenmaßnahmen, die jedoch nicht alle Bedrohungen abschwächen können. Um diese Aussage in die Zukunft auszudehen habe ich auf der gegenüberliegenden Seite ein dreigeteiltes Himmelssegment angebracht: eine über den Horizont lugende Sonne als zarte Hoffnung, eine mittlere, rötlich-graue Wolkenfront als Warnung vor drohender Katastrophe, und ein nächtliches Planetenszenario, ähnlich wie im Original das Besinnen auf das Gute, jedoch durch einen weiteren Himmel zusätzlich das Träumen von einer besseren Zukunft ausdrücken soll. Farblich bleibt das Werk dem Original verpflichtet — dunkle Blau- und Grüntöne — doch treten mehr Rottöne und sichtbarer Abfall hervor, um Dringlichkeit zu signalisieren.
    
    Mein Anliegen ist klar: Es ist noch nicht zu spät. Hoffnung besteht — aber das Tempo reicht nicht. Nur durch aktives Handeln und das beachten der Zukunft lässt sich das Übel bändigen.
    `,
    original_src: "/kunstwerke/original/berlin_bei_nacht.jpg",
    original_alt: "Berlin bei Nacht",
    original_source: "Yvonne Onischke (Yoma), Berlin bei Nacht, 2009 © Stiftung Berliner Mauer, Foto: Günther Schaefer",
    titel: "Berlin bei Nacht – 2026"
   },
  { id: "johanna", src: "/kunstwerke/Johanna.jpg", alt: "Kunstwerk von Johanna", artist: "Johanna", mult_img: true, img2: "/kunstwerke/Johanna2.jpg",
    body: `
    Als Ana Rodrigues ihr Werk „Ohne Titel“ an die Wand der Berliner Mauer malte, spielte sie auf ein wichtiges Thema an, das damals sowie heute als Warnung gelten sollte. Es fiel mir sofort ins Auge, denn die düstere Farbgebung zog mich, anders als andere Arbeiten an der Mauer, in den Bann. Das Bild zeigt einen kargen, dunklen Boden, auf dem eine Menschengruppe zentral in Umhängen und Gasmaske verharrt. Abseits von ihnen bewegt sich eine weitere Person Richtung Bildrand. Beleuchtet werden sie von einer nicht sichtbaren Lichtquelle, die sie hell in einem Kontrast gegen den Hintergrund hebt. Rodrigues nimmt damit Bezug auf den Reaktorunfall von Tschernobyl 1986, der die Welt erschütterte.
    
    Für mich stellte sich die Frage, wie ich dieses Bild gestalterisch neu interpretieren und in einen künstlerischen Dialog treten könnte. Rodrigues thematisiert besonders durch die karge, fast tote Landschaft, die Folgen für die Umwelt und wie der Mensch langfristig mit einer solchen Katastrophe leben müsste, wenn wir Leben und Umwelt zerstören. Diese Aussage ist im Bild klar erkennbar; deshalb wollte ich einen anderen Aspekt in den Mittelpunkt rücken: den Menschen selbst. Was fühlt er? Was treibt ihn an, weiterzumachen? Wie viel Schuld trägt jede einzelne Person an der Zerstörung? Für meine Metapher entwickelte ich eine dreidimensionale Umsetzung. Ich fertigte Figuren aus Aluminium an, weil sich das Material leicht formen lässt; anschließend überzog ich sie mit Pappmaché und bemalte sie so, dass die Schatten, die im Originalbild den Figuren ein leichtes Aussehen geben, durch minimale Details schwerfällig wirken, ähnlich wie Steine im Sonnenlicht, um die schwere Belastung der Menschen auf die Erde darzustellen. In die größte Figur, die so wirkt, als laufe sie aus dem Bildrand, setzte ich ein kleines Loch und platzierte darin eine schlichte Knetfigur, die in Richtung des gedachten Bildrands weist. Beim Betrachten des originalen Bildes fragte ich mich: „Was befindet sich hinter diesem Rand?“ Ich stellte mir vor, dass dort etwas sein muss, wonach die Gestalt strebt. Deshalb baute ich als Bilderweiterung einen kleinen, aus Draht und Pappmaché geformten, ausgetrockneten Baum und hing eine leuchtende Laterne daran. Dreht man die Arbeit sieht man, wie die kleine Figur im Inneren des verhüllten Menschen auf die Laterne zeigt. Der Mensch strebt nach Hoffnung und entdeckt das Licht, das ihm helfen kann zu überleben, ungeachtet von Schuld oder Unschuld. Am Ende wollen wir alle einfach leben.
    
    Die ursprüngliche Warnung des Bildes — dass sich die Menschheit nur wenige Katastrophen wie Tschernobyl leisten kann — bleibt aktuell und politisch relevant. Mit meiner Plastik unterstütze ich diesen Appell, füge aber einen weiteren Gedanken hinzu: den inneren Drang zu überleben, der oft zu spät erwacht. Davor sollten wir uns schützen. Mein Werk will das Bewusstsein der Betrachter erweitern, damit sie im Alltag achtsamer werden: Handelt die menschliche Gestalt in ihnen oder der von Gesellschaft und Macht geprägte, destruktive Teil, der solche Katastrophen, wie der Reaktorunfall in der Vergangenheit, erst möglich machte? 
    `,
    original_src: "/kunstwerke/original/ohne_titel_ana.jpg",
    original_alt: "Ohne Titel",
    original_source: "Ana L. M. Rodrigues, Ohne Titel, 2009 © Stiftung Berliner Mauer, Foto: Günther Schaefer",
    titel: "Katastrophe"
   },
  { id: "johannes", src: "/kunstwerke/Johannes.jpg", alt: "Kunstwerk von Johannes", artist: "Johannes", mult_img: false,
    body: `
    Rainer Jehles Mauerbild „Denk‑Mal, Mahn‑Mal“ lässt die Begriffe „Wohlstand“, „Freiheit“ und „Ich“ nur fragmenthaft hinter einer roten Fläche aufscheinen. Die Szene funktioniert als Wahrnehmungsspiel: Vor einem himmelblauen Hintergrund sind Wörter teilweise verdeckt, im Vordergrund trennt eine rot-schwarze Fläche mit halb geöffnetem Reißverschluss das Sichtbare vom Verborgenen. In den Wendejahren der 1990er standen diese Begriffe für Hoffnungen und Ziele — sie wirken im Bild wie noch nicht erreichte Fixpunkte, sichtbar, aber erst erreichbar, wenn die Barriere verschwindet und somit zum Greifen nahe.
    
    Das Werk berührt mich, weil es zentrale Fragen jener Zeit zugleich sichtbar und widersprüchlich macht. Es nutzt die Komposition, um die Umstände der Zeit aufzuzeigen und spielt mit den Hoffnungen und Fragen der Leute.
    
    Jehles Komposition verdeutlicht, wie politische und persönliche Erwartungen hinter Oberflächen verborgen liegen. Das Bild ist dabei unspektakulär im Auftritt, aber prägnant in der Aussage.
    
    In meiner Auseinandersetzung übernehme ich die Grundidee, verändere jedoch die Anordnung: Die himmelblauen Wortfelder haben ihre Position mit der von mir konstruierten Barriere getauscht. So lese ich die Arbeit als Aktualisierung — nicht die Trennung ist mehr der vorherrschende Zustand, sondern der Fortbestand der Werte selbst. Die Farbgebung habe ich kaum verändert; stattdessen erhöhte ich die Zahl der Schlagworte und baute die Barriere aus Mauerstücken. Dadurch erscheint der Bestand von Freiheit, Wohlstand und Gerechtigkeit als gegenwärtiger Umstand, während die Trennung die drohende, aber noch greifbare Zukunft markiert. 
    Für mich spiegelt die Arbeit die Gegenwart wider: eine Welt, in der Grenzen sich verhärten und Identitäten neu verhandelt werden. Die drängenden Fragen nach Ich, Freiheit und Gerechtigkeit sind so aktuell wie lange nicht — und doch bleibt eine alternative Zukunft möglich; der Reißverschluss steht hier als Metapher für eine verhinderbare Entwicklung, gegen die es sich zu engagieren lohnt.
    `,
    original_src: "/kunstwerke/original/denk-mal.jpg",
    original_alt: "Denk-Mal, Mahn-Mal",
    original_source: "Rainer Jehle, Denk-Mal, Mahn-Mal, 2009 © Stiftung Berliner Mauer, Foto: Günther Schaefer",
    titel: "Denk-Mal, Mal-mal"
  },
  { id: "jura", src: "/kunstwerke/Jura.jpg", alt: "Kunstwerk von Jura", artist: "Jura", mult_img: false,
    body: `
    Für meinen künstlerischen
    Dialog habe ich das
    East-Side-Gallery-Gemälde
    „Es geschah im November“
    von Kani Alavi ausgewählt.
    An diesem Werk fasziniert mich
    besonders, wie eindringlich der
    Künstler den historischen
    Moment des Mauerfalls
    veranschaulicht und die damit
    verbundenen Emotionen an den
    Betrachter vermittelt.
    
    Das Gemälde zeigt eine dichte, gedrängte Menschenmasse, die durch eine Öffnung der
    Berliner Mauer strömt. Die Gesichter der Figuren sind stark abstrahiert und wirken wie
    Masken, die eine Vielzahl von Emotionen widerspiegeln. Während im Hintergrund düstere
    Töne dominieren, wird das Bild durch ein helles Licht erhellt, welches genau auf die
    Maueröffnung fällt. Die Gesichter selbst sind in auffallend warmen Farben gestaltet. Das
    Werk fängt neben der Euphorie über die gewonnene Freiheit auch die existenzielle
    Ungewissheit der Zukunft ein. Der Künstler verarbeitet hier die Gefühle und Eindrücke der
    Menschen, wie sie den Mauerfall damals miterlebt haben.
    
    In meiner eigenen Arbeit habe ich mich kreativ mit Alavis Motiven auseinandergesetzt und
    das historische Motiv der Mauer als trennendes Element in unsere Gegenwart übertragen.
    Meiner Ansicht nach stellen Smartphones heute ein Symbol der Abgrenzung dar, welches in
    unserer Gesellschaft stark diskutiert wird. In meiner Neuinterpretation schließt sich die
    Mauer wieder und nimmt die Form eines Smartphones an, auf dessen Display das
    ursprüngliche Mauerbild zu sehen ist. Zudem wird die Menschenmasse durch Profilbilder
    dargestellt, was die Anonymität in den digitalen Medien verdeutlichen soll.
    Das Werk habe ich als dreidimensionales Objekt gestaltet. Das Smartphone ragt bewusst in
    den Raum hinein und wird so zu einer tatsächlichen Barriere. Das Gehäuse besteht aus
    Pappe, die obere Rundung wurde mithilfe einer Küchenpapierrolle geformt, um den Bezug
    zur Berliner Mauer herzustellen. Der Hintergrund ist mit Acrylfarbe gestaltet, die die
    Atmosphäre des Originals aufgreift. Die Profilbilder sind auf Pappe montiert und in das
    Kunstwerk eingefügt, um die Distanz der digitalen Kommunikation sichtbar zu machen.
    
    Die Aktualität meines Werks liegt in der heutigen, oft sehr intensiven und umstrittenen
    Smartphone-Nutzung. Es soll uns vor Augen führen, dass wir wieder mehr im realen Leben
    miteinander teilen und, genau wie die Menschen beim Mauerfall, wieder mehr echte
    Gemeinschaft erleben sollten.
    `,
    original_src: "/kunstwerke/original/es_geschah_im_november.jpg",
    original_alt: "Es geschah im November",
    original_source: "Kani Alavi, Es geschah im November, 2009 © Stiftung Berliner Mauer, Foto: Günther Schaefer",
    titel: "Getrennt durch Verbindung"
  },
  { id: "kerem-claas", src: "/kunstwerke/Kerem-Claas.jpg", alt: "Kunstwerk von Kerem und Claas", artist: "Kerem & Claas", mult_img: false, 
    body: `
    Für unseren künstlerischen Dialog haben wir das Mauerbild „Test the Rest“ von Birgit Kinder ausgewählt. Das Bild hat uns sofort angesprochen, weil es sehr dynamisch wirkt und eine starke Botschaft vermittelt. Der Trabant, der scheinbar durch die Mauer fährt, steht für Freiheit, Veränderung und den historischen Umbruch in Deutschland. Besonders interessant fanden wir die Kombination aus realistischer Darstellung und symbolischer Bedeutung.
    s
    Das Mauerbild zeigt einen weißen Trabant, der mit großer Kraft durch eine Mauer bricht. Um das Auto herum sind Risse und herausgebrochene Mauerstücke zu sehen, wodurch der Eindruck entsteht, dass der Wagen direkt auf die Betrachterinnen und Betrachter zufährt. Der Titel „Test the Rest“ spielt auf die Zeit nach dem Fall der Berliner Mauer an. Das Werk symbolisiert die Überwindung von Grenzen und den Wunsch nach Freiheit. Gleichzeitig erinnert es an die deutsche Geschichte und den gesellschaftlichen Wandel nach 1989. Durch die Perspektive und die plastische Wirkung wirkt das Bild besonders lebendig und eindrucksvoll.
    
    In unserem eigenen Werk haben wir den Trabant dreidimensional aus Pappe nachgebildet. Anders als im Original fährt er jedoch nicht durch eine Mauer, sondern durch eine große Wolke aus Abgasen. Hinter dem Fahrzeug befindet sich eine moderne Großstadt mit zahlreichen Gebäuden. Durch diese Veränderung aktualisieren wir die ursprüngliche Aussage des Werkes und lenken den Blick auf den Klimawandel sowie die Umweltverschmutzung in Städten.
    Für die Umsetzung verwenden wir Pappe für den Trabant und Watte für die Abgaswolke. Die dreidimensionale Gestaltung sorgt dafür, dass das Werk räumlich wirkt und die Aufmerksamkeit der Betrachtenden auf sich zieht. Die Watte verdeutlicht die Größe und Dichte der Abgase und schafft gleichzeitig einen starken Kontrast zur klaren Form des Fahrzeugs.
    Mit unserem Werk möchten wir zeigen, dass Fortschritt nicht nur Chancen, sondern auch Herausforderungen mit sich bringt. Während der Trabant im Original für Freiheit und Aufbruch steht, verweist er in unserer Interpretation auf die Folgen von Verkehr und Umweltbelastung.
    
    Das Thema Klimawandel hat für uns heute eine große Bedeutung, da seine Auswirkungen bereits weltweit spürbar sind. Uns war wichtig, dieses aktuelle Problem mit einem bekannten historischen Symbol zu verbinden. Unsere Arbeit soll die Betrachterinnen und Betrachter dazu anregen, über ihr eigenes Verhalten und die Zukunft unserer Umwelt nachzudenken. Die Botschaft unseres Werkes lautet, dass gesellschaftlicher Fortschritt immer auch Verantwortung für Mensch und Natur bedeutet.
    `,
    original_src: "/kunstwerke/original/test_the_rest.jpg",
    original_alt: "Test the Rest",
    original_source: "Birgit Kinder, Test the Rest, 2009 © Stiftung Berliner Mauer, Foto: Günther Schaefer",
    titel: "Test the Rest – 2026"
  },
  { id: "lennart", src: "/kunstwerke/Lennart.jpg", alt: "Kunstwerk von Lennart", artist: "Lennart", mult_img: false,
    body: `
    Für das Projekt zur East Side Gallery habe ich das Mauerbild „Amnesty International in der DDR“ von Andrej Smolák ausgewählt, weil mich seine Farbgestaltung und die verwendeten Symbole sofort angesprochen haben. Das Werk zeigt eine gefesselte Hand hinter Gitterstäben. An ihrem Handgelenk befindet sich eine schwere Kette, deren Eisenkugel als Rose dargestellt ist. Diese Kugel hängt über der Schulter einer Friedenstaube. Besonders auffällig ist die Verwandlung der Eisenkugel in eine Rose. Dieses Symbol steht für Hoffnung sowie für den Wandel von Unterdrückung zu Freiheit. Auch die Friedenstaube und die Sonne vermitteln eine positive Botschaft: Sie symbolisieren Frieden, Menschlichkeit und die Hoffnung auf eine bessere Zukunft. Durch den Schriftzug „Amnesty International“ verweist das Bild auf die Menschenrechtsorganisation, die sich unter anderem für politische Gefangene in der DDR eingesetzt hat. Der Künstler bringt damit zum Ausdruck, dass selbst in Zeiten von Unfreiheit Hoffnung bestehen bleibt und dass der Einsatz für Menschenrechte einen wichtigen Beitrag zu Frieden und Freiheit leisten kann. Bei meiner Bildbearbeitung wollte ich die ursprüngliche Aussage des Werkes kritisch weiterdenken und auf aktuelle Konflikte übertragen. Deshalb habe ich die Farben deutlich dunkler gestaltet, um eine bedrückende und düstere Atmosphäre zu erzeugen. Dadurch soll die Ernsthaftigkeit des Themas stärker hervorgehoben und die Betrachterinnen und Betrachter zum Nachdenken angeregt werden. Zusätzlich habe ich einen Löwen eingefügt, der eine Taube frisst. Die Taube gilt weltweit als Symbol des Friedens. Der Löwe hingegen steht in meiner Interpretation für Tyrannen und Machthaber der heutigen Zeit, die Frieden und Verständigung durch Gewalt, Unterdrückung und Krieg zerstören. Dieses Motiv soll verdeutlichen, wie Friedensbemühungen häufig von machtpolitischen Interessen verdrängt werden. Ein weiteres zentrales Symbol meiner Bearbeitung ist die Kanone, die die ursprüngliche Kette ersetzt. Damit möchte ich zeigen, dass die Werkzeuge von Tyrannen häufig Waffen und militärische Gewalt sind. Die Kanone steht für Krieg, Zerstörung und menschliches Leid. Gleichzeitig symbolisiert die gefesselte Hand die Menschen und Völker, die unter Konflikten leiden und deren Freiheit eingeschränkt wird. Zusätzlich sind auf der Mauer Friedensgraffiti zu sehen, die mit roter Farbe übermalt wurden. Dieses Element soll verdeutlichen, dass andere Meinungen, Friedensforderungen und kritische Stimmen oft unterdrückt oder zum Schweigen gebracht werden. Die rote Farbe wirkt dabei wie ein Zeichen von Gewalt, Zensur und Machtausübung. Meine veränderte Version des Amnesty-International-Plakats trägt den Titel „Unterdrückter Frieden durch Tyrannen“. Mit diesem Titel und den vorgenommenen Veränderungen möchte ich ausdrücken, dass Konflikte in der heutigen Welt noch immer zu häufig mit Gewalt statt durch Dialog, Verhandlungen und gegenseitiges Verständnis gelöst werden. Kriege entstehen oftmals aus politischen oder wirtschaftlichen Interessen, doch die schwersten Folgen tragen meist unschuldige Menschen. Sie verlieren ihre Heimat, ihre Sicherheit und oftmals sogar ihr Leben, während die eigentlichen Verursacher die Auswirkungen häufig nicht unmittelbar spüren.
    
    Mit meiner Bildgestaltung möchte ich daher eine kritische Botschaft vermitteln: Frieden ist ein wertvolles Gut, das immer wieder bedroht wird. Anstelle von Gewalt und Krieg sollten Kommunikation, Diplomatie und Zusammenarbeit im Mittelpunkt stehen, damit Konflikte friedlich gelöst werden können und Menschen nicht länger unter den Entscheidungen der Löwen leiden müssen.
    `,
    original_src: "/kunstwerke/original/amnesty.jpg",
    original_alt: "Amnesty International in der DDR",
    original_source: "Andrej Smolák, Amnesty International in der DDR, 2009 © Stiftung Berliner Mauer, Foto: Günther Schaefer",
    titel: "Unterdrückter Frieden durch Tyrannen"
  },
  { id: "leo-r", src: "/kunstwerke/LeoR.jpg", alt: "Kunstwerk von Leo R.", artist: "Leo R.", mult_img: false, 
    body: `
    Für meinen Dialog mit einem Bild an der Mauer habe ich das Bild „Diagonale Lösung des Problems“ von Michail Serebrjakov gewählt. Dieses sprach mich besonders an, da es sehr realistisch gemalt ist. Außerdem zeigt es auf, dass die deutsch-deutsche Vereinigung teilweise problematische Folgen hatte.
    Das Originalbild zeigt einen angeketteten Daumen nach oben. Dieser befindet sich vor einem schwarzen Hintergrund. In den Ecken sieht man rote Formen. Außerdem steht am Rand in diagonaler Schrift: „Diagonale Lösung des Problems“. Das verdeutlicht, das die Kette, also die Einschränkung der Meinungsfreiheit, die Lösung ist. Dies ist so, da die Kette das einzige schräge Element im Bild ist.
    Das zentrale Element dieses Bildes ist der angekettete Daumen. Der Daumen nach oben steht dafür, dass alles gut sei, während die Kette zeigt, dass man zu diesem Ausdruck verpflichtet ist. Diese Geste ist auf vieles bezogen, vor allem jedoch auf die deutsch-deutsche Vereinigung. So ist die Vereinigung für einige Deutsche mit Problemen wie z. B. der Integration oder den unterschiedlichen Gehältern verbunden.

    Nun sind 35 Jahre vergangen und ich finde, dass man heute bezüglich der deutsch-deutschen Vereinigung mehr über die Probleme sprechen kann als früher. Jedoch hat man teilweise das Gefühl, das man nicht alles sagen kann. Aus diesem Grund habe ich zwar in meinem Kunstwerk eine Kette dargestellt, diese ist jedoch lang genug, sodass sich der Daumen frei bewegen kann. Der zum Betrachter gerichtete Daumen verdeutlicht, dass man auch eine andere Meinung haben kann. Dennoch hat man teilweise das Gefühl, dass man nicht immer eine Gegenteilige Meinung zum Mainstream haben kann, da dieser einen dann teilweise beschimpft.
    Ein weiteres Element, das verändert wurde, ist die Farbe des Ärmels. Statt eines orangenen Ärmels, der für einen Gefangenen steht, habe ich einen Rotton gewählt, da dieser im Bild stärker heraussticht. Diese Farbe soll die Individualität der Menschen verdeutlichen. Acrylfarbe ermöglicht sowohl eine gute Sichtbarkeit als auch eine leichte Möglichkeit, Kontraste zu erzeugen. Die Kette habe ich aus Papier gebastelt, da sie möglichst dreidimensional wirken sollte. Außerdem verdeutlicht das Material, dass es möglich ist, diese Kette zu zerstören, da sie bereits gelockert wurde.
    Das Thema hat für mich auch heute noch eine aktuelle Bedeutung. Die deutsche Wiedervereinigung wird oft als großer Erfolg dargestellt, doch gleichzeitig gibt es bis heute unterschiedliche Erfahrungen und Sichtweisen. Deshalb halte ich es für wichtig, offen über positive und negative Folgen sprechen zu können. Mein Kunstwerk soll dazu anregen, verschiedene Meinungen zu akzeptieren und kritisch über gesellschaftliche Themen nachzudenken. Gleichzeitig soll das Werk zeigen, dass Veränderungen möglich sind und bestehende Einschränkungen hinterfragt werden können.
    `,
    original_src: "/kunstwerke/original/diagonale.jpg",
    original_alt: "Diagonale Lösung des Problems",
    original_source: "Michail Serebrjakov, Diagonale Lösung des Problems, 2009 © Stiftung Berliner Mauer, Foto: Günther Schaefer",
    titel: "Nicht nur Daumen hoch"
  },
  { id: "leo-t", src: "/kunstwerke/LeoT.jpg", alt: "Kunstwerk von Leo T.", artist: "Leo T.", mult_img: false,
    body: `
    Das Bild „Es geschah im November“ von Kani Alavi hat mich besonders angesprochen, weil es die Gefühle der Menschen während des Mauerfalls eindrucksvoll darstellt. Die vielen Gesichter zwischen den Mauern zeigen Hoffnung, Freude, aber auch Unsicherheit und Verzweiflung. Sie stehen für den Wunsch nach Freiheit und machen die Bedeutung dieses historischen Moments sichtbar. Die starke emotionale Wirkung des Bildes hat mich dazu motiviert, einen eigenen künstlerischen Dialog zu entwickeln.
    
    Im Original stehen die Menschen im Mittelpunkt. Ihre Gesichter füllen den Raum zwischen den Mauern und zeigen, wie wichtig der Fall der Berliner Mauer für sie war. Das Werk macht deutlich, dass die Mauer nicht nur ein Bauwerk war, sondern Menschen, Familien und Lebenswege voneinander trennte. Gleichzeitig erinnert es daran, wie wertvoll Freiheit und Zusammenhalt sind.
    
    In meiner eigenen Gestaltung habe ich das Bild bewusst verändert. Ich habe einen strahlend blauen Himmel gemalt und die Szene mit Bäumen, Gras und Pflanzen umgeben. Zwischen der Öffnung der Mauer verläuft nun ein schmaler Weg. Die Menschen aus dem Original sind verschwunden. Dadurch möchte ich zeigen, wie Erinnerungen mit der Zeit verblassen können, wenn niemand sie bewahrt. Die Natur steht dabei einerseits für Heilung und einen Neuanfang, andererseits für das Überdecken von Geschichte und Erinnerungen.
    
    Mir war es wichtig, einen deutlichen Kontrast zwischen Vergangenheit und Gegenwart zu schaffen. Während das Original von Emotionen, Bewegung und den Menschen geprägt ist, wirkt meine Version ruhig und fast verlassen. Dadurch soll sichtbar werden, wie historische Ereignisse langsam in Vergessenheit geraten können.
    
    Für mich hat dieses Thema auch heute noch eine große Bedeutung. Obwohl die Berliner Mauer seit vielen Jahren gefallen ist, dürfen die Erfahrungen der Menschen nicht vergessen werden. Mit meinem Werk möchte ich die Betrachter dazu anregen, über den Wert von Erinnerung nachzudenken. Geschichte lebt nur weiter, wenn wir sie bewusst bewahren und ankommende Generationen weitergeben. Das kann durch Gespräche, den Unterricht, Gedenkstätten oder Kunst geschehen. Nur so bleiben wichtige Erinnerungen erhalten.
    `,
    original_src: "/kunstwerke/original/es_geschah_im_november.jpg",
    original_alt: "Es geschah im November",
    original_source: "Kani Alavi, Es geschah im November, 2009 © Stiftung Berliner Mauer, Foto: Günther Schaefer",
    titel: "Vergessene Geschichte - Die Natur übernimmt"
  },
  { id: "magnus", src: "/kunstwerke/Magnus.jpg", alt: "Kunstwerk von Magnus", artist: "Magnus", mult_img: false,
    body: `
    Bei dem verwendeten Mauerbild handelt es sich um den berühmten „Bruderkuss“ von Dmitri Vrubel. Es wurde aufgrund seiner Bekanntheit und des Interesses an den geschichtlichen Aspekten der DDR und der UdSSR ausgewählt. Das Bild zeigt den DDR‑Staatsratsvorsitzenden Erich Honecker und den Präsidenten der UdSSR, Leonid Iljitsch Breschnew, beim sozialistischen Bruderkuss. Darunter steht der Schriftzug „Mein Gott, hilf mir, diese tödliche Liebe zu überleben“ – sowohl auf Deutsch als auch auf Russisch.  
    
    Das Kunstwerk stellt eine Ironie zwischen dem innigen Kuss und dem tatsächlichen politischen System des Sozialismus dar.
    
    Für den Dialog wurde das ursprüngliche Werk ausgedruckt, überklebt und übermalt. Über dem Kopf Breschnews befindet sich nun der Kopf eines Kollegen. Der obere Teil des russischen Schriftzuges wurde übernommen und Buchstabe für Buchstabe mit kleinen Änderungen neu ausgeklebt. Der untere Teil wurde aufgemalt, wobei die Buchstaben in falscher Reihenfolge stehen. Das Bild wurde mit roten Schlieren versehen, die das vergossene Blut zwischen der damaligen und der heutigen Zeit symbolisieren. Der deutsche Text wurde verkürzt und zeigt nun nur noch den Satz „Mein Gott, hilf mir, zu überleben“.
    
    Die neuen Details sind farbig, während das ursprüngliche Bild in Schwarz-Weiß gehalten ist. Das verdeutlicht den Unterschied zwischen damals und heute. Die neuen Elemente wirken durcheinander und ungeordnet, fast schlampig aufgetragen. Dadurch entsteht ein Kontrast zwischen der Planwirtschaft und der heutigen Marktwirtschaft. Der russische Schriftzug, der nur verändert wurde, zeigt, dass die Ereignisse zwischen dem Ende des Zweiten Weltkriegs und den 1990er‑Jahren bis heute bedeutsam für die aktuelle Weltlage sind und dass Blockbildung zwar anders aussieht, aber nicht verschwunden ist. Im Gegensatz dazu steht der gekürzte deutsche Schriftzug, der den Individualismus und den Überlebenskampf des Einzelnen betont.
    
    Auch heute gibt es weltweit verstärkt Kriege, Blockbildungen und geopolitische Spannungen, die nicht nur Länder des globalen Südens betreffen, sondern auch Europa und damit uns direkt.  
    
    Das Werk soll den Betrachter an die Geschichte, ihre Opfer und die Fehler erinnern, die zu solchen Situationen geführt haben. Es versteht sich als Warnung, damit diese Fehler nicht erneut begangen werden.
    `,
    original_src: "/kunstwerke/original/bruderkuss.jpg",
    original_alt: "Mein Gott, hilf mir, diese tödliche Liebe zu überleben",
    original_source: "Dmitri Vrubel, Mein Gott, hilf mir, diese tödliche Liebe zu überleben, 2009 © Stiftung Berliner Mauer, Foto: Günther Schaefer",
    titel: "Bruder Kuss"
  },
  { id: "martin", src: "/kunstwerke/Martin.jpg", alt: "Kunstwerk von Martin", artist: "Martin", mult_img: false, 
    body: `
    Für meinen künstlerischen Dialog habe ich das Mauerbild „BERLYN“ von Gerhard Lahr ausgewählt. Das Kunstwerk hat mich besonders angesprochen, weil es ein wichtiges Stück deutscher Geschichte darstellt und gleichzeitig Hoffnung für die Zukunft vermittelt. Besonders interessant finde ich die doppelte Bedeutung der Y-förmigen Stacheldrahtkonstruktion. Sie erinnert an die Berliner Mauer und die Teilung der Stadt, verbindet aber gleichzeitig New York, Berlin und Tokyo. Gerade diese Verbindung von Trennung und Hoffnung hat mich dazu inspiriert, das Symbol in meinem eigenen Werk neu zu interpretieren. 
    
    Das Originalbild zeigt den Schriftzug „BERLYN“ im Zentrum. Darüber befindet sich eine Y-förmige Stacheldrahtkonstruktion, die die Städte New York und Tokyo verbindet. Das Werk thematisiert die Berliner Mauer als Symbol für Teilung, Überwachung und eingeschränkte Freiheit. Gleichzeitig spannt Gerhard Lahr ein „Band der Hoffnung" zwischen den Städten und zeigt, dass Grenzen überwunden und Menschen miteinander verbunden werden können. 
    
    In meinem künstlerischen Dialog greife ich die zentrale Y-Form auf, gebe ihr jedoch eine neue Bedeutung. Aus dem Stacheldraht entstehen Bäume, deren Wurzeln miteinander verbunden sind und ein gemeinsames Netzwerk bilden. Dadurch übernehme ich die Grundidee des Originals, interpretiere sie aber neu. Während die Y-Form bei Lahr für Teilung und Grenzen steht, werden die Bäume zu Symbolen für Leben, Wachstum und Zusammenhalt.Ein weiteres wichtiges Symbol meines Kunstwerks ist die große gelbe Sonne in der Bildmitte. Sie greift den roten Kreis aus Gerhard Lahrs Originalwerk auf, gibt ihm jedoch eine neue Bedeutung. Während der Kreis im Original an die bewegte Geschichte Berlins erinnert, steht die gelbe Sonne in meinem Werk für Hoffnung, Wärme und einen Neuanfang. Gleichzeitig spendet sie den Bäumen Licht und unterstützt ihr Wachstum. Dadurch unterstreicht sie meine Botschaft, dass aus einer Vergangenheit der Trennung neues Leben, Frieden und Zusammenhalt entstehen können. 
    
    Für mein Kunstwerk habe ich verschiedene Techniken und Materialien verwendet. Den Hintergrund habe ich mit hellblauer Acrylfarbe und einer Schwammtechnik gestaltet, wodurch eine lebendige und hoffnungsvolle Atmosphäre entsteht. Auch die Bäume wurden mit grüner Acrylfarbe aufgetupft. Grün steht für Natur, Leben und Wachstum und unterstreicht die positive Aussage meines Werkes. Die Schriftzüge „BERLYN“, „NEW YORK“ und „TOKYO“ habe ich mit grünem Buntstift hervorgehoben. 
    
    Für die Wurzeln verwende ich braune Schnur. Sie erzeugt eine plastische Wirkung und symbolisiert die Verbindung zwischen den Städten und den Menschen. Durch die Kombination aus Farben, Schwammtechnik und unterschiedlichen Materialien möchte ich Hoffnung, Verbundenheit und Wachstum ausdrücken.
    
    Für mich ist das Thema bis heute aktuell. Zwar gehört die Berliner Mauer der Vergangenheit an, doch weltweit gibt es noch Grenzen und Konflikte. Mein Kunstwerk soll zeigen, dass aus schwierigen Zeiten Neues entstehen kann und dass Frieden, Zusammenhalt und gegenseitiges Verständnis Werte sind, die Menschen miteinander verbinden.
    `,
    original_src: "/kunstwerke/original/berlyn.jpg",
    original_alt: "BERLYN",
    original_source: "Gerhard Lahr, BERLYN, 2009 © Stiftung Berliner Mauer, Foto: Günther Schaefer",
    titel: "BERLYN – Neue Wurzeln"
  },
  { id: "mihael", src: "/kunstwerke/Mihael.jpg", alt: "Kunstwerk von Mihael", artist: "Mihael", mult_img: false,
    body: `
    Das von mir gewählte Mauerbild trägt den Titel „Es geschah im November“, wurde von dem
    Künstler Kani Alavi gestaltet und ist Teil der East Side Gallery in Berlin. Die vielen Gesichter
    wirken unterschiedlich und drücken verschiedene Gefühle aus. Es zeigt die Situation der
    Maueröffnung am 9. November 1989, als Tausende Menschenmassen von Ost nach West
    strömten. Zudem erinnert es daran, dass hinter historischen Ereignissen immer einzelne
    Schicksale stehen. Besonders angesprochen hat mich die starke Wirkung der vielen
    Gesichter und die Frage, was von den Menschen und ihren Geschichten bleibt.
    In meinem künstlerischen Dialog habe ich das Motiv des Originals weiterentwickelt.
    Während das Original viele Menschen zeigt, sind in meinem Werk die Menschen selbst
    verschwunden. Stattdessen bleiben nur ihre Schatten zurück. Die Schatten stehen
    symbolisch für die Erinnerungen und Geschichten der Menschen, die mit der Berliner Mauer
    verbunden waren. Da nur ihre Umrisse zu sehen sind und die Menschen selbst fehlen, wird
    deutlich, dass ihre Erlebnisse und Erinnerungen trotzdem weiterbestehen. Dadurch sollen
    sich die Betrachterinnen und Betrachter in die Menschen hineinversetzen und über ihre
    Schicksale nachdenken. Dadurch entsteht eine ruhige, aber auch nachdenkliche
    Atmosphäre.

    Besonders wichtig war mir die Gestaltung der Mauer. Ich habe sie dreidimensional
    aufgebaut und grau eingefärbt. Dafür verwendete ich Pappe, damit die Mauer tatsächlich in
    die Höhe ragt und sich deutlich vom Untergrund abhebt. Die Schatten dagegen sind
    zweidimensional auf dem Papier dargestellt. Durch den Kontrast zwischen der
    dreidimensionalen Mauer und den zweidimensionalen Schatten entsteht eine besondere
    Raumwirkung. Die graue Farbgebung erinnert an Beton und unterstreicht die historische
    Bedeutung der Berliner Mauer. Gleichzeitig wirkt die Mauer massiv und dauerhaft, während
    die Schatten vergänglich erscheinen.

    Die Komposition meines Werks lenkt den Blick auf die Beziehung zwischen Mauer und
    Schatten. Mir war wichtig zu zeigen, dass die Mauer zwar heute größtenteils verschwunden
    ist, ihre Geschichte und ihre Auswirkungen jedoch bis heute nachwirken. Die Schatten
    stehen stellvertretend für die Menschen, deren Leben durch die Teilung geprägt wurde, zum
    Beispiel durch die Trennung von Familien und den Verlust von Freiheit.
    Für mich hat dieses Thema auch heute noch eine große Bedeutung. Grenzen und
    Trennungen existieren weiterhin in vielen Teilen der Welt. Mit meinem Werk möchte ich die
    Betrachterinnen und Betrachter dazu anregen, über Erinnerung, Freiheit und die Folgen von
    Ausgrenzung nachzudenken. Die Schatten sollen verdeutlichen, dass vergangene
    Ereignisse auch dann noch Spuren hinterlassen und nachwirken, selbst wenn bereits Jahre
    vergangen sind.
    `,
    original_src: "/kunstwerke/original/es_geschah_im_november.jpg",
    original_alt: "Es geschah im November",
    original_source: "Kani Alavi, Es geschah im November, 2009 © Stiftung Berliner Mauer, Foto: Günther Schaefer",
    titel: "Schatten der Vergangenheit"
  },
  { id: "mohamed", src: "/kunstwerke/Mohamed.jpg", alt: "Kunstwerk von Mohamed", artist: "Mohamed", mult_img: false,
    body: `
    Als Ausgangspunkt für meine Arbeit habe ich das Mauerbild „Niemandsland“ von Carmen Leidner-Heidrich gewählt. Besonders angesprochen hat mich dieses Werk, weil es zeigt, wie Menschen durch Grenzen voneinander getrennt werden können. Mich hat interessiert, wie sich diese Bildidee in eine positive Richtung verändern lässt.
    
    Im Originalbild ist eine große gelbe Sonne über einer roten Landschaft zu sehen. Im Vordergrund verläuft ein Stacheldrahtzaun, der den Eindruck von Hindernissen und Ausgrenzung vermittelt. Die dunklen Rot- und Brauntöne lassen die Landschaft trocken, bedrückend und bedrohlich wirken. Der Stacheldraht symbolisiert Gefahr, Bedrohung und die Trennung von Menschen. Dadurch entsteht eine düstere und nachdenkliche Atmosphäre.
    
    In meinem eigenen Werk habe ich die Grundidee des Originals übernommen und deutlich verändert. Die große Sonne bleibt als wichtiges Gestaltungselement erhalten und verbindet beide Bilder miteinander. Statt der roten Landschaft habe ich grüne Hügel und einen hellen Himmel dargestellt. Im Hintergrund sind außerdem helle Wolken zu sehen. Durch die vielen hellen Grün-, Blau-, Gelb- und Weißtöne wirkt das Bild freundlicher, lebendiger und hoffnungsvoller als das Original.
    
    Die größte Veränderung betrifft den Stacheldraht. Im Original steht er für Bedrohung, Gefahr und Ausgrenzung, in meinem Bild wird er zu einer grünen Ranke mit bunten Blumen. Dadurch verwandelt sich ein Symbol der Trennung in ein Zeichen von Wachstum, Leben und Hoffnung. Die Blumen sollen zeigen, dass selbst aus schwierigen Situationen etwas Positives entstehen kann.
    
    Auch die Atmosphäre hat sich stark verändert. Während das Original durch die dunklen Farben, die karge Landschaft und den Stacheldraht bedrückend und lebensfeindlich wirkt, entsteht in meiner Neugestaltung eine offene und friedliche Atmosphäre. Die hellen Farben, die blühenden Pflanzen und der Fluss vermitteln Freiheit, Leben und einen Neuanfang.
    
    Meine Botschaft lautet, dass Hoffnung stärker sein kann als Ausgrenzung. Die blühende Ranke zeigt, dass aus einem „Niemandsland“ ein Ort voller Leben und Zukunft werden kann.
    `,
    original_src: "/kunstwerke/original/niemandsland.jpg",
    original_alt: "Niemandsland",
    original_source: "Carmen Leidner-Heidrich, Niemandsland, 2009 © Stiftung Berliner Mauer, Foto: Günther Schaefer",
    titel: "Hoffnungsland"
  },
  { id: "oskar", src: "/kunstwerke/Oskar.jpg", alt: "Kunstwerk von Oskar", artist: "Oskar", mult_img: false, 
    body: `
    Für meinen künstlerischen Dialog habe ich das Bild „Mein Gott, hilf mir, diese tödliche Liebe zu überleben“ von Dmitri Vrubel ausgewählt. Das Werk zeigt den sogenannten Bruderkuss zwischen Erich Honecker und Leonid Breschnew und gehört zu den bekanntesten Bildern der East Side Gallery. Mich hat dieses Bild besonders angesprochen, weil es auf den ersten Blick Nähe und Verbundenheit zeigt, gleichzeitig aber auch etwas Unangenehmes und Künstliches ausstrahlt. Dadurch habe ich mich gefragt, ob die dargestellte Freundschaft wirklich echt ist oder eher eine Inszenierung für die Öffentlichkeit.  
    Im Original symbolisiert der Kuss die enge Beziehung zwischen der DDR und der Sowjetunion. Gleichzeitig kann er aber auch als Zeichen von politischer Abhängigkeit und Machterhalt verstanden werden. Obwohl das Bild Freundschaft darstellen soll, wirkt die dargestellte Nähe übertrieben und beinahe erzwungen. Genau dieser Widerspruch hat mich interessiert.  

    In meinem Werk habe ich diese Idee in die Gegenwart übertragen. Anstelle zweier Politiker zeige ich einen Social-Media-Beitrag, in dem ein Kuss als perfekter Moment präsentiert wird. Dafür habe ich ein selbst aufgenommenes Foto verwendet und es in die Darstellung eines Smartphone-Bildschirms integriert. Der Bereich des Handys ist in warmen Rot- und Rosatönen gestaltet. Diese Farben stehen für Aufmerksamkeit, Likes und die scheinbar perfekte Welt sozialer Medien.  
    Außerhalb des Smartphones zeige ich dieselben Personen in einer völlig anderen Situation. Sie stehen voneinander getrennt und beschäftigen sich nur mit ihren Handys. Die kalten Blautöne auf der Berliner Mauer im Hintergrund verstärken diesen Kontrast zusätzlich. Während im Handy Nähe gezeigt wird, herrscht außerhalb des Bildschirms Isolation.  
    Mit meiner Neuinterpretation möchte ich nicht Social Media grundsätzlich verurteilen. Mich interessiert vielmehr die Frage, wie Beziehungen im Internet dargestellt werden und wie groß der Unterschied zwischen Inszenierung und Wirklichkeit sein kann. Während im Original politische Nähe gezeigt wird, obwohl dahinter Machtinteressen und Abhängigkeit  stehen, zeige ich eine Form von Nähe, die für ein Publikum inszeniert wird und deshalb nicht unbedingt der Realität entsprechen muss.    
    Ich möchte die Betrachter dazu anregen, darüber nachzudenken, wie viel von dem, was sie online sehen, tatsächlich echt ist. Mein Werk soll zeigen, dass nicht jede dargestellte Nähe auch wirkliche Verbundenheit bedeutet.  
    `,
    original_src: "/kunstwerke/original/bruderkuss.jpg",
    original_alt: "Mein Gott, hilf mir, diese tödliche Liebe zu überleben",
    original_source: "Dmitri Vrubel, Mein Gott, hilf mir, diese tödliche Liebe zu überleben, 2009 © Stiftung Berliner Mauer, Foto: Günther Schaefer",
    titel: "Inszenierte Nähe"
  },
  { id: "oyu", src: "/kunstwerke/Oyu.jpg", alt: "Kunstwerk von Oyu", artist: "Oyu", mult_img: false,
    body: `
    Das Mauerbild, mit dem ich mich auseinandergesetzt habe, ist „Dawn of Peace“ von Salvadore de Fazio (1990). Ich habe dieses Bild gewählt, weil ich die East Side Gallery stark mit dem Thema Frieden verbinde. Die schlichte Ausführung und die leuchtenden Farben haben mich zusätzlich angezogen.
    
    Im Mittelpunkt des Originals steht eine weiße Taube, die durch einen hellblauen Himmel fliegt. Daneben ist eine zitronengelbe Sonne zu sehen. An der Spitze ihres Schnabels gehen sternenartige, helle Lichtstrahlen aus. Links neben der Taube steht in schmaler Großschrift der Titel „Dawn of Peace“. Im unteren Bildbereich ist eine braune Landschaft mit einem angedeuteten Berg dargestellt. Dieser erinnert an eine Düne, deren Spitze zwischen den Schwanzfedern der Taube liegt. Rechts daneben sind dunkelblaue Wellen zu erkennen. 
    
    Die Taube als Symbol des Friedens und der Titel des Bildes sollen den Anbruch einer friedlichen Zeit verdeutlichen. Die Taube stellt dabei die bekannte Friedenstaube dar. Der Künstler möchte damit vermutlich das Ende des Kalten Krieges ausdrücken. Im historischen Zusammenhang wird Die Berliner Mauer häufig mit dem Ende der politischen Spannungen zwischen Ost und West in Verbindung gebracht. Durch die Friedenstaube und die Lichtstrahlen zeigt der Künstler die positiven Auswirkungen des Friedens. Da die Taube die Sonne beinahe erreicht hat, kann dies als Symbol für das Erreichen eines wichtigen Ziels verstanden werden. 
    
    In meiner eigenen Gestaltung habe ich die Flucht aus einem Käfig dargestellt. Dabei wollte ich den Prozess des Entkommens zeigen und habe deshalb mehrere Vögel eingefügt. Das Zentrum des Bildes bleibt jedoch die Friedenstaube, die sich der Sonne nähert. Die verschiedenen Vögel stehen für unterschiedliche Probleme und Konflikte sowie für den Versuch, diesen zu entkommen, um Frieden zu finden. Den Himmel im Hintergrund habe ich als Farbverlauf gestaltet, der in Richtung Sonne immer heller wird. Dadurch wird die aufbrechende Dunkelheit symbolisiert. Im Käfig befinden sich noch weitere Vögel, die den Frieden nicht erreichen können. Sie stehen für die Kriege und Konflikte, die bis heute andauern und Menschen weiterhin gefangen halten. 
    
    Für die Gestaltung habe ich hauptsächlich mit Pinsel und Acrylfarben gearbeitet. Diese Materialien ermöglichen kräftige und gut deckende Farben. Außerdem ist Acrylfarbe sehr vielseitig und eignet sich sowohl für helle als auch für dunkle Motive. Die Vögel und die Sonne habe ich aus Pappe gestaltet, sodass sie leicht erhöht sind und ein räumlicher 3D-Effekt entsteht. Zusätzlich habe ich mit Ölkreide Highlights, Details und stärkere Farbkontraste gesetzt, um das Bild lebendiger und dynamischer wirken zu lassen. 
    
    Mit meiner eigenen Arbeit wollte ich die Idee vom Ende des Krieges und den Weg zum Frieden darstellen. Das Originalbild diente mir dabei als Grundlage. Ich habe es erweitert, die zentrale Aussage und die wichtigsten Symbole jedoch beibehalten. 
    
    Für mich drückt dieses Bild Hoffnung auf Frieden aus. Gleichzeitig möchte ich zeigen, dass nicht alle Menschen diesen Frieden erreichen und viele weiterhin unter Kriegen und Konflikten leiden. Auch heute sind Kriege leider noch nicht beendet. Dennoch bleiben die Hoffnung und die Möglichkeit auf eine friedlichere Zukunft bestehen. 
    `,
    original_src: "/kunstwerke/original/dawn_of_peace.jpg",
    original_alt: "Dawn of Peace",
    original_source: "Salvadore de Fazio, Dawn of Peace, 2009 © Stiftung Berliner Mauer, Foto: Günther Schaefer",
    titel: "Dawn of Light"
  },
  { id: "pia", src: "/kunstwerke/Pia.jpg", alt: "Kunstwerk von Pia", artist: "Pia", mult_img: false, 
    body: `
    Für mein Werk habe ich das Wandbild „Test the Rest“ von Birgit Kinder als Ausgangspunkt gewählt. Das Original zeigt einen Trabanten, der die Berliner Mauer durchbricht. Es steht für Freiheit, den Fall der Mauer und den Aufbruch in eine neue Zukunft.

    Mein Werk trägt den Titel „Zurück durch die Mauer“. Damit greife ich die Idee des Originals auf, verändere ihre Bedeutung jedoch. Statt des Trabants durchbricht nun ein Panzer die Mauer. Während der Trabant Hoffnung und Freiheit symbolisiert, steht der Panzer für militärische Macht und die Gefahr neuer Kriege.

    Zu dieser Veränderung haben mich aktuelle politische Entwicklungen inspiriert. In vielen Teilen der Welt nehmen Kriege und Spannungen wieder zu. Dadurch entsteht oft der Eindruck, dass Frieden nicht selbstverständlich ist. Der Titel „Zurück durch die Mauer“ soll verdeutlichen, dass sich die Welt in manchen Bereichen wieder von den Hoffnungen entfernt, die mit dem Mauerfall verbunden waren.

    Um die Wirkung zu verstärken, habe ich den Panzer als realistisches 3D-Objekt gestaltet. Dadurch wirkt es, als würde er direkt aus der Mauer herausbrechen und auf die Betrachtenden zukommen. Die Camouflage-Farben in Grün- und Brauntönen erzeugen eine militärische und angespannte Atmosphäre. Zusätzlich habe ich den ursprünglich hellblauen Hintergrund des Originals durch einen Camouflage Hintergrund ersetzt. Dadurch wird die militärische Wirkung des Werkes verstärkt und der Einfluss aktueller militärischer Konflikte und Aufrüstung auf die heutige Welt verdeutlicht.

    Mit meinem Werk möchte ich keinen Krieg verherrlichen, sondern zum Nachdenken anregen. Durch den Kontrast zum Original entsteht die Frage, ob wir uns heute wieder in eine Richtung bewegen, die von Konflikten statt von Freiheit und Frieden geprägt ist.
    `,
    original_src: "/kunstwerke/original/test_the_rest.jpg",
    original_alt: "Test the Rest",
    original_source: "Birgit Kinder, Test the Rest, 2009 © Stiftung Berliner Mauer, Foto: Günther Schaefer",
    titel: "Zurück durch die Mauer"
  },
  { id: "sza", src: "/kunstwerke/Sza.jpg", alt: "Kunstwerk von Sza", artist: "Sza", mult_img: false,
    body: `
    Das Bild „Mein Gott, hilf mir, diese tödliche Liebe zu überleben“ wurde vom russischen Künstler Dmitry Vrubel gemalt und hält einen Kuss zwischen den kommunistischen Staatsoberhäuptern der DDR und der UdSSR, Honecker und Brezhnev, fest.  
    Der Künstler hatte das Ziel, die gewisse Ironie zwischen dem Kuss und dem eigentlichen System des Sozialismus darzustellen.  
    Dieses Bild ist ansprechend, da es sehr einprägsam und auch ikonisch für die East Side Gallery ist.

    Ich habe in meinem Werk versucht, eine Antwort zu diesem Bild zu finden, eine Antwort mit dem Hintergrund der modernen Gesellschaft. Das originale Bild stellt weniger die Liebe bzw. die Enge zwischen den Männern als die enge Beziehung zwischen Bruderstaaten im Sozialismus dar. Im originalen Kuss geht es nicht um das Individuum, sondern um die zwei Staaten, die die beiden Männer jeweils regierten. In meinem Werk hingegen habe ich dieses Bild aufgeschnitten und mit Fetzen meines eigenen Bildes collagiert. Das Bild von mir und meinem Kollegen Magnus Berg stellt, ähnlich wie das Originalbild, auch einen Kuss dar; doch in meinem Bild geht es um nichts anderes als die Nähe zwischen zwei Kollegen. Statt ganze Systeme bzw. Staaten zu verbinden, werden in meinem Bild nur Individuen freundschaftlich verbunden.  
    Das Originalbild ist mit einer Schere in eckige Stücke zerschnitten worden, wobei das Nachgestellte per Hand zerrissen worden ist. Dies stellt den Kontrast zwischen dem Sozialismus, einem System, das auf Planung und Ordnung basierte, und der menschlichen Natur beziehungsweise dem Individuum, das chaotisch und oft planlos sich treiben lässt, weiter heraus.

    Die Collage bringt zu einem den Punkt, dass ein Kuss in beiden Zeitaltern und Kontexten ein Symbol der Verbindung ist. Jedoch ist auch sichtbar, dass diese Verbindung je nach System, Zeitalter oder Kontext nicht immer die gleiche Art von Verbindung ist. Beim einen ist es eine symbolische Verbindung zwischen zwei ganzen Staaten in einem System, beim anderen ist es ein freundschaftlicher Weg, zwischen zwei Individuen Nähe darzustellen.

    Heute ist es wichtig, diese Unterscheidung zwischen Staat und Individuum zu machen. Der Staat darf nicht zu weit in das Privatleben eingreifen. Ein Kuss zwischen zwei Individuen muss weiterhin nur die Verbindung zwischen zwei Menschen darstellen. Systeme und Regierungen sollten nicht ohne Betrachtung des Individuums regieren.  
    In der modernen Gesellschaft, die sich durch technische Fortschritte schneller entwickelt als menschliche Normen und Werte, muss man aufpassen, das Individuum und sein Streben, Verbindungen für sich selbst zu schließen, nicht aus den Augen zu verlieren.
    `,
    original_src: "/kunstwerke/original/bruderkuss.jpg",
    original_alt: "Mein Gott, hilf mir, diese tödliche Liebe zu überleben",
    original_source: "Dmitri Vrubel, Mein Gott, hilf mir, diese tödliche Liebe zu überleben, 2009 © Stiftung Berliner Mauer, Foto: Günther Schaefer",
    titel: "Mein Gott, hilf mir, diese tödliche Liebe zu überleben - 2026"
  },
  { id: "tala-letizia", src: "/kunstwerke/Tala-Letizia.jpg", alt: "Kunstwerk von Tala und Letizia", artist: "Tala & Letizia", mult_img: false,
    body: `
    Für unser Projekt haben wir das Mauerbild „Flucht“ von Kasra Alavi ausgewählt. Besonders angesprochen hat uns die starke Darstellung von Bewegung und Freiheit. Die rennende Figur vermittelt Entschlossenheit und den Wunsch, Grenzen hinter sich zu lassen. Durch ihre Dynamik entsteht der Eindruck eines Aufbruchs in eine neue Zukunft.
    
    Das Kunstwerk zeigt eine menschliche Figur in einer abstrakten Landschaft. Die Zentralperspektive lenkt den Blick direkt auf die Figur und den Fluchtpunkt in der Bildmitte. Dadurch wirkt es, als würde die Person auf die Betrachtenden zulaufen. Diese Bewegung verstärkt die Aussage des Bildes. 
    
    Bei unserer eigenen Gestaltung haben wir die Grundidee des Originals übernommen, sie jedoch neu interpretiert. Anstelle der laufenden Figur haben wir eine surfende Person auf einer großen Welle dargestellt. Die Welle steht dabei symbolisch für den Lebensweg mit all seinen Höhen und Tiefen. Wer auf ihr surft, muss sich ständig an neue Situationen anpassen und Entscheidungen treffen. Genau darin sehen wir einen wichtigen Aspekt von Freiheit, also die Möglichkeit, den eigenen Weg selbst zu gestalten.
    
    Um diese Idee noch stärker hervorzuheben, haben wir die Figur und die Welle dreidimensional umgesetzt. Licht und Schatten verleihen dabei dem Motiv mehr Lebendigkeit und Bewegung. So entsteht der Eindruck, dass die Person aktiv mit der Welle interagiert, anstatt ihr ausgeliefert zu sein. Mit unserer Gestaltung möchten wir zeigen, dass Freiheit nicht nur das Überwinden von Grenzen bedeutet, sondern auch den Mut, Herausforderungen anzunehmen und das eigene Leben selbst zu steuern.
    `,
    original_src: "/kunstwerke/original/flucht.jpg",
    original_alt: "Flucht",
    original_source: "Kasra Alavi, Flucht, 2009 © Stiftung Berliner Mauer, Foto: Günther Schaefer",
    titel: "Flucht - 2026"
   },
  { id: "tim", src: "/kunstwerke/Tim.jpg", alt: "Kunstwerk von Tim", artist: "Tim", mult_img: false,
    body: `
    Für mein Projekt zur Berliner Mauer bin ich in einen künstlerischen Dialog mit dem Werk „Umleitung in den japanischen Sektor“ von Thomas Klingenstein aus dem Jahr 2009 getreten.

    Das Bild zeigt eine graue Mauer, die den Blick auf ein japanisches Motiv in der Mitte lenkt. Zu sehen sind ein großer Berg, eine rote Sonne, die hinter diesem aufgeht, sowie die Silhouette einer Pagode. Links befindet sich ein Schild mit der Aufschrift „Detour to the Japanese Sector“. Das Werk thematisiert die Berliner Mauer und die Vorstellung, dass sich hinter dieser eine neue, möglicherweise bessere Welt befindet. Dadurch wird verdeutlicht, dass mit der Öffnung der Berliner Mauer zuvor unerreichbare Sehnsuchtsorte plötzlich in greifbare Nähe rückten und die Hoffnung auf ein freies Leben jenseits der Grenze entstand.

    Besonders angesprochen hat mich die Idee, dass hinter einer Grenze eine andere und möglicherweise bessere Welt vermutet wird. Dieser Gedanke ließ sich gut auf aktuelle gesellschaftliche Entwicklungen übertragen.

    In meiner künstlerischen Auseinandersetzung habe ich das genaue Gegenteil der ursprünglichen Idee aufgegriffen. Während das Original einen Ort darstellt, den man unbedingt erreichen möchte, zeige ich eine Welt, der man unbedingt entkommen möchte. Im Mittelpunkt steht die Gefahr moderner Technologien wie des Internets, der Künstlichen Intelligenz und des Metaverse. Damit möchte ich verdeutlichen, dass sich dadurch sowohl eine Sehnsuchtswelt als auch eine Gefahrenwelt eröffnet. Einerseits entstehen neue Möglichkeiten der Vernetzung, Kommunikation und Informationsbeschaffung, andererseits können Abhängigkeit, Kontrolle und der Verlust von Selbstbestimmung entstehen.

    Um die verschiedenen Bereiche hervorzuheben, habe ich vor einem monotonen schwarzen Hintergrund kontrastreich farbige Styroporkugeln verwendet. In der Mitte befindet sich ein aus Pappmaché gebauter Baum, dessen Äste die Verbindung zwischen den einzelnen Bereichen symbolisieren. Die Mauern habe ich aus verstärkter Pappe gefertigt. In diese habe ich verschiedene Collageelemente wie Bilder, Zahlenfolgen und weitere Informationen eingebaut. Damit möchte ich zeigen, dass man den Einflüssen der Technologie nur schwer entkommen kann. Selbst wenn man versucht, sich vom Mittelpunkt zu entfernen, bleibt man ständig mit ihm verbunden.

    Mit meinem Werk greife ich eine aktuelle gesellschaftliche Entwicklung auf und möchte die Betrachterinnen und Betrachter zum Nachdenken anregen: Führen technologische Fortschritte heute zu einer neuen Form der Gefangenschaft, ähnlich wie die Berliner Mauer damals, oder gibt es noch einen Ausweg? Während früher die Mauer überwunden werden sollte, symbolisiert meine künstlerische Auseinandersetzung eine unsichtbare Mauer, die durch moderne Technologie entsteht und der man kaum entkommen kann – oder etwa doch?
    `,
    original_src: "/kunstwerke/original/umleitung.jpg",
    original_alt: "Umleitung in den japanischen Sektor",
    original_source: "Thomas Klingenstein, Umleitung in den japanischen Sektor, 2009 © Stiftung Berliner Mauer, Foto: Günther Schaefer",
    titel: "Flucht aus dem digitalen Sektor"
   },
];

export function getKunstwerk(id: string): Kunstwerk | undefined {
  return kunstwerkeData.find(werk => werk.id === id);
}
