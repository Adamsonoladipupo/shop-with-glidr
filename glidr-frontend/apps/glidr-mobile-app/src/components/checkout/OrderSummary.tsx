import {
  StyleSheet,
  Text,
  View,
} from "react-native";

interface Props {
  subtotal: number;
  totalItems: number;
  deliveryMethod: "pickup" | "delivery";
}

export default function OrderSummary({
  subtotal,
  totalItems,
  deliveryMethod,
}: Props) {

  const deliveryFee =
    deliveryMethod === "delivery"
      ? 1500
      : 0;

  const total =
    subtotal + deliveryFee;

  return (

    <View style={styles.container}>

      <Text style={styles.heading}>
        Order Summary
      </Text>

      <View style={styles.row}>

        <Text style={styles.label}>
          Items
        </Text>

        <Text style={styles.value}>
          {totalItems}
        </Text>

      </View>

      <View style={styles.row}>

        <Text style={styles.label}>
          Subtotal
        </Text>

        <Text style={styles.value}>
          ₦{subtotal.toLocaleString()}
        </Text>

      </View>

      <View style={styles.row}>

        <Text style={styles.label}>
          Delivery
        </Text>

        <Text style={styles.value}>
          {deliveryFee === 0
            ? "FREE"
            : `₦${deliveryFee.toLocaleString()}`}
        </Text>

      </View>

      <View style={styles.divider} />

      <View style={styles.row}>

        <Text style={styles.totalLabel}>
          Total
        </Text>

        <Text style={styles.totalValue}>
          ₦{total.toLocaleString()}
        </Text>

      </View>

    </View>

  );

}

const styles = StyleSheet.create({

  container: {

    backgroundColor: "#FFFFFF",

    borderRadius: 16,

    padding: 20,

    marginBottom: 24,

  },

  heading: {

    fontSize: 22,

    fontWeight: "700",

    marginBottom: 20,

  },

  row: {

    flexDirection: "row",

    justifyContent: "space-between",

    marginBottom: 14,

  },

  label: {

    fontSize: 16,

    color: "#666",

  },

  value: {

    fontSize: 16,

    fontWeight: "600",

    color: "#111827",

  },

  divider: {

    height: 1,

    backgroundColor: "#ECECEC",

    marginVertical: 10,

  },

  totalLabel: {

    fontSize: 18,

    fontWeight: "700",

  },

  totalValue: {

    fontSize: 20,

    fontWeight: "700",

    color: "#18B7AE",

  },

});