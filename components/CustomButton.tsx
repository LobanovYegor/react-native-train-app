import colors from "@/constants/Colors";
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
  Text,
} from "react-native";

interface CustomButtonType extends TouchableOpacityProps {
  title: string;
  type?: ButtonType;
  customButtonStyle?: ViewStyle;
  customButtonTextStyle?: ViewStyle;
}

export enum ButtonType {
  Primary,
  Outline,
  PrimaryOutline,
}

const CustomButton = ({
  onPress,
  title,
  type,
  customButtonStyle,
}: CustomButtonType) => {
  const styles = StyleSheet.create({
    button: {
      paddingLeft: 24,
      paddingRight: 24,
      borderRadius: 4,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: 40,
      borderStyle: "solid",
      ...getButtonStyles(type),
      ...customButtonStyle,
    },
    buttonText: {
      textTransform: "uppercase",
      fontSize: 14,
      fontWeight: 400,
      fontFamily: "EtelkaMedium",
      ...getButtonTextStyle(type),
    },
  });

  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const getButtonStyles = (type?: ButtonType) => {
  switch (type) {
    case ButtonType.Primary:
    default:
      return {
        backgroundColor: colors.brand["100"],
        border: 0,
      };
    case ButtonType.Outline:
      return {
        backgroundColor: "transparent",
        borderWidth: 1,
        borderColor: colors.secondary["900"],
      };
    case ButtonType.PrimaryOutline:
      return {
        backgroundColor: "transparent",
        borderWidth: 1,
        borderColor: colors.brand["100"],
      };
    // default:
    //   return {};
  }
};

const getButtonTextStyle = (type?: ButtonType) => {
  switch (type) {
    case ButtonType.Primary:
    default:
      return {
        color: colors.brand["200"],
      };
    case ButtonType.Outline:
      return {
        color: colors.brand["700"],
      };
    case ButtonType.PrimaryOutline:
      return {
        color: colors.brand["100"],
      };
    // default:
    //   return {};
  }
};

export default CustomButton;
