import { Product } from "./product";

export interface ShoppingListItem {
    id: string;
    product: Product;
    quantity: number;
    addedAt: string;
}