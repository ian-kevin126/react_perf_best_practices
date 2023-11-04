import { Card, Divider } from "antd";
import MyButton from "./HOCDemos";

export default function HOCDemo() {
  return (
    <Card title="HOC(待研究)">
      <MyButton.MyButton1 />
      <Divider />
      <MyButton.MyButton2 />
    </Card>
  );
}
