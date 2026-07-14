import { FlatList } from "react-native";

import { Product } from "@/types";
import SearchResultCard from "./SearchResultCard";

interface Props {
  products: Product[];
  onProductPress: (product: Product) => void;
}

export default function SearchResultsList({
  products,
  onProductPress,
}: Props) {
  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => (
        <SearchResultCard
          product={item}
          onPress={() => onProductPress(item)}
        />
      )}
    />
  );
}