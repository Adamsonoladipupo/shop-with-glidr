import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

interface Props {
  total: number;
  onPlaceOrder: () => void;
}

export default function CheckoutFooter({
  total,
  onPlaceOrder,
}: Props) {
  return (

    <View style={styles.container}>

      <View style={styles.totalContainer}>

        <Text style={styles.totalLabel}>
          Total
        </Text>

        <Text style={styles.totalAmount}>
          ₦{total.toLocaleString()}
        </Text>

      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={onPlaceOrder}
      >

        <Text style={styles.buttonText}>
          Proceed to checkout
        </Text>

      </TouchableOpacity>

    </View>

  );
}

const PRIMARY = "#18B7AE";

const styles = StyleSheet.create({

  container: {

    backgroundColor: "#FFFFFF",

    paddingTop: 20,

    borderTopWidth: 1,

    borderTopColor: "#EEEEEE",

  },

  totalContainer: {

    flexDirection: "row",

    justifyContent: "space-between",

    marginBottom: 18,

  },

  totalLabel: {

    fontSize: 18,

    fontWeight: "700",

  },

  totalAmount: {

    fontSize: 22,

    fontWeight: "700",

    color: PRIMARY,

  },

  button: {

    height: 56,

    borderRadius: 14,

    backgroundColor: PRIMARY,

    justifyContent: "center",

    alignItems: "center",

  },

  buttonText: {

    color: "#FFFFFF",

    fontSize: 18,

    fontWeight: "700",

  },

});