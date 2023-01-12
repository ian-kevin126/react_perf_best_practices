import { NavLink, useRoutes } from "react-router-dom";
import routes from "@/router";

export default function App() {
  return (
    <div>
      <div className="list-group">
        {/* 设置路由链接 */}
        <NavLink className="list-group-item" to="/about">
          About
        </NavLink>
        <NavLink className="list-group-item" to="/home">
          Home
        </NavLink>
      </div>
      <div className="panel-body">
        {/* 注册路由 */}
        {/* 调用 useRoutes() hooks，嵌入路由映射表 */}
        {useRoutes(routes)}
      </div>
    </div>
  );
}
