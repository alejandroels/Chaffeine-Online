"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { CartItem, CartProduct } from "./types";
import { parsePrice } from "./types";

type CartContextValue = {
  items: CartItem[];
  isOpen: boolean;
  totalItems: number;
  totalPrice: number;
  addItem: (product: CartProduct) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  openCart: () => void;
  closeCart: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const addItem = useCallback((product: CartProduct) => {
    setItems((current) => {
      const existing = current.find((item) => item.id === product.id);

      if (existing) {
        return current.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [
        ...current,
        {
          ...product,
          priceValue: parsePrice(product.price),
          quantity: 1,
        },
      ];
    });
    setIsOpen(true);
  }, []);

  const removeItem = useCallback((id: string) => {
    setItems((current) => current.filter((item) => item.id !== id));
  }, []);

  const updateQuantity = useCallback((id: string, quantity: number) => {
    if (quantity <= 0) {
      setItems((current) => current.filter((item) => item.id !== id));
      return;
    }

    setItems((current) =>
      current.map((item) =>
        item.id === id ? { ...item, quantity } : item,
      ),
    );
  }, []);

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);

  const totalItems = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity, 0),
    [items],
  );

  const totalPrice = useMemo(
    () =>
      items.reduce(
        (sum, item) => sum + item.priceValue * item.quantity,
        0,
      ),
    [items],
  );

  const value = useMemo(
    () => ({
      items,
      isOpen,
      totalItems,
      totalPrice,
      addItem,
      removeItem,
      updateQuantity,
      openCart,
      closeCart,
    }),
    [
      items,
      isOpen,
      totalItems,
      totalPrice,
      addItem,
      removeItem,
      updateQuantity,
      openCart,
      closeCart,
    ],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart debe usarse dentro de CartProvider");
  }

  return context;
}
