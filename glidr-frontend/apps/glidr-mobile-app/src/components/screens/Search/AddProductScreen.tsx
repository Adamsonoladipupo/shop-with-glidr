import React, { useMemo, useState } from "react";
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  router,
  useLocalSearchParams,
} from "expo-router";

import { products } from "@/mock";
import { Product } from "@/types";
import { useShoppingLists } from "@/hooks/useShoppingLists";

export default function AddProductScreen() {

  const params = useLocalSearchParams<{
    listId: string;
    productId: string;
  }>();

  const { listId, productId } = params;

  const { addProductToList } = useShoppingLists();

  const [quantity, setQuantity] = useState(1);

  const product = useMemo<Product | undefined>(() => {

    return products.find(
      (item) => item.id === String(productId)
    );

  }, [productId]);

  if (!product) {

    return (

      <SafeAreaView style={styles.center}>

        <Text>Product not found.</Text>

      </SafeAreaView>

    );

  }

  const increaseQuantity = () => {

    setQuantity((previous) => previous + 1);

  };

  const decreaseQuantity = () => {

    setQuantity((previous) =>
      Math.max(1, previous - 1)
    );

  };

  const handleAddProduct = () => {

    addProductToList(
      String(listId),
      product,
      quantity
    );

    Alert.alert(
      "Success",
      `${product.name} added to your shopping list.`
    );

    router.replace({
      pathname: "/lists/[id]",
      params: {
        id: String(listId),
      },
    } as any);

  };

  return (

    <SafeAreaView style={styles.container}>

      <Image
        source={
          typeof product.image === "string"
            ? { uri: product.image }
            : product.image
        }
        style={styles.image}
      />

      <Text style={styles.title}>
        {product.name}
      </Text>

      <Text style={styles.price}>
        ₦{Number(product.price).toLocaleString()}
      </Text>

      <Text style={styles.location}>
        Shelf {product.shelfNumber} • Aisle {product.aisleNumber}
      </Text>

      <View style={styles.quantityContainer}>

        <Text style={styles.label}>
          Quantity
        </Text>

        <View style={styles.stepper}>

          <TouchableOpacity
            style={styles.stepButton}
            onPress={decreaseQuantity}
          >

            <Text style={styles.stepText}>
              −
            </Text>

          </TouchableOpacity>

          <Text style={styles.quantity}>
            {quantity}
          </Text>

          <TouchableOpacity
            style={styles.stepButton}
            onPress={increaseQuantity}
          >

            <Text style={styles.stepText}>
              +
            </Text>

          </TouchableOpacity>

        </View>

      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={handleAddProduct}
      >

        <Text style={styles.buttonText}>
          Add To Shopping List
        </Text>

      </TouchableOpacity>

    </SafeAreaView>

  );

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 20,
  },

  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    width: "100%",
    height: 250,
    resizeMode: "contain",
    marginBottom: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: "700",
  },

  price: {
    marginTop: 8,
    fontSize: 20,
    color: "#28A745",
    fontWeight: "600",
  },

  location: {
    marginTop: 10,
    color: "#666",
    fontSize: 16,
  },

  quantityContainer: {
    marginTop: 40,
  },

  label: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 12,
  },

  stepper: {
    flexDirection: "row",
    alignItems: "center",
  },

  stepButton: {
    width: 50,
    height: 50,
    borderRadius: 10,
    backgroundColor: "#EAEAEA",
    justifyContent: "center",
    alignItems: "center",
  },

  stepText: {
    fontSize: 28,
    fontWeight: "700",
  },

  quantity: {
    marginHorizontal: 30,
    fontSize: 22,
    fontWeight: "700",
  },

  button: {
    marginTop: 50,
    backgroundColor: "#1F8B4D",
    height: 56,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "700",
  },

});