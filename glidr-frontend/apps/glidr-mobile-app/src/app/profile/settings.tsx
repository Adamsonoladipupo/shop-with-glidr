import { useState } from "react";
import {
    ScrollView,
    StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import ScreenHeader from "@/components/profile/ScreenHeader";
import SettingItem from "@/components/profile/SettingItem";

export default function SettingsScreen() {

    const [notifications, setNotifications] = useState(true);

    const [location, setLocation] = useState(true);

    const [darkMode, setDarkMode] = useState(false);

    return (

        <SafeAreaView style={styles.container}>

            <ScreenHeader
                title="Settings"
            />

            <ScrollView
                showsVerticalScrollIndicator={false}
            >

                <SettingItem
                    title="Push Notifications"
                    value={notifications}
                    onValueChange={setNotifications}
                />

                <SettingItem
                    title="Location Services"
                    value={location}
                    onValueChange={setLocation}
                />

                <SettingItem
                    title="Dark Mode"
                    value={darkMode}
                    onValueChange={setDarkMode}
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