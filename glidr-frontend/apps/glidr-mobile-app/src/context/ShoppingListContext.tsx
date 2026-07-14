import React, {
  createContext,
  ReactNode,
  useContext,
  useMemo,
  useState,
} from "react";

import { ShoppingList, Product } from "@/types";
import { shoppingLists as initialShoppingLists } from "@/mock";

interface ShoppingListContextType {
  shoppingLists: ShoppingList[];

  createList: (title: string) => void;

  deleteList: (id: string) => void;

  getList: (id: string) => ShoppingList | undefined;

  addProductToList: (
    listId: string,
    product: Product,
    quantity: number
  ) => void;

  removeProductFromList: (
    listId: string,
    itemId: string
  ) => void;

  updateQuantity: (
    listId: string,
    itemId: string,
    quantity: number
  ) => void;
}

const ShoppingListContext = createContext<
  ShoppingListContextType | undefined
>(undefined);

interface ProviderProps {
  children: ReactNode;
}

export function ShoppingListProvider({
  children,
}: ProviderProps) {


  const [shoppingLists, setShoppingLists] =
    useState<ShoppingList[]>(initialShoppingLists);


  function createList(title: string) {

    const newList: ShoppingList = {

      id: Date.now().toString(),

      title,

      createdAt: new Date().toISOString(),

      updatedAt: new Date().toISOString(),

      items: [],

    };

    setShoppingLists((previous) => [
      newList,
      ...previous,
    ]);

  }


  function deleteList(id: string) {

    setShoppingLists((previous) =>
      previous.filter((list) => list.id !== id)
    );

  }


  function getList(id: string) {

    return shoppingLists.find(
      (list) => list.id === id
    );

  }


  function addProductToList(
    listId: string,
    product: Product,
    quantity: number
  ) {

    setShoppingLists((previous) =>
      previous.map((list) => {

        if (list.id !== listId) {
          return list;
        }

        const existingItem = list.items.find(
          (item) => item.product.id === product.id
        );


        if (existingItem) {

          return {

            ...list,

            updatedAt: new Date().toISOString(),

            items: list.items.map((item) =>

              item.product.id === product.id

                ? {
                    ...item,
                    quantity:
                      item.quantity + quantity,
                  }

                : item

            ),

          };

        }


        return {

          ...list,

          updatedAt: new Date().toISOString(),

          items: [

            ...list.items,

            {

              id: Date.now().toString(),

              product,

              quantity,

              addedAt:
                new Date().toISOString(),

            },

          ],

        };

      })
    );

  }


  function removeProductFromList(
    listId: string,
    itemId: string
  ) {

    setShoppingLists((previous) =>
      previous.map((list) => {

        if (list.id !== listId) {

          return list;

        }

        return {

          ...list,

          updatedAt: new Date().toISOString(),

          items: list.items.filter(
            (item) => item.id !== itemId
          ),

        };

      })
    );

  }


  function updateQuantity(
    listId: string,
    itemId: string,
    quantity: number
  ) {

    setShoppingLists((previous) =>
      previous.map((list) => {

        if (list.id !== listId) {

          return list;

        }

        return {

          ...list,

          updatedAt: new Date().toISOString(),

          items: list.items.map((item) =>

            item.id === itemId

              ? {
                  ...item,
                  quantity: Math.max(
                    1,
                    quantity
                  ),
                }

              : item

          ),

        };

      })
    );

  }


  const value = useMemo(
    () => ({
      shoppingLists,
      createList,
      deleteList,
      getList,
      addProductToList,
      removeProductFromList,
      updateQuantity,
    }),
    [shoppingLists]
  );

  return (

    <ShoppingListContext.Provider
      value={value}
    >

      {children}

    </ShoppingListContext.Provider>

  );

}

export function useShoppingListContext() {

  const context = useContext(
    ShoppingListContext
  );

  if (!context) {

    throw new Error(
      "useShoppingListContext must be used inside ShoppingListProvider"
    );

  }

  return context;

}