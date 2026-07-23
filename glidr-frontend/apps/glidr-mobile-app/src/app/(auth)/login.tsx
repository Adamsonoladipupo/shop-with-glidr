import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  View
} from "react-native";

import { useUser } from "@/hooks/useUser";
import {
  loginUser,
  saveToken,
  saveUser,
} from "@/services/authService";


import AuthHeader from "../../components/AuthHeader";
import Button from "../../components/Button";
import Divider from "../../components/Divider";
import FaceIdButton from "../../components/FaceIdButton";
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

  const { setUser } = useUser();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const emailRegex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const isEmailValid =
    emailRegex.test(email.trim());

  const isPasswordValid =
    password.length > 0;

  const isLoginEnabled =
    isEmailValid &&
    isPasswordValid &&
    !loading;

  // Keyboard.dismiss();

  async function handleLogin() {
    try {
      setLoading(true);

      const response = await loginUser({
        email: email.trim(),
        password,
      });

      // Save session locally
      await saveToken(response.token);
      await saveUser(response.user);

      // Update global user state
      setUser(response.user);

      Alert.alert(
        "Success",
        `Welcome back, ${response.user.firstName}!`
      );

      router.replace("/(tabs)");

    } catch (error) {

      Alert.alert(
        "Login Failed",
        error instanceof Error
          ? error.message
          : "Unable to login."
      );
      setPassword("");

    } finally {

      setLoading(false);

    }
  }

  return (

    <Screen>

      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >

        <View style={styles.container}>

          <Logo
            width={70}
            height={70}
          />

          <AuthHeader active="login" />

          <View>

            <Text style={styles.label}>
              Email
            </Text>

            <TextField
              placeholder="john@example.com"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
            />

            {
              email.length > 0 &&
              !isEmailValid && (

                <Text style={styles.error}>
                  Please enter a valid email address.
                </Text>

              )
            }

          </View>

          <View>

            <Text style={styles.label}>
              Password
            </Text>

            <TextField
              secure
              placeholder="Enter password"
              value={password}
              onChangeText={setPassword}
              autoCapitalize="none"
              autoCorrect={false}
            />

            {
              password.length > 0 &&
              !isPasswordValid && (

                <Text style={styles.error}>
                  Password is required.
                </Text>

              )
            }

          </View>

          <Button
            title={
              loading
                ? "Signing In..."
                : "Sign In"
            }
            disabled={!isLoginEnabled}
            onPress={handleLogin}
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

      </ScrollView>

    </Screen>

  );

}

const styles = StyleSheet.create({

  scrollContainer: {

    flexGrow: 1,

  },

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

  error: {

    color: "#D32F2F",

    fontSize: 13,

    marginTop: 6,

  },

});