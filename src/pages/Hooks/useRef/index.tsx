import { Card, Divider } from "antd";
import BasicUseRef from "./components/BasicUseRef";
import ForwardRefDemo from "./components/ForwardRefDemo";

export const UseRefDemo: React.FC = () => {
  return (
    <Card title="useRefDemo">
      <BasicUseRef />
      <Divider />
      <ForwardRefDemo />
    </Card>
  );
};

export default UseRefDemo;
