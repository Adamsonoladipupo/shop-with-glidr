import { Image, StyleSheet } from "react-native";
import Images from "../constants/images";

export default function Avatar() {
  return (
    <Image
      source={Images.avatar}
      style={styles.avatar}
    />
  );
}

const styles = StyleSheet.create({
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
  },
});