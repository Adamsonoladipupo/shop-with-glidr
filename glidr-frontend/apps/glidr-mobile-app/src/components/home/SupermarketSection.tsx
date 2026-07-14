import { router } from "expo-router";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import SupermarketCard from "./SupermarketCard";

import { supermarkets } from "@/mock";

export default function SupermarketSection() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>
          Explore Supermarkets
        </Text>

        <TouchableOpacity>
          <Text style={styles.seeAll}>
            See all
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        horizontal
        data={supermarkets}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <SupermarketCard
            supermarket={item}
            onPress={() =>
              router.push({
                pathname: "/products",
                params: {
                  storeId: item.id,
                },
              })
            }
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 28,
    marginBottom: 30,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    marginHorizontal: 20,
    marginBottom: 18,
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#1A1A1A",
  },

  seeAll: {
    fontSize: 15,
    fontWeight: "600",
    color: "#18B6AE",
  },

  list: {
    paddingHorizontal: 20,
  },
});