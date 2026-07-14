import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

interface Props {

    icon: keyof typeof Ionicons.glyphMap;

    title: string;

    danger?: boolean;

    onPress: () => void;

}

export default function ProfileMenuItem({

    icon,

    title,

    danger,

    onPress,

}: Props) {

    return (

        <TouchableOpacity
            style={styles.container}
            onPress={onPress}
        >

            <View style={styles.left}>

                <Ionicons

                    name={icon}

                    size={22}

                    color={
                        danger
                            ? "#EF4444"
                            : "#18B7AE"
                    }

                />

                <Text
                    style={[
                        styles.title,

                        danger && styles.danger,
                    ]}
                >

                    {title}

                </Text>

            </View>

            <Ionicons

                name="chevron-forward"

                size={20}

                color="#AAA"

            />

        </TouchableOpacity>

    );

}

const styles = StyleSheet.create({

    container: {

        backgroundColor: "#FFF",

        borderRadius: 14,

        padding: 18,

        marginBottom: 14,

        flexDirection: "row",

        justifyContent: "space-between",

        alignItems: "center",

    },

    left: {

        flexDirection: "row",

        alignItems: "center",

    },

    title: {

        marginLeft: 16,

        fontSize: 16,

        fontWeight: "600",

    },

    danger: {

        color: "#EF4444",

    },

});