import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from "react-native";

interface CustomButtonType extends TouchableOpacityProps {
  title: string;
  type: ButtonType;
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
  customButtonTextStyle,
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
      ...customButtonTextStyle,
    },
  });

  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const getButtonStyles = (type: ButtonType) => {
  switch (type) {
    case ButtonType.Primary:
      return {
        backgroundColor: "#D61F26",
        border: 0,
      };
    case ButtonType.Outline:
      return {
        backgroundColor: "transparent",
        borderWidth: 1,
        borderColor: "#3B3B3B",
      };
    case ButtonType.PrimaryOutline:
      return {
        backgroundColor: "transparent",
        borderWidth: 1,
        borderColor: "#D61F26",
      };
    default:
      return {};
  }
};

const getButtonTextStyle = (type: ButtonType) => {
  switch (type) {
    case ButtonType.Primary:
      return {
        color: "#FFF",
      };
    case ButtonType.Outline:
      return {
        color: "#000",
      };
    case ButtonType.PrimaryOutline:
      return {
        color: "#D61F26",
      };
    default:
      return {};
  }
};

export default CustomButton;
