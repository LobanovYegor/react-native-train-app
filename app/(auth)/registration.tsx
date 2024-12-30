/* eslint-disable @typescript-eslint/no-require-imports */
import { Link, router } from "expo-router";
import { Text, View, Image } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

import KeyIcon from "@/assets/icons/key.icon";
import MailIcon from "@/assets/icons/mail.icon";
import UserIcon from "@/assets/icons/user.icon";
import CustomButton, { ButtonType } from "@/components/CustomButton";
import CustomInput from "@/components/CustomInput";
import { emailRegex, passwordRegex, userNameRegex } from "@/constants/regExps";

interface RegistrationForm {
  email: string;
  password: string;
  passwordConfirmation: string;
  firstName: string;
  lastName: string;
}

const RegistrationForm: RegistrationForm = {
  email: "",
  password: "",
  passwordConfirmation: "",
  firstName: "",
  lastName: "",
};
const RegistrationSchema = Yup.object().shape({
  email: Yup.string()
    .matches(emailRegex, "Invalid email address")
    .required("Required"),
  password: Yup.string()
    .matches(passwordRegex, "Invalid password")
    .required("Required"),
  passwordConfirmation: Yup.string()
    .matches(passwordRegex, "Invalid password")
    .required("Required"),
  firstName: Yup.string()
    .matches(userNameRegex, "Invalid user name")
    .required("Required"),
  lastName: Yup.string()
    .matches(userNameRegex, "Invalid user name")
    .required("Required"),
});

export default function Registration() {
  const handleRegistration = (values: RegistrationForm) => {
    console.log(values);
    router.replace("/");
  };

  return (
    <Formik
      initialValues={RegistrationForm}
      validationSchema={RegistrationSchema}
      onSubmit={handleRegistration}
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

          <Text className="text-2xl font-bold my-6">Sing up</Text>

          <CustomInput
            label="First name"
            onChangeText={handleChange("firstName")}
            onBlur={handleBlur("firstName")}
            prefixIcon={<UserIcon color="#8C8C8C" />}
            style={{ marginBottom: 8 }}
            touched={touched.firstName}
            errors={errors.firstName}
            value={values.firstName}
          ></CustomInput>

          <CustomInput
            label="Last name"
            onChangeText={handleChange("lastName")}
            onBlur={handleBlur("lastName")}
            prefixIcon={<UserIcon color="#8C8C8C" />}
            style={{ marginBottom: 8 }}
            touched={touched.lastName}
            errors={errors.lastName}
            value={values.lastName}
          ></CustomInput>

          <CustomInput
            label="Email"
            onChangeText={handleChange("email")}
            onBlur={handleBlur("email")}
            prefixIcon={<MailIcon color="#8C8C8C" />}
            style={{ marginBottom: 8 }}
            touched={touched.email}
            errors={errors.email}
            value={values.email}
          ></CustomInput>

          <CustomInput
            label="Password"
            onChangeText={handleChange("password")}
            onBlur={handleBlur("password")}
            prefixIcon={<KeyIcon color="#8C8C8C" />}
            style={{ marginBottom: 8 }}
            touched={touched.password}
            errors={errors.password}
            value={values.password}
            isSecureInput
          ></CustomInput>

          <CustomInput
            label="Repeat password"
            onChangeText={handleChange("passwordConfirmation")}
            onBlur={handleBlur("passwordConfirmation")}
            prefixIcon={<KeyIcon color="#8C8C8C" />}
            touched={touched.passwordConfirmation}
            errors={errors.passwordConfirmation}
            value={values.passwordConfirmation}
            isSecureInput
          ></CustomInput>

          <CustomButton
            type={ButtonType.Primary}
            title="Sign up"
            customButtonStyle={{ width: "100%", marginTop: 24 }}
            onPress={handleSubmit}
          />

          <Link
            style={{
              fontSize: 15,
              textDecorationLine: "underline",
              marginTop: 16,
            }}
            href="./login"
          >
            Already have an account?
          </Link>
        </View>
      )}
    </Formik>
  );
}
