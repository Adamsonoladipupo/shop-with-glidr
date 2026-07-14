import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
} from "react-native";

import Colors from "../constants/colors";
import Typography from "../constants/typography";

interface Props {
  title: string;
  onPress: () => void;
  disabled?: boolean;

  loading?: boolean;

  variant?: "filled" | "outline";
}

export default function Button({
  title,
  onPress,
  loading = false,
  variant = "filled",
  disabled = false,
}: Props) {
  const filled = variant === "filled";

  return (
    <Pressable
      disabled={disabled}
      onPress={onPress}
      style={[
        styles.button,
        disabled? styles.disabled: styles.enabled,
        filled ? styles.filled : styles.outline,
      ]}
    >
      {loading ? (
        <ActivityIndicator color={filled ? "#fff" : Colors.primary} />
      ) : (
        <Text
          style={[
            styles.text,
            filled ? styles.white : styles.primary,
          ]}
        >
          {title}
        </Text>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 58,
    borderRadius: 18,

    justifyContent: "center",
    alignItems: "center",
  },

  filled: {
    backgroundColor: Colors.primary,

    shadowColor: Colors.primary,
    shadowOpacity: 0.3,
    shadowRadius: 18,

    elevation: 6,
  },

  outline: {
    borderWidth: 2,
    borderColor: Colors.primary,
    backgroundColor: Colors.white,
  },

  text: {
    fontFamily: Typography.fontFamily.medium,
    fontSize: Typography.fontSize.lg,
  },

  white: {
    color: Colors.white,
  },

  primary: {
    color: Colors.primary,
  },
  disabled: {
    opacity: 0.5,
  },

  enabled: {
    opacity: 1,
  },
});