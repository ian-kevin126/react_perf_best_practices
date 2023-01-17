import { UserInfo, UserListItem } from "@/types";
import { Button, Card, Table } from "antd";
import { isEqual } from "lodash";
import { Component } from "react";

interface IProps {
  userList: UserListItem[];
}

interface IState {
  userInfo: UserInfo;
}

export default class MenuList extends Component<IProps, IState> {
  state = {
    userInfo: {
      name: "ian",
      age: 18,
    },
  };

  columns = [
    {
      title: "name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "address",
      dataIndex: "address",
      key: "address",
    },
  ];

  shouldComponentUpdate(nextProps: IProps, nextState: IState): boolean {
    if (isEqual(this.props, nextProps) && isEqual(this.state, nextState)) {
      return false;
    }
    return true;
  }

  handleChangeUserInfo = (value: string) => {
    this.setState({
      userInfo: {
        ...this.state.userInfo,
        name: value,
      },
    });
  };

  render() {
    console.log("render userList");
    return (
      <Card title="UserList">
        <Button onClick={() => this.handleChangeUserInfo("ian")}>
          改变UserInfo: ian
        </Button>
        <Button onClick={() => this.handleChangeUserInfo("kevin")}>
          改变UserInfo: kevin
        </Button>
        <Card>
          <div>{this.state.userInfo.name}</div>
          <div>{this.state.userInfo.age}</div>
        </Card>
        <Table
          rowKey={"name"}
          dataSource={this.props.userList}
          columns={this.columns}
        />
      </Card>
    );
  }
}
