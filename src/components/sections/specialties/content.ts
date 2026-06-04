export type Specialty = {
  icon: string;
  name: string;
  description: string;
  price: string;
  delay?: number;
};

export const specialtiesContent = {
  id: "menu",
  title: "Nuestras Especialidades",
  description:
    "Selección curada por nuestros baristas para los paladares más exigentes.",
  items: [
    {
      icon: "coffee",
      name: "Espresso",
      description: "Intenso, equilibrado y con cuerpo.",
      price: "$3.50",
    },
    {
      icon: "palette",
      name: "Latte Art",
      description: "Sedosa leche vaporizada y espresso.",
      price: "$4.50",
      delay: 100,
    },
    {
      icon: "water_drop",
      name: "Pour-over",
      description: "Claridad y notas frutales puras.",
      price: "$5.00",
      delay: 200,
    },
    {
      icon: "ac_unit",
      name: "Cold Brew",
      description: "Infusión en frío por 18 horas.",
      price: "$4.75",
      delay: 300,
    },
  ] satisfies Specialty[],
} as const;
