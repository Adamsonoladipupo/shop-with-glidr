import { router } from "expo-router";
import {
  SafeAreaView,
} from "react-native-safe-area-context";

import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

export default function OrderSuccessScreen() {

  return (

    <SafeAreaView style={styles.container}>

      <View style={styles.content}>

        <View style={styles.iconContainer}>

          <Ionicons
            name="checkmark-circle"
            size={110}
            color="#1F8B4D"
          />

        </View>

        <Text style={styles.title}>
          Order Placed Successfully
        </Text>

        <Text style={styles.subtitle}>
          Your supermarket has received your order.
          {"\n\n"}
          You can track its progress from
          the Orders page.
        </Text>

      </View>

      <View style={styles.footer}>

        <TouchableOpacity
          style={styles.primaryButton}
          onPress={() =>
            router.replace("/(tabs)/orders")
          }
        >

          <Text style={styles.primaryText}>
            View Orders
          </Text>

        </TouchableOpacity>

        <TouchableOpacity
          style={styles.secondaryButton}
          onPress={() =>
            router.replace("/(tabs)")
          }
        >

          <Text style={styles.secondaryText}>
            Continue Shopping
          </Text>

        </TouchableOpacity>

      </View>

    </SafeAreaView>

  );

}

const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: "#FFF",

    justifyContent: "space-between",

    padding: 24,

  },

  content: {

    flex: 1,

    justifyContent: "center",

    alignItems: "center",

  },

  iconContainer: {

    marginBottom: 30,

  },

  title: {

    fontSize: 30,

    fontWeight: "700",

    color: "#222",

    textAlign: "center",

  },

  subtitle: {

    marginTop: 20,

    textAlign: "center",

    fontSize: 17,

    color: "#666",

    lineHeight: 26,

  },

  footer: {

    marginBottom: 20,

  },

  primaryButton: {

    height: 56,

    backgroundColor: "#1F8B4D",

    borderRadius: 14,

    justifyContent: "center",

    alignItems: "center",

  },

  primaryText: {

    color: "#FFF",

    fontSize: 18,

    fontWeight: "700",

  },

  secondaryButton: {

    marginTop: 14,

    height: 56,

    borderWidth: 1,

    borderColor: "#DDD",

    borderRadius: 14,

    justifyContent: "center",

    alignItems: "center",

  },

  secondaryText: {

    fontSize: 17,

    fontWeight: "600",

    color: "#444",

  },

});