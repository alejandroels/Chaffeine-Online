"use client";

import Image from "next/image";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { buildWhatsAppOrderUrl } from "./buildWhatsAppOrderUrl";
import { useCart } from "./CartProvider";

function formatPrice(value: number) {
  return `$${value.toFixed(2)}`;
}

export function CartSidebar() {
  const {
    items,
    isOpen,
    totalItems,
    totalPrice,
    closeCart,
    removeItem,
    updateQuantity,
  } = useCart();

  const handleWhatsAppOrder = () => {
    if (items.length === 0) {
      return;
    }

    window.open(buildWhatsAppOrderUrl(items, totalPrice), "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <button
        type="button"
        aria-label="Cerrar carrito"
        onClick={closeCart}
        className={`fixed inset-0 z-40 bg-on-surface/40 transition-opacity duration-300 ${
          isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />

      <aside
        aria-label="Carrito de pedido"
        aria-hidden={!isOpen}
        className={`fixed top-0 right-0 z-50 flex h-full w-full max-w-md flex-col border-l border-outline-variant bg-surface shadow-2xl transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-outline-variant px-gutter-lg py-5">
          <div>
            <h2 className="font-headline-md text-headline-md">Tu pedido</h2>
            <p className="font-body-md text-body-md text-secondary">
              {totalItems} {totalItems === 1 ? "producto" : "productos"}
            </p>
          </div>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Cerrar"
            className="flex h-10 w-10 items-center justify-center text-on-surface transition-colors hover:text-primary"
          >
            <MaterialIcon name="close" size={28} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-gutter-lg py-6">
          {items.length === 0 ? (
            <p className="font-body-md text-body-md text-secondary">
              Aún no has añadido productos. Usa &ldquo;Solicitar&rdquo; en el
              menú para empezar.
            </p>
          ) : (
            <ul className="space-y-5">
              {items.map((item) => (
                <li
                  key={item.id}
                  className="flex gap-4 border-b border-outline-variant/40 pb-5"
                >
                  <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-sm bg-surface-container">
                    <Image
                      src={item.image.src}
                      alt={item.image.alt}
                      fill
                      sizes="64px"
                      className="object-contain p-1"
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="font-headline-md text-headline-md leading-tight">
                          {item.name}
                        </h3>
                        <p className="mt-1 font-label-md text-label-md text-primary">
                          {item.price}
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(item.id)}
                        aria-label={`Eliminar ${item.name}`}
                        className="text-on-surface-variant transition-colors hover:text-primary"
                      >
                        <MaterialIcon name="delete" size={20} />
                      </button>
                    </div>

                    <div className="mt-3 flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        aria-label={`Reducir cantidad de ${item.name}`}
                        className="flex h-8 w-8 items-center justify-center border border-outline-variant transition-colors hover:border-primary hover:text-primary"
                      >
                        <MaterialIcon name="remove" size={18} />
                      </button>
                      <span className="min-w-6 text-center font-label-md text-label-md">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        aria-label={`Aumentar cantidad de ${item.name}`}
                        className="flex h-8 w-8 items-center justify-center border border-outline-variant transition-colors hover:border-primary hover:text-primary"
                      >
                        <MaterialIcon name="add" size={18} />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="border-t border-outline-variant px-gutter-lg py-6">
          <div className="mb-5 flex items-center justify-between">
            <span className="font-label-md text-label-md uppercase tracking-widest text-secondary">
              Total
            </span>
            <span className="font-headline-md text-headline-md text-primary">
              {formatPrice(totalPrice)}
            </span>
          </div>
          <button
            type="button"
            disabled={items.length === 0}
            onClick={handleWhatsAppOrder}
            className="w-full bg-primary px-6 py-3 font-label-md text-label-md uppercase tracking-widest text-on-primary transition-opacity duration-300 hover:opacity-85 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Solicitar por WhatsApp
          </button>
        </div>
      </aside>
    </>
  );
}
