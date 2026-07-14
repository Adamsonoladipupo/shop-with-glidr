import {
    Image,
    StyleSheet,
    Text,
    View,
} from "react-native";

interface Props {

    name: string;

    email: string;

}

export default function ProfileHeader({

    name,

    email,

}: Props) {

    return (

        <View style={styles.container}>

            <Image

                source={require("@/assets/images/avatar.png")}

                style={styles.avatar}

            />

            <Text style={styles.name}>
                {name}
            </Text>

            <Text style={styles.email}>
                {email}
            </Text>

            <View style={styles.badge}>

                <Text style={styles.badgeText}>
                    Glidr Member
                </Text>

            </View>

        </View>

    );

}

const styles = StyleSheet.create({

    container: {

        alignItems: "center",

        paddingVertical: 30,

        backgroundColor: "#FFF",

    },

    avatar: {

        width: 110,

        height: 110,

        borderRadius: 55,

        marginBottom: 20,

    },

    name: {

        fontSize: 24,

        fontWeight: "700",

    },

    email: {

        color: "#666",

        marginTop: 6,

    },

    badge: {

        marginTop: 16,

        backgroundColor: "#18B7AE",

        paddingHorizontal: 16,

        paddingVertical: 8,

        borderRadius: 20,

    },

    badgeText: {

        color: "#FFF",

        fontWeight: "600",

    },

});