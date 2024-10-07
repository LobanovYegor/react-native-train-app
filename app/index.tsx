import { Link } from "expo-router";
import { View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Link href="/(auth)/login">Go to login</Link>
      <Link href="/(auth)/registration">Go to registration</Link>
      <Link href="/(root)">Go to registration</Link>
    </View>
  );
}
