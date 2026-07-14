import {
    Alert,
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import ScreenHeader from "@/components/profile/ScreenHeader";
import PromoCard from "@/components/profile/PromoCard";

import { promos } from "@/mock/promo.data";

export default function PromoScreen() {

    return (

        <SafeAreaView style={styles.container}>

            <ScreenHeader
                title="Promo Codes"
            />

            <FlatList

                data={promos}

                keyExtractor={(item) => item.id}

                renderItem={({ item }) => (

                    <PromoCard

                        promo={item}

                    />

                )}

                showsVerticalScrollIndicator={false}

            />

            <TouchableOpacity

                style={styles.button}

                onPress={() =>

                    Alert.alert(

                        "Coming Soon",

                        "Adding promo codes will be available after backend integration."

                    )

                }

            >

                <Text style={styles.buttonText}>

                    Add Promo Code

                </Text>

            </TouchableOpacity>

        </SafeAreaView>

    );

}

const styles = StyleSheet.create({

    container: {

        flex: 1,

        backgroundColor: "#F8F8F8",

        paddingHorizontal: 20,

        paddingTop: 10,

    },

    button: {

        height: 56,

        backgroundColor: "#18B7AE",

        borderRadius: 16,

        justifyContent: "center",

        alignItems: "center",

        marginVertical: 20,

    },

    buttonText: {

        color: "#FFFFFF",

        fontWeight: "700",

        fontSize: 16,

    },

});