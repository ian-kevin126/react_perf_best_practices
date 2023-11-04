import AuthRoute from "../AuthRoute.tsx";
import { lazy } from "react";

const StateManagement = lazy(() => import("@/pages/State/BasicDemo"));
const RTKQueryDemo = lazy(() => import("@/pages/State/RTKQuery"));

const StateManagementRoutes = [
  {
    path: "/state_management/useReducer",
    title: "RTK基本使用",
    isShow: true,
    element: <AuthRoute element={<StateManagement />} valid={true} />,
  },
  {
    path: "/state_management/rtk_query",
    title: "RTK Query",
    isShow: true,
    element: <AuthRoute element={<RTKQueryDemo />} valid={true} />,
  },
];

export default StateManagementRoutes;
