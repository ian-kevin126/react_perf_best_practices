import { Component, PureComponent } from "react";
import UserInfoComp from "./components/UserInfo";
import { UserListItem, UserInfo } from "@/types";
import { Button } from "antd";
import UserList from "./components/UserList";

export type ClassMemoProps = { [x: string]: string };

interface IState {
  count: number;
  userInfo: UserInfo;
  userList: UserListItem[];
}

const userList: UserListItem[] = [
  { name: "ian1", age: 18, address: "beijing" },
  { name: "ian2", age: 22, address: "tianjin" },
  { name: "ian3", age: 33, address: "nanjing" },
];

export default class ClassMemo extends Component<any, IState> {
  state = {
    count: 0,
    userInfo: {
      name: "ian",
      age: 18,
    },
    userList,
  };

  handleChangeUserInfo = (value: string) => {
    this.setState({
      userInfo: {
        ...this.state.userInfo,
        name: value,
      },
    });
  };

  handleCountAdd = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  handleAddUserInfo = () => {
    this.setState({
      userList: [
        ...this.state.userList,
        {
          name: `ian${this.state.userList.length + 1}`,
          age: 44,
          address: "yanjing",
        },
      ],
    });
  };

  render() {
    return (
      <div>
        <Button onClick={this.handleCountAdd}>Count +1</Button>
        <Button onClick={() => this.handleChangeUserInfo("ian")}>
          改变UserInfo: ian
        </Button>
        <Button onClick={() => this.handleChangeUserInfo("kevin")}>
          改变UserInfo: kevin
        </Button>
        <Button onClick={this.handleAddUserInfo}>增加一条userInfo</Button>
        <div style={{ margin: "20px 0" }}>count: {this.state.count}</div>
        <UserInfoComp userInfo={this.state.userInfo} />
        <div style={{ margin: "20px 0" }} />
        <UserList userList={this.state.userList} />
        <PureComp />
      </div>
    );
  }
}

class PureComp extends PureComponent {
  render() {
    console.log("render pureComponent");
    return <>PureComp</>;
  }
}
