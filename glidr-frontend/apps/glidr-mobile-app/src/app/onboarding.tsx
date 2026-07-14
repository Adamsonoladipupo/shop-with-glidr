import { Image, StyleSheet, Text, View } from "react-native";
import { useRouter } from "expo-router";

import Screen from "../components/Screen";
import Button from "../components/Button";

import Colors from "../constants/colors";
import Typography from "../constants/typography";
import Spacing from "../constants/spacing";
import Routes from "../constants/routes";

export default function OnboardingScreen() {
  const router = useRouter();

  return (
    <Screen>
      <View style={styles.container}>
        <Image
          source={require("../../assets/images/onboarding.png")}
          style={styles.image}
          resizeMode="contain"
        />

        <View style={styles.textContainer}>
          <Text style={styles.title}>
            Immerse in a seamless online shopping experience.
          </Text>

          <Text style={styles.description}>
            We promise that you'll have the most fuss-free time with us ever.
          </Text>
        </View>

        <Button
          title="Get Started"
          onPress={() => router.push(Routes.Login)}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    paddingHorizontal: Spacing.lg,
    paddingTop: Spacing.xxl,
    paddingBottom: Spacing.xl,
  },

  image: {
    width: "100%",
    height: 360,
    alignSelf: "center",
  },

  textContainer: {
    alignItems: "center",
    marginTop: Spacing.lg,
  },

  title: {
    textAlign: "center",
    fontFamily: Typography.fontFamily.heading,
    fontSize: Typography.fontSize.xl,
    color: Colors.text,
    marginBottom: Spacing.lg,
  },

  description: {
    textAlign: "center",
    fontFamily: Typography.fontFamily.regular,
    fontSize: Typography.fontSize.md,
    lineHeight: 28,
    color: Colors.textSecondary,
    paddingHorizontal: 10,
  },
});