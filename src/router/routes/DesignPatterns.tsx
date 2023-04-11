import AuthRoute from "../AuthRoute.tsx";
import { lazy } from "react";

const ContextModuleFunc = lazy(
  () => import("@/pages/DesignPatterns/ContextModuleFunc")
);
const CompoundComponent = lazy(
  () => import("@/pages/DesignPatterns/CompoundComp")
);

const DesignPatterns = [
  {
    path: "/design_patterns/ctx_module_functions",
    title: "context 模块函数",
    isShow: true,
    element: <AuthRoute element={<ContextModuleFunc />} valid={true} />,
  },
  {
    path: "/design_patterns/compound_component",
    title: "组合组件",
    isShow: true,
    element: <AuthRoute element={<CompoundComponent />} valid={true} />,
  },
];

export default DesignPatterns;
