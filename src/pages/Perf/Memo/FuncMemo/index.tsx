import { getMenuList } from "@/api";
import { memo, useEffect, useMemo, useState } from "react";
import { Button } from "antd";
import { MemoChild, NoMemoChild } from "./components/MemoChild";
import MenuTable from "./components/MenuTable";
import MemoMenuTable, { MenuTableProps } from "./components/MemoMenuTable";
import CompMemoChild from "./components/CompMemoChild";
import { UserInfo } from "@/types";

function FuncMemo() {
  const [menuList, setMenuList] = useState<Array<MenuTableProps>>([]);
  const [count, setCount] = useState(0);

  const [userInfo, setUserInfo] = useState<UserInfo>({
    name: "kevin",
    age: 18,
  });

  useEffect(() => {}, []);

  const useMemoChild = useMemo(() => <MemoChild count={count} />, [count]);

  const handleGetMenuList = () => {
    getMenuList().then((res: any) => {
      if (res && res?.data?.menus) {
        setMenuList(res.data.menus);
      }
    });
  };

  const handleAddCount = () => {
    setCount((c) => c + 1);
  };

  const useMemoMenuTable = useMemo(
    () => <MenuTable menuList={menuList} />,
    [menuList]
  );

  const handleChangeUserInfo = (value: string) => {
    setUserInfo((prev: UserInfo) => ({ ...prev, name: value }));
  };

  return (
    <>
      <Button onClick={handleGetMenuList}>触发请求</Button>
      <Button onClick={handleAddCount}>count加一</Button>
      <Button onClick={() => handleChangeUserInfo("ian")}>改变userInfo</Button>
      <Button onClick={() => handleChangeUserInfo("kevin")}>
        改变userInfo
      </Button>
      {/* <NoMemoChild count={count} />
      {useMemoChild} */}
      {/* {useMemoMenuTable}
      <MemoMenuTable menuList={menuList} /> */}
      {/* <MenuTable menuList={menuList} /> */}
      <CompMemoChild userInfo={userInfo} />
    </>
  );
}

export default FuncMemo;
