import { Card } from "antd";
import { Component } from "react";
import MyContext from "../MyContext";
import { MyContextType } from "@/types";

export default class UserInfoComp extends Component {
  //   static contextType = MyContext;

  shouldComponentUpdate(
    nextProps: Readonly<any>,
    nextState: Readonly<any>,
    nextContext: MyContextType
  ): boolean {
    // 需要注意的一个诡异的情况：使用contextType的时候，并不会触发SCU
    const ctx = this.context;
    console.log("scu - ctx", ctx);
    console.log("【userInfo】MyContextType", nextContext);
    return true;
  }

  componentDidMount() {
    console.log("【userInfo】mounted");
  }

  componentDidUpdate(prevProps: any, prevState: any) {
    console.log("【userInfo】update prevProps", prevProps);
    console.log("【userInfo】update prevState", prevState);
  }

  render() {
    console.log("render userInfo");
    const ctx = this.context;
    return <Card title="UserInfo">{JSON.stringify(ctx)}</Card>;
  }
}

UserInfoComp.contextType = MyContext;
