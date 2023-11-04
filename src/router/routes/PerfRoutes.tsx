import AuthRoute from "../AuthRoute.tsx";
import { lazy } from "react";

const FuncMemo = lazy(() => import("@/pages/Perf/Memo/FuncMemo"));
const ClassMemo = lazy(() => import("@/pages/Perf/Memo/ClassMemo"));
const ContextFuncDemo = lazy(() => import("@/pages/Perf/Context/FuncDemo"));
const ContextClassDemo = lazy(() => import("@/pages/Perf/Context/ClassDemo"));
const AdvancedCtx = lazy(() => import("@/pages/Perf/AdvancedCtx"));
const StateLift = lazy(() => import("@/pages/Perf/StateLift"));
const Constate = lazy(() => import("@/pages/Perf/Constate"));

const PerfRoutes = [
  {
    path: "/perf/class_memo",
    title: "memo(class)",
    isShow: true,
    element: <AuthRoute element={<ClassMemo />} valid={true} />,
  },
  {
    path: "/perf/func_memo",
    title: "memo(func)",
    isShow: true,
    element: <AuthRoute element={<FuncMemo />} valid={true} />,
  },
  {
    path: "/perf/context_class_demo",
    title: "context(class)",
    isShow: true,
    element: <AuthRoute element={<ContextClassDemo />} valid={true} />,
  },
  {
    path: "/perf/context_func_demo",
    title: "context(func)",
    isShow: true,
    element: <AuthRoute element={<ContextFuncDemo />} valid={true} />,
  },
  {
    path: "/perf/state_lift",
    title: "状态提升",
    isShow: true,
    element: <AuthRoute element={<StateLift />} valid={true} />,
  },
  {
    path: "/perf/advanced_ctx",
    title: "Context性能优化",
    isShow: true,
    element: <AuthRoute element={<AdvancedCtx />} valid={true} />,
  },
  {
    path: "/perf/constate",
    title: "constate",
    isShow: true,
    element: <AuthRoute element={<Constate />} valid={true} />,
  },
];

export default PerfRoutes;
