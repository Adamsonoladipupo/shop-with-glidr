import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface Props {
  selected: "pickup" | "delivery";
  onSelect: (
    method: "pickup" | "delivery"
  ) => void;
}

export default function DeliveryOptionCard({
  selected,
  onSelect,
}: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        Delivery Method
      </Text>

      {/* Pickup */}

      <TouchableOpacity
        style={[
          styles.card,
          selected === "pickup" &&
            styles.selectedCard,
        ]}
        onPress={() =>
          onSelect("pickup")
        }
      >
        <View style={styles.left}>
          <Ionicons
            name="storefront-outline"
            size={28}
            color="#18B7AE"
          />

          <View style={styles.textContainer}>
            <Text style={styles.title}>
              Pick Up
            </Text>

            <Text style={styles.subtitle}>
              Collect your order from the
              store.
            </Text>
          </View>
        </View>

        <Ionicons
          name={
            selected === "pickup"
              ? "radio-button-on"
              : "radio-button-off"
          }
          size={24}
          color="#18B7AE"
        />
      </TouchableOpacity>

      {/* Delivery */}

      <TouchableOpacity
        style={[
          styles.card,
          selected === "delivery" &&
            styles.selectedCard,
        ]}
        onPress={() =>
          onSelect("delivery")
        }
      >
        <View style={styles.left}>
          <Ionicons
            name="car-outline"
            size={28}
            color="#18B7AE"
          />

          <View style={styles.textContainer}>
            <Text style={styles.title}>
              Home Delivery
            </Text>

            <Text style={styles.subtitle}>
              Get your groceries delivered
              to your location.
            </Text>
          </View>
        </View>

        <Ionicons
          name={
            selected === "delivery"
              ? "radio-button-on"
              : "radio-button-off"
          }
          size={24}
          color="#18B7AE"
        />
      </TouchableOpacity>
    </View>
  );
}

const PRIMARY = "#18B7AE";

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },

  heading: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 14,
  },

  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 18,
    marginBottom: 14,
    borderWidth: 2,
    borderColor: "#EEEEEE",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  selectedCard: {
    borderColor: PRIMARY,
    backgroundColor: "#F1FFFD",
  },

  left: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },

  textContainer: {
    marginLeft: 14,
    flex: 1,
  },

  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "#111827",
  },

  subtitle: {
    marginTop: 4,
    fontSize: 14,
    color: "#6B7280",
    lineHeight: 20,
  },
});