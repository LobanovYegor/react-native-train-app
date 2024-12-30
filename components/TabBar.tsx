import { TouchableOpacity, Text, TouchableOpacityProps } from "react-native";

export interface TabItemData extends TouchableOpacityProps {
  tabName: string;
  active: boolean;
}

export default function TabBarItem({ tabName, active, onPress }: TabItemData) {
  return (
    <TouchableOpacity
      className={`py-3 mx-4 ${active && "border-b-2 border-brand-100 border-solid"}`}
      onPress={onPress}
    >
      <Text className={`text-base ${active && "color-brand-100"}`}>
        {tabName}
      </Text>
    </TouchableOpacity>
  );
}
