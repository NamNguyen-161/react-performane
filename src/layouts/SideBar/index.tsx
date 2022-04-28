import React, { useState } from "react";
import { Layout, Menu, Divider, Switch } from "antd";
import { UserOutlined } from "@ant-design/icons";
import "./style.css";
import Avatar from "antd/lib/avatar/avatar";
import { Typography } from "antd";
import SubMenu from "antd/lib/menu/SubMenu";
import { ItemsMenuSidebar } from "./item";
import { Link } from "react-router-dom";

const { Text } = Typography;
const { Sider } = Layout;

export interface SideBarProps {}

export default function SideBar(props: SideBarProps) {
  const [collapsed, set_collapsed] = useState<boolean>(false);
  const [theme, setTheme] = React.useState<"dark" | "light">("dark");
  const handleCollapsed = (value: boolean) => {
    set_collapsed(value);
  };

  const changeTheme = (value: boolean) => {
    setTheme(value ? "dark" : "light");
  };
  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={handleCollapsed}
      width="250"
      theme={theme}
      style={{ position: "relative" }}
    >
      <div className="logo">
        <Avatar size="large" className="avatar" icon={<UserOutlined />} />
        {!collapsed ? (
          <Text
            type="secondary"
            style={{
              transition: "all 0.2s",
              fontWeight: "700",
              fontSize: 20,
              marginLeft: 10,
              color: `${theme === "dark" ? "white" : ""}`,
            }}
          >
            Nam Nguyen
          </Text>
        ) : (
          <></>
        )}
      </div>
      <Divider
        style={{
          margin: "14px 0",
          background: `${theme === "dark" ? "white" : "black"}`,
        }}
      />
      <Menu theme={theme} defaultSelectedKeys={["1"]} mode="inline">
        {ItemsMenuSidebar.map((item, index) =>
          !item.children ? (
            <Menu.Item icon={item.icon} key={item.key}>
              <Link to={item.link}>{item.label}</Link>
            </Menu.Item>
          ) : (
            <SubMenu
              icon={item.icon}
              key={item.key}
              theme={theme}
              title={item.label}
            >
              {item.children.map((children) => (
                <Menu.Item key={children?.key}>
                  <Link to={children.link}>{children.label}</Link>
                </Menu.Item>
              ))}
            </SubMenu>
          )
        )}
      </Menu>
      <div
        className="switch_mode"
        style={{ left: `${collapsed ? "10px" : "95px"}` }}
      >
        <Switch
          checked={theme === "dark"}
          onChange={changeTheme}
          checkedChildren="Dark"
          unCheckedChildren="Light"
        />
      </div>
    </Sider>
  );
}
