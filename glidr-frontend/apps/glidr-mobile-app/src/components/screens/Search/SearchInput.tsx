import React from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Feather } from "@expo/vector-icons";

interface SearchInputProps {
  value: string;
  placeholder?: string;
  autoFocus?: boolean;
  onChangeText: (text: string) => void;
}

export default function SearchInput({
  value,
  placeholder = "Search products...",
  autoFocus = true,
  onChangeText,
}: SearchInputProps) {
  return (
    <View style={styles.container}>
      <Feather
        name="search"
        size={20}
        color="#6B7280"
      />

      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        autoFocus={autoFocus}
        onChangeText={onChangeText}
        returnKeyType="search"
      />

      {value.length > 0 && (
        <TouchableOpacity
          onPress={() => onChangeText("")}
        >
          <Feather
            name="x-circle"
            size={18}
            color="#9CA3AF"
          />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 52,
    backgroundColor: "#F5F5F5",
    borderRadius: 16,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
  },

  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
});