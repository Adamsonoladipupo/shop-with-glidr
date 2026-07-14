import { Alert, FlatList, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity, Text } from "react-native";

import PaymentCard from "@/components/profile/PaymentCard";
import ScreenHeader from "@/components/profile/ScreenHeader";

import { paymentMethods } from "@/mock/payment.data";

export default function PaymentScreen() {

    return (

        <SafeAreaView style={styles.container}>

            <ScreenHeader title="Payment Methods" />

            <FlatList

                data={paymentMethods}

                keyExtractor={(item) => item.id}

                renderItem={({ item }) => (

                    <PaymentCard

                        payment={item}

                    />

                )}

                showsVerticalScrollIndicator={false}

            />

            <TouchableOpacity
                style={styles.addButton}
                onPress={() =>
                    Alert.alert(
                        "Coming Soon",
                        "Card management will be available after payment gateway integration."
                    )
                }
            >

                <Text style={styles.addButtonText}>
                    Add New Card
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
    addButton: {

        height: 56,

        backgroundColor: "#18B7AE",

        borderRadius: 16,

        justifyContent: "center",

        alignItems: "center",

        marginVertical: 20,

    },

    addButtonText: {

        color: "#FFFFFF",

        fontSize: 17,

        fontWeight: "700",

    },

});