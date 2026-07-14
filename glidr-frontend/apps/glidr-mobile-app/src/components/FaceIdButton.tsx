import { Image, StyleSheet, View } from "react-native";

import Button from "./Button";
import Images from "../constants/images";

export default function FaceIdButton() {
  return (
    <View style={styles.container}>
      <Button
        title="Login with Face ID"
        variant="outline"
        onPress={() => {}}
      />

      <Image
        source={Images.faceId}
        style={styles.icon}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },

  icon: {
    width: 26,
    height: 26,

    position: "absolute",

    left: 28,

    top: 17,
  },
});