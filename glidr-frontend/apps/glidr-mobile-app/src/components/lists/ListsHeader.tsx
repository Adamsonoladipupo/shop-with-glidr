import { Pressable, StyleSheet, Text, View } from "react-native";

interface Props {
  onAddList: () => void;
}

export default function ListsHeader({
  onAddList,
}: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Lists
      </Text>

      <Pressable onPress={onAddList}>
        <Text style={styles.add}>
          Add List
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,

    marginBottom: 30,

    flexDirection: "row",

    justifyContent: "space-between",

    alignItems: "center",
  },

  title: {
    fontSize: 48,

    fontWeight: "800",
  },

  add: {
    fontSize: 22,

    color: "#5D5FEF",

    fontWeight: "600",
  },
});