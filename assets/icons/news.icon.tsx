import Svg, { Path } from "react-native-svg";

export default function NewsIcon(props?: { color: string }) {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M4 21C3.45 21 2.97917 20.8042 2.5875 20.4125C2.19583 20.0208 2 19.55 2 19V7H4V19H19V21H4ZM8 17C7.45 17 6.97917 16.8042 6.5875 16.4125C6.19583 16.0208 6 15.55 6 15V3H23V15C23 15.55 22.8042 16.0208 22.4125 16.4125C22.0208 16.8042 21.55 17 21 17H8ZM8 15H21V5H8V15ZM10 12H14V7H10V12ZM15 12H19V10H15V12ZM15 9H19V7H15V9Z"
        fill={props?.color || "#000"}
      />
    </Svg>
  );
}
