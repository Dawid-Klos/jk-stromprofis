import image from "@assets/images/service-image.webp";
import { StaticImageData } from "next/image";

export type Article = {
  title: string;
  content: string;
  image: {
    src: StaticImageData;
    alt: string;
  };
};

export type Content = {
  id: number;
  title: string;
  subtitle: string;
  summary: string;
  articles: Article[];
};

export const content: Content[] = [
  {
    id: 0,
    title: `Elektrische <span>Installationen</span>`,
    subtitle:
      "Bei JK-Stromprofis verstehen wir die entscheidende Rolle, die zuverlässige elektrische Installationen spielen. Deshalb bieten wir eine Reihe von herausragenden Dienstleistungen im Bereich elektrischer Installationen an, die auf die Bedürfnisse des Kunden zugeschnitten sind.",
    summary:
      "Bringen Sie Ihr Zuhause oder Ihr Unternehmen auf ein höheres Niveau mit unseren erstklassigen elektrischen Installationen. Ob Sie Ihr aktuelles System modernisieren oder ein völlig neues Projekt starten möchten, lassen Sie JK-Stromprofis Ihr vertrauenswürdiger Partner sein. Kontaktieren Sie uns noch heute für eine Beratung und erleben Sie die Vorteile unserer professionellen elektrischen Installationen.",

    articles: [
      {
        title: "Potenzial freisetzen",
        content:
          "Unser Team von qualifizierten Fachleuten setzt alles daran, erstklassige elektrische Installationen bereitzustellen, die das volle Potenzial Ihres Raums freisetzen. Wir glauben, dass ein gut durchdachtes elektrisches System die Effizienz, Sicherheit und Gesamtproduktivität sowohl zu Hause als auch am Arbeitsplatz steigern kann.",
        image: {
          src: image,
          alt: "",
        },
      },
      {
        title: "Zuverlässigkeit in Bestform",
        content:
          "Wenn es um elektrische Installationen geht, steht Zuverlässigkeit an erster Stelle. Wir sind stolz auf unsere Liebe zum Detail und die strikte Einhaltung branchenüblicher Standards. Unsere erfahrenen Techniker verwenden modernste Ausrüstung und hochwertige Materialien, um sicherzustellen, dass die elektrischen Installationen so konstruiert sind, dass sie die Zeit überdauern. Sie können unserer Leistung vertrauen und die Gewissheit haben, dass Ihre elektrischen Systeme sicher und zuverlässig sind.",
        image: {
          src: image,
          alt: "",
        },
      },
      {
        title: "Maßgeschneiderte Lösungen für individuelle Bedürfnisse",
        content:
          "Wir verstehen, dass jeder Kunde einzigartige Anforderungen hat. Daher bieten wir maßgeschneiderte Lösungen im Bereich elektrischer Installationen an, die darauf abzielen, spezifische Bedürfnisse zu erfüllen. Unser Team nimmt sich die Zeit, um Ihre Ziele zu verstehen, und arbeitet eng mit Ihnen zusammen, um einen personalisierten Plan zu erstellen, der mit Ihrer Vision übereinstimmt.",
        image: {
          src: image,
          alt: "",
        },
      },
      {
        title: "Reibungslose und stressfreie Betreuung",
        content:
          "Wir sind der Meinung, dass der gesamte Prozess reibungslos und stressfrei verlaufen sollte. Vom ersten Beratungsgespräch bis zur endgültigen Installation bietet unser Team exzellenten Kundenservice. Wir kümmern uns um alle Aspekte des Projekts und gewährleisten, dass Sie sich entspannen und die Vorteile unserer professionellen elektrischen Installationen ohne Probleme genießen können.",
        image: {
          src: image,
          alt: "",
        },
      },
    ],
  },
  {
    id: 1,
    title: `Spezialisierte Verlegung von Kabeltrassen <span>in großen Gebäuden</span>`,
    subtitle:
      "Bei JK-Stromprofis haben wir uns auf die Bereitstellung hochwertiger Dienstleistungen für die Verlegung von Kabeltrassen in großen Gebäuden spezialisiert. Wir verstehen, dass eine effiziente Kabelführung das Fundament für jedes moderne Gebäude bildet, und wir sind hier, um die Leistung zu optimieren und den Betrieb zu verbessern.",
    summary:
      "Bei JK-Stromprofis bieten wir maßgeschneiderte Lösungen entsprechend spezifischer Anforderungen. Unser Team arbeitet eng mit dem Kunden zusammen, um seine Ziele und Herausforderungen zu verstehen. Anschließend entwerfen und bauen wir Kabeltrassen, die auf die einzigartige Struktur Ihres Gebäudes zugeschnitten sind und eine reibungslose Integration in die bestehende Infrastruktur gewährleisten.",

    articles: [
      {
        title: "Nahtlose Kommunikation",
        content:
          "Durch unsere Erfahrung in der Verlegung von Kabeltrassen gewährleisten wir eine nahtlose Kommunikation in Gebäuden jeder Größe. Unsere qualifizierten Techniker planen sorgfältig und implementieren die effizientesten Kabeltrassen, um eine unterbrechungsfreie Kommunikation und Energieverteilung in allen Bereichen des Gebäudes zu gewährleisten. Verabschieden Sie sich von Kommunikationsproblemen und begrüßen Sie reibungslos funktionierende Betriebsabläufe.",
        image: {
          src: image,
          alt: "",
        },
      },
      {
        title: "Erhöhte Sicherheit und Einhaltung von Standards",
        content:
          "Sicherheit steht immer an erster Stelle. Wir entwerfen und bauen sorgfältig Kabeltrassen, die Sicherheit priorisieren und allen baurechtlichen Vorschriften entsprechen. Mit unseren Dienstleistungen können Sie beruhigt sein, da Ihr Gebäude vor elektrischen Gefahren geschützt ist.",
        image: {
          src: image,
          alt: "",
        },
      },
      {
        title: "Zukunftsweisende Infrastruktur",
        content:
          "Wir verstehen, dass Anpassungsfähigkeit entscheidend ist in der heutigen sich ständig weiterentwickelnden technologischen Landschaft. Daher verwenden wir bei der Verlegung von Kabeltrassen einen zukunftsorientierten Ansatz. Unsere Projekte und Installationen ermöglichen Skalierbarkeit und eine einfache Integration neuer Technologien bei steigenden Anforderungen. Dies gewährleistet die Langlebigkeit und Rentabilität der Infrastruktur.",
        image: {
          src: image,
          alt: "",
        },
      },
      {
        title: "Maximierung von Effizienz und Produktivität",
        content:
          "Eine effiziente Kabelführung kann einen signifikanten Einfluss auf die Gesamtproduktivität eines Betriebs haben. Dank unserer Erfahrung planen und bauen wir Kabeltrassen strategisch, um Ausfallzeiten zu minimieren, Wartungsbedürfnisse zu reduzieren und die Energieverteilung zu optimieren. Durch die Optimierung der Effizienz können Sie die Produktivität maximieren und sich auf das Wesentliche konzentrieren - Ihr Kerngeschäft.",
        image: {
          src: image,
          alt: "",
        },
      },
    ],
  },
  {
    id: 2,
    title: `Stärken Sie Ihr Unternehmen mit <span>spezialisiertem Support nach</span>`,
    subtitle:
      "Bei JK-Stromprofis gehen wir über herkömmliche Dienstleister hinaus, indem wir umfassende Projektunterstützung für Unternehmen jeder Größe anbieten. Wir verstehen die Herausforderungen, denen Unternehmen gegenüberstehen, sei es aufgrund begrenzter Ressourcen oder spezialisierter Kenntnisse. ",
    summary:
      "Lassen Sie begrenzte Ressourcen oder spezialisierte Kenntnisse Sie nicht daran hindern, Ihre Projekte effizient und geplant abzuschließen. Kontaktieren Sie uns noch heute, um Ihre spezifischen Bedürfnisse zu besprechen, und lassen Sie uns Ihnen helfen, außergewöhnliche Projektergebnisse zu erzielen, die das Wachstum Ihres Unternehmens vorantreiben.",

    articles: [
      {
        title: "Füllen von Ressourcenlücken",
        content:
          "Ein Mangel an notwendigen Ressourcen wie qualifiziertem Personal oder spezialisierten Berechtigungen kann den Fortschritt und Erfolg jedes Projekts erschweren. Wir sind hier, um diese Lücke zu füllen, indem wir unser Team von qualifizierten Fachleuten zur Verfügung stellen. Mit unserer Unterstützung erhalten Sie Zugang zu spezialisierter Kenntnis und Fähigkeiten, um selbst die komplexesten Projekte durchzuführen, ohne zusätzliches Personal einstellen und schulen zu müssen.",
        image: {
          src: image,
          alt: "",
        },
      },
      {
        title: "Risikominimierung und Steigerung der Effizienz",
        content:
          "Die Umsetzung von Projekten kann eine komplexe Aufgabe sein, mit zahlreichen potenziellen Gefahren und Herausforderungen auf dem Weg. Durch unsere umfassende Unterstützung helfen wir, das Risiko zu minimieren und die Effizienz in jeder Phase des Projekts zu steigern. Unsere sorgfältige Planung, Liebe zum Detail und proaktive Herangehensweise gewährleisten, dass Projekte termingerecht, innerhalb des Budgets und gemäß höchsten Qualitätsstandards geliefert werden.",
        image: {
          src: image,
          alt: "",
        },
      },
      {
        title: "Kosteneffiziente Lösungen",
        content:
          "Die Auslagerung der Projektunterstützung an JK-Stromprofis ist nicht nur eine kluge Entscheidung in Bezug auf Fachkenntnisse, sondern auch in Bezug auf die Wirtschaftlichkeit. Wir bieten flexible Lösungen, die auf spezifische Bedürfnisse zugeschnitten sind und es Ihnen ermöglichen, unsere Dienstleistungen in Anspruch zu nehmen, ohne die allgemeinen Kosten für festes Personal oder zusätzliche Ausrüstung tragen zu müssen. Wir arbeiten eng mit Kunden zusammen, um transparente Preise und einen einzigartigen Investitionswert zu gewährleisten.",
        image: {
          src: image,
          alt: "",
        },
      },
      {
        title: "Beschleunigen Sie Ihren Erfolg",
        content:
          "Durch die Zusammenarbeit mit JK-Stromprofis im Bereich Projektunterstützung gewinnen Sie einen vertrauenswürdigen Partner, der sich für Ihren Erfolg engagiert. Wir setzen uns dafür ein, Ihre Ziele und Aufgaben zu erreichen, sei es die Umsetzung eines neuen Bauprojekts, das Management von elektrischen Installationen oder die Bereitstellung laufender Wartung und Unterstützung. Ihr Erfolg ist unser Erfolg, und wir tun alles, um sicherzustellen, dass Ihre Projekte mit höchster Zufriedenheit abgeschlossen werden.",
        image: {
          src: image,
          alt: "",
        },
      },
    ],
  },
  {
    id: 3,
    title: `Sicherheitssysteme: <span>Alarme, Kameras, Brandschutz- und Rauchabzugsanlagen</span>`,
    subtitle:
      "Suchen Sie nach Möglichkeiten, Ihr Zuhause vor Eindringlingen und anderen Sicherheitsbedrohungen zu schützen? Nun, suchen Sie nicht weiter! Wir bieten die perfekten Lösungen - umfassende Sicherheitssysteme mit Kameras und Alarmanlagen, die die Sicherheit Ihrer Familie und Ihres Eigentums gewährleisten.",
    summary:
      "Vertrauen Sie unserem erfahrenen Team, das Ihnen und Ihrer Familie einen unvergleichlichen Schutz bietet. Wir haben uns darauf spezialisiert, umfassende Sicherheitslösungen an Ihre einzigartigen Bedürfnisse anzupassen. Warten Sie nicht länger - kontaktieren Sie uns noch heute, um die Sicherheit Ihres Zuhauses auf höchstem Niveau zu gewährleisten.",

    articles: [
      {
        title: "Alarmanlagen",
        content:
          "Wir bieten hochmoderne Alarmanlagen, die beste Lösung, um die Sicherheit Ihrer Familie, Ihres Eigentums und Ihres Unternehmens zu stärken. Mit unerschütterlichem Engagement für die Bereitstellung höchster Sicherheitsstandards haben wir eine bahnbrechende Palette von Alarmsystemen geschaffen, die das Konzept des optimalen Schutzes neu definieren.",
        image: {
          src: image,
          alt: "",
        },
      },
      {
        title: "Überwachungssysteme",
        content:
          "Zusätzlich zu unseren Alarmanlagen umfasst unser Sicherheitsangebot fortschrittliche Kameras. Diese Kameras bieten maximale Sicherheit und eine zusätzliche Schutzebene für Ihr Zuhause.",
        image: {
          src: image,
          alt: "",
        },
      },
      {
        title: "Brandmeldeanlagen",
        content:
          "Brandschutz hat höchste Priorität in jedem Zuhause. Daher bieten wir erstklassige Brandschutzsysteme an. Mit unseren Systemen können Sie optimale Brandsicherheit gewährleisten und Ihr Zuhause vor potenziellen Gefahren schützen.",
        image: {
          src: image,
          alt: "",
        },
      },
      {
        title: "Rauchabzugsanlagen",
        content:
          "Um die Sicherheit Ihres Zuhauses noch weiter zu erhöhen, bieten wir Rauchabzugsanlagen an. Diese Systeme sollen die Ausbreitung von Rauch im Falle einer Brandgefahr blockieren oder schnell entfernen und so das Wohlbefinden Ihrer Familie sicherstellen.",
        image: {
          src: image,
          alt: "",
        },
      },
    ],
  },
  {
    id: 4,
    title: `Entdecken Sie moderne Lösungen mit <span>Smart Home</span>`,
    subtitle:
      "Entdecken Sie eine völlig neue Welt des Komforts und der Effizienz, die direkt vor Ihnen liegt. Stellen Sie sich ein Zuhause vor, das alle Ihre Bedürfnisse kennt, Ihre Wünsche voraussieht und jeden Ihrer Launen erfüllt. Intelligente Häuser revolutionieren Ihren Lebensstil und verbessern jeden Aspekt Ihrer täglichen Routine.",
    summary:
      "Sind Sie bereit, Ihr Zuhause in eine Welt unbegrenzter Möglichkeiten zu verwandeln? Unsere intelligenten Hausservices sind hier, um die Art und Weise, wie Sie leben, zu revolutionieren und Komfort, Effizienz und Harmonie zu bieten. Schließen Sie sich der wachsenden Gemeinschaft von Hausbesitzern an, die bereits das wahre Potenzial ihrer Häuser freigesetzt haben.",

    articles: [
      {
        title: "Fühlen Sie den Unterschied",
        content:
          "Betreten Sie Ihr intelligentes Zuhause und bemerken Sie sofort den Unterschied. Sobald Sie die Tür durchschreiten, passen sich die Lichter automatisch der gewünschten Atmosphäre an, und Ihre Lieblingsmusik erfüllt die Luft. Unsere fortschrittliche Bewegungssensor-Technologie beleuchtet Ihren Weg, damit Sie sich mühelos im Haus bewegen können.",
        image: {
          src: image,
          alt: "",
        },
      },
      {
        title: "Optimierung des Energieverbrauchs",
        content:
          "In Smart Homes gehen wir über die vier Wände hinaus. Unsere Echtzeitdaten zum Energieverbrauch ermöglichen fundierte Entscheidungen, die letztendlich Ihren ökologischen Fußabdruck reduzieren. Optimieren Sie den Energieverbrauch, sparen Sie bei den Rechnungen und schließen Sie sich uns an, um eine umweltfreundlichere und nachhaltigere Zukunft zu gestalten.",
        image: {
          src: image,
          alt: "",
        },
      },
      {
        title: "Verändern Sie Ihr Zuhause noch heute",
        content:
          "Sind Sie bereit, die unbegrenzten Möglichkeiten Ihres Zuhauses freizuschalten? Treten Sie der wachsenden Gemeinschaft von Hausbesitzern bei, die den Komfort, die Effizienz und die Harmonie eines intelligenten Zuhauses bereits schätzen. Entdecken Sie eine Welt, in der Komfort auf Innovation trifft.",
        image: {
          src: image,
          alt: "",
        },
      },
      {
        title: "Verwalten Sie Geräte von Ihrem Smartphone aus",
        content:
          "Intelligente Haussysteme haben die Art und Weise, wie wir unsere Häuser verwalten, revolutioniert. Stellen Sie sich vor, Sie betreten ein Zuhause, das Sie mit perfekt angepasster Beleuchtung und Temperatur begrüßt, alles gesteuert über Ihr Smartphone. Intelligente Haussysteme automatisieren Aufgaben wie die Steuerung des Thermostats, das Einschalten von Geräten und sogar das Öffnen und Schließen von Türen. Dank all dieser intelligenten Funktionen kann das Zuhause sofort auf die Bedürfnisse des Kunden reagieren und Komfort und Bequemlichkeit bieten.",
        image: {
          src: image,
          alt: "",
        },
      },
    ],
  },
  {
    id: 5,
    title: `Beschallungssysteme`,
    subtitle:
      "Suchen Sie nach dem perfekten Beschallungssystem, das die Erfahrungen Ihrer Kunden verbessert und Ihre Leidenschaft mit der Welt teilt? Dann sind Sie hier genau richtig mit unserer Installation von Audiosystemen!",
    summary:
      "Wenn Sie also nach professionellen und zuverlässigen Dienstleistungen für die Installation von Audiosystemen suchen, suchen Sie nicht weiter. Kontaktieren Sie uns noch heute und überlassen Sie uns den Stress und die zeitaufwendigen Probleme im Zusammenhang mit der Installation!",

    articles: [
      {
        title: "Was wir anbieten",
        content:
          "Wir sind auf die Installation von Audiosystemen an verschiedenen Orten spezialisiert, von Wohnhäusern über Restaurants, Supermärkte, Geschäfte, Büros bis hin zu Einkaufszentren. Unser Installateurteam verfügt über langjährige Erfahrung darin, sicherzustellen, dass das Audiosystem an Ihrem Ort die Botschaft klar und präzise an alle Empfänger übermittelt.",
        image: {
          src: image,
          alt: "",
        },
      },
      {
        title: "Auf Sie zugeschnitten",
        content:
          "Wir werden persönlich mit Ihnen zusammenarbeiten, um die besten Klanglösungen für Ihren Raum zu finden - so dass der Klang passend ist. Zögern Sie also nicht und ermöglichen Sie es Ihren Kunden und Familienmitgliedern, das einzigartige Audiosystem zu genießen, das wir anbieten.",
        image: {
          src: image,
          alt: "",
        },
      },
      {
        title: "Verschönern Sie Ihr Zuhause",
        content:
          "Aber das ist nicht alles! Unsere Leidenschaft für den Klang geht über den Bereich kommerzieller Unternehmen hinaus. Für diejenigen, die die perfekte Harmonie in ihren privaten Räumen suchen, bietet unser Angebot zur Installation von Audiosystemen Ruhe und Heiligtum. Egal, ob Sie eine lebendige Versammlung veranstalten, sich einer gemütlichen Nacht hingeben oder einsame Momente verbringen, die richtige Beschallung gewährleistet, dass jeder Rhythmus mit Ihrer Seele resoniert.",
        image: {
          src: image,
          alt: "",
        },
      },
      {
        title: "Wir setzen auf Qualität",
        content:
          "Wir möchten sicherstellen, dass jedes installierte Audiosystem unseren hohen Standards entspricht und die Kunden maximalen Nutzen daraus ziehen. Wir bieten unseren Kunden die neueste Audio-Technologie führender Marken, damit Sie sich auf die Qualität der von uns verwendeten Ausrüstung verlassen können.",
        image: {
          src: image,
          alt: "",
        },
      },
    ],
  },
  {
    id: 6,
    title: `Planung, Installation und Austausch von <span>Beleuchtungssystemen</span>`,
    subtitle:
      "Suchen Sie nach einer professionellen Beleuchtungslösung, die beeindruckende Ergebnisse liefert und Ihren Raum erhellt? Suchen Sie nicht weiter als unsere umfassenden Beleuchtungsdienstleistungen für Privatpersonen und Geschäftsinhaber. ",
    summary:
      "Schließen Sie sich der unzähligen zufriedenen Kunden an, die bereits mit uns auf die Reise gegangen sind, um ihre Häuser und Unternehmen zu beleuchten. Lassen Sie uns gemeinsam die Magie des Lichts schaffen und Ihren Raum zum Strahlen bringen wie nie zuvor. Kontaktieren Sie uns noch heute, und wir werden gemeinsam versuchen, Ihre Vision zu verwirklichen!",

    articles: [
      {
        title: "Auf Sie zugeschnitten",
        content:
          "Egal, ob Sie Ihr Restaurant, Krankenhaus, Industrieanlage, Treppenhaus oder Garten beleuchten möchten, wir haben die perfekte Beleuchtungslösung für Sie. Unabhängig von der Größe Ihres Projekts und Ihrer Lage wird unser Team eng mit Ihnen zusammenarbeiten, um Ihre Anforderungen auf höchstem Niveau zu erfüllen.",
        image: {
          src: image,
          alt: "",
        },
      },
      {
        title: "Genaue Planung",
        content:
          "Wir werden eng mit Ihnen zusammenarbeiten, um Ihre Vision und Vorlieben zu verstehen. Wir werden den Layout Ihres Raums bewerten, natürliches Licht berücksichtigen und einen Beleuchtungsplan entwerfen, der speziell auf Ihre Bedürfnisse zugeschnitten ist. Unser Ziel ist es nicht nur, funktionale Beleuchtung bereitzustellen, sondern auch die allgemeine Atmosphäre Ihres Raums zu verbessern.",
        image: {
          src: image,
          alt: "",
        },
      },
      {
        title: "Modernisierung",
        content:
          "Aber was ist, wenn Sie bereits Beleuchtung haben, die Ihre Erwartungen nicht erfüllt? Machen Sie sich keine Sorgen, überlassen Sie das uns. Unser Team ist auf den Austausch von Beleuchtungskörpern spezialisiert, egal ob es sich um eine einzelne Glühbirne oder einen Kronleuchter handelt. Wir entfernen alte, veraltete Beleuchtung und ersetzen sie durch wunderbare, energieeffiziente Optionen, die Ihrem Raum neues Leben einhauchen.",
        image: {
          src: image,
          alt: "",
        },
      },
      {
        title: "Vertrauen Sie auf Erfahrung",
        content:
          "Unser Team von Experten verfügt über langjährige Erfahrung und Fachkenntnisse im Bereich Beleuchtungsdesign und -installation. Sie haben ein gutes Auge für Details und das Talent, Ihren Raum in ein echtes Kunstwerk zu verwandeln. Tief in unserem Herzen glauben wir, dass Beleuchtung nicht nur Funktionalität ist; es ist eine Kunstform. Egal, ob Sie Ihr Zuhause, Büro, Restaurant oder einen anderen Ort renovieren möchten, wir haben etwas Passendes für Sie.",
        image: {
          src: image,
          alt: "",
        },
      },
    ],
  },
  {
    id: 7,
    title: `Ladestationen für <span>Fahrzeuge</span>`,
    subtitle:
      "Wir präsentieren die Zukunft des Komforts und nachhaltiger Entwicklung – Ladestationen für moderne Elektrofahrzeuge! Entwickelt mit Kreativität und Präzision sind Ladepunkte Ihr Ticket für eine reibungslose und umweltfreundliche Fahrt. Investieren Sie in Ihre energetische Zukunft und suchen Sie nicht weiter.",
    summary:
      "Schließen Sie sich uns an und revolutionieren Sie Ihr Fahrerlebnis, indem Sie den Weg für eine umweltfreundlichere und nachhaltigere Zukunft ebnen. Unsere Ladepunkte für Batterien sind da, um Ihnen die Freiheit zu geben, sich auf endlose Abenteuer zu begeben, ohne sich um den Treibstoffverbrauch sorgen zu müssen.",

    articles: [
      {
        title: "Ladestationen für Batterien",
        content:
          "Stellen Sie sich eine Welt vor, in der Ihr Elektrofahrzeug immer aufgeladen und bereit für die Fahrt mit einem mitreißenden Energieschub ist. Dank unserer Batterieladestationen wird dieser Traum zur Realität. Wir sind hier, um die Art und Weise, wie Sie über das Laden nachdenken, zu verändern und es zu einer nahtlosen und mühelosen Erfahrung zu machen, die Sie beeindrucken wird.",
        image: {
          src: image,
          alt: "",
        },
      },
      {
        title: "Sicherheit und Zuverlässigkeit",
        content:
          "Unsere Dienstleistungen zur Installation von Ladestationen wurden mit Blick auf maximale Leistung entwickelt. Wir kümmern uns um alle Details der Verkabelung, damit Sie sich um nichts kümmern müssen. Mit unseren erstklassigen Produkten können Sie sicher sein, dass Sie eine Ladestation erhalten, die sicher und zuverlässig ist.",
        image: {
          src: image,
          alt: "",
        },
      },
      {
        title: "Integration mit der bestehenden Infrastruktur",
        content:
          "Tauchen Sie ein in die Welt modernster Technologie, verbunden mit elegantem und modernem Design, das sich nahtlos in jede Umgebung integriert. Von Unternehmenscampussen bis hin zu Wohngebieten – unsere Ladepunkte wurden so gestaltet, dass sie sich in die Umgebung einfügen und gleichzeitig eine mutige Erklärung Ihrer Verpflichtung zur nachhaltigen Zukunft abgeben.",
        image: {
          src: image,
          alt: "",
        },
      },
      {
        title: "Lösungen für gewerbliche Gebäude",
        content:
          "Wenn Sie Energie benötigen, um verschiedene Geräte auf Ihrem Gelände zu versorgen, suchen Sie nicht weiter! Mit unseren Lösungen können Sie genau dann und dort die richtige Menge Strom liefern, wo Sie ihn benötigen. Wir bieten die Leistung, Stabilität und den Schutz, den Sie für die Durchführung jeder Aufgabe auf Ihrem Gelände benötigen. Wir sind stolz darauf, Landwirten wie Ihnen zu helfen, ihre Anlagen sicher und zuverlässig zu betreiben.",
        image: {
          src: image,
          alt: "",
        },
      },
    ],
  },
];
