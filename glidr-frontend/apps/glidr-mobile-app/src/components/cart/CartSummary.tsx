import {
  StyleSheet,
  Text,
  View,
} from "react-native";

interface Props {
  subtotal: number;
}

export default function CartSummary({
  subtotal,
}: Props) {

  return (

    <View style={styles.container}>

      <View style={styles.row}>
        <Text>Subtotal</Text>
        <Text>₦{subtotal.toLocaleString()}</Text>
      </View>

      <View style={styles.row}>
        <Text>Delivery</Text>
        <Text>FREE</Text>
      </View>

      <View style={styles.divider} />

      <View style={styles.row}>
        <Text style={styles.total}>
          Total
        </Text>

        <Text style={styles.total}>
          ₦{subtotal.toLocaleString()}
        </Text>

      </View>

    </View>

  );

}

const styles = StyleSheet.create({

  container: {

    backgroundColor: "#FFF",

    borderRadius: 16,

    padding: 20,

    marginTop: 20,

  },

  row: {

    flexDirection: "row",

    justifyContent: "space-between",

    marginBottom: 14,

  },

  divider: {

    height: 1,

    backgroundColor: "#EEE",

    marginBottom: 14,

  },

  total: {

    fontWeight: "700",

    fontSize: 18,

  },

});