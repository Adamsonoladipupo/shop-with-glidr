import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

interface BottomNavigationItemProps {
  label: string;
  Icon: React.ComponentType<any>;
  iconName: string;
  active?: boolean;
  onPress: () => void;
}

export default function BottomNavigationItem({
  label,
  Icon,
  iconName,
  active = false,
  onPress,
}: BottomNavigationItemProps) {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Icon
        name={iconName}
        size={30}
        color={active ? "#18B7AE" : "#1A1A1A"}
      />

      <Text
        style={[
          styles.label,
          active && styles.activeLabel,
        ]}
      >
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
  },

  label: {
    fontSize: 14,
    color: "#1A1A1A",
    fontWeight: "500",
  },

  activeLabel: {
    color: "#18B7AE",
  },
});