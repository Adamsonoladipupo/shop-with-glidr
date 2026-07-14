
import { StyleSheet, Text, View } from "react-native";

import Button from "@/components/Button";

interface Props {
  onAddProducts: () => void;
}

export default function EmptyShoppingList({
  onAddProducts,
}: Props) {
  return (
    <View style={styles.container}>

      <Text style={styles.icon}>🛒</Text>

      <Text style={styles.title}>
        Your shopping list is empty
      </Text>

      <Text style={styles.subtitle}>
        Start adding products to make shopping easier.
      </Text>

      <Button
        title="Add Products"
        onPress={onAddProducts}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
  },

  icon: {
    fontSize: 64,
    marginBottom: 20,
  },

  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#222",
    marginBottom: 10,
    textAlign: "center",
  },

  subtitle: {
    fontSize: 16,
    color: "#777",
    textAlign: "center",
    marginBottom: 30,
  },
});