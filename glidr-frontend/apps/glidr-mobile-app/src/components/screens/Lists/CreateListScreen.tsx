import { useState } from "react";
import {
  Alert,
  StyleSheet,
  View,
} from "react-native";
import { useShoppingLists } from "@/hooks/useShoppingLists";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import ShoppingListForm from "@/components/lists/ShoppingListForm";

export default function CreateListScreen() {

    const {
        createList,
    } = useShoppingLists();
  const [title, setTitle] = useState("");

  const handleCreateList = () => {

    createList(title.trim());

    router.back();

  };

  return (

    <SafeAreaView
      style={styles.container}
      edges={["top"]}
    >

      <ShoppingListForm

        title={title}

        onChangeTitle={setTitle}

        onSubmit={handleCreateList}

      />

    </SafeAreaView>

  );

}

const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: "#FFFFFF",

    paddingHorizontal: 20,

  },

});