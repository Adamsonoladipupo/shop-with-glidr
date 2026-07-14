import { Ionicons } from "@expo/vector-icons";
import {
    router,
    useLocalSearchParams,
} from "expo-router";
import { useMemo } from "react";
import {
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import ProductCard from "@/components/products/ProductCard";
import {
    categories,
    products,
    supermarkets,
} from "@/mock";

export default function ProductsScreen() {
    const { categoryId, storeId } = useLocalSearchParams<{
        categoryId?: string;
        storeId?: string;
        
    }>();

    const filteredProducts = useMemo(() => {
        let result = [...products];

        if (categoryId) {
            result = result.filter(
                (product) => product.categoryId === categoryId
            );
        }

        if (storeId) {
            result = result.filter(
                (product) => product.storeId === storeId
            );
        }

        return result;
    }, [categoryId, storeId]);

    const title = useMemo(() => {
        if (categoryId) {
            return (
                categories.find(
                    (category) => category.id === categoryId
                )?.title ?? "Category"
            );
        }

        if (storeId) {
            return (
                supermarkets.find(
                    (store) => store.id === storeId
                )?.name ?? "Store"
            );
        }

        return "Products";
    }, [categoryId, storeId]);

    const emptyMessage = useMemo(() => {
        if (categoryId) {
            return "There are no products in this category.";
        }

        if (storeId) {
            return "This supermarket has no available products.";
        }

        return "No products available.";
    }, [categoryId, storeId]);

    return (
        <SafeAreaView style={styles.container}>
            {/* Header */}

            <View style={styles.header}>
                <TouchableOpacity
                    onPress={() => router.back()}
                    style={styles.backButton}
                >
                    <Ionicons
                        name="arrow-back"
                        size={26}
                        color="#222"
                    />
                </TouchableOpacity>

                <View>
                    <Text style={styles.title}>
                        {title}
                    </Text>

                    <Text style={styles.subtitle}>
                        {filteredProducts.length} Product
                        {filteredProducts.length !== 1 ? "s" : ""}
                    </Text>
                </View>
            </View>

            {/* Products */}

            <FlatList
                data={filteredProducts}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.cardWrapper}>
                        <ProductCard
                            product={item}
                            onPress={() =>
                                router.push({
                                    pathname: "/products/[id]",
                                    params: {
                                        id: item.id,
                                    },
                                })
                            }
                        />
                    </View>
                )}
                numColumns={2}
                columnWrapperStyle={styles.row}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.listContent}
                ListEmptyComponent={
                    <View style={styles.emptyContainer}>
                        <Ionicons
                            name="cube-outline"
                            size={64}
                            color="#BBB"
                        />

                        <Text style={styles.emptyTitle}>
                            No Products Found
                        </Text>

                        <Text style={styles.emptySubtitle}>
                            {emptyMessage}
                        </Text>
                    </View>
                }
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F8F8F8",
        paddingHorizontal: 20,
        paddingTop: 12,
    },

    header: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 24,
    },

    backButton: {
        marginRight: 16,
    },

    title: {
        fontSize: 28,
        fontWeight: "700",
        color: "#1A1A1A",
    },

    subtitle: {
        marginTop: 4,
        color: "#777",
        fontSize: 14,
    },

    listContent: {
        paddingBottom: 40,
    },

    row: {
        justifyContent: "space-between",
        marginBottom: 16,
    },

    cardWrapper: {
        width: "48%",
    },

    emptyContainer: {
        marginTop: 80,
        alignItems: "center",
        justifyContent: "center",
    },

    emptyTitle: {
        marginTop: 20,
        fontSize: 22,
        fontWeight: "700",
        color: "#1A1A1A",
    },

    emptySubtitle: {
        marginTop: 10,
        textAlign: "center",
        color: "#777",
        paddingHorizontal: 24,
    },
}); 