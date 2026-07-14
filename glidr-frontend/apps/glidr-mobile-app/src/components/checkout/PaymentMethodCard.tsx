import { Ionicons } from "@expo/vector-icons";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

interface Props {
  selected: "wallet" | "online" | "pickup";
  onSelect: (
    method: "wallet" | "online" | "pickup"
  ) => void;
}

export default function PaymentMethodCard({
  selected,
  onSelect,
}: Props) {
  return (
    <View style={styles.container}>

      <Text style={styles.heading}>
        Payment Method
      </Text>

      {/* Glidr Wallet */}

      <TouchableOpacity
        style={[
          styles.card,
          selected === "wallet" &&
          styles.selectedCard,
        ]}
        onPress={() => onSelect("wallet")}
      >
        <View style={styles.left}>

          <Ionicons
            name="wallet-outline"
            size={28}
            color="#18B7AE"
          />

          <View style={styles.textContainer}>

            <Text style={styles.title}>
              Glidr Wallet
            </Text>

            <Text style={styles.subtitle}>
              Pay instantly using your Glidr Wallet balance.
            </Text>

          </View>

        </View>

        <Ionicons
          name={
            selected === "wallet"
              ? "radio-button-on"
              : "radio-button-off"
          }
          size={24}
          color="#18B7AE"
        />

      </TouchableOpacity>

      {/* Pay Online */}

      <TouchableOpacity
        style={[
          styles.card,
          selected === "online" &&
          styles.selectedCard,
        ]}
        onPress={() => onSelect("online")}
      >
        <View style={styles.left}>

          <Ionicons
            name="card-outline"
            size={28}
            color="#18B7AE"
          />

          <View style={styles.textContainer}>

            <Text style={styles.title}>
              Pay Online
            </Text>

            <Text style={styles.subtitle}>
              Secure payment using your preferred payment method.
            </Text>

          </View>

        </View>

        <Ionicons
          name={
            selected === "online"
              ? "radio-button-on"
              : "radio-button-off"
          }
          size={24}
          color="#18B7AE"
        />

      </TouchableOpacity>

      {/* Pay at Pickup */}

      <TouchableOpacity
        style={[
          styles.card,
          selected === "pickup" &&
          styles.selectedCard,
        ]}
        onPress={() => onSelect("pickup")}
      >
        <View style={styles.left}>

          <Ionicons
            name="cash-outline"
            size={28}
            color="#18B7AE"
          />

          <View style={styles.textContainer}>

            <Text style={styles.title}>
              Pay at Pickup
            </Text>

            <Text style={styles.subtitle}>
              Pay when collecting your groceries.
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