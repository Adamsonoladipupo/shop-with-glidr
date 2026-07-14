import { router } from "expo-router";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { Order } from "@/types";

interface Props {
  order: Order;
}

export default function OrderCard({
  order,
}: Props) {

  const date = new Date(
    order.createdAt
  ).toLocaleDateString();

  return (

    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        router.push({
          pathname: "/order/[id]",
          params: {
            id: order.id,
          },
        })
      }
    >

      <View style={styles.topRow}>

        <Text style={styles.orderId}>
          Order #{order.id.slice(-6)}
        </Text>

        <View style={styles.status}>

          <Text style={styles.statusText}>
            {order.status
              .replaceAll("_", " ")
              .toUpperCase()}
          </Text>

        </View>

      </View>

      <Text style={styles.date}>
        {date}
      </Text>

      <View style={styles.infoRow}>

        <Text style={styles.label}>
          Items
        </Text>

        <Text style={styles.value}>
          {order.items.length}
        </Text>

      </View>

      <View style={styles.infoRow}>

        <Text style={styles.label}>
          Delivery
        </Text>

        <Text style={styles.value}>
          {order.deliveryMethod}
        </Text>

      </View>

      <View style={styles.infoRow}>

        <Text style={styles.label}>
          Total
        </Text>

        <Text style={styles.total}>
          ₦{order.total.toLocaleString()}
        </Text>

      </View>

      <Text style={styles.details}>
        View Details →
      </Text>

    </TouchableOpacity>

  );

}

const styles = StyleSheet.create({

  container: {

    backgroundColor: "#FFF",

    borderRadius: 18,

    padding: 18,

    marginBottom: 18,

  },

  topRow: {

    flexDirection: "row",

    justifyContent: "space-between",

    alignItems: "center",

  },

  orderId: {

    fontSize: 18,

    fontWeight: "700",

  },

  status: {

    backgroundColor: "#EAF8EE",

    paddingHorizontal: 10,

    paddingVertical: 6,

    borderRadius: 20,

  },

  statusText: {

    color: "#1F8B4D",

    fontSize: 12,

    fontWeight: "700",

  },

  date: {

    marginTop: 8,

    color: "#666",

    marginBottom: 16,

  },

  infoRow: {

    flexDirection: "row",

    justifyContent: "space-between",

    marginBottom: 10,

  },

  label: {

    color: "#777",

  },

  value: {

    fontWeight: "600",

  },

  total: {

    fontWeight: "700",

    fontSize: 18,

    color: "#1F8B4D",

  },

  details: {

    marginTop: 14,

    color: "#18B7AE",

    fontWeight: "700",

  },

});