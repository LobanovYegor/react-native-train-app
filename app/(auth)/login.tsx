import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Login() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Login.</Text>
      <Link href="/(root)">Back</Link>
    </View>
  );
}
