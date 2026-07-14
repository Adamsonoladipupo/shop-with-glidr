import {
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

interface Props {
  onPress: () => void;
}

export default function CheckoutButton({
  onPress,
}: Props) {

  return (

    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
    >

      <Text style={styles.text}>
        Proceed To Checkout
      </Text>

    </TouchableOpacity>

  );

}

const styles = StyleSheet.create({

  button: {

    marginTop: 20,

    height: 56,

    borderRadius: 14,

    backgroundColor: "#1F8B4D",

    justifyContent: "center",

    alignItems: "center",

  },

  text: {

    color: "#FFF",

    fontWeight: "700",

    fontSize: 18,

  },

});