/* eslint-disable @typescript-eslint/no-require-imports */
import { Link, router } from "expo-router";
import { useState } from "react";
import { Text, View, Image } from "react-native";

import KeyIcon from "@/assets/icons/key.icon";
import MailIcon from "@/assets/icons/mail.icon";
import CustomButton, { ButtonType } from "@/components/CustomButton";
import Input from "@/components/Input";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("email:", email, "password:", password);
    router.replace("/");
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
      }}
    >
      <Image source={require("@/assets/images/logo.png")} />

      <Text
        style={{
          fontSize: 24,
          marginTop: 24,
          marginBottom: 24,
          fontFamily: "EtelkaMedium",
        }}
      >
        Log in
      </Text>

      <Input
        label="Email"
        onChangeText={(value) => setEmail(value)}
        prefixIcon={<MailIcon color="#8C8C8C" />}
        style={{ marginBottom: 8 }}
      ></Input>

      <Input
        label="Password"
        onChangeText={(value) => setPassword(value)}
        prefixIcon={<KeyIcon color="#8C8C8C" />}
        isSecureInput
      ></Input>

      <CustomButton
        type={ButtonType.Primary}
        title="Log in"
        customButtonStyle={{ width: "100%", marginTop: 24 }}
        onPress={handleLogin}
      />

      <Link
        style={{ fontSize: 15, textDecorationLine: "underline", marginTop: 16 }}
        href="./registration"
      >
        Don’t have an account?
      </Link>
    </View>
  );
}
