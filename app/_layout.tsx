import { Redirect } from "expo-router";
import { View } from "react-native";

export default function RootLayout() {
  const isAuthenticated = true;

  if (!isAuthenticated) {
    return <Redirect href="/login" />;
  }

  return <View></View>;
}
