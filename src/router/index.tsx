import { Navigate, RouteObject } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
import Message from "../pages/Home/Message";
import News from "../pages/Home/News";
import Detail from "../pages/Home/Message/Detail";

// 路由映射表
const routes: RouteObject[] = [
  {
    path: "/home",
    element: <Home />,
    children: [
      { path: "news", element: <News /> },
      {
        path: "message",
        element: <Message />,
        children: [
          // 声明接收参数
          { path: "detail/:id/:title/:content", element: <Detail /> },
        ],
      },
      { path: "/home", element: <Navigate to="news" /> },
    ],
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/",
    element: <Navigate to="/home" />,
  },
];

export default routes;
