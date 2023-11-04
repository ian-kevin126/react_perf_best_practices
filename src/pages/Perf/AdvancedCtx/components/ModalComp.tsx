import { useContext, useEffect } from "react";
import { ContextAction, ContextValue } from "./Context";
import { Descriptions, Modal } from "antd";

export default function ModalComp() {
  const show = useContext(ContextValue);
  const setShow = useContext(ContextAction);

  useEffect(() => {
    console.log(">> Rendering Modal");
  });

  return (
    <Modal open={show} closable centered onCancel={() => setShow!(false)}>
      <Descriptions title="User Info" layout="vertical" column={1}>
        <Descriptions.Item label="UserName">Zhou Maomao</Descriptions.Item>
        <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
        <Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>
      </Descriptions>
    </Modal>
  );
}
