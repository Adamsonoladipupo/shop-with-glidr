import { useOrders } from "@/hooks/useOrders";
import { router } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { CheckoutFooter, DeliveryOptionCard, OrderSummary, PaymentMethodCard } from "@/components/checkout";

import { useCart } from "@/hooks/useCart";

export default function CheckoutScreen() {
    const {
        placeOrder,
    } = useOrders();

    const { getSubtotal, getTotalItems, clearCart, cartItems } = useCart();

    const [deliveryMethod, setDeliveryMethod] = useState<
        "pickup" | "delivery"
    >("pickup");

    const [paymentMethod, setPaymentMethod] = useState<
        "wallet" | "pickup" | "online"
    >("wallet");

    const deliveryFee = deliveryMethod === "delivery" ? 1500 : 0;

    const total = getSubtotal() + deliveryFee;

    function handlePlaceOrder() {


        const subtotal =
            getSubtotal();

        const deliveryFee =
            deliveryMethod === "delivery"

                ? 1500

                : 0;

        placeOrder({

            items: cartItems,

            subtotal,

            deliveryFee,

            total:
                subtotal + deliveryFee,

            deliveryMethod,

            paymentMethod,

            status: "placed",

        });

        // console.log("Place Order clicked");

        clearCart();

        // console.log("Cart Cleared");

        router.replace(
            "/order-success"
        );

    }

    return (

        <SafeAreaView style={styles.container}>

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.content}
            >
                <Text style={styles.title}>
                    Checkout
                </Text>

                <DeliveryOptionCard
                    selected={deliveryMethod}
                    onSelect={setDeliveryMethod}
                />

                <PaymentMethodCard
                    selected={paymentMethod}
                    onSelect={setPaymentMethod}
                />

                <OrderSummary
                    subtotal={getSubtotal()}
                    totalItems={getTotalItems()}
                    deliveryMethod={deliveryMethod}
                />

            </ScrollView>


            <CheckoutFooter
                total={total}
                onPlaceOrder={handlePlaceOrder}
            />

        </SafeAreaView>

    );

}

const styles = StyleSheet.create({

    container: {

        flex: 1,

        backgroundColor: "#F8F8F8",

        padding: 20,

    },
    content: {
        padding: 20,
        paddingBottom: 30,
    },

    title: {

        fontSize: 28,

        fontWeight: "700",

        marginBottom: 24,

    },

});