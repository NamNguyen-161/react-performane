import React from "react";
import SideBar from "../SideBar";
import { Layout } from "antd";
import HeaderLayout from "../Header";
import FooterLayout from "../Footer";
import { Switch, Route } from "react-router-dom";
import { ItemsMenuSidebar } from "../SideBar/item";

const { Content } = Layout;

export interface MainLayoutProps {}

export default function MainLayout(props: MainLayoutProps) {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <SideBar />
      <Layout className="site-layout">
        <HeaderLayout />
        <Content style={{ margin: "0 16px", background: "white" }}>
          <Switch>
            {ItemsMenuSidebar.map((route, index) => {
              return !route.children ? (
                <Route
                  key={index}
                  path={route.link}
                  exact={route.exact}
                  children={route.component}
                />
              ) : (
                route.children.map((routeChild, number) => (
                  <Route
                    key={number}
                    path={routeChild.link}
                    exact={routeChild.exact}
                    children={routeChild?.component}
                  />
                ))
              );
            })}
          </Switch>
        </Content>
        <FooterLayout />
      </Layout>
    </Layout>
  );
}
