import Svg, { Path } from "react-native-svg";

export default function MailIcon(props?: { color: string }) {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M4 3.99756H20C21.1 3.99756 22 4.89756 22 5.99756V17.9976C22 19.0976 21.1 19.9976 20 19.9976H4C2.9 19.9976 2 19.0976 2 17.9976V5.99756C2 4.89756 2.9 3.99756 4 3.99756Z"
        stroke={props?.color || "#000"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 5.99756L12 12.9976L2 5.99756"
        stroke={props?.color || "#000"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
