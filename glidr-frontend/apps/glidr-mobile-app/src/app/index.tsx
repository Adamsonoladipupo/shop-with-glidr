import { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { useRouter } from "expo-router";

import Logo from "../components/Logo";
import Routes  from "../constants/routes";

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace(Routes.Onboarding);
    }, 2500);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <View style={styles.container}>
      <Logo width={80} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
  },
});