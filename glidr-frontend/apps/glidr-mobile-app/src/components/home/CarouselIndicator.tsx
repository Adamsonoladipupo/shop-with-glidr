import {
  StyleSheet,
  View,
} from "react-native";

interface Props {
  count: number;
  currentIndex: number;
}

export default function CarouselIndicator({
  count,
  currentIndex,
}: Props) {
  return (
    <View style={styles.container}>
      {Array.from({ length: count }).map((_, index) => (
        <View
          key={index}
          style={[
            styles.dot,
            index === currentIndex &&
              styles.activeDot,
          ]}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 16,
  },

  dot: {
    width: 8,
    height: 8,

    borderRadius: 4,

    backgroundColor: "#D9D9D9",

    marginHorizontal: 4,
  },

  activeDot: {
    width: 28,
    backgroundColor: "#1EB6AE",
  },
});