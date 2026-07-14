import { StyleSheet, Text } from "react-native";

interface Props {
  price: number;
}

export default function ProductPrice({
  price,
}: Props) {
  return (
    <Text style={styles.price}>
      ₦{price.toLocaleString()}
    </Text>
  );
}

const styles = StyleSheet.create({
  price: {
    marginTop: 6,
    fontSize: 18,
    fontWeight: "700",
    color: "#1F8B4D",
  },
});