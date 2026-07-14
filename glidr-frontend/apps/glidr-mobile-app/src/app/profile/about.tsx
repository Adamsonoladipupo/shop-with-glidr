import {
    ScrollView,
    StyleSheet,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import ScreenHeader from "@/components/profile/ScreenHeader";
import InfoCard from "@/components/profile/InfoCard";

export default function AboutScreen() {

    return (

        <SafeAreaView style={styles.container}>

            <ScreenHeader
                title="About Glidr"
            />

            <ScrollView>

                <InfoCard

                    icon="cube-outline"

                    title="Version"

                    value="1.0.0"

                />

                <InfoCard

                    icon="code-slash-outline"

                    title="Developer"

                    value="Glidr"

                />

                <InfoCard

                    icon="globe-outline"

                    title="Website"

                    value="www.glidr.app"

                />

                <InfoCard

                    icon="information-circle-outline"

                    title="About"

                    value="Glidr helps shoppers discover products, navigate supermarkets, manage shopping lists, and enjoy a smarter shopping experience."

                />

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