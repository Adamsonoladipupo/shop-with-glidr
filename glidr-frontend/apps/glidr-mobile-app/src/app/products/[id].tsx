import { useMemo, useState } from "react";
import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { useCart } from "@/hooks/useCart";
import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";


import { products } from "@/mock";

export default function ProductDetailsScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const foundProduct = useMemo(
    () => products.find((item) => item.id === id),
    [id]
  );

  if (!foundProduct) {
    return (
      <SafeAreaView style={styles.center}>
        <Text>Product not found.</Text>
      </SafeAreaView>
    );
  }
  const product = foundProduct;

  const increase = () => {
    if (quantity < product.quantity) {
      setQuantity(quantity + 1);
    }
  };

  const decrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  function handleAddToCart() {
    addToCart(product, quantity);
    Alert.alert(
      "Added to Cart",
      `${product.name} has been added to your cart.`,
      [
        {
          text: "Continue Shopping",
          style: "cancel",
        },
        {
          text: "View Cart",
          onPress: () => router.push("/cart"),
        },
      ]
    );

  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        {/* Back Button */}

        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Ionicons name="arrow-back" size={28} color="#111827" />
        </TouchableOpacity>

        <View style={styles.imageContainer}>
          <Image
            source={product.image}
            style={styles.image}
          />
        </View>

        <Text style={styles.name}>{product.name}</Text>

        <Text style={styles.price}>
          ₦{product.price.toLocaleString()}
        </Text>

        <View style={styles.statsRow}>
          <View>
            <Text style={styles.statValue}>
              ⭐ {product.rating}
            </Text>
            <Text style={styles.statLabel}>Rating</Text>
          </View>

          <View>
            <Text style={styles.statValue}>
              {product.quantity}
            </Text>
            <Text style={styles.statLabel}>In Stock</Text>
          </View>

          <View>
            <Text style={styles.statValue}>
              {product.brand}
            </Text>
            <Text style={styles.statLabel}>Brand</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>
          Product Details
        </Text>

        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Category</Text>
          <Text style={styles.detailValue}>
            {/* COMEBACK to Modify */}
            {product.categoryId}
          </Text>
        </View>

        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Brand</Text>
          <Text style={styles.detailValue}>
            {product.brand}
          </Text>
        </View>

        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Description</Text>
          <Text
            style={[
              styles.detailValue,
              { width: "60%", textAlign: "right" },
            ]}
          >
            {product.description}
          </Text>
        </View>


        <Text style={styles.sectionTitle}>
          Store Location
        </Text>

        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Shelf</Text>
          <Text style={styles.detailValue}>
            {product.shelfNumber}
          </Text>
        </View>

        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Aisle</Text>
          <Text style={styles.detailValue}>
            {product.aisleNumber}
          </Text>
        </View>

        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Section</Text>
          <Text style={styles.detailValue}>
            {product.shelfSection}
          </Text>
        </View>

        <View style={styles.quantityRow}>
          <View>
            <Text style={styles.quantityTitle}>
              Quantity
            </Text>

            <Text style={styles.stockText}>
              Only {product.quantity} left
            </Text>
          </View>

          <View style={styles.counter}>
            <TouchableOpacity
              style={styles.counterButton}
              onPress={decrease}
            >
              <Ionicons
                name="remove"
                size={22}
                color="#18B7AE"
              />
            </TouchableOpacity>

            <Text style={styles.counterText}>
              {quantity}
            </Text>

            <TouchableOpacity
              style={styles.counterButton}
              onPress={increase}
            >
              <Ionicons
                name="add"
                size={22}
                color="#18B7AE"
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Add To Cart */}

        <TouchableOpacity
          style={[
            styles.button,
            product.quantity === 0 && styles.disabledButton,
          ]}
          disabled={product.quantity === 0}
          onPress={handleAddToCart}
        >
          <Text style={styles.buttonText}>
            {product.quantity === 0
              ? "Out of Stock"
              : "Add to Cart"}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const PRIMARY = "#18B7AE";

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },

  container: {
    padding: 20,
    paddingBottom: 40,
  },

  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  backButton: {
    marginBottom: 20,
  },

  imageContainer: {
    backgroundColor: "#F7F7F7",
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
    marginBottom: 24,
  },

  image: {
    width: 260,
    height: 260,
    resizeMode: "contain",
  },

  name: {
    fontSize: 30,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 8,
  },

  price: {
    fontSize: 34,
    fontWeight: "700",
    color: PRIMARY,
    marginBottom: 28,
  },

  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
  },

  statValue: {
    fontSize: 20,
    fontWeight: "700",
  },

  statLabel: {
    color: "#8B8B8B",
    marginTop: 4,
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 18,
    marginTop: 10,
  },

  detailRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 18,
  },

  detailLabel: {
    fontSize: 18,
    color: "#666",
  },

  detailValue: {
    fontSize: 18,
    fontWeight: "600",
    color: "#111827",
  },

  quantityRow: {
    marginTop: 28,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  quantityTitle: {
    fontSize: 22,
    fontWeight: "700",
  },

  stockText: {
    color: "#A1A1AA",
    marginTop: 6,
    fontStyle: "italic",
  },

  counter: {
    flexDirection: "row",
    alignItems: "center",
    gap: 18,
  },

  counterButton: {
    width: 46,
    height: 46,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: PRIMARY,
    justifyContent: "center",
    alignItems: "center",
  },

  counterText: {
    fontSize: 22,
    fontWeight: "700",
  },

  button: {
    backgroundColor: PRIMARY,
    marginTop: 36,
    height: 60,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "700",
  },
  disabledButton: {
    backgroundColor: "#BDBDBD",
  },

});