import { lazy } from "react";
import AuthRoute from "../AuthRoute.tsx";

const Composition = lazy(() => import("@/pages/Basics/Composition"));
const ClassComp = lazy(() => import("@/pages/Basics/ClassComp"));
const ForwardRefDemo = lazy(() => import("@/pages/Basics/ForwardRef"));
const PortalDemo = lazy(() => import("@/pages/Basics/Portal"));
const ErrorBoundary = lazy(() => import("@/pages/Basics/ErrorBoundaries"));
const HOCDemo = lazy(() => import("@/pages/Basics/HOC"));
const RenderPropsDemo = lazy(() => import("@/pages/Basics/RenderProps"));

const BasicsRoutes = [
  {
    path: "/basics/class_comp",
    title: "Class组件",
    isShow: true,
    element: <AuthRoute element={<ClassComp />} valid={true} />,
  },
  {
    path: "/basics/forwardRef",
    title: "forwardRef",
    isShow: true,
    element: <AuthRoute element={<ForwardRefDemo />} valid={true} />,
  },
  {
    path: "/basics/portal",
    title: "portal",
    isShow: true,
    element: <AuthRoute element={<PortalDemo />} valid={true} />,
  },
  {
    path: "/basics/error_boundary",
    title: "error_boundary",
    isShow: true,
    element: <AuthRoute element={<ErrorBoundary />} valid={true} />,
  },
  {
    path: "/basics/composition",
    title: "组合组件",
    isShow: true,
    element: <AuthRoute element={<Composition />} valid={true} />,
  },
  {
    path: "/basics/hoc",
    title: "Hoc",
    isShow: true,
    element: <AuthRoute element={<HOCDemo />} valid={true} />,
  },
  {
    path: "/basics/render_props",
    title: "RenderProps",
    isShow: true,
    element: <AuthRoute element={<RenderPropsDemo />} valid={true} />,
  },
  // {
  //   path: "/advanced/message",
  //   isShow: true,
  //   element: <AuthRoute element={<Message />} valid={true} />,
  //   title: "消息",
  //   children: [
  //     // 声明接收参数
  //     {
  //       path: "/advanced/message/detail/:id/:title/:content",
  //       title: "详情",
  //       isShow: false,
  //       element: <AuthRoute element={<Detail />} valid={true} />,
  //     },
  //   ],
  // },
];

export default BasicsRoutes;
