import { RouteProps, Navigate } from "react-router-dom";

type AuthRouteProps = RouteProps & {
  valid?: boolean;
};

const AuthRoute: React.FC<AuthRouteProps> = ({ valid = true, element }) => {
  //需要登录才能访问
  if (valid) {
    // const { token } = {useAppState((state) => state.user)};
    const { token } = { token: "eadadsadsadsa" };
    if (token) {
      return element as React.ReactElement;
    }
    //没有登录,跳到登录页
    return <Navigate to="/login" />;
  } else {
    //公共页面(登录/404/403/download)
    return element as React.ReactElement;
  }
};

export default AuthRoute;
