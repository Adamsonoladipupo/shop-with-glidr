import {
    Alert,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

import { Address } from "@/types/address";

interface Props {

    address: Address;

    onEdit?: () => void;

    onDelete?: () => void;

}

export default function AddressCard({

    address,

    onEdit,

    onDelete,

}: Props) {

    return (

        <View style={styles.card}>

            <View style={styles.header}>

                <Text style={styles.title}>

                    {address.title}

                </Text>

                {address.isDefault && (

                    <View style={styles.badge}>

                        <Text style={styles.badgeText}>
                            Default
                        </Text>

                    </View>

                )}

            </View>

            <Text style={styles.receiver}>
                {address.receiver}
            </Text>

            <Text style={styles.text}>
                {address.phone}
            </Text>

            <Text style={styles.text}>
                {address.addressLine}
            </Text>

            <Text style={styles.text}>
                {address.city}, {address.state}
            </Text>

            {address.landmark && (

                <Text style={styles.landmark}>
                    Landmark: {address.landmark}
                </Text>

            )}

            <View style={styles.actions}>

                <TouchableOpacity
                    style={styles.button}
                    onPress={
                        onEdit ??
                        (() =>
                            Alert.alert(
                                "Coming Soon",
                                "Editing addresses will be available soon."
                            ))
                    }
                >

                    <Ionicons
                        name="create-outline"
                        size={18}
                        color="#18B7AE"
                    />

                    <Text style={styles.actionText}>
                        Edit
                    </Text>

                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={
                        onDelete ??
                        (() =>
                            Alert.alert(
                                "Coming Soon",
                                "Deleting addresses will be available soon."
                            ))
                    }
                >

                    <Ionicons
                        name="trash-outline"
                        size={18}
                        color="#EF4444"
                    />

                    <Text
                        style={[
                            styles.actionText,
                            { color: "#EF4444" },
                        ]}
                    >
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

    header: {

        flexDirection: "row",

        justifyContent: "space-between",

        alignItems: "center",

        marginBottom: 12,

    },

    title: {

        fontSize: 18,

        fontWeight: "700",

    },

    badge: {

        backgroundColor: "#18B7AE",

        borderRadius: 20,

        paddingHorizontal: 10,

        paddingVertical: 5,

    },

    badgeText: {

        color: "#FFF",

        fontWeight: "600",

        fontSize: 12,

    },

    receiver: {

        fontWeight: "700",

        marginBottom: 5,

    },

    text: {

        color: "#666",

        marginBottom: 3,

    },

    landmark: {

        marginTop: 8,

        fontStyle: "italic",

        color: "#888",

    },

    actions: {

        flexDirection: "row",

        justifyContent: "flex-end",

        marginTop: 16,

    },

    button: {

        flexDirection: "row",

        alignItems: "center",

        marginLeft: 20,

    },

    actionText: {

        marginLeft: 6,

        color: "#18B7AE",

        fontWeight: "600",

    },

});