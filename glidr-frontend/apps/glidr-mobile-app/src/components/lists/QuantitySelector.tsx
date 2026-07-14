import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

interface Props {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

export default function QuantitySelector({
  quantity,
  onIncrease,
  onDecrease,
}: Props) {

  return (

    <View style={styles.container}>

      <TouchableOpacity
        style={styles.button}
        onPress={onDecrease}
      >

        <Text style={styles.buttonText}>
          −
        </Text>

      </TouchableOpacity>

      <Text style={styles.quantity}>
        {quantity}
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={onIncrease}
      >

        <Text style={styles.buttonText}>
          +
        </Text>

      </TouchableOpacity>

    </View>

  );

}

const styles = StyleSheet.create({

  container: {

    flexDirection: "row",

    alignItems: "center",

  },

  button: {

    width: 36,

    height: 36,

    borderRadius: 8,

    backgroundColor: "#E8F5E9",

    justifyContent: "center",

    alignItems: "center",

  },

  buttonText: {

    fontSize: 22,

    fontWeight: "700",

    color: "#1F8B4D",

  },

  quantity: {

    marginHorizontal: 16,

    fontSize: 18,

    fontWeight: "700",

    color: "#222",

  },

});