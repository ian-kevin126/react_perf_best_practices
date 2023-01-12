import { NavLink, Outlet } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h3>我是 Home 组件的内容</h3>
      <div>
        <ul className="nav nav-tabs">
          <li>
            {/* 设置路由链接 */}
            {/* to 属性值的路径有三种写法 */}
            <NavLink className="list-group-item" to="/home/news">
              新闻
            </NavLink>
            {/* <NavLink className='list-group-item' to='./news'>新闻</NavLink> */}
            {/* <NavLink className='list-group-item' to='news'>新闻</NavLink> */}
          </li>
          <li>
            <NavLink className="list-group-item" to="/home/message">
              消息
            </NavLink>
          </li>
        </ul>
        {/* Outlet 路由占位符，表示"路由映射表"中匹配的组件将在此处展示 */}
        <Outlet />
      </div>
    </div>
  );
}
