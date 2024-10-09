/* eslint-disable @typescript-eslint/no-require-imports */
import { Stack, useRouter } from "expo-router";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

export default function NotFoundScreen() {
  const router = useRouter();

  return (
    <>
      <Stack.Screen options={{ title: "404", headerShown: false }} />
      <View style={styles.wrapper}>
        <View style={styles.container}>
          <Image source={require("@/assets/images/logo.png")} />
          <Text style={styles.title}>Page not found</Text>
          <Text style={styles.text}>
            The requested page could not be found but may be available again in
            the future
          </Text>
          <Image
            source={require("@/assets/images/Illustration.png")}
            style={styles.illustration}
          />
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.replace("/")}
        >
          <Text style={styles.buttonText}>Go to homepage</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#FFF",
    justifyContent: "flex-start",
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
  button: {
    paddingLeft: 24,
    paddingRight: 24,
    borderRadius: 4,
    backgroundColor: "#D61F26",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    marginTop: "auto",
  },
  buttonText: {
    color: "#FFF",
    textTransform: "uppercase",
    fontSize: 14,
    fontWeight: 400,
    fontFamily: "EtelkaMedium",
  },
});
