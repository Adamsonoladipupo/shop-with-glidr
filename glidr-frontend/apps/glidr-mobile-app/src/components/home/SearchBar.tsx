import {
  Pressable,
  StyleSheet,
  TextInput
} from "react-native";

import { Feather } from "@expo/vector-icons";

interface SearchBarProps {
  value?: string;
  onChangeText?: (text: string) => void;
  onPress?: () => void;
  editable?: boolean;
}

export default function SearchBar({
  value,
  onChangeText,
  onPress,
  editable = true,
}: SearchBarProps) {
  return (
    <Pressable
      onPress={onPress}
      style={styles.container}
    >
      <Feather
        name="search"
        size={22}
        color="#999"
      />

      <TextInput
        style={styles.input}
        placeholder="Search products..."
        placeholderTextColor="#999"
        value={value}
        onChangeText={onChangeText}
        editable={editable}
        pointerEvents={editable ? "auto" : "none"}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",

    backgroundColor: "#F5F5F5",

    marginHorizontal: 20,
    marginTop: 24,

    paddingHorizontal: 18,

    height: 58,

    borderRadius: 16,
  },

  input: {
    flex: 1,

    marginLeft: 12,

    fontSize: 16,

    color: "#1A1A1A",
  },
});