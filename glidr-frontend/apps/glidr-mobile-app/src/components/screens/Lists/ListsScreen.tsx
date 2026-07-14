import { SafeAreaView } from "react-native-safe-area-context";
import {
  FlatList,
  StyleSheet,
} from "react-native";
import { router } from "expo-router";

import {
  ListCard,
  ListsHeader,
} from "@/components/lists";

import { useShoppingLists } from "@/hooks/useShoppingLists";

export default function ListsScreen() {

  const {
    shoppingLists,
    deleteList,
    } = useShoppingLists();

  return (

    <SafeAreaView
      style={styles.container}
      edges={["top"]}
    >

      <ListsHeader
        onAddList={() =>
          router.push("/lists/new")
        }
      />

      <FlatList

        data={shoppingLists}

        keyExtractor={(item) => item.id}

        showsVerticalScrollIndicator={false}

        renderItem={({ item }) => (

          <ListCard

            list={item}

            onPress={() =>
              router.push(`/lists/${item.id}` as any)
            }

            onDelete={() =>
              deleteList(item.id)
            }

          />

        )}

      />

    </SafeAreaView>

  );

}

const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: "#F8F8F8",

    paddingHorizontal: 20,

  },

});