import {
  router,
  useLocalSearchParams,
} from "expo-router";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import {
  EmptyShoppingList,
  ListSummary,
  ShoppingListItemCard,
} from "@/components/lists";

import { useShoppingLists } from "@/hooks/useShoppingLists";

export default function ShoppingListDetailsScreen() {

  const { id } = useLocalSearchParams();

  const {
    getList,
    updateQuantity,
    removeProductFromList,
  } = useShoppingLists();

  //   const list = getList(id as string);
  const foundList = getList(id as string);
  console.log("Shopping List:", foundList);
  console.log("Items:", foundList?.items);

  if (!foundList) {

    return (

      <SafeAreaView style={styles.center}>

        <Text style={styles.notFound}>
          Shopping List Not Found
        </Text>

      </SafeAreaView>

    );

  }
  //   const shoppingList = list;
  const list = foundList;

  function increase(itemId: string, quantity: number) {

    updateQuantity(
      list.id,
      itemId,
      quantity + 1
    );

  }

  function decrease(itemId: string, quantity: number) {

    if (quantity <= 1) {

      removeProductFromList(
        list.id,
        itemId
      );

      return;

    }

    updateQuantity(
      list.id,
      itemId,
      quantity - 1
    );

  }

  return (

    <SafeAreaView
      style={styles.container}
      edges={["top"]}
    >

      <View style={styles.header}>

        <Text style={styles.title}>
          {list.title}
        </Text>

        <Text style={styles.subtitle}>
          {list.items.length} Products
        </Text>

      </View>

      {list.items.length === 0 ? (

        <EmptyShoppingList
          onAddProducts={() =>
            router.push({
              pathname: "/search",
              params: {
                listId: list.id,
              },
            })
          }
        />

      ) : (

        <FlatList

          data={list.items}

          keyExtractor={(item) => item.id}

          showsVerticalScrollIndicator={false}

          contentContainerStyle={{
            paddingBottom: 20,
          }}

          renderItem={({ item }) => (

            <ShoppingListItemCard

              item={item}

              onIncrease={() =>
                increase(
                  item.id,
                  item.quantity
                )
              }

              onDecrease={() =>
                decrease(
                  item.id,
                  item.quantity
                )
              }

              onDelete={() =>
                removeProductFromList(
                  list.id,
                  item.id
                )
              }

              onPress={() =>
                router.push({
                  pathname: "/product/[id]",
                  params: {
                    id: item.product.id,
                  },
                })
              }

            />

          )}

          ListFooterComponent={
            <View>

              <TouchableOpacity
                style={styles.addButton}
                onPress={() =>
                  router.push({
                    pathname: "/search",
                    params: {
                      listId: list.id,
                    },
                  })
                }
              >
                <Text style={styles.addButtonText}>
                  + Add More Products
                </Text>

              </TouchableOpacity>

              <ListSummary
                list={list}
              />

            </View>
          }
        />

      )}

    </SafeAreaView>

  );

}

const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: "#F8F8F8",

    paddingHorizontal: 20,

  },

  center: {

    flex: 1,

    justifyContent: "center",

    alignItems: "center",

  },

  notFound: {

    fontSize: 18,

    fontWeight: "600",

    color: "#444",

  },

  header: {

    marginVertical: 20,

  },

  title: {

    fontSize: 28,

    fontWeight: "700",

    color: "#222",

  },

  subtitle: {

    marginTop: 6,

    fontSize: 16,

    color: "#777",

  },
  addButton: {

    marginTop: 12,

    marginBottom: 20,

    height: 52,

    borderRadius: 12,

    backgroundColor: "#1F8B4D",

    justifyContent: "center",

    alignItems: "center",

  },

  addButtonText: {

    color: "#FFF",

    fontSize: 17,

    fontWeight: "700",

  },

});