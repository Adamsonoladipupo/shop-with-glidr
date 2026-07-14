import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { Feather } from "@expo/vector-icons";

interface Props {
  onAddProducts: () => void;
}

export default function EmptyShoppingList({
  onAddProducts,
}: Props) {

  return (

    <View style={styles.container}>

      <Feather
        name="shopping-cart"
        size={80}
        color="#BDBDBD"
      />

      <Text style={styles.title}>
        Your shopping list is empty
      </Text>

      <Text style={styles.description}>
        Search and add products
        to start planning your shopping.
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={onAddProducts}
      >

        <Text style={styles.buttonText}>
          Add Products
        </Text>

      </TouchableOpacity>

    </View>

  );

}

const styles = StyleSheet.create({

  container: {

    flex: 1,

    justifyContent: "center",

    alignItems: "center",

    paddingHorizontal: 30,

  },

  title: {

    marginTop: 18,

    fontSize: 22,

    fontWeight: "700",

    color: "#222",

  },

  description: {

    marginTop: 10,

    textAlign: "center",

    fontSize: 16,

    color: "#777",

    lineHeight: 24,

  },

  button: {

    marginTop: 30,

    backgroundColor: "#1F8B4D",

    paddingHorizontal: 30,

    height: 50,

    borderRadius: 12,

    justifyContent: "center",

    alignItems: "center",

  },

  buttonText: {

    color: "#FFF",

    fontWeight: "700",

    fontSize: 16,

  },

});