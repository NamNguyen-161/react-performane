import React, { useContext, useState } from "react";
import { Layout, Menu, Divider, Switch } from "antd";
import { UserOutlined } from "@ant-design/icons";
import "./style.css";
import Avatar from "antd/lib/avatar/avatar";
import { Typography } from "antd";
import SubMenu from "antd/lib/menu/SubMenu";
import { ItemsMenuSidebar } from "./item";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  ThemeModeContext,
  ThemeModeContextType,
} from "../../context/ThemeMode.Provider";

const { Text } = Typography;
const { Sider } = Layout;

const Logo = styled.div`
  width: 100%;
  height: 50px;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AvatarCustom = styled(Avatar)`
  cursor: pointer;
`;

const SwitchMode = styled.div`
  position: fixed;
  bottom: 60px;
  transition: all 0.2s;
`;

export interface SideBarProps {}

export default function SideBar(props: SideBarProps) {
  const { onChangeMode, mode: theme } = useContext(
    ThemeModeContext
  ) as ThemeModeContextType;
  const [collapsed, set_collapsed] = useState<boolean>(false);
  const onCollapsed = (value: boolean) => {
    set_collapsed(value);
  };

  const changeTheme = (value: boolean) => {
    onChangeMode(value);
  };

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={onCollapsed}
      width="250"
      theme={theme}
    >
      <Logo>
        <AvatarCustom size="large" className="avatar" icon={<UserOutlined />} />
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
      </Logo>
      <Divider
        style={{
          margin: "14px 0",
          background: `${theme === "dark" ? "white" : "black"}`,
        }}
      />
      <Menu theme={theme} defaultSelectedKeys={["1"]} mode="inline">
        {ItemsMenuSidebar.map((item) =>
          !item.children ? (
            <Menu.Item icon={item.icon} key={item.key} className="item_sidebar">
              {item.link ? (
                <Link to={item.link}>{item.label}</Link>
              ) : (
                item.label
              )}
            </Menu.Item>
          ) : (
            <SubMenu
              icon={item.icon}
              key={item.key}
              theme={theme}
              title={!collapsed ? item.label : ""}
              className="item_sidebar"
            >
              {item.children.map((children) => (
                <Menu.Item key={children?.key}>
                  {children.link ? (
                    <Link to={children.link}>{children.label}</Link>
                  ) : (
                    children.label
                  )}
                </Menu.Item>
              ))}
            </SubMenu>
          )
        )}
      </Menu>
      <SwitchMode style={{ left: `${collapsed ? "10px" : "95px"}` }}>
        <Switch
          style={{
            height: 30,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          checked={theme === "dark"}
          onChange={changeTheme}
          checkedChildren="Dark"
          unCheckedChildren="Light"
        />
      </SwitchMode>
    </Sider>
  );
}
