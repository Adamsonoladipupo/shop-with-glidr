import { StyleSheet, Text, View } from "react-native";

import ProductPrice from "./ProductPrice";
import ProductLocation from "./ProductLocation";

interface Props {
  name: string;
  brand: string;
  price: number;
  shelf: number;
  aisle: number;
}

export default function ProductInfo({
  name,
  brand,
  price,
  shelf,
  aisle,
}: Props) {
  return (
    <View style={styles.container}>

      <Text style={styles.name}>
        {name}
      </Text>

      <Text style={styles.brand}>
        {brand}
      </Text>

      <ProductPrice price={price} />

      <ProductLocation
        shelf={shelf}
        aisle={aisle}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 14,
  },

  name: {
    fontSize: 18,
    fontWeight: "700",
    color: "#222",
  },

  brand: {
    marginTop: 4,
    fontSize: 15,
    color: "#666",
  },
});