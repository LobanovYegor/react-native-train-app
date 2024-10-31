import CustomButton, { ButtonType } from "@/components/CustomButton";
import { Stack, useRouter } from "expo-router";
import { StyleSheet, View, Text, Image, SafeAreaView } from "react-native";

import logo from "@/assets/images/logo.png";
import illustration from "@/assets/images/illustration.png";

export default function NotFoundScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFF" }}>
      <Stack.Screen options={{ title: "404", headerShown: false }} />
      <View style={styles.wrapper}>
        <View style={styles.container}>
          <Image source={logo} />
          <Text style={styles.title}>Page not found</Text>
          <Text style={styles.text}>
            The requested page could not be found but may be available again in
            the future
          </Text>
          <Image source={illustration} style={styles.illustration} />
        </View>
        <CustomButton
          type={ButtonType.Primary}
          title="Go to homepage"
          onPress={() => router.replace("/")}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#FFF",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
    width: "100%",
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 64,
    paddingBottom: 64,
    width: "100%",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 24,
    fontFamily: "EtelkaMedium",
  },
  text: {
    marginTop: 16,
    fontSize: 18,
    textAlign: "center",
    fontFamily: "EtelkaText",
  },
  illustration: {
    objectFit: "scale-down",
    width: "100%",
  },
});
