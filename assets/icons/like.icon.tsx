import Svg, { Path } from "react-native-svg";

export default function LikeIcon(props?: { color: string }) {
  return (
    <Svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <Path
        d="M11.0002 2C9.84016 2 8.72683 2.54 8.00016 3.39333C7.2735 2.54 6.16016 2 5.00016 2C2.94683 2 1.3335 3.61333 1.3335 5.66667C1.3335 8.18667 3.60016 10.24 7.0335 13.36L8.00016 14.2333L8.96683 13.3533C12.4002 10.24 14.6668 8.18667 14.6668 5.66667C14.6668 3.61333 13.0535 2 11.0002 2Z"
        fill={props?.color || "#000"}
      />
    </Svg>
  );
}
