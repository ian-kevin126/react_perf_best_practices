import { memo, useContext } from "react";
import { AppContext } from "..";
import { Button, Card } from "antd";
import { isEqual } from "lodash";

const UserInfo: React.FC = () => {
  const { userInfo, setUserInfo } = useContext(AppContext);

  const handleChangeUserInfo = (value: string) => {
    setUserInfo({
      ...userInfo,
      name: value,
    });
  };

  console.log("render userInfoComp - 1");
  return (
    <Card title="UserInfo">
      <div>{userInfo.name}</div>
      <div>{userInfo.age}</div>
      <Button onClick={() => handleChangeUserInfo("ian")}>
        不改变userInfo
      </Button>
      <Button onClick={() => handleChangeUserInfo("kevin")}>
        改变userInfo: kevin
      </Button>
      <MyPureFuncComp />
    </Card>
  );
};

function isPropsEqual(prevProps: any, nextProps: any): boolean {
  console.log("【userInfo】prevProps", prevProps);
  console.log("【userInfo】nextProps", nextProps);
  return isEqual(prevProps.userInfo, nextProps.userInfo);
}

export default memo(UserInfo, isPropsEqual);

const MyPureFuncComp = () => {
  console.log("render MyPureFuncComp");
  return (
    <Card>
      <div>ian</div>
    </Card>
  );
};
