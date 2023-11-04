import { memo } from "react";
import { Card } from "antd";
import { isEqual } from "lodash";
import { UserInfo } from "@/types";

export type CompMemoChildProps = {
  userInfo: UserInfo;
};

const CompMemoChild: React.FC<CompMemoChildProps> = ({ userInfo }) => {
  console.log("render CompMemoChild");
  return (
    <Card>
      <div>{userInfo.name}</div>
      <div>{userInfo.age}</div>
    </Card>
  );
};

function equalFunc(
  prevProps: CompMemoChildProps,
  nextProps: CompMemoChildProps
): boolean {
  console.log("prevProps", prevProps);
  console.log("nextProps", nextProps);
  return isEqual(prevProps.userInfo, nextProps.userInfo);
}

export default memo(CompMemoChild, equalFunc);
