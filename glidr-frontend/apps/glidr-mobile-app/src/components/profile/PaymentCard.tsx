import {
    Alert,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

import { PaymentMethod } from "@/types/payment";

interface Props {

    payment: PaymentMethod;

    onEdit?: () => void;

    onDelete?: () => void;

}

export default function PaymentCard({

    payment,

    onEdit,

    onDelete,

}: Props) {

    return (

        <View style={styles.card}>

            <View style={styles.topRow}>

                <View>

                    <Text style={styles.brand}>
                        {payment.brand}
                    </Text>

                    <Text style={styles.number}>
                        •••• •••• •••• {payment.lastFour}
                    </Text>

                    <Text style={styles.expiry}>
                        Expires {payment.expiryMonth}/{payment.expiryYear}
                    </Text>

                </View>

                {payment.isDefault && (

                    <View style={styles.badge}>

                        <Text style={styles.badgeText}>
                            Default
                        </Text>

                    </View>

                )}

            </View>

            <Text style={styles.name}>
                {payment.cardHolder}
            </Text>

            <View style={styles.actions}>

                <TouchableOpacity
                    style={styles.action}
                    onPress={
                        onEdit ??
                        (() =>
                            Alert.alert(
                                "Coming Soon",
                                "Editing cards will be available after backend integration."
                            ))
                    }
                >

                    <Ionicons
                        name="create-outline"
                        size={18}
                        color="#18B7AE"
                    />

                    <Text style={styles.editText}>
                        Edit
                    </Text>

                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.action}
                    onPress={
                        onDelete ??
                        (() =>
                            Alert.alert(
                                "Coming Soon",
                                "Deleting cards will be available after backend integration."
                            ))
                    }
                >

                    <Ionicons
                        name="trash-outline"
                        size={18}
                        color="#EF4444"
                    />

                    <Text style={styles.deleteText}>
                        Delete
                    </Text>

                </TouchableOpacity>

            </View>

        </View>

    );

}

const styles = StyleSheet.create({

    card: {

        backgroundColor: "#FFF",

        borderRadius: 18,

        padding: 18,

        marginBottom: 18,

    },

    topRow: {

        flexDirection: "row",

        justifyContent: "space-between",

        alignItems: "flex-start",

    },

    brand: {

        fontSize: 20,

        fontWeight: "700",

    },

    number: {

        marginTop: 10,

        fontSize: 18,

        letterSpacing: 2,

    },

    expiry: {

        marginTop: 8,

        color: "#777",

    },

    badge: {

        backgroundColor: "#18B7AE",

        borderRadius: 16,

        paddingHorizontal: 12,

        paddingVertical: 6,

    },

    badgeText: {

        color: "#FFF",

        fontWeight: "600",

        fontSize: 12,

    },

    name: {

        marginTop: 18,

        color: "#444",

        fontWeight: "600",

    },

    actions: {

        flexDirection: "row",

        justifyContent: "flex-end",

        marginTop: 20,

    },

    action: {

        flexDirection: "row",

        alignItems: "center",

        marginLeft: 20,

    },

    editText: {

        marginLeft: 5,

        color: "#18B7AE",

        fontWeight: "600",

    },

    deleteText: {

        marginLeft: 5,

        color: "#EF4444",

        fontWeight: "600",

    },

});