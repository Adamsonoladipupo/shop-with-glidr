import React from "react";
import { StyleSheet, View } from "react-native";
import { router, usePathname } from "expo-router";

import BottomNavigationItem from "./BottomNavigationItem";
import { navigationItems } from "../../mock/navigation.data";

export default function BottomNavigation() {
  const pathname = usePathname();

  return (
    <View style={styles.container}>
      {navigationItems.map((item) => (
        <BottomNavigationItem
          key={item.id}
          label={item.title}
          Icon={item.icon}
          iconName={item.iconName}
          active={pathname === item.route}
          onPress={() => router.push(item.route as never)}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",

    justifyContent: "space-around",

    alignItems: "center",

    height: 85,

    backgroundColor: "#FFFFFF",

    borderTopWidth: 1,

    borderColor: "#ECECEC",

    paddingBottom: 20,

    paddingTop: 10,

    elevation: 15,

    shadowColor: "#000",

    shadowOpacity: 0.08,

    shadowRadius: 10,
  },
});