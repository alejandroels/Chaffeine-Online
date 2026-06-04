export const galleryContent = {
  id: "gallery",
  images: [
    {
      src: "/Images/Image1.png",
      alt: "Proceso de preparación del café",
      width: 600,
      height: 690,
      caption: {
        title: "Proceso",
        description: "Cada detalle cuenta en la preparación.",
      },
    },
    {
      src: "/Images/Screenshot_2026-06-03_214546-removebg-preview.png",
      alt: "Interior del café",
      width: 640,
      height: 790,
      delay: 150,
    },
    {
      src: "/Images/Cookies-removebg-preview.png",
      alt: "Detalle de granos de café",
      width: 520,
      height: 620,
      delay: 300,
    },
  ],
  quote: {
    text: "El café es el bálsamo del corazón y del espíritu.",
    author: "Giuseppe Verdi",
    delay: 450,
  },
} as const;
