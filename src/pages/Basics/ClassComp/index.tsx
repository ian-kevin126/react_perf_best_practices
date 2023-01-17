import { Card, Divider } from "antd";
import BasicsDemo from "./components/BasicsDemo";
import GDSFPDemo from "./components/GDSFPDemo";
import FormAndEvent from "./components/FormAndEvent";

export const ClassComp: React.FC = () => {
  return (
    <Card title="ClassComp">
      <BasicsDemo message="ian getup!" />
      <Divider />
      <GDSFPDemo propA={"ian"} />
      <Divider />
      <FormAndEvent />
    </Card>
  );
};

export default ClassComp;
