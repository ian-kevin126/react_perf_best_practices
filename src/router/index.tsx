import { ReactElement, lazy } from "react";
import { Navigate, RouteObject } from "react-router-dom";
import {
  LaptopOutlined,
  CrownOutlined,
  CompressOutlined,
  RadarChartOutlined,
  AppstoreAddOutlined,
} from "@ant-design/icons";
import AuthRoute from "./AuthRoute.tsx";
import PerfRoutes from "./routes/PerfRoutes";
import BasicsRoutes from "./routes/BasicsRoutes";
import HooksRoutes from "./routes/Hooks";
import StateManagementRoutes from "./routes/StateManagement";
import DesignPatterns from "./routes/DesignPatterns";

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

const NotFound = lazy(() => import("@/pages/Error"));
const AppLayout = lazy(() => import("@/layout"));

// 路由映射表
const routes: Array<CustomRouteObject> = [
  {
    path: "/",
    title: "首页",
    isShow: false,
    element: (
      <AuthRoute element={<Navigate to="/perf/func_memo" />} valid={true} />
    ),
  },
  {
    path: "basics",
    element: <AuthRoute element={<AppLayout />} valid={true} />,
    title: "React基础",
    isShow: true,
    icon: <LaptopOutlined />,
    children: [...BasicsRoutes],
  },
  {
    path: "/perf",
    element: <AuthRoute element={<AppLayout />} valid={true} />,
    title: "性能优化",
    isShow: true,
    icon: <CrownOutlined />,
    children: [...PerfRoutes],
  },
  {
    path: "/hooks",
    element: <AuthRoute element={<AppLayout />} valid={true} />,
    title: "Hooks",
    isShow: true,
    icon: <CompressOutlined />,
    children: [...HooksRoutes],
  },
  {
    path: "/state_management",
    element: <AuthRoute element={<AppLayout />} valid={true} />,
    title: "状态管理",
    isShow: true,
    icon: <RadarChartOutlined />,
    children: [...StateManagementRoutes],
  },
  {
    path: "/design_patterns",
    element: <AuthRoute element={<AppLayout />} valid={true} />,
    title: "设计模式",
    isShow: true,
    icon: <AppstoreAddOutlined />,
    children: [...DesignPatterns],
  },
  {
    path: "*",
    isShow: false,
    element: <AuthRoute element={<NotFound />} valid={false} />,
  },
];

export default routes;
