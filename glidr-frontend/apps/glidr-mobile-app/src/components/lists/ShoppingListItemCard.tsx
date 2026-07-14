import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { ShoppingListItem } from "@/types";

import QuantitySelector from "./QuantitySelector";

interface Props {

  item: ShoppingListItem;

  onIncrease: () => void;

  onDecrease: () => void;

  onDelete: () => void;

  onPress: () => void;

}

export default function ShoppingListItemCard({

  item,

  onIncrease,

  onDecrease,

  onDelete,

  onPress,

}: Props) {

  return (

    <TouchableOpacity
      style={styles.card}
      onPress={onPress}
      activeOpacity={0.9}
    >

      <Image
        source={item.product.image}
        style={styles.image}
      />

      <View style={styles.content}>

        <Text
          numberOfLines={2}
          style={styles.name}
        >
          {item.product.name}
        </Text>

        <Text style={styles.price}>
          ₦{item.product.price.toLocaleString()}
        </Text>

        <Text style={styles.location}>

          Shelf {item.product.shelfNumber}

          {" • "}

          Aisle {item.product.aisleNumber}

        </Text>

        <View style={styles.bottomRow}>

          <QuantitySelector
            quantity={item.quantity}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
          />

          <TouchableOpacity
            onPress={onDelete}
          >

            <Text style={styles.remove}>
              Remove
            </Text>

          </TouchableOpacity>

        </View>

      </View>

    </TouchableOpacity>

  );

}

const styles = StyleSheet.create({

  card: {

    flexDirection: "row",

    backgroundColor: "#FFFFFF",

    borderRadius: 16,

    padding: 14,

    marginBottom: 16,

    elevation: 2,

  },

  image: {

    width: 90,

    height: 90,

    resizeMode: "contain",

  },

  content: {

    flex: 1,

    marginLeft: 16,

  },

  name: {

    fontSize: 17,

    fontWeight: "700",

    color: "#222",

  },

  price: {

    marginTop: 6,

    fontSize: 18,

    color: "#1F8B4D",

    fontWeight: "700",

  },

  location: {

    marginTop: 4,

    color: "#777",

    fontSize: 14,

  },

  bottomRow: {

    marginTop: 14,

    flexDirection: "row",

    justifyContent: "space-between",

    alignItems: "center",

  },

  remove: {

    color: "#D32F2F",

    fontWeight: "600",

    fontSize: 15,

  },

});