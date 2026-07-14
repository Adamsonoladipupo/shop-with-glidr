import { Alert, ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

import ProfileHeader from "@/components/profile/ProfileHeader";
import ProfileMenuItem from "@/components/profile/ProfileMenuItem";

export default function ProfileScreen() {

    function handleLogout() {

        Alert.alert(
            "Logout",
            "Are you sure you want to logout?",
            [
                {
                    text: "Cancel",
                    style: "cancel",
                },
                {
                    text: "Logout",
                    style: "destructive",
                    onPress: () => {

                        // TODO:
                        // Remove authentication token later.

                        router.replace("/welcome");
                    },
                },
            ]
        );

    }

    return (

        <SafeAreaView style={styles.container}>

            <ScrollView
                showsVerticalScrollIndicator={false}
            >

                <ProfileHeader

                    name="Henry Olaitan"

                    email="henry@gmail.com"

                />

                <View style={styles.menu}>

                    <ProfileMenuItem
                        icon="person-outline"
                        title="My Details"
                        onPress={() =>
                            router.push("/profile/details")
                        }
                    />

                    <ProfileMenuItem
                        icon="location-outline"
                        title="Delivery Address"
                        onPress={() =>
                            router.push("/profile/address")
                        }
                    />

                    <ProfileMenuItem
                        icon="card-outline"
                        title="Payment Methods"
                        onPress={() =>
                            router.push("/profile/payment")
                        }
                    />

                    <ProfileMenuItem
                        icon="gift-outline"
                        title="Promo Codes"
                        onPress={() =>
                            router.push("/profile/promo")
                        }
                    />

                    <ProfileMenuItem
                        icon="settings-outline"
                        title="Settings"
                        onPress={() =>
                            router.push("/profile/settings")
                        }
                    />

                    <ProfileMenuItem
                        icon="help-circle-outline"
                        title="Help & Support"
                        onPress={() =>
                            router.push("/profile/help")
                        }
                    />

                    <ProfileMenuItem
                        icon="information-circle-outline"
                        title="About"
                        onPress={() =>
                            router.push("/profile/about")
                        }
                    />

                    <ProfileMenuItem
                        icon="log-out-outline"
                        title="Logout"
                        danger
                        onPress={handleLogout}
                    />

                </View>

            </ScrollView>

        </SafeAreaView>

    );

}

const styles = StyleSheet.create({

    container: {

        flex: 1,

        backgroundColor: "#F8F8F8",

    },

    menu: {

        marginTop: 20,

        marginHorizontal: 20,

        marginBottom: 40,

    },

});