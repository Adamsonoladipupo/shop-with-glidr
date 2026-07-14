import {
    StyleSheet,
    Switch,
    Text,
    View,
} from "react-native";

interface Props {

    title: string;

    value: boolean;

    onValueChange: (
        value: boolean
    ) => void;

}

export default function SettingItem({

    title,

    value,

    onValueChange,

}: Props) {

    return (

        <View style={styles.container}>

            <Text style={styles.title}>
                {title}
            </Text>

            <Switch

                value={value}

                onValueChange={onValueChange}

                trackColor={{
                    true: "#18B7AE",
                }}

            />

        </View>

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

    title: {

        fontSize: 16,

        fontWeight: "600",

    },

});