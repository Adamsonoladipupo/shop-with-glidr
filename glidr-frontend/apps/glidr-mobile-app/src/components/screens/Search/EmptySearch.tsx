import {
    StyleSheet,
    Text,
    View,
} from "react-native";

interface Props {
    query: string;
}

export default function EmptySearch({
    query,
}: Props) {
    if (query.length === 0) {
        return null;
    }
    if (!query.trim()) {
        return null;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                No products found
            </Text>

            <Text style={styles.subtitle}>
                Try searching with another keyword.
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 60,
        alignItems: "center",
    },

    title: {
        fontSize: 18,
        fontWeight: "600",
    },

    subtitle: {
        marginTop: 8,
        color: "#777",
    },
});