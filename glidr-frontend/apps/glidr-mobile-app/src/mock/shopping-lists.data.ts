import { ShoppingList } from "@/types/shopping-list";
import { products } from "./products.data";

export const shoppingLists: ShoppingList[] = [
    {
        id: "1",
        title: "All I need",

        createdAt: "2026-07-05",

        updatedAt: "2026-07-05",

        items: [
            {
                id: "1",
                product: products[0],
                quantity: 2,
                addedAt: "2026-07-05",
            },
            {
                id: "2",
                product: products[3],
                quantity: 1,
                addedAt: "2026-07-05",
            },
            {
                id: "3",
                product: products[6],
                quantity: 4,
                addedAt: "2026-07-05",
            },
        ],
    },

    {
        id: "2",

        title: "To buy later",

        createdAt: "2026-07-05",

        updatedAt: "2026-07-05",

        items: [
            {
                id: "4",
                product: products[12],
                quantity: 1,
                addedAt: "2026-07-05",
            },
            {
                id: "5",
                product: products[15],
                quantity: 3,
                addedAt: "2026-07-05",
            },
        ],
    },
];