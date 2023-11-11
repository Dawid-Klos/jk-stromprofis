import image from "@assets/images/service-image.png";
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
  articles: Article[];
};

export const content: Content[] = [
  {
    id: 0,
    title: `Systemy bezpieczeństwa, na <span>Twoją kieszeń</span>`,
    subtitle:
      "Szukasz sposobów na ochronę swojego domu przed intruzami i innymi zagrożeniami bezpieczeństwa? Cóż, nie szukaj dalej! Mamy w ofercie idealne rozwiązania – kompleksowe systemy bezpieczeństwa z kamerami i systemami alarmowymi, które zapewnią bezpieczeństwo Twoim bliskim i dobytkowi.",
    
      articles: [
        {
          title: "Zadbaj o wydajność Twoich instalacji",
          content:
            "Nasz zespół wykwalifikowanych specjalistów dokłada wszelkich starań, aby zapewnić najwyższej klasy instalacje elektryczne, które uwolnią pełny potencjał Twojej przestrzeni. Wierzymy, że dobrze wykonany system elektryczny może zwiększyć wydajność, bezpieczeństwo i ogólną produktywność, zarówno w domu, jak i w miejscu pracy.",
          image: {
            src: image,
            alt: "",
          },
        },
        {
          title: "Postaw na dobrą współpracę",
          content:
            "Rozumiemy, że każdy klient ma unikalne wymagania. Dlatego oferujemy dopasowane rozwiązania w zakresie instalacji elektrycznych, które zostały zaprojektowane tak, aby spełnić określone potrzeby. Nasz zespół poświęca czas na zrozumienie Twoich celów i ściśle z Tobą współpracuje, aby stworzyć spersonalizowany plan, który będzie zgodny z Twoją wizją.",
          image: {
            src: image,
            alt: "",
          },
        },
        {
          title: "Zadbaj o jakość swojej instalacji",
          content:
            "Niezawodność jest najważniejsza, dlatego dbamy o szczegóły i ściśle przestrzegamy standardów branżowych. Nasi doświadczeni technicy korzystają z najnowocześniejszego sprzętu i wysokiej jakości materiałów, aby zapewnić, że instalacje elektryczne są zbudowane tak, aby wytrzymać próbę czasu. Możesz zaufać naszemu wykonaniu i cieszyć się spokojem, wiedząc, że Twoje systemy elektryczne są bezpieczne i niezawodne.",
          image: {
            src: image,
            alt: "",
          },
        },
        {
          title: "Bezstresowe instalacje elektryczne",
          content: "Wierzymy, że cały proces przebiega płynnie i bezstresowo. Od wstępnej konsultacji po ostateczną instalację, nasz zespół zapewnia doskonałą obsługę klienta. Zajmujemy się wszystkimi aspektami projektu, zapewniając, że możesz się zrelaksować i cieszyć korzyściami płynącymi z naszych profesjonalnych instalacji elektrycznych bez żadnych kłopotów.",
          image: {
            src: image,
            alt: "",
          },
        },
      ],
    },
];
