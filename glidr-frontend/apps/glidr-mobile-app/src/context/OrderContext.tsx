import {
    createContext,
    ReactNode,
    useContext,
    useMemo,
    useState,
} from "react";

import {
    Order,
    OrderStatus
} from "@/types";

interface OrderContextType {

    orders: Order[];

    placeOrder: (
        order: Omit<Order, "id" | "createdAt">
    ) => void;

    getOngoingOrders: () => Order[];

    getCompletedOrders: () => Order[];

    updateOrderStatus: (
        id: string,
        status: OrderStatus
    ) => void;

}

const OrderContext = createContext<
    OrderContextType | undefined
>(undefined);

interface Props {
    children: ReactNode;
}

export function OrderProvider({
    children,
}: Props) {

    const [orders, setOrders] =
        useState<Order[]>([]);

    function placeOrder(
        order: Omit<Order, "id" | "createdAt">
    ) {

        const newOrder: Order = {

            ...order,

            id: Date.now().toString(),

            createdAt:
                new Date().toISOString(),

        };

        setOrders((previous) => [
            newOrder,
            ...previous,
        ]);

    }

    function updateOrderStatus(
        id: string,
        status: OrderStatus
    ) {

        setOrders(previous =>
            previous.map(order =>

                order.id === id

                    ? {
                        ...order,
                        status,
                    }

                    : order

            )
        );

    }

    function getOngoingOrders() {

        return orders.filter(order =>

            order.status !== "completed" &&
            order.status !== "cancelled"

        );

    }
    function getCompletedOrders() {

        return orders.filter(

            order =>

                order.status === "completed"

        );

    }

    const value = useMemo(
        () => ({

            orders,

            placeOrder,

            updateOrderStatus,

            getOngoingOrders,

            getCompletedOrders,

        }),
        [orders]
    );

    return (

        <OrderContext.Provider
            value={value}
        >

            {children}

        </OrderContext.Provider>

    );

}

export function useOrderContext() {

    const context =
        useContext(OrderContext);

    if (!context) {

        throw new Error(
            "useOrderContext must be used inside OrderProvider"
        );

    }

    return context;

}