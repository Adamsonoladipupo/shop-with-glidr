import { useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import AuthHeader from "../../components/AuthHeader";
import Button from "../../components/Button";
import Divider from "../../components/Divider";
import FaceIdButton from "../../components/FaceIdButton";
import GreetingCard from "../../components/GreetingCard";
import Logo from "../../components/Logo";
import Screen from "../../components/Screen";
import SocialLogin from "../../components/SocialLogin";
import TextField from "../../components/TextField";

import Colors from "../../constants/colors";
import Routes from "../../constants/routes";
import Spacing from "../../constants/spacing";
import Typography from "../../constants/typography";


export default function LoginScreen() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const isLoginEnabled = password.trim().length > 0;

  return (
    <Screen>
      <View style={styles.container}>
        <Logo width={70} height={70} />

        <AuthHeader active="login" />

        <GreetingCard name="Henry" />

        <View>
          <Text style={styles.label}>
            Password
          </Text>

          <TextField
            secure
            placeholder="Enter password"
            value={password}
            onChangeText={setPassword}
          />
        </View>

        <Button
          title="Login"
          disabled={!isLoginEnabled}
          onPress={() => router.replace("/(tabs)")}
        />

        <Text
          style={styles.forgot}
          onPress={() =>
            router.push(Routes.ForgotPassword)
          }
        >
          Forgot Password
        </Text>

        <Divider />

        <FaceIdButton />

        <SocialLogin />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    paddingHorizontal: Spacing.lg,

    paddingTop: 40,

    gap: 24,
  },

  label: {
    marginBottom: 10,

    color: Colors.gray400,

    fontSize: Typography.fontSize.md,

    fontFamily: Typography.fontFamily.medium,
  },

  forgot: {
    color: Colors.primary,

    fontFamily: Typography.fontFamily.medium,

    fontSize: Typography.fontSize.md,
  },
});