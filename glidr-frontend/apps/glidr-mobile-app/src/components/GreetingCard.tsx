import { Image, Pressable, StyleSheet, Text, View } from "react-native";

import Images from "../constants/images";
import Colors from "../constants/colors";
import Typography from "../constants/typography";

interface Props {
  name: string;
}

export default function GreetingCard({
  name,
}: Props) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.small}>
          Hello again,
        </Text>

        <Text style={styles.name}>
          {name}
        </Text>

        <Pressable>
          <Text style={styles.change}>
            This isn't me
          </Text>
        </Pressable>
      </View>

      <Image
        source={Images.avatar}
        style={styles.avatar}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  small: {
    fontSize: 20,
    fontFamily: Typography.fontFamily.regular,
    color: Colors.black,
  },

  name: {
    marginTop: 8,

    fontSize: 44,

    fontFamily: Typography.fontFamily.bold,

    color: Colors.black,
  },

  change: {
    marginTop: 6,

    color: Colors.primary,

    fontSize: 16,

    fontFamily: Typography.fontFamily.medium,
  },

  avatar: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
});