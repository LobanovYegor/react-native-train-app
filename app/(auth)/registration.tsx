/* eslint-disable @typescript-eslint/no-require-imports */
import { Link, router } from "expo-router";
import { useState } from "react";
import { Text, View, Image } from "react-native";

import KeyIcon from "@/assets/icons/key.icon";
import MailIcon from "@/assets/icons/mail.icon";
import UserIcon from "@/assets/icons/user.icon";
import CustomButton, { ButtonType } from "@/components/CustomButton";
import Input from "@/components/Input";

export default function Registration() {
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const handleLogin = () => {
    console.log(
      "firstName:",
      firstName,
      "secondName:",
      secondName,
      "email:",
      email,
      "password:",
      password,
      passwordConfirmation,
    );
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
        Sing up
      </Text>

      <Input
        label="First name"
        onChangeText={(value) => setFirstName(value)}
        prefixIcon={<UserIcon color="#8C8C8C" />}
        style={{ marginBottom: 8 }}
      ></Input>

      <Input
        label="Last name"
        onChangeText={(value) => setSecondName(value)}
        prefixIcon={<UserIcon color="#8C8C8C" />}
        style={{ marginBottom: 8 }}
      ></Input>

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

      <Input
        label="Repeat password"
        onChangeText={(value) => setPasswordConfirmation(value)}
        prefixIcon={<KeyIcon color="#8C8C8C" />}
        isSecureInput
      ></Input>

      <CustomButton
        type={ButtonType.Primary}
        title="Sign up"
        customButtonStyle={{ width: "100%", marginTop: 24 }}
        onPress={handleLogin}
      />

      <Link
        style={{ fontSize: 15, textDecorationLine: "underline", marginTop: 16 }}
        href="./login"
      >
        Already have an account?
      </Link>
    </View>
  );
}
