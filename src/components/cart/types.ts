export type CartItem = {
  id: string;
  name: string;
  description: string;
  price: string;
  priceValue: number;
  image: {
    src: string;
    alt: string;
  };
  quantity: number;
};

export type CartProduct = {
  id: string;
  name: string;
  description: string;
  price: string;
  image: {
    src: string;
    alt: string;
  };
};

export function parsePrice(price: string): number {
  const value = Number.parseFloat(price.replace(/[^0-9.]/g, ""));
  return Number.isFinite(value) ? value : 0;
}
