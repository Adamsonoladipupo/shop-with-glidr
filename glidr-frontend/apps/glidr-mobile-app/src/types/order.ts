import { CartItem } from "./cart-item";

export type OrderStatus =
  | "placed"
  | "accepted"
  | "preparing"
  | "ready"
  | "out_for_delivery"
  | "completed"
  | "cancelled";

export type DeliveryMethod =
  | "pickup"
  | "delivery";

export type PaymentMethod =
  | "wallet"
  | "pickup"
  | "online";

export interface Order {

  id: string;

  items: CartItem[];

  subtotal: number;

  deliveryFee: number;

  total: number;

  deliveryMethod: DeliveryMethod;

  paymentMethod: PaymentMethod;

  status: OrderStatus;

  createdAt: string;

}