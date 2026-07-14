import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

import {
    SafeAreaView,
} from "react-native-safe-area-context";

import {

    StyleSheet,

    Text,

    TouchableOpacity,

    View,

} from "react-native";

import AddressCard from "@/components/profile/AddressCard";

export default function AddressScreen() {

    return (

        <SafeAreaView style={styles.container}>

            <View style={styles.header}>

                <TouchableOpacity
                    onPress={() => router.back()}
                >

                    <Ionicons
                        name="arrow-back"
                        size={28}
                        color="#222"
                    />

                </TouchableOpacity>

                <Text style={styles.title}>
                    Delivery Address
                </Text>

            </View>

            <AddressCard

                title="Home"

                address="12 Admiralty Way, Lekki Phase 1, Lagos"

                isDefault

            />

            <AddressCard

                title="Office"

                address="14 Allen Avenue, Ikeja, Lagos"

            />

            <TouchableOpacity style={styles.addButton}>

                <Ionicons
                    name="add-circle"
                    size={22}
                    color="#FFF"
                />

                <Text style={styles.buttonText}>
                    Add New Address
                </Text>

            </TouchableOpacity>

        </SafeAreaView>

    );

}

const styles = StyleSheet.create({

    container: {

        flex: 1,

        backgroundColor: "#F8F8F8",

        padding: 20,

    },

    header: {

        flexDirection: "row",

        alignItems: "center",

        marginBottom: 24,

    },

    title: {

        marginLeft: 18,

        fontSize: 28,

        fontWeight: "700",

    },

    addButton: {

        marginTop: 10,

        backgroundColor: "#18B7AE",

        height: 55,

        borderRadius: 14,

        justifyContent: "center",

        alignItems: "center",

        flexDirection: "row",

    },

    buttonText: {

        marginLeft: 10,

        color: "#FFF",

        fontWeight: "700",

        fontSize: 16,

    },

});