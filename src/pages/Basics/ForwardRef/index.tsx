import { Card, Divider } from "antd";
import BasicDemo from "./components/BasicDemo";
import AdvancedDemo from "./advanced";

export const ForwardRefDemo: React.FC = () => {
  return (
    <Card title="ForwardRefDemo">
      <BasicDemo />
      <Divider />
      <AdvancedDemo />
    </Card>
  );
};

export default ForwardRefDemo;
