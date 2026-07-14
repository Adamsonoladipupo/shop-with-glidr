import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useRouter } from "expo-router";

import Screen from "../../components/Screen";
import Logo from "../../components/Logo";
import Button from "../../components/Button";

import Colors from "../../constants/colors";
import Routes from "../../constants/routes";
import Spacing from "../../constants/spacing";
import Typography from "../../constants/typography";

export default function TermsScreen() {
  const router = useRouter();

  return (
    <Screen>
      <View style={styles.container}>
        <Logo width={70} height={70} />

        <Text style={styles.title}>
          Welcome to Glidr!
        </Text>

        <Text style={styles.subtitle}>
          By continuing, you agree to the Terms of Use and Privacy Policy.
        </Text>

        <ScrollView
          style={styles.scroll}
          showsVerticalScrollIndicator={false}
        >
          <Text style={styles.heading}>
            Terms of Use
          </Text>

          <Text style={styles.body}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Curabitur vehicula placerat vulputate. Maecenas dignissim
            justo tellus, eget iaculis ligula laoreet finibus.

            {"\n\n"}

            Nunc ut nulla libero. Mauris consequat, turpis in sodales
            laoreet, risus ex auctor felis, vitae pellentesque orci
            purus eleifend urna.

            {"\n\n"}

            Aenean efficitur felis eget ultrices vulputate.
            Vestibulum at commodo tellus.

            {"\n\n"}

            Etiam tempus ex mi, ut luctus nisi tristique in.
            Vivamus quam nibh, bibendum at bibendum a,
            ullamcorper vitae elit.

            {"\n\n"}

            Mauris gravida eleifend tristique.
            Proin pulvinar ligula nisl,
            sit amet ultricies velit tempus condimentum.

            {"\n\n"}

            Fusce nec est ut sem pharetra auctor.
            Vivamus egestas turpis eget lectus tristique,
            sit amet porta ligula luctus.
          </Text>
        </ScrollView>

        <Button
          title="I Agree"
          onPress={() => router.push(Routes.OTP)}
        />
      </View>
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: Spacing.lg,
    paddingTop: 40,
  },

  title: {
    marginTop: 35,

    fontSize: 34,

    fontFamily: Typography.fontFamily.bold,

    color: Colors.black,
  },

  subtitle: {
    marginTop: 20,

    fontSize: 20,

    lineHeight: 32,

    color: Colors.black,

    fontFamily: Typography.fontFamily.regular,
  },

  scroll: {
    flex: 1,

    marginTop: 35,

    marginBottom: 25,
  },

  heading: {
    fontSize: 24,

    marginBottom: 18,

    fontFamily: Typography.fontFamily.bold,

    color: Colors.black,
  },

  body: {
    fontSize: 18,

    lineHeight: 34,

    color: Colors.black,

    fontFamily: Typography.fontFamily.regular,
  },
});