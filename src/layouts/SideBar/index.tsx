import React, { useContext, useState } from "react";
import { Layout, Menu, MenuTheme } from "antd";
import SubMenu from "antd/lib/menu/SubMenu";
import { ItemsMenuSidebar } from "./item";
import { Link } from "react-router-dom";
import {
  ThemeModeContext,
  ThemeModeContextType,
} from "../../context/ThemeMode.Provider";
import { DividerCustom } from "./style";
import "./style.scss";
import { EModeTheme } from "../../styles";
import { SiderTheme } from "antd/lib/layout/Sider";
import HeaderSidebar from "./components/HeaderSidebar";

const { Sider } = Layout;

export interface SideBarProps {}

export default function SideBar(props: SideBarProps) {
  const { mode: theme } = useContext(ThemeModeContext) as ThemeModeContextType;
  const [collapsed, set_collapsed] = useState<boolean>(false);
  const onCollapsed = (value: boolean) => {
    set_collapsed(value);
  };

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={onCollapsed}
      width="250"
      theme={EModeTheme[theme] as SiderTheme}
    >
      <HeaderSidebar theme={theme} collapsed={collapsed} />
      <DividerCustom theme={theme} />
      <Menu
        theme={EModeTheme[theme] as MenuTheme}
        defaultSelectedKeys={["1"]}
        mode="inline"
      >
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
              theme={EModeTheme[theme] as MenuTheme}
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
    </Sider>
  );
}
