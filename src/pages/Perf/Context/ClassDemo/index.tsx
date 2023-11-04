import { MyContextType } from "@/types";
import { Button, Card, Divider } from "antd";
import { Component } from "react";
import UserInfoComp from "./components/UserInfo";
import GoodsInfoComp from "./components/GoodsInfo";
import MyContext from "./MyContext";

export default class ContextClassDemo extends Component<any, MyContextType> {
  state = {
    userInfo: {
      name: "ian",
      age: 18,
    },
    goodsInfo: {
      goodsName: "iphone",
      price: 8000,
      quantity: 2,
    },
  };

  handleChangeUserInfo = (value: string) => {
    this.setState({
      userInfo: {
        ...this.state.userInfo,
        name: value,
      },
    });
  };

  handleChangeGoodsInfo = (value: string) => {
    this.setState({
      goodsInfo: {
        ...this.state.goodsInfo,
        goodsName: value,
      },
    });
  };

  render() {
    const { userInfo, goodsInfo } = this.state;
    return (
      <Card title="ContextDemo(Class)">
        <Card title="UserInfo">
          <Button onClick={() => this.handleChangeUserInfo("ian")}>
            改变UserInfo：ian
          </Button>
          <Button onClick={() => this.handleChangeUserInfo("kevin")}>
            改变userInfo：kevin
          </Button>
        </Card>
        <Divider />
        <Card title="GoodsInfo">
          <Button onClick={() => this.handleChangeGoodsInfo("iphone")}>
            改变GoodsInfo：iphone
          </Button>
          <Button onClick={() => this.handleChangeGoodsInfo("huawei")}>
            改变GoodsInfo：huawei
          </Button>
        </Card>
        <Divider />
        <MyContext.Provider value={{ userInfo, goodsInfo }}>
          <UserInfoComp />
          <Divider />
          <GoodsInfoComp />
        </MyContext.Provider>
      </Card>
    );
  }
}
