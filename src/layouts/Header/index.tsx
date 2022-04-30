import React, { useContext } from "react";
import { Layout } from "antd";
import {
  ThemeModeContext,
  ThemeModeContextType,
} from "../../context/ThemeMode.Provider";

const { Header } = Layout;

interface HeaderLayoutProps {}

export default function HeaderLayout(props: HeaderLayoutProps) {
  const { mode: theme } = useContext(ThemeModeContext) as ThemeModeContextType;
  return (
    <Header
      style={{
        padding: 0,
        background: `${theme === "light" ? "white" : "#001529"}`,
      }}
    >
      Nam
    </Header>
  );
}
