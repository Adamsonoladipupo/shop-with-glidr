import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ReactNode } from "react";
import Colors from "../constants/colors";

interface Props {
  children: ReactNode;
}

export default function Screen({ children }: Props) {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
});