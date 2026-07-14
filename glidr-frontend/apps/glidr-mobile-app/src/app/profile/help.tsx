import {
    Alert,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import ScreenHeader from "@/components/profile/ScreenHeader";
import InfoCard from "@/components/profile/InfoCard";

export default function HelpScreen() {

    function comingSoon(feature: string) {

        Alert.alert(

            feature,

            "This feature will be available in a future update."

        );

    }

    return (

        <SafeAreaView style={styles.container}>

            <ScreenHeader
                title="Help & Support"
            />

            <ScrollView>

                <TouchableOpacity
                    onPress={() => comingSoon("Frequently Asked Questions")}
                >

                    <InfoCard

                        icon="help-circle-outline"

                        title="Frequently Asked Questions"

                        value="Find answers to common questions."

                    />

                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => comingSoon("Contact Support")}
                >

                    <InfoCard

                        icon="mail-outline"

                        title="Contact Support"

                        value="support@glidr.app"

                    />

                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => comingSoon("Privacy Policy")}
                >

                    <InfoCard

                        icon="shield-checkmark-outline"

                        title="Privacy Policy"

                        value="Read how we protect your data."

                    />

                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => comingSoon("Terms & Conditions")}
                >

                    <InfoCard

                        icon="document-text-outline"

                        title="Terms & Conditions"

                        value="Read the terms of using Glidr."

                    />

                </TouchableOpacity>

            </ScrollView>

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

});