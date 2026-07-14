import { router } from "expo-router";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

import CategoryCard from "./CategoryCard";

import { categories } from "@/mock/categories.data";

export default function CategoriesSection() {
  return (
    <View style={styles.container}>

      <View style={styles.header}>

        <Text style={styles.title}>
          Shop by Categories
        </Text>

        <TouchableOpacity>

          <Text style={styles.seeAll}>
            See all
          </Text>

        </TouchableOpacity>

      </View>

      <View style={styles.grid}>
        {
          categories.map(category => (

            <CategoryCard

              key={category.id}

              title={category.title}

              image={category.image}

              onPress={() =>

                router.push({

                  pathname: "/products",

                  params: {

                    categoryId: category.id,

                  },

                })

              }

            />

          ))
        }
      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {

    marginHorizontal: 20,

    marginTop: 28,

  },

  header: {

    flexDirection: "row",

    justifyContent: "space-between",

    alignItems: "center",

    marginBottom: 20,

  },

  title: {

    fontSize: 22,

    fontWeight: "700",

    color: "#1A1A1A",

  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  seeAll: {

    fontSize: 15,

    fontWeight: "600",

    color: "#18B7AE",

  }

});
