import { Avatar, Image } from "antd";
import React from "react";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
} from "@ant-design/icons";
import Logo from "@/logo.svg";

export type HeaderProps = { collapsed: boolean; setCollapsed: Function };

export const LayoutHeader: React.FC<HeaderProps> = ({
  collapsed,
  setCollapsed,
}) => {
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className="header">
      <div className="left" style={{ width: collapsed ? 64 : 184 }}>
        <Image src={Logo} className="logo" />
      </div>
      <div className="right">
        <div onClick={toggleCollapsed}>
          {collapsed ? (
            <MenuUnfoldOutlined
              style={{ color: "white", fontSize: 20, cursor: "pointer" }}
            />
          ) : (
            <MenuFoldOutlined
              style={{ color: "white", fontSize: 20, cursor: "pointer" }}
            />
          )}
        </div>
        <Avatar
          size={32}
          icon={
            <UserOutlined
              style={{ color: "white", fontSize: 20, cursor: "pointer" }}
            />
          }
        />
      </div>
    </div>
  );
};

export default LayoutHeader;
