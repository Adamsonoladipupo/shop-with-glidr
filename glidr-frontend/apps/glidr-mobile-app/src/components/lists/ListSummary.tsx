import React, { useMemo } from "react";
import {
  StyleSheet,
  Text,
  View,
} from "react-native";

import { ShoppingList } from "@/types";

interface Props {
  list: ShoppingList;
}

export default function ListSummary({
  list,
}: Props) {

  const totalProducts = list.items.length;

  const totalItems = useMemo(() => {

    return list.items.reduce(
      (sum, item) => sum + item.quantity,
      0
    );

  }, [list]);

  const estimatedCost = useMemo(() => {

    return list.items.reduce(
      (sum, item) =>
        sum + item.product.price * item.quantity,
      0
    );

  }, [list]);

  return (

    <View style={styles.container}>

      <View style={styles.row}>

        <Text style={styles.label}>
          Products
        </Text>

        <Text style={styles.value}>
          {totalProducts}
        </Text>

      </View>

      <View style={styles.row}>

        <Text style={styles.label}>
          Items
        </Text>

        <Text style={styles.value}>
          {totalItems}
        </Text>

      </View>

      <View style={styles.divider} />

      <View style={styles.row}>

        <Text style={styles.totalLabel}>
          Estimated Total
        </Text>

        <Text style={styles.totalPrice}>
          ₦{estimatedCost.toLocaleString()}
        </Text>

      </View>

    </View>

  );

}

const styles = StyleSheet.create({

  container: {

    marginTop: 20,

    backgroundColor: "#FFF",

    borderRadius: 16,

    padding: 18,

    elevation: 2,

    marginBottom: 20,

  },

  row: {

    flexDirection: "row",

    justifyContent: "space-between",

    marginVertical: 6,

  },

  label: {

    fontSize: 16,

    color: "#666",

  },

  value: {

    fontSize: 16,

    fontWeight: "700",

    color: "#222",

  },

  divider: {

    height: 1,

    backgroundColor: "#ECECEC",

    marginVertical: 14,

  },

  totalLabel: {

    fontSize: 18,

    fontWeight: "700",

    color: "#222",

  },

  totalPrice: {

    fontSize: 22,

    fontWeight: "700",

    color: "#1F8B4D",

  },

});