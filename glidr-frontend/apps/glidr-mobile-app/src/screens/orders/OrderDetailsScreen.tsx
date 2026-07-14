import { useLocalSearchParams } from "expo-router";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useOrders } from "@/hooks/useOrders";

export default function OrderDetailsScreen() {

  const { id } =
    useLocalSearchParams<{ id: string }>();

  const { orders } = useOrders();

  const order = orders.find(
    (item) => item.id === id
  );

  if (!order) {

    return (

      <SafeAreaView style={styles.center}>

        <Text>
          Order not found
        </Text>

      </SafeAreaView>

    );

  }

  return (

    <SafeAreaView style={styles.container}>

      <ScrollView
        showsVerticalScrollIndicator={false}
      >

        <Text style={styles.title}>
          Order Details
        </Text>

        {/* Status */}

        <View style={styles.card}>

          <Text style={styles.heading}>
            Order Status
          </Text>

          <Text style={styles.status}>
            {order.status}
          </Text>

        </View>

        {/* Delivery */}

        <View style={styles.card}>

          <Text style={styles.heading}>
            Delivery Method
          </Text>

          <Text>
            {order.deliveryMethod}
          </Text>

        </View>

        {/* Payment */}

        <View style={styles.card}>

          <Text style={styles.heading}>
            Payment Method
          </Text>

          <Text>
            {order.paymentMethod}
          </Text>

        </View>

        {/* Items */}

        <View style={styles.card}>

          <Text style={styles.heading}>
            Ordered Items
          </Text>

          {order.items.map(item => (

            <View
              key={item.id}
              style={styles.itemRow}
            >

              <Text>
                {item.product.name}
              </Text>

              <Text>
                x{item.quantity}
              </Text>

            </View>

          ))}

        </View>

        {/* Summary */}

        <View style={styles.card}>

          <Text style={styles.heading}>
            Order Summary
          </Text>

          <View style={styles.summaryRow}>

            <Text>
              Subtotal
            </Text>

            <Text>
              ₦{order.subtotal.toLocaleString()}
            </Text>

          </View>

          <View style={styles.summaryRow}>

            <Text>
              Delivery
            </Text>

            <Text>
              ₦{order.deliveryFee.toLocaleString()}
            </Text>

          </View>

          <View style={styles.summaryRow}>

            <Text
              style={styles.total}
            >
              Total
            </Text>

            <Text
              style={styles.total}
            >
              ₦{order.total.toLocaleString()}
            </Text>

          </View>

        </View>

      </ScrollView>

    </SafeAreaView>

  );

}

const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: "#F8F8F8",

    padding: 20,

  },

  center: {

    flex: 1,

    justifyContent: "center",

    alignItems: "center",

  },

  title: {

    fontSize: 28,

    fontWeight: "700",

    marginBottom: 20,

  },

  card: {

    backgroundColor: "#FFF",

    borderRadius: 18,

    padding: 18,

    marginBottom: 18,

  },

  heading: {

    fontWeight: "700",

    fontSize: 18,

    marginBottom: 14,

  },

  status: {

    color: "#1F8B4D",

    fontWeight: "700",

    textTransform: "capitalize",

  },

  itemRow: {

    flexDirection: "row",

    justifyContent: "space-between",

    marginBottom: 12,

  },

  summaryRow: {

    flexDirection: "row",

    justifyContent: "space-between",

    marginBottom: 12,

  },

  total: {

    fontWeight: "700",

    fontSize: 18,

  },

});