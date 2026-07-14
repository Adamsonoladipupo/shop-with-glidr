import { useState } from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
} from "react-native";

import Colors from "../constants/colors";
import Images from "../constants/images";
import Typography from "../constants/typography";

interface Props extends TextInputProps {
  // secure?: boolean;
  secure?: boolean;
  rightIcon?: any;
  onRightIconPress?: () => void;
}

export default function TextField({
  secure = false,
  rightIcon,
  onRightIconPress,
  ...props
}: Props) {
  const [hidden, setHidden] = useState(secure);

  return (
    <View style={styles.container}>
      <TextInput
        {...props}
        style={styles.input}
        secureTextEntry={hidden}
        placeholderTextColor={Colors.gray400}
      />

      {secure && (
        <Pressable onPress={() => setHidden(!hidden)}>
          <Image
            source={hidden ? Images.eye : Images.eyeOff}
            style={styles.icon}
            resizeMode="contain"
          />
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    borderRadius: 18,
    backgroundColor: Colors.white,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,

    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 12,
    shadowOffset: {
      width: 0,
      height: 4,
    },

    elevation: 3,
  },

  input: {
    flex: 1,
    fontFamily: Typography.fontFamily.regular,
    fontSize: Typography.fontSize.md,
    color: Colors.text,
  },

  icon: {
    width: 24,
    height: 24,
  },
});