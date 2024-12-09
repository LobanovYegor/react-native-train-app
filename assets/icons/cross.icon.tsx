import Svg, { Path } from "react-native-svg";

export default function CrossIcon(props?: { color: string }) {
  return (
    <Svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <Path
        d="M13 4.00592L11.9929 2.99878L8 6.99164L4.00714 2.99878L3 4.00592L6.99286 7.99878L3 11.9916L4.00714 12.9988L8 9.00592L11.9929 12.9988L13 11.9916L9.00714 7.99878L13 4.00592Z"
        fill={props?.color || "#000"}
      />
    </Svg>
  );
}
