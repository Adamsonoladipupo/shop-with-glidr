import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from "react-native";

interface Props {
  title: string;
  description: string;
  image: any;
  backgroundColor: string;
}

const { width } = Dimensions.get("window");
const CARD_WIDTH = width - 40;

export default function PromoCard({
  title,
  description,
  image,
  backgroundColor,
}: Props) {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor,
        },
      ]}
    >
      <View style={styles.textContainer}>
        <Text style={styles.title}>
          {title}
        </Text>

        <Text style={styles.description}>
          {description}
        </Text>
      </View>

      <Image
        source={image}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
container: {
    width: CARD_WIDTH,

    height: 170,

    borderRadius: 22,

    marginHorizontal: 20,

    padding: 20,

    flexDirection: "row",

    justifyContent: "space-between",

    alignItems: "center",
},

  textContainer: {
    flex: 1,
    paddingRight: 16,
  },

  title: {
    fontSize: 26,
    fontWeight: "700",
    color: "#FFFFFF",
    marginBottom: 10,
  },

  description: {
    fontSize: 16,
    color: "#FFFFFF",
    lineHeight: 24,
  },

  image: {
    width: 120,
    height: 120,
  },
});