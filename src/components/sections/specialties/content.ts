import { CARD_DESIGNS } from "./cardDesigns";

export type Specialty = {
  id: string;
  name: string;
  description: string;
  price: string;
  cardDesign: (typeof CARD_DESIGNS)[number];
  image: {
    src: string;
    alt: string;
  };
  delay?: number;
};

export const specialtiesContent = {
  id: "menu",
  title: "Nuestro Menú",
 
  items: [
    {
      id: "banana-straw",
      name: "Banana-Straw",
      description:
        "Base de yogurt, leche, banana, fresa y semillas de chía.",
      price: "$5",
      cardDesign: CARD_DESIGNS[0],
      image: {
        src: "/Images/products/Banana-Straw.webp",
        alt: "Smoothie Banana-Straw Chaffeine",
      },
    },
    {
      id: "tropi-sunset",
      name: "Tropi-Sunset",
      description:
        "Base de yogurt, leche, mango, piña y coco deshidratado.",
      price: "$4",
      cardDesign: CARD_DESIGNS[1],
      image: {
        src: "/Images/products/Tropi-Sunset.webp",
        alt: "Smoothie Tropi-Sunset Chaffeine",
      },
      delay: 100,
    },
    {
      id: "choco-banano",
      name: "Choco Banano",
      description: "Base de yogurt, leche, banana, almendra y cacao en polvo.",
      price: "$4",
      cardDesign: CARD_DESIGNS[2],
      image: {
        src: "/Images/products/Choco Banano.webp",
        alt: "Smoothie Choco Banano Chaffeine",
      },
      delay: 200,
    },
    {
      id: "dark-honey",
      name: "Dark Honey",
      description: "Base de yogurt, leche, frutos del bosque y miel.",
      price: "$5",
      cardDesign: CARD_DESIGNS[3],
      image: {
        src: "/Images/products/Dark Honey.webp",
        alt: "Smoothie Dark Honey Chaffeine",
      },
      delay: 300,
    },
    {
      id: "caribbean",
      name: "Caribbean",
      description: "Base de yogurt, leche, papaya y miel.",
      price: "$3.50",
      cardDesign: CARD_DESIGNS[0],
      image: {
        src: "/Images/products/Caribbean.webp",
        alt: "Smoothie Caribbean Chaffeine",
      },
      delay: 400,
    },
  ] satisfies Specialty[],
} as const;
