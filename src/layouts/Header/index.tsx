import * as React from "react";
import { Layout } from "antd";
const { Header } = Layout;

interface HeaderLayoutProps {}

export default function HeaderLayout(props: HeaderLayoutProps) {
  return (
    <Header className="site-layout-background" style={{ padding: 0 }}>
      Nam
    </Header>
  );
}
