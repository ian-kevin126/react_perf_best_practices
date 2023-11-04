/**
 * 包含关系
 * 有些组件无法提前知晓它们子组件的具体内容。在 Sidebar（侧边栏）和 Dialog（对话框）等展现通用容器（box）
 * 的组件中特别容易遇到这种情况。
 */

import { ReactNode } from "react";

function Contacts() {
  console.log("Contacts rendered");
  return <div className="Contacts" />;
}

function Chat() {
  console.log("Chat rendered");
  return <div className="Chat" />;
}

function SplitPane(props: { left: ReactNode; right: ReactNode }) {
  console.log("SplitPane rendered");
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">{props.left}</div>
      <div className="SplitPane-right">{props.right}</div>
    </div>
  );
}

const ComposSplitPane = () => (
  <SplitPane left={<Contacts />} right={<Chat />} />
);

export default ComposSplitPane;
