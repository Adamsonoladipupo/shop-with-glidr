import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

interface Props {

    title: string;

}

export default function ScreenHeader({

    title,

}: Props) {

    return (

        <View style={styles.container}>

            <TouchableOpacity
                onPress={() => router.back()}
            >

                <Ionicons
                    name="arrow-back"
                    size={26}
                    color="#1A1A1A"
                />

            </TouchableOpacity>

            <Text style={styles.title}>
                {title}
            </Text>

            <View style={{ width: 26 }} />

        </View>

    );

}

const styles = StyleSheet.create({

    container: {

        flexDirection: "row",

        alignItems: "center",

        justifyContent: "space-between",

        marginBottom: 24,

    },

    title: {

        fontSize: 22,

        fontWeight: "700",

        color: "#1A1A1A",

    },

});