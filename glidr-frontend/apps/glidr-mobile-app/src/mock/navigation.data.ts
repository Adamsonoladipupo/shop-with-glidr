import {
    Feather,
    MaterialCommunityIcons,
    AntDesign
} from "@expo/vector-icons";

export const navigationItems = [

    {
        id: "discover",
        title: "Discover",
        icon: Feather,
        iconName: "search",
        route: "/discover"
    },

    {
        id: "lists",
        title: "Lists",
        icon: MaterialCommunityIcons,
        iconName: "format-list-bulleted",
        route: "/lists"
    },

    {
        id: "cart",
        title: "Cart",
        icon: Feather,
        iconName: "shopping-cart",
        route: "/cart"
    },

    {
        id: "orders",
        title: "Orders",
        icon: Feather,
        iconName: "file-text",
        route: "/orders"
    },

    {
        id: "profile",
        title: "Profile",
        icon: Feather,
        iconName: "user",
        route: "/profile"
    }
];
