import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { CartItem } from "@/types";
import { ProductCard } from "../products";

interface Props {
  item: CartItem;
  onIncrease: () => void;
  onDecrease: () => void;
  onRemove: () => void;
}

export default function CartItemCard({
  item,
  onIncrease,
  onDecrease,
  onRemove,
}: Props) {
  return (
    <ProductCard product={item.product}>

      <View style={styles.actions}>

        <View style={styles.quantityContainer}>

          <TouchableOpacity
            style={styles.button}
            onPress={onDecrease}
          >
            <Text style={styles.symbol}>−</Text>
          </TouchableOpacity>

          <Text style={styles.quantity}>
            {item.quantity}
          </Text>

          <TouchableOpacity
            style={styles.button}
            onPress={onIncrease}
          >
            <Text style={styles.symbol}>+</Text>
          </TouchableOpacity>

        </View>

        <TouchableOpacity
          onPress={onRemove}
        >
          <Text style={styles.remove}>
            Remove
          </Text>
        </TouchableOpacity>

      </View>

    </ProductCard>
  );
}

const styles = StyleSheet.create({

  actions: {

    marginTop: 18,

    flexDirection: "row",

    justifyContent: "space-between",

    alignItems: "center",

  },

  quantityContainer: {

    flexDirection: "row",

    alignItems: "center",

  },

  button: {

    width: 36,

    height: 36,

    borderRadius: 8,

    backgroundColor: "#ECECEC",

    justifyContent: "center",

    alignItems: "center",

  },

  symbol: {

    fontSize: 20,

    fontWeight: "700",

  },

  quantity: {

    marginHorizontal: 16,

    fontSize: 18,

    fontWeight: "700",

  },

  remove: {

    color: "#D62828",

    fontWeight: "600",

    fontSize: 15,

  },

});