import {
    StyleSheet,
    Text,
    View,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

interface Props {

    icon: keyof typeof Ionicons.glyphMap;

    title: string;

    subtitle: string;

}

export default function EmptyProfileState({

    icon,

    title,

    subtitle,

}: Props) {

    return (

        <View style={styles.container}>

            <Ionicons

                name={icon}

                size={70}

                color="#CFCFCF"

            />

            <Text style={styles.title}>

                {title}

            </Text>

            <Text style={styles.subtitle}>

                {subtitle}

            </Text>

        </View>

    );

}

const styles = StyleSheet.create({

    container: {

        alignItems: "center",

        marginTop: 80,

        paddingHorizontal: 30,

    },

    title: {

        marginTop: 20,

        fontSize: 22,

        fontWeight: "700",

    },

    subtitle: {

        marginTop: 12,

        textAlign: "center",

        color: "#777",

        lineHeight: 22,

    },

});