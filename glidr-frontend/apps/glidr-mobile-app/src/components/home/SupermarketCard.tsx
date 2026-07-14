import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { Supermarket } from "@/types";

interface Props {
  supermarket: Supermarket;
  onPress?: () => void;
}

export default function SupermarketCard({
  supermarket,
  onPress,
}: Props) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={styles.container}
    >
      <View style={styles.logoContainer}>
        <Image
          source={supermarket.logo}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <Text
        numberOfLines={2}
        style={styles.name}
      >
        {supermarket.name}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 70,
    alignItems: "center",
    marginRight: 7,
  },

  logoContainer: {
    width: 60,
    height: 60,
    borderRadius: 37,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },

  logo: {
    width: 50,
    height: 50,
    borderRadius: 37,
  },

  name: {
    marginTop: 10,
    textAlign: "center",
    fontSize: 13,
    fontWeight: "600",
    color: "#1A1A1A",
  },
});