import { Tabs } from "expo-router";
import {
  Feather,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import { useCart } from "@/hooks/useCart";

export default function TabsLayout() {

  const { getTotalItems } = useCart();

  const cartCount = getTotalItems();

  return (

    <Tabs
      screenOptions={{
        headerShown: false,

        tabBarActiveTintColor: "#18B7AE",
        tabBarInactiveTintColor: "#6B7280",

        tabBarHideOnKeyboard: true,

        tabBarStyle: {
          height: 72,
          paddingTop: 8,
          paddingBottom: 8,
          backgroundColor: "#FFFFFF",

          borderTopWidth: 1,
          borderTopColor: "#F1F5F9",

          elevation: 8,
        },

        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
        },
      }}
    >

      {/* Discover */}

      <Tabs.Screen
        name="index"
        options={{
          title: "Discover",

          tabBarIcon: ({ color, size }) => (

            <Feather
              name="search"
              size={size}
              color={color}
            />

          ),
        }}
      />

      {/* Shopping Lists */}

      <Tabs.Screen
        name="lists"
        options={{
          title: "Lists",

          tabBarIcon: ({ color, size }) => (

            <MaterialCommunityIcons
              name="format-list-bulleted"
              size={size}
              color={color}
            />

          ),
        }}
      />

      {/* Cart */}

      <Tabs.Screen
        name="cart"
        options={{
          title: "Cart",

          tabBarBadge:
            cartCount > 0
              ? cartCount
              : undefined,

          tabBarBadgeStyle: {
            backgroundColor: "#EF4444",
            color: "#FFFFFF",
            fontSize: 11,
            fontWeight: "700",
          },

          tabBarIcon: ({ color, size }) => (

            <Feather
              name="shopping-cart"
              size={size}
              color={color}
            />

          ),
        }}
      />

      {/* Orders */}

      <Tabs.Screen
        name="orders"
        options={{
          title: "Orders",

          tabBarIcon: ({ color, size }) => (

            <MaterialCommunityIcons
              name="file-document-outline"
              size={size}
              color={color}
            />

          ),
        }}
      />

      {/* Profile */}

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",

          tabBarIcon: ({ color, size }) => (

            <Feather
              name="user"
              size={size}
              color={color}
            />

          ),
        }}
      />

    </Tabs>

  );

}