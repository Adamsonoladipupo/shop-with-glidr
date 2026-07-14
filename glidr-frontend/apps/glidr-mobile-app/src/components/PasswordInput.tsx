import { useState } from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  TextInput,
  View,
} from "react-native";

import Images from "../constants/images";
import Colors from "../constants/colors";
import Typography from "../constants/typography";

export default function PasswordInput() {
  const [hidden, setHidden] = useState(true);

  return (
    <View style={styles.container}>
      <TextInput
        secureTextEntry={hidden}
        placeholder="Password"
        style={styles.input}
      />

      <Pressable onPress={() => setHidden(!hidden)}>
        <Image
          source={hidden ? Images.eye : Images.eyeOff}
          style={styles.icon}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    borderRadius: 18,
    backgroundColor: Colors.white,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    elevation: 3,
  },

  input: {
    flex: 1,
    fontFamily: Typography.fontFamily.regular,
    fontSize: Typography.fontSize.md,
  },

  icon: {
    width: 24,
    height: 24,
  },
});