import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

interface Props {
  onExplore: () => void;
}

export default function EmptyCart({
  onExplore,
}: Props) {

  return (

    <View style={styles.container}>

      <Text style={styles.icon}>
        🛒
      </Text>

      <Text style={styles.title}>
        Your cart is empty
      </Text>

      <Text style={styles.subtitle}>
        Browse products and start shopping.
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={onExplore}
      >

        <Text style={styles.buttonText}>
          Explore Products
        </Text>

      </TouchableOpacity>

    </View>

  );

}

const styles = StyleSheet.create({

  container: {

    flex: 1,

    justifyContent: "center",

    alignItems: "center",

  },

  icon: {

    fontSize: 60,

  },

  title: {

    marginTop: 16,

    fontSize: 24,

    fontWeight: "700",

  },

  subtitle: {

    marginTop: 10,

    color: "#666",

    textAlign: "center",

    marginHorizontal: 30,

  },

  button: {

    marginTop: 30,

    backgroundColor: "#1F8B4D",

    borderRadius: 12,

    paddingHorizontal: 28,

    paddingVertical: 14,

  },

  buttonText: {

    color: "#FFF",

    fontWeight: "700",

    fontSize: 16,

  },

});
