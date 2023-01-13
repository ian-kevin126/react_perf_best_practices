import routes, { CustomRouteObject } from "@/router";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";

const { Sider } = Layout;
const { SubMenu, Item } = Menu;

export type LayoutSiderProps = { collapsed: boolean };

const renderMenuList = (list: CustomRouteObject[]) => {
  return list.map((item: CustomRouteObject) => {
    if (item.isShow) {
      const iwShowChild = item?.children?.some(
        (item: CustomRouteObject) => item.isShow
      );
      if (item.children && item.children.length && iwShowChild) {
        return (
          <SubMenu key={item.path} title={item.title} icon={item?.icon}>
            {renderMenuList(item.children)}
          </SubMenu>
        );
      } else {
        return (
          <Item key={item.path} icon={item?.icon}>
            <Link to={item.path}>{item.title}</Link>
          </Item>
        );
      }
    }

    return null;
  });
};

export const LayoutSider: React.FC<LayoutSiderProps> = ({ collapsed }) => {
  return (
    <Sider width={200} style={{ background: "#001529" }} collapsed={collapsed}>
      <Menu theme="dark" mode="inline">
        {renderMenuList(routes)}
      </Menu>
    </Sider>
  );
};

export default LayoutSider;
