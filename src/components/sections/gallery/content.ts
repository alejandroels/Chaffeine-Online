export const galleryContent = {
  id: "gallery",
  title: "Nuestras Colecciones",

  posters: {
    smoothies: {
      src: "/Images/Posters/Smoothies.webp",
      alt: "Smoothies",
      width: 900,
      height: 280,
      viewHref: "#menu",
    },
    detox: {
      src: "/Images/Posters/DETOX.webp",
      alt: "Detox",
      width: 900,
      height: 280,
      viewHref: "#menu",
      maxWidthClass: "max-w-md sm:max-w-lg",
    },
    ensaladas: {
      src: "/Images/Posters/Ensaldas.webp",
      alt: "Ensaladas",
      width: 900,
      height: 280,
      viewHref: "#menu",
    },
  },
  images: [
    {
      src: "/Images/Screenshot_2026-06-03_214546-removebg-preview.webp",
      alt: "Frappe de fresa en vaso Chaffeine",
      width: 520,
      height: 900,
    },
    {
      src: "/Images/Image1-removebg-preview.webp",
      alt: "Variedad de bebidas frías Chaffeine",
      width: 800,
      height: 600,
      delay: 150,
    },
    {
      src: "/Images/image-removebg-preview (1).webp",
      alt: "Bowl saludable con pollo y vegetales",
      width: 700,
      height: 700,
      delay: 300,
    },
  ],
  quote: {
    text: "¿Ya probaste estas delicias de Chaffeine?",

    delay: 450,
  },
} as const;
