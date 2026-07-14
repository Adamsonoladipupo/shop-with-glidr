import { useState } from "react";
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    Alert,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import { Ionicons } from "@expo/vector-icons";

import { router } from "expo-router";

export default function DetailsScreen() {

    const [firstName, setFirstName] = useState("Abdulwahab");

    const [lastName, setLastName] = useState("Henry");

    const [email, setEmail] = useState("henry@gmail.com");

    const [phone, setPhone] = useState("+2348012345678");

    function handleSave() {

        Alert.alert(
            "Success",
            "Profile updated successfully."
        );

    }

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
                    My Details
                </Text>

            </View>

            <Text style={styles.label}>
                First Name
            </Text>

            <TextInput
                value={firstName}
                onChangeText={setFirstName}
                style={styles.input}
            />

            <Text style={styles.label}>
                Last Name
            </Text>

            <TextInput
                value={lastName}
                onChangeText={setLastName}
                style={styles.input}
            />

            <Text style={styles.label}>
                Email
            </Text>

            <TextInput
                value={email}
                onChangeText={setEmail}
                style={styles.input}
                keyboardType="email-address"
            />

            <Text style={styles.label}>
                Phone Number
            </Text>

            <TextInput
                value={phone}
                onChangeText={setPhone}
                style={styles.input}
                keyboardType="phone-pad"
            />

            <TouchableOpacity
                style={styles.button}
                onPress={handleSave}
            >

                <Text style={styles.buttonText}>
                    Save Changes
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

        marginBottom: 30,

    },

    title: {

        marginLeft: 20,

        fontSize: 28,

        fontWeight: "700",

    },

    label: {

        marginBottom: 8,

        marginTop: 18,

        fontSize: 16,

        fontWeight: "600",

    },

    input: {

        backgroundColor: "#FFF",

        borderRadius: 12,

        paddingHorizontal: 18,

        height: 55,

        fontSize: 16,

    },

    button: {

        marginTop: 40,

        height: 55,

        borderRadius: 14,

        justifyContent: "center",

        alignItems: "center",

        backgroundColor: "#18B7AE",

    },

    buttonText: {

        color: "#FFF",

        fontSize: 17,

        fontWeight: "700",

    },

});