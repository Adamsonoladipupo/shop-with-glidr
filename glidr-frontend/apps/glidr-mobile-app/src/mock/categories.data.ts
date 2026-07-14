import { Category } from "@/types/category";

export const categories: Category[] = [
    {
        id: "1",
        title: "Fresh Fruits & Vegetables",
        image: require("../../assets/images/categories/fruits.png"),
        shelfNumber: "5",
        aisleNumber: "10",
    },
    {
        id: "2",
        title: "Cooking Oil & Ghee",
        image: require("../../assets/images/categories/oil.png"),
        shelfNumber: "4",
        aisleNumber: "8",
    },
    {
        id: "3",
        title: "Meat & Fish",
        image: require("../../assets/images/categories/meat.png"),
        shelfNumber: "2",
        aisleNumber: "10",
    },
    {
        id: "4",
        title: "Bakery & Snacks",
        image: require("../../assets/images/categories/bakery.png"),
        shelfNumber: "6",
        aisleNumber: "12",
    },
    {
        id: "5",
        title: "Dairy and Egg",
        image: require("../../assets/images/categories/milk.png"),
        shelfNumber: "2",
        aisleNumber: "10",
    },
    {
        id: "6",
        title: "Beverages",
        image: require("../../assets/images/categories/beverages.png"),
        shelfNumber: "6",
        aisleNumber: "12",
    },
];