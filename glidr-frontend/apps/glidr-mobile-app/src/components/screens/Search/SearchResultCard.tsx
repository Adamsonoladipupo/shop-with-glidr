import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

import { Product } from "@/types";

interface Props {
    product: Product;
    onPress: () => void;
}

export default function SearchResultCard({
    product,
    onPress,
}: Props) {
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={onPress}
            activeOpacity={0.8}
        >
            <Image
                source={ product.image }
                style={styles.image}
            />

            <View style={styles.content}>
                <Text style={styles.name}>
                    {product.name}
                </Text>

                <Text style={styles.brand}>
                    {product.brand}
                </Text>

                <Text style={styles.price}>
                    ₦{product.price.toLocaleString()}
                </Text>

                <Text style={styles.location}>
                    Shelf {product.shelfNumber} •
                    Aisle {product.aisleNumber}
                </Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        paddingVertical: 14,
        borderBottomWidth: 1,
        borderColor: "#EEEEEE",
    },

    image: {
        width: 70,
        height: 70,
        borderRadius: 10,
    },

    content: {
        flex: 1,
        marginLeft: 14,
        justifyContent: "space-between",
    },

    name: {
        fontWeight: "600",
        fontSize: 16,
    },

    brand: {
        color: "#777",
    },

    price: {
        color: "#18B7AE",
        fontWeight: "700",
    },

    location: {
        color: "#888",
        fontSize: 12,
    },
});