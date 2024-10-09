import { Stack } from "expo-router";

export default function TeamLayout() {
  return (
    <Stack>
      <Stack.Screen name="[id]/index" options={{ headerShown: true }} />
      <Stack.Screen name="[id]/edit" options={{ headerShown: true }} />
    </Stack>
  );
}
