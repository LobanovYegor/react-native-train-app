/* eslint-disable @typescript-eslint/no-require-imports */
import { Stack } from "expo-router";
import { SafeAreaView } from "react-native";
import { useEffect } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

export default function RootLayout() {
  const [loaded] = useFonts({
    EtelkaText: require("../assets/fonts/EtelkaText.otf"),
    EtelkaMedium: require("../assets/fonts/EtelkaMedium.otf"),
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFF" }}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(auth)" />
        <Stack.Screen name="(root)/(tabs)" />
        <Stack.Screen name="(root)/news" options={{ headerShown: true }} />
        <Stack.Screen name="(root)/team" options={{ headerShown: true }} />
      </Stack>
    </SafeAreaView>
  );
}
