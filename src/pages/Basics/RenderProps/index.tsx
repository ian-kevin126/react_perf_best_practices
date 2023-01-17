import { Card, Divider } from "antd";
import BasicDemo from "./BasicDemo";
import HocDemo from "./HocDemo";

export default function RenderPropsDemo() {
  return (
    <Card title="RenderPropsDemo(待研究)">
      <BasicDemo />
      <Divider />
      <HocDemo />
    </Card>
  );
}

/**
 * render props：顾名思义，就是组件上名为 render 的 prop，该属性可以动态决定要渲染的内容，
 * 也就是说，在 Component 组件内部渲染的时候，会调用 this.props.render 方法获取外部传过来的 jsx，
 * 来改变自己真正 render 时的效果。所以 render prop 是一个用于告知组件需要渲染什么内容的函数 prop。
 *
 * 为什么需要render props？目的就是为了组件的复用，把无关视图的逻辑抽象出来。
 */
