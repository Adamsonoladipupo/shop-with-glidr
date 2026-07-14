import {
    StyleSheet,
    Text,
    View,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

interface Props {

    icon: keyof typeof Ionicons.glyphMap;

    title: string;

    value: string;

}

export default function InfoCard({

    icon,

    title,

    value,

}: Props) {

    return (

        <View style={styles.container}>

            <Ionicons

                name={icon}

                size={26}

                color="#18B7AE"

            />

            <View style={styles.content}>

                <Text style={styles.title}>
                    {title}
                </Text>

                <Text style={styles.value}>
                    {value}
                </Text>

            </View>

        </View>

    );

}

const styles = StyleSheet.create({

    container: {

        backgroundColor: "#FFF",

        borderRadius: 16,

        padding: 18,

        flexDirection: "row",

        alignItems: "center",

        marginBottom: 14,

    },

    content: {

        marginLeft: 16,

        flex: 1,

    },

    title: {

        fontWeight: "700",

        fontSize: 16,

    },

    value: {

        marginTop: 4,

        color: "#777",

    },

});