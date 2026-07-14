import {
    StyleSheet,
    Text,
    View,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

import { Promo } from "@/types/promo";

interface Props {

    promo: Promo;

}

export default function PromoCard({

    promo,

}: Props) {

    return (

        <View style={styles.card}>

            <View style={styles.iconContainer}>

                <Ionicons

                    name="gift"

                    size={30}

                    color="#18B7AE"

                />

            </View>

            <View style={styles.content}>

                <Text style={styles.code}>

                    {promo.code}

                </Text>

                <Text style={styles.description}>

                    {promo.description}

                </Text>

                <Text style={styles.expiry}>

                    Expires: {promo.expiry}

                </Text>

            </View>

        </View>

    );

}

const styles = StyleSheet.create({

    card: {

        backgroundColor: "#FFFFFF",

        borderRadius: 16,

        padding: 18,

        flexDirection: "row",

        marginBottom: 16,

        alignItems: "center",

    },

    iconContainer: {

        width: 55,

        height: 55,

        borderRadius: 28,

        backgroundColor: "#EAFBF9",

        justifyContent: "center",

        alignItems: "center",

    },

    content: {

        flex: 1,

        marginLeft: 16,

    },

    code: {

        fontSize: 18,

        fontWeight: "700",

    },

    description: {

        marginTop: 6,

        color: "#666",

    },

    expiry: {

        marginTop: 10,

        color: "#999",

        fontSize: 13,

    },

});