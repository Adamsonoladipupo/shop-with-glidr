import { Image, StyleSheet } from "react-native";

interface LogoProps {
  width?: number;
  height?: number;
}

export default function Logo({
  width = 220,
  height = 80,
}: LogoProps) {
  return (
    <Image
      source={require("../../assets/images/glidr_logo.png")}
      style={[
        styles.logo,
        {
          width,
          height,
        },
      ]}
      resizeMode="contain"
    />
  );
}

const styles = StyleSheet.create({
  logo: {},
});