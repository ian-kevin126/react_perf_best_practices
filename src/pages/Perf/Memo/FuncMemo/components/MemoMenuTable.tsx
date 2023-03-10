import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { memo } from "react";

export type MenuTableProps = {
  ID?: number;
  CreatedAt?: Date;
  UpdatedAt?: Date;
  path?: string;
  name?: string;
};

interface IProps {
  menuList: Array<MenuTableProps>;
}

const MemoMenuTable: React.FC<IProps> = ({ menuList }) => {
  console.log("4，render memo TableMenu");
  //   console.log("menuList", menuList);

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

  return <Table rowKey={"ID"} dataSource={menuList} columns={columns} />;
};

export default memo(MemoMenuTable);