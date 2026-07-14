import React, {
  createContext,
  useContext,
  useMemo,
  useState,
  ReactNode,
} from "react";

import { CartItem, Product } from "@/types";

interface CartContextType {
  cartItems: CartItem[];

  addToCart: (
    product: Product,
    quantity: number
  ) => void;

  removeFromCart: (
    itemId: string
  ) => void;

  updateQuantity: (
    itemId: string,
    quantity: number
  ) => void;

  clearCart: () => void;

  getSubtotal: () => number;

  getTotalItems: () => number;
}

const CartContext = createContext<
  CartContextType | undefined
>(undefined);

interface ProviderProps {
  children: ReactNode;
}

export function CartProvider({
  children,
}: ProviderProps) {

  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  function addToCart(
    product: Product,
    quantity: number
  ) {

    setCartItems((previous) => {

      const existingItem = previous.find(
        (item) => item.product.id === product.id
      );

      if (existingItem) {

        return previous.map((item) =>

          item.product.id === product.id
            ? {
                ...item,
                quantity:
                  item.quantity + quantity,
              }
            : item

        );

      }

      return [

        ...previous,

        {
          id: Date.now().toString(),
          product,
          quantity,
          addedAt: new Date().toISOString(),
        },

      ];

    });

  }

  function removeFromCart(
    itemId: string
  ) {

    setCartItems((previous) =>
      previous.filter(
        (item) => item.id !== itemId
      )
    );

  }

  function updateQuantity(
    itemId: string,
    quantity: number
  ) {

    if (quantity <= 0) {

      removeFromCart(itemId);

      return;

    }

    setCartItems((previous) =>
      previous.map((item) =>

        item.id === itemId
          ? {
              ...item,
              quantity,
            }
          : item

      )
    );

  }

  function clearCart() {

    setCartItems([]);

  }

  function getSubtotal() {

    return cartItems.reduce(

      (total, item) =>

        total +
        item.product.price * item.quantity,

      0

    );

  }

  function getTotalItems() {

    return cartItems.reduce(

      (total, item) =>

        total + item.quantity,

      0

    );

  }

  const value = useMemo(
    () => ({
      cartItems,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      getSubtotal,
      getTotalItems,
    }),
    [cartItems]
  );

  return (

    <CartContext.Provider value={value}>

      {children}

    </CartContext.Provider>

  );

}

export function useCartContext() {

  const context = useContext(
    CartContext
  );

  if (!context) {

    throw new Error(
      "useCartContext must be used within CartProvider"
    );

  }

  return context;

}