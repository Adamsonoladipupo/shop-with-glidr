import { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import { useOrders } from "@/hooks/useOrders";

export default function OrdersScreen() {

  const {
    getOngoingOrders,
    getCompletedOrders,
  } = useOrders();

  const [tab, setTab] = useState<
    "ongoing" | "completed"
  >("ongoing");

  const orders =
    tab === "ongoing"
      ? getOngoingOrders()
      : getCompletedOrders();

  return (

    <SafeAreaView style={styles.container}>

      <Text style={styles.title}>
        My Orders
      </Text>

      <View style={styles.tabs}>

        <TouchableOpacity
          style={[
            styles.tab,
            tab === "ongoing" &&
              styles.activeTab,
          ]}
          onPress={() =>
            setTab("ongoing")
          }
        >

          <Text
            style={[
              styles.tabText,
              tab === "ongoing" &&
                styles.activeText,
            ]}
          >
            Ongoing
          </Text>

        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.tab,
            tab === "completed" &&
              styles.activeTab,
          ]}
          onPress={() =>
            setTab("completed")
          }
        >

          <Text
            style={[
              styles.tabText,
              tab === "completed" &&
                styles.activeText,
            ]}
          >
            Completed
          </Text>

        </TouchableOpacity>

      </View>

      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (

          <View style={styles.card}>

            <Text style={styles.orderId}>
              Order #{item.id}
            </Text>

            <Text>
              {item.items.length} Items
            </Text>

            <Text>
              ₦{item.total.toLocaleString()}
            </Text>

            <Text>
              {item.deliveryMethod}
            </Text>

            <Text>
              {item.status}
            </Text>

          </View>

        )}
        ListEmptyComponent={

          <View style={styles.empty}>

            <Text>
              No Orders Yet
            </Text>

          </View>

        }
      />

    </SafeAreaView>

  );

}

const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: "#F8F8F8",

    padding: 20,

  },

  title: {

    fontSize: 30,

    fontWeight: "700",

    marginBottom: 20,

  },

  tabs: {

    flexDirection: "row",

    marginBottom: 20,

  },

  tab: {

    flex: 1,

    paddingVertical: 14,

    alignItems: "center",

    borderRadius: 12,

    backgroundColor: "#EEE",

    marginHorizontal: 5,

  },

  activeTab: {

    backgroundColor: "#1F8B4D",

  },

  tabText: {

    fontWeight: "600",

  },

  activeText: {

    color: "#FFF",

  },

  card: {

    backgroundColor: "#FFF",

    padding: 18,

    borderRadius: 16,

    marginBottom: 16,

  },

  orderId: {

    fontWeight: "700",

    fontSize: 18,

    marginBottom: 8,

  },

  empty: {

    marginTop: 100,

    alignItems: "center",

  },

});