import { Redirect } from "expo-router";

export default function Index() {
  const isAuthenticated = true;

  return (
    <Redirect
      href={isAuthenticated ? "/(root)/(tabs)/news" : "/(auth)/login"}
    />
  );
}
