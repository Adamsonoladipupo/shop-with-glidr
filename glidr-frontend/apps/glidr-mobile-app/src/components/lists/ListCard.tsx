import { Pressable, StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";

import { ShoppingList } from "@/types";

interface Props {
  list: ShoppingList;
  onPress: () => void;
  onDelete: () => void;
}

export default function ListCard({
  list,
  onPress,
  onDelete,
}: Props) {
  return (
    <Pressable
      onPress={onPress}
      style={styles.container}
    >
      <View style={styles.leftSection}>
        <View style={styles.iconContainer}>
          <Feather
            name="list"
            size={28}
            color="#FFFFFF"
          />
        </View>

        <View>
          <Text style={styles.title}>
            {list.title}
          </Text>

          <Text style={styles.subtitle}>
            {list.items.length} item
            {list.items.length !== 1 && "s"}
          </Text>
        </View>
      </View>

      <Pressable onPress={onDelete}>
        <Feather
          name="trash-2"
          size={24}
          color="#FF6B6B"
        />
      </Pressable>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 95,

    backgroundColor: "#FFFFFF",

    borderRadius: 20,

    marginBottom: 18,

    paddingHorizontal: 20,

    flexDirection: "row",

    justifyContent: "space-between",

    alignItems: "center",

    elevation: 2,
  },

  leftSection: {
    flexDirection: "row",

    alignItems: "center",
  },

  iconContainer: {
    width: 58,

    height: 58,

    borderRadius: 29,

    backgroundColor: "#22C1B4",

    justifyContent: "center",

    alignItems: "center",

    marginRight: 18,
  },

  title: {
    fontSize: 28,

    fontWeight: "700",

    color: "#111",
  },

  subtitle: {
    marginTop: 4,

    color: "#777",

    fontSize: 15,
  },
});