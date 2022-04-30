import React from "react";
import SideBar from "../SideBar";
import { Layout } from "antd";
import HeaderLayout from "../Header";
import FooterLayout from "../Footer";
import { Switch, Route } from "react-router-dom";
import { Routes } from "../SideBar/item";

const { Content } = Layout;

export interface MainLayoutProps {}

export default function MainLayout(props: MainLayoutProps) {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <SideBar />
      <Layout className="site-layout">
        <HeaderLayout />
        <Content style={{ margin: "0 16px", overflow: "hidden" }}>
          <Switch>
            {Routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={route.component}
              />
            ))}
          </Switch>
        </Content>
        <FooterLayout />
      </Layout>
    </Layout>
  );
}
