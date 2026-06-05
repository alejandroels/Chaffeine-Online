import type { CartItem } from "./types";

const WHATSAPP_PHONE = "5358182746";

export function buildWhatsAppOrderUrl(
  items: CartItem[],
  totalPrice: number,
): string {
  const lines = items.map(
    (item) => `- ${item.name} x${item.quantity} (${item.price})`,
  );
  const message = [
    "Hola, quiero solicitar:",
    "",
    ...lines,
    "",
    `Total: $${totalPrice.toFixed(2)}`,
  ].join("\n");

  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}
