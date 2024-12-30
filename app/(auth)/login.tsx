/* eslint-disable @typescript-eslint/no-require-imports */
import { Link, router } from "expo-router";
import { Text, View, Image } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

import KeyIcon from "@/assets/icons/key.icon";
import MailIcon from "@/assets/icons/mail.icon";
import CustomButton, { ButtonType } from "@/components/CustomButton";
import CustomInput from "@/components/CustomInput";
import { emailRegex, passwordRegex } from "@/constants/regExps";

interface LoginForm {
  email: string;
  password: string;
}

const LoginForm: LoginForm = { email: "", password: "" };
const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .matches(emailRegex, "Invalid email address")
    .required("Required"),
  password: Yup.string()
    .matches(passwordRegex, "Invalid password")
    .required("Required"),
});

export default function Login() {
  const handleLogin = (values: LoginForm) => {
    console.log(values);
    router.replace("/");
  };

  return (
    <Formik
      initialValues={LoginForm}
      validationSchema={LoginSchema}
      onSubmit={handleLogin}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
      }) => (
        <View className="flex-1 items-center justify-center p-4">
          <Image source={require("@/assets/images/logo.png")} />

          <Text className="text-2xl font-bold my-6">Log in</Text>

          <CustomInput
            label="Email"
            onChangeText={handleChange("email")}
            onBlur={handleBlur("email")}
            prefixIcon={<MailIcon color="#8C8C8C" />}
            style={{ marginBottom: 8 }}
            touched={touched.email}
            errors={errors.email}
            value={values.email}
          />

          <CustomInput
            label="Password"
            onChangeText={handleChange("password")}
            onBlur={handleBlur("password")}
            prefixIcon={<KeyIcon color="#8C8C8C" />}
            isSecureInput
            touched={!!touched.password}
            errors={errors.password}
            value={values.password}
          />

          <CustomButton
            type={ButtonType.Primary}
            title="Log in"
            customButtonStyle={{ width: "100%", marginTop: 24 }}
            onPress={handleSubmit}
          />

          <Link className="text-base underline mt-4" href="./registration">
            Don’t have an account?
          </Link>
        </View>
      )}
    </Formik>
  );
}
