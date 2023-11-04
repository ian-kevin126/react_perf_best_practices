import React, { Suspense, useState } from "react";
import { Layout, theme } from "antd";
import { Outlet } from "react-router-dom";
import "./index.scss";
import LayoutHeader from "./Header";
import LayoutSider from "./Sider";

const { Content } = Layout;

const AppLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout className="layout-page">
      <LayoutHeader collapsed={collapsed} setCollapsed={setCollapsed} />
      <Layout>
        <LayoutSider collapsed={collapsed} />
        <Layout style={{ padding: "20px" }}>
          <Content className="content" style={{ background: colorBgContainer }}>
            <Suspense fallback={<div>loading</div>}>
              <Outlet />
            </Suspense>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default AppLayout;

// import { NavLink, useRoutes } from "react-router-dom";
// import routes from "@/router";
// import { getUserList, useGetUserList } from "./api";
// import { useEffect } from "react";

// export default function App() {
//   const data = useGetUserList();
//   console.log("data", data);

//   useEffect(() => {
//     getUserList().then((res: any) => {
//       console.log("res", res);
//     });
//   }, []);

//   return (
//     <div>
//       <div className="list-group">
//         {/* 设置路由链接 */}
//         <NavLink className="list-group-item" to="/about">
//           About
//         </NavLink>
//         <NavLink className="list-group-item" to="/home">
//           Home
//         </NavLink>
//       </div>
//       <div className="panel-body">
//         {/* 注册路由 */}
//         {/* 调用 useRoutes() hooks，嵌入路由映射表 */}
//         {useRoutes(routes)}
//       </div>
//     </div>
//   );
// }
