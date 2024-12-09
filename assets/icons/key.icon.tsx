import Svg, { Path } from "react-native-svg";

export default function KeyIcon(props?: { color: string }) {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M11.9 10.4999H22V14.4999C22 15.0522 21.5523 15.4999 21 15.4999C20.4477 15.4999 20 15.0522 20 14.4999V12.4999H18V14.4999C18 15.0522 17.5523 15.4999 17 15.4999C16.4477 15.4999 16 15.0522 16 14.4999V12.4999H11.9C11.387 14.9765 9.01557 16.7162 6.49929 16.462C3.98301 16.2079 2.00738 14.029 2 11.4999C1.99745 8.96455 3.97494 6.77504 6.49751 6.52023C9.02007 6.26543 11.3955 8.01525 11.9 10.4999ZM7 14.4999C8.634 14.4999 10 13.1339 10 11.4999C10 9.86594 8.634 8.49994 7 8.49994C5.366 8.49994 4 9.86594 4 11.4999C4 13.1339 5.366 14.4999 7 14.4999Z"
        fill={props?.color || "#000"}
      />
    </Svg>
  );
}