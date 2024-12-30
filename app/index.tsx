import { Redirect } from "expo-router";
import "../global.css";

export default function Index() {
  const isAuthenticated = false;

  return (
    <Redirect
      href={isAuthenticated ? "/(root)/(tabs)/news" : "/(auth)/login"}
    />
  );
}
