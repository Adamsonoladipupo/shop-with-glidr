import { Pressable, StyleSheet, Text, View } from "react-native";
import { useRouter } from "expo-router";

import Colors from "../constants/colors";
import Typography from "../constants/typography";
import Routes from "../constants/routes";

interface Props {
  active: "login" | "signup";
}

export default function AuthHeader({ active }: Props) {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.tab}
        onPress={() => router.replace(Routes.Login)}
      >
        <Text
          style={[
            styles.text,
            active === "login" && styles.activeText,
          ]}
        >
          Login
        </Text>

        {active === "login" && <View style={styles.indicator} />}
      </Pressable>

      <Pressable
        style={styles.tab}
        onPress={() => router.replace(Routes.Register)}
      >
        <Text
          style={[
            styles.text,
            active === "signup" && styles.activeText,
          ]}
        >
          Sign Up
        </Text>

        {active === "signup" && <View style={styles.indicator} />}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 20,
  },

  tab: {
    flex: 1,
    alignItems: "center",
  },

  text: {
    fontFamily: Typography.fontFamily.medium,
    fontSize: 22,
    color: Colors.gray400,
  },

  activeText: {
    color: Colors.black,
  },

  indicator: {
    marginTop: 12,
    width: "100%",
    height: 4,
    backgroundColor: Colors.primary,
  },
});