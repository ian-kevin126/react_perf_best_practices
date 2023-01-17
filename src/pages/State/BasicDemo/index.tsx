import { useAppDispatch, useAppState } from "@/store";
import { setUsername, getMenuListData } from "@/store/slices/MemberSlice";
import { MenuTableProps } from "@/types";
import { Button, Card, Table } from "antd";
import { ColumnsType } from "antd/es/table";

export const StateManagement: React.FC = () => {
  const { username, list } = useAppState((state) => state.member);
  const dispatch = useAppDispatch();

  const handleChangeUsername = () => {
    dispatch(setUsername("ian"));
    dispatch(getMenuListData());
  };

  const columns: ColumnsType<MenuTableProps> = [
    {
      title: "序号",
      dataIndex: "ID",
      key: "ID",
      render: (text: string) => <>{text}</>,
    },
    {
      title: "name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "path",
      dataIndex: "path",
      key: "path",
    },

    {
      title: "创建时间",
      dataIndex: "CreatedAt",
      key: "CreatedAt",
    },
  ];

  return (
    <Card title="StateManagement">
      <div>username: {username}</div>
      <Button onClick={handleChangeUsername}>改变username：ian</Button>
      <Table rowKey={"ID"} dataSource={list} columns={columns} />
    </Card>
  );
};

export default StateManagement;
