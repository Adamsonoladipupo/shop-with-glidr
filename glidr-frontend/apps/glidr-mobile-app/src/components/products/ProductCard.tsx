import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

import { Product } from "@/types";
import { useCart } from "@/hooks/useCart";

import ProductImage from "./ProductImage";

interface Props {
  product: Product;
  children?: React.ReactNode;
  onPress?: () => void;
}

export default function ProductCard({
  product,
}: Props) {

  const { addToCart } = useCart();

  function handleAddToCart() {
    addToCart(product, 1);
  }

  return (

    <TouchableOpacity
      activeOpacity={0.9}
      style={styles.card}
      onPress={() =>
        router.push({
          pathname: "/products/[id]",
          params: {
            id: product.id,
          },
        })
      }
    >

      <View style={styles.imageContainer}>
        <ProductImage source={product.image} />
      </View>

      <Text
        numberOfLines={2}
        style={styles.name}
      >
        {product.name}
      </Text>

      <Text style={styles.subtitle}>
        {product.brand}
      </Text>

      <View style={styles.bottomRow}>

        <View>

          <Text style={styles.price}>
            ₦{product.price.toLocaleString()}
          </Text>

        </View>

        <TouchableOpacity
          style={styles.addButton}
          onPress={handleAddToCart}
        >
          <Ionicons
            name="add"
            size={28}
            color="#FFF"
          />
        </TouchableOpacity>

      </View>

    </TouchableOpacity>

  );

}

const styles = StyleSheet.create({

  card: {

    width: "100%",

    backgroundColor: "#FFF",

    borderRadius: 20,

    padding: 16,

    borderWidth: 1,

    borderColor: "#ECECEC",

    marginBottom: 16,

  },

  imageContainer: {

    height: 130,
    width:"100%",

    justifyContent: "center",

    alignItems: "center",

    marginBottom: 18,

  },

  name: {

    fontSize: 20,

    fontWeight: "700",

    color: "#222",

    minHeight: 52,

  },

  subtitle: {

    fontSize: 15,

    color: "#7A7A7A",

    marginTop: 6,

  },

  bottomRow: {

    marginTop: 20,

    flexDirection: "row",

    justifyContent: "space-between",

    alignItems: "flex-end",

  },

  price: {

    fontSize: 18,

    fontWeight: "700",

    color: "#1A1A1A",

  },

  addButton: {

    width: 30,

    height: 30,

    borderRadius: 10,

    backgroundColor: "#18B7AE",

    justifyContent: "center",

    alignItems: "center",

  },

});