import { router } from "expo-router";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import {
  CartItemCard,
  CartSummary,
  EmptyCart,
} from "@/components/cart";

import { useCart } from "@/hooks/useCart";

export default function CartScreen() {
  const {
    cartItems,
    updateQuantity,
    removeFromCart,
    getSubtotal,
  } = useCart();

  if (cartItems.length === 0) {
    return (
      <EmptyCart
        onExplore={() => router.push("/")}
      />
    );
  }

  return (
    <SafeAreaView
      style={styles.container}
      edges={["top"]}
    >
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <CartItemCard
            item={item}
            onIncrease={() =>
              updateQuantity(
                item.id,
                item.quantity + 1
              )
            }
            onDecrease={() => {
              if (item.quantity <= 1) {
                removeFromCart(item.id);
                return;
              }

              updateQuantity(
                item.id,
                item.quantity - 1
              );
            }}
            onRemove={() =>
              removeFromCart(item.id)
            }
          />
        )}
        ListFooterComponent={
          <View style={styles.footer}>
            <CartSummary
              subtotal={getSubtotal()}
            />

            <TouchableOpacity
              style={styles.checkoutButton}
              onPress={() =>
                router.push("/checkout")
              }
            >
              <Text style={styles.checkoutText}>
                Proceed to Checkout
              </Text>
            </TouchableOpacity>
          </View>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
    paddingHorizontal: 20,
  },

  footer: {
    marginTop: 20,
    marginBottom: 40,
  },

  checkoutButton: {
    height: 56,
    backgroundColor: "#18B7AE",
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
  },

  checkoutText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "700",
  },
});