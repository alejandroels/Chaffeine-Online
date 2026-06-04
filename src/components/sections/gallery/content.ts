export const galleryContent = {
  id: "gallery",
  title: "Nuestras Especialidades",
  description:
    "Selección curada por nuestros baristas para los paladares más exigentes.",
  images: [
    {
      src: "/Images/Screenshot_2026-06-03_214546-removebg-preview.png",
      alt: "Frappe de fresa en vaso Chaffeine",
      width: 520,
      height: 900,
    },
    {
      src: "/Images/Image1-removebg-preview.png",
      alt: "Variedad de bebidas frías Chaffeine",
      width: 800,
      height: 600,
      delay: 150,
    },
    {
      src: "/Images/image-removebg-preview (1).png",
      alt: "Bowl saludable con pollo y vegetales",
      width: 700,
      height: 700,
      delay: 300,
    },
  ],
  quote: {
    text: "El café es el bálsamo del corazón y del espíritu.",
    author: "Giuseppe Verdi",
    delay: 450,
  },
} as const;
