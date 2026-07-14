import { useOrderContext } from "@/context/OrderContext";

export function useOrders() {
  return useOrderContext();
}