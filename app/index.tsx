import { Redirect } from "expo-router";
import "../global.css";

export default function Index() {
  const isAuthenticated = true;

  return (
    <Redirect
      href={isAuthenticated ? "/(root)/(tabs)/news" : "/(auth)/login"}
    />
  );
}
