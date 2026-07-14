import React, { useRef, useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useRouter } from "expo-router";

import Logo from "../../components/Logo";
import Colors from "../../constants/colors";
import Fonts from "../../constants/fonts";
import Routes from "../../constants/routes";

export default function OTPScreen() {
  const router = useRouter();

  const [otp, setOtp] = useState(["", "", "", ""]);

  const inputRefs = [
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
  ];

  const isOtpComplete = otp.every((digit) => digit !== "");

  const handleChange = (text: string, index: number) => {
    if (!/^\d?$/.test(text)) return;

    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text && index < 3) {
      inputRefs[index + 1].current?.focus();
    }
  };

  const handleKeyPress = (
    e: any,
    index: number
  ) => {
    if (
      e.nativeEvent.key === "Backspace" &&
      otp[index] === "" &&
      index > 0
    ) {
      inputRefs[index - 1].current?.focus();
    }
  };

  const verifyOTP = () => {
    if (!isOtpComplete) return;

    // TODO: Verify OTP with backend

    router.replace("/(tabs)");
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <Logo width={80} height={80} />

      <Text style={styles.title}>Verify Your Email</Text>

      <Text style={styles.subtitle}>
        Enter the 4-digit code sent to
      </Text>

      <Text style={styles.email}>
        yourname@email.com
      </Text>

      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            ref={inputRefs[index]}
            value={digit}
            style={[
              styles.otpInput,
              digit !== "" && styles.otpInputFilled,
            ]}
            keyboardType="number-pad"
            maxLength={1}
            onChangeText={(text) =>
              handleChange(text, index)
            }
            onKeyPress={(e) =>
              handleKeyPress(e, index)
            }
            textAlign="center"
          />
        ))}
      </View>

      <TouchableOpacity>
        <Text style={styles.resendText}>
          Resend Code
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        disabled={!isOtpComplete}
        onPress={verifyOTP}
        style={[
          styles.verifyButton,
          isOtpComplete
            ? styles.verifyButtonEnabled
            : styles.verifyButtonDisabled,
        ]}
      >
        <Text
          style={[
            styles.verifyButtonText,
            isOtpComplete
              ? styles.verifyButtonTextEnabled
              : styles.verifyButtonTextDisabled,
          ]}
        >
          Verify
        </Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: 32,
    paddingTop: 70,
  },

  title: {
    marginTop: 28,
    fontSize: 36,
    fontFamily: Fonts.bold,
    color: Colors.black,
  },

  subtitle: {
    marginTop: 30,
    fontSize: 22,
    fontFamily: Fonts.regular,
    color: Colors.black,
    lineHeight: 32,
  },

  email: {
    marginTop: 10,
    fontSize: 24,
    fontFamily: Fonts.bold,
    color: Colors.black,
  },

  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 50,
  },

  otpInput: {
    width: 70,
    height: 70,
    borderRadius: 18,
    borderWidth: 1.5,
    borderColor: "#D7DDF0",
    fontSize: 30,
    fontFamily: Fonts.medium,
    color: Colors.black,
    backgroundColor: Colors.white,
  },

  otpInputFilled: {
    borderColor: Colors.primary,
  },

  resendText: {
    marginTop: 26,
    fontSize: 20,
    fontFamily: Fonts.medium,
    color: Colors.primary,
  },

  verifyButton: {
    marginTop: 70,
    height: 60,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
  },

  verifyButtonEnabled: {
    backgroundColor: Colors.primary,
    shadowColor: Colors.primary,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.25,
    shadowRadius: 20,
    elevation: 8,
  },

  verifyButtonDisabled: {
    backgroundColor: Colors.white,
    borderWidth: 1.5,
    borderColor: "#D7DDF0",
  },

  verifyButtonText: {
    fontSize: 22,
    fontFamily: Fonts.medium,
  },

  verifyButtonTextEnabled: {
    color: Colors.white,
  },

  verifyButtonTextDisabled: {
    color: "#C8CEE8",
  },
});