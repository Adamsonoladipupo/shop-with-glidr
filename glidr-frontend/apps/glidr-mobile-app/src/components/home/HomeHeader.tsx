import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";

interface HomeHeaderProps {
  userName: string;
  storeName: string;
  onNotificationPress?: () => void;
}

export default function HomeHeader({
  userName,
  storeName,
  onNotificationPress,
}: HomeHeaderProps) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>Hi {userName} 👋</Text>

        <View style={styles.locationContainer}>
          <Feather
            name="map-pin"
            size={16}
            color="#18B7AE"
          />

          <Text style={styles.location}>
            {storeName}
          </Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.notificationButton}
        onPress={onNotificationPress}
      >
        <Feather
          name="bell"
          size={24}
          color="#1A1A1A"
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 18,

    marginHorizontal: 20,

    flexDirection: "row",

    justifyContent: "space-between",

    alignItems: "center",
  },

  greeting: {
    fontSize: 28,

    fontWeight: "700",

    color: "#1A1A1A",
  },

  locationContainer: {
    flexDirection: "row",

    alignItems: "center",

    marginTop: 8,
  },

  location: {
    marginLeft: 6,

    fontSize: 15,

    color: "#777",
  },

  notificationButton: {
    width: 48,

    height: 48,

    borderRadius: 24,

    backgroundColor: "#F5F5F5",

    justifyContent: "center",

    alignItems: "center",
  },
});