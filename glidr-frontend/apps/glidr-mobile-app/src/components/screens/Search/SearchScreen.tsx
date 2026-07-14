import {
  router,
  useLocalSearchParams,
} from "expo-router";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import EmptySearch from "./EmptySearch";
import SearchInput from "./SearchInput";
import SearchResultsList from "./SearchResultsList";

import useProductSearch from "@/hooks/useProductSearch";

import { Product } from "@/types";

export default function SearchScreen() {

  const {
    query,
    setQuery,
    searchResults,
  } = useProductSearch();

  const { listId } = useLocalSearchParams();

  function handleProductPress(product: Product) {

    // Search was opened from a shopping list
    if (listId) {

      router.push({
        pathname: "/search/add-product",
        params: {
          listId: listId as string,
          productId: product.id,
        },
      });

      return;
    }

    // Normal search from Home
    router.push({
      pathname: "/products/[id]",
      params: {
        id: product.id,
      },
    });

  }

  return (

    <SafeAreaView style={styles.container}>

      <SearchInput
        value={query}
        onChangeText={setQuery}
      />

      <SearchResultsList
        products={searchResults}
        onProductPress={handleProductPress}
      />

      {searchResults.length === 0 && (
        <EmptySearch query={query} />
      )}

    </SafeAreaView>

  );

}

const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: "#FFFFFF",

    padding: 20,

  },

});