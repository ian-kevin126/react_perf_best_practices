import { ReactElement, lazy } from "react";
import { Navigate, RouteObject } from "react-router-dom";
import { LaptopOutlined, NotificationOutlined } from "@ant-design/icons";
import AuthRoute from "./AuthRoute.tsx";

/**
 * export interface CustomRouteObject extends RouteObject {}
 * 这个会报错是因为类和接口不能 implement / extends 联合类型的类型别名。
 * 就像你用 interface 去 extends 一个 class 或另一个 interface 是可以的，
 * 但是你不能去 extends 联合类型。但是可以改成联合类型的模式：
 * export type CustomRouteObject = RouteObject & {}
 * 
 * export interface CustomRouteObject {
    children?: CustomRouteObject[];
    element?: React.ReactNode;
    index?: boolean;
    path?: string;
    title?: string;
    type?: string;
  }
 */

export type CustomRouteObject = Omit<RouteObject, "children"> & {
  meta?: {
    name?: string;
    type?: string;
  };
  title?: string;
  path: string;
  icon?: ReactElement;
  isShow?: boolean;
  children?: Array<CustomRouteObject>;
};

const Message = lazy(() => import("@/pages/Home/Message")),
  FuncMemo = lazy(() => import("@/pages/FuncMemo")),
  ClassMemo = lazy(() => import("@/pages/ClassMemo")),
  NotFound = lazy(() => import("@/pages/Error")),
  AppLayout = lazy(() => import("@/layout")),
  Detail = lazy(() => import("@/pages/Home/Message/Detail"));

// 路由映射表
const routes: Array<CustomRouteObject> = [
  {
    path: "/login",
    element: <AuthRoute element={<div>Login</div>} valid={true} />,
    title: "登录",
    isShow: false,
    icon: <NotificationOutlined />,
  },
  {
    path: "/",
    element: <AuthRoute element={<AppLayout />} valid={true} />,
    title: "性能优化",
    isShow: true,
    icon: <LaptopOutlined />,
    children: [
      {
        path: "func_memo",
        title: "Func(Memo)",
        isShow: true,
        element: <AuthRoute element={<FuncMemo />} valid={true} />,
      },
      {
        path: "class_memo",
        title: "Class(Memo)",
        isShow: true,
        element: <AuthRoute element={<ClassMemo />} valid={true} />,
      },
      {
        path: "message",
        isShow: true,
        element: <AuthRoute element={<Message />} valid={true} />,
        title: "消息",
        children: [
          // 声明接收参数
          {
            path: "detail/:id/:title/:content",
            title: "详情",
            isShow: false,
            element: <AuthRoute element={<Detail />} valid={true} />,
          },
        ],
      },
      {
        path: "home",
        title: "其他",
        isShow: true,
        element: <AuthRoute element={<Navigate to="/news" />} valid={true} />,
      },
      {
        path: "*",
        isShow: false,
        element: <AuthRoute element={<NotFound />} valid={false} />,
      },
    ],
  },
];

export default routes;
