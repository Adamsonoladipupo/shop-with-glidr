import { StyleSheet, Text } from "react-native";

interface Props {
  shelf: number;
  aisle: number;
}

export default function ProductLocation({
  shelf,
  aisle,
}: Props) {
  return (
    <Text style={styles.location}>
      Shelf {shelf} • Aisle {aisle}
    </Text>
  );
}

const styles = StyleSheet.create({
  location: {
    marginTop: 4,
    color: "#777",
    fontSize: 14,
  },
});