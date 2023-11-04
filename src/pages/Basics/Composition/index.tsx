import { Card, Divider } from "antd";
import ComposCounter from "./components/Counter";
import ComposSplitPane from "./components/SplitPane";
import SignUpDialog from "./components/Dialog";
import "./index.scss";

function Composition() {
  // 由于label的值并不会变化，Logger组件不应该随着count的值变化而重渲染，
  // 通过组合组件的方式，可以很容易避免Logger组件的重渲染
  return (
    <Card>
      <ComposCounter />
      <Divider />
      <ComposSplitPane />
      <Divider />
      <SignUpDialog />
    </Card>
  );
}

export default Composition;
