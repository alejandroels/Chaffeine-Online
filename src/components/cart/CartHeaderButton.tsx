"use client";

import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { useCart } from "./CartProvider";

export function CartHeaderButton() {
  const { totalItems, openCart } = useCart();

  return (
    <button
      type="button"
      onClick={openCart}
      className="relative flex h-10 w-10 items-center justify-center text-white transition-opacity duration-300 ease-in-out hover:opacity-80"
      aria-label="Abrir carrito"
    >
      <MaterialIcon name="shopping_bag" size={22} />
      {totalItems > 0 && (
        <span className="absolute -top-1 -right-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-white px-1 text-[0.65rem] font-semibold text-[#907C75]">
          {totalItems}
        </span>
      )}
    </button>
  );
}
