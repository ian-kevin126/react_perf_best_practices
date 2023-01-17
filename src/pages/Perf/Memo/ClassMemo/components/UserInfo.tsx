import { Component, memo } from "react";
import { UserInfo } from "@/types";
import { Card } from "antd";
import { isEqual } from "lodash";

interface IProps {
  userInfo: UserInfo;
}

class UserInfoComp extends Component<IProps, any> {
  state = {};

  render() {
    console.log("render userInfoComp");
    return (
      <Card title="UserInfo">
        <div>{this.props.userInfo.name}</div>
        <div>{this.props.userInfo.age}</div>
      </Card>
    );
  }
}

function isEqualProps(prevProps: IProps, nextProps: IProps) {
  return isEqual(prevProps, nextProps);
}

export default memo(UserInfoComp, isEqualProps);
