import CustomButton from "@/components/CustomButton";
import { useRouter } from "expo-router";
import { Text, View } from "react-native";

export default function TeamMemberView() {
  const router = useRouter();

  return (
    <View>
      <Text>Team member view</Text>
      <CustomButton title="back" onPress={() => router.back()}></CustomButton>
    </View>
  );
}
