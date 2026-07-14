import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
const PRIMARY = "#18B7AE";


interface ShoppingListFormProps {
  title: string;
  onChangeTitle: (text: string) => void;
  onSubmit: () => void;
  loading?: boolean;
}

export default function ShoppingListForm({
  title,
  onChangeTitle,
  onSubmit,
  loading = false,
}: ShoppingListFormProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        List Name
      </Text>

      <TextInput
        placeholder="e.g Weekly Shopping"
        placeholderTextColor="#999"
        value={title}
        onChangeText={onChangeTitle}
        style={styles.input}
      />

      {/* <PrimaryButton
        title="Create List"
        onPress={onSubmit}
        disabled={!title.trim() || loading}
      /> */}
        <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>
            Add to Cart
        </Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
  },

  label: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 10,
    color: "#222",
  },

  input: {
    height: 58,

    borderRadius: 14,

    borderWidth: 1,

    borderColor: "#DDD",

    paddingHorizontal: 18,

    fontSize: 17,

    marginBottom: 30,

    backgroundColor: "#FFF",
  },
    button: {
    backgroundColor: PRIMARY,
    marginTop: 36,
    height: 60,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "700",
  },
});