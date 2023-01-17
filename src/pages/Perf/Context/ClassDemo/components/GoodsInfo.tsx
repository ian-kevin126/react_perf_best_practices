import { Card } from "antd";
import { Component } from "react";
import { MyContextType } from "@/types";
import MyContext from "../MyContext";

export default class GoodsInfoComp extends Component {
  shouldComponentUpdate(
    nextProps: Readonly<any>,
    nextState: Readonly<any>,
    nextContext: MyContextType
  ): boolean {
    // 需要注意的一个诡异的情况：虽然<MyContext.Consumer>可以触发SCU，但是参数都是空的
    console.log("【goodsInfo】MyContextType nextProps", nextProps);
    console.log("【goodsInfo】MyContextType nextState", nextState);
    console.log("【goodsInfo】MyContextType nextContext", nextContext);
    return true;
  }

  render() {
    console.log("render goodsInfo");
    return (
      <Card title="GoodsInfo">
        <MyContext.Consumer>
          {(ctx: MyContextType) => <>{JSON.stringify(ctx)}</>}
        </MyContext.Consumer>
      </Card>
    );
  }
}
