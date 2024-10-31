import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function NewsList() {
  return (
    <View>
      <Text>NEWS LIST</Text>
      <Link href="/(root)/news">ONE NEW</Link>
    </View>
  );
}
