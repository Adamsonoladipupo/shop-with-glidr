import { ShoppingListItem } from "./shopping-list-item";

export interface ShoppingList {
    id: string;

    title: string;

    items: ShoppingListItem[];

    createdAt: string;

    updatedAt: string;
}