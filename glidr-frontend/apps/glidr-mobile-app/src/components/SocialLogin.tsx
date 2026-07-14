import { Image, Pressable, StyleSheet, View } from "react-native";

import Images from "../constants/images";

export default function SocialLogin() {
  return (
    <View style={styles.container}>
      <Pressable>
        <Image source={Images.twitter} style={styles.icon} />
      </Pressable>

      <Pressable>
        <Image source={Images.facebook} style={styles.icon} />
      </Pressable>

      <Pressable>
        <Image source={Images.google} style={styles.icon} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 40,
    marginTop: 30,
  },

  icon: {
    width: 32,
    height: 32,
  },
});