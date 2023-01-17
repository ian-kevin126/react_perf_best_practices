import AuthRoute from "../AuthRoute.tsx";
import { lazy } from "react";

const UseReducerDemo = lazy(() => import("@/pages/Hooks/useReducer"));
const UseRefDemo = lazy(() => import("@/pages/Hooks/useRef"));
const UseContextDemo = lazy(() => import("@/pages/Hooks/useContext"));

const HooksRoutes = [
  {
    path: "/hooks/useReducer",
    title: "useReducer",
    isShow: true,
    element: <AuthRoute element={<UseReducerDemo />} valid={true} />,
  },
  {
    path: "/hooks/useRef",
    title: "useRef",
    isShow: true,
    element: <AuthRoute element={<UseRefDemo />} valid={true} />,
  },
  {
    path: "/hooks/useContext",
    title: "useContext",
    isShow: true,
    element: <AuthRoute element={<UseContextDemo />} valid={true} />,
  },
];

export default HooksRoutes;
