import { createContext, useMemo, useState } from "react";
import { AppContextProps, GoodsInfo, UserInfo } from "@/types";
import { Card, Divider } from "antd";
import UserInfoComp from "./components/UserInfo";
import GoodsInfoComp from "./components/GoodsInfo";

export const AppContext = createContext<AppContextProps>({} as AppContextProps);

// 还可以使用Partial
// export const AppContext = createContext<Partial<AppContextProps>>({});

export const ContextFuncDemo: React.FC = () => {
  const [userInfo, setUserInfo] = useState<UserInfo>({
    name: "ian",
    age: 18,
  });
  const [goodsInfo, setGoodsInfo] = useState<GoodsInfo>({
    goodsName: "iphone",
    price: 9000,
    quantity: 2,
  });

  const memoUserInfo = useMemo(() => <UserInfoComp />, []);
  const memoGoodsInfo = useMemo(() => <GoodsInfoComp />, []);

  console.log("render main");
  return (
    <Card title="ContextDemo">
      <AppContext.Provider
        value={{ userInfo, setUserInfo, goodsInfo, setGoodsInfo }}
      >
        {memoUserInfo}
        <Divider />
        {memoGoodsInfo}
      </AppContext.Provider>
    </Card>
  );
};

export default ContextFuncDemo;
