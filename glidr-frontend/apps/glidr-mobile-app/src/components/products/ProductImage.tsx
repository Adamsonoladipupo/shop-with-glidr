import { Image, StyleSheet } from "react-native";

interface Props {
  source: any;
}

export default function ProductImage({
  source,
}: Props) {
  return (
    <Image
      source={source}
      style={styles.image}
      resizeMode="contain"
    />
  );
}

const styles = StyleSheet.create({
  image: {
    width: 90,
    height: 90,
    borderRadius: 12,
  },
});