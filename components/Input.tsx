import CrossIcon from "@/assets/icons/cross.icon";
import VisibilityOff from "@/assets/icons/visibility_off";
import VisibilityOn from "@/assets/icons/visibility_on";
import { ReactElement, useState } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";

interface InputProps {
  label: string;
  onChangeText: (text: string) => void;
  style?: ViewStyle;
  value?: string;
  hint?: string;
  isSecureInput?: boolean;
  prefixIcon?: ReactElement;
}

export default function Input(props: InputProps) {
  const [inputValue, setInputValue] = useState<string>("");
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  return (
    <View style={{ ...props.style }}>
      <Text
        style={{
          textAlign: "left",
          width: "100%",
          color: "#636363",
          paddingBottom: 4,
        }}
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
          borderColor: "#CACACA",
          borderWidth: 1,
          display: "flex",
          flexDirection: "row",
          borderRadius: 4,
          width: "100%",
        }}
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
        style={{
          textAlign: "left",
          width: "100%",
          color: "#636363",
          paddingTop: 4,
        }}
      >
        {props?.hint}
      </Text>
    </View>
  );
}
