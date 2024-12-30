import CrossIcon from "@/assets/icons/cross.icon";
import VisibilityOff from "@/assets/icons/visibility_off";
import VisibilityOn from "@/assets/icons/visibility_on";
import { ReactElement, useState } from "react";
import {
  NativeSyntheticEvent,
  Text,
  TextInput,
  TextInputFocusEventData,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";

interface InputProps {
  label: string;
  onChangeText: (value: string) => void;
  onBlur: (value: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  touched?: boolean;
  style?: ViewStyle;
  value?: string;
  hint?: string;
  errors?: string;
  isSecureInput?: boolean;
  prefixIcon?: ReactElement;
}

export default function CustomInput(props: InputProps) {
  const [inputValue, setInputValue] = useState<string>("");
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  return (
    <View style={{ ...props.style }}>
      <Text
        className={`pb-1 text-sm ${props.touched && props.errors ? "color-brand-100" : "color-secondary-700"}`}
      >
        {props.label}
      </Text>

      <View
        style={{
          flex: 1,
          height: 40,
          minHeight: 40,
          maxHeight: 40,
          borderStyle: "solid",
          borderWidth: 1,
          display: "flex",
          flexDirection: "row",
          borderRadius: 4,
          width: "100%",
        }}
        className={`${props.touched && props.errors ? "border-brand-100" : "border-secondary-200"}`}
      >
        {!!props.prefixIcon && (
          <View style={{ padding: 7 }}>{props.prefixIcon}</View>
        )}

        <TextInput
          style={{ flex: 1 }}
          secureTextEntry={props.isSecureInput && !isPasswordVisible}
          value={inputValue}
          onChangeText={(value) => {
            setInputValue(value);
            props.onChangeText(value);
          }}
          onBlur={(event) => props.onBlur(event)}
        ></TextInput>

        <TouchableOpacity onPress={() => setInputValue("")}>
          <View style={{ padding: 11 }}>
            <CrossIcon color="#8C8C8C" />
          </View>
        </TouchableOpacity>

        {props.isSecureInput && (
          <TouchableOpacity
            onPress={() => setIsPasswordVisible((state) => !state)}
          >
            <View style={{ padding: 7 }}>
              {isPasswordVisible ? (
                <VisibilityOn color="#8C8C8C" />
              ) : (
                <VisibilityOff color="#8C8C8C" />
              )}
            </View>
          </TouchableOpacity>
        )}
      </View>

      <Text
        className={`text-xs pt-1 color-brand-${props.touched && props.errors ? "100" : "600"}`}
      >
        {props.touched && props.errors ? props.errors : props.hint}
      </Text>
    </View>
  );
}
