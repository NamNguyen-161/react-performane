import React, { useContext } from "react";
import { Avatar, Switch } from "antd";
import {
  ThemeModeContext,
  ThemeModeContextType,
} from "../../context/ThemeMode.Provider";
import { BellOutlined, UserOutlined, BellTwoTone } from "@ant-design/icons";
import { HeaderContainer } from "./style";
import "./style.scss";
import { EModeTheme } from "../../styles";

interface HeaderLayoutProps {}

export default function HeaderLayout(props: HeaderLayoutProps) {
  const { mode: theme, onChangeMode } = useContext(
    ThemeModeContext
  ) as ThemeModeContextType;

  const changeTheme = (value: boolean) => {
    onChangeMode(value);
  };

  return (
    <HeaderContainer theme={theme}>
      <Switch
        className="switch-mode"
        checked={EModeTheme[theme] === "dark"}
        onChange={changeTheme}
        checkedChildren="Dark"
        unCheckedChildren="Light"
      />
      <Avatar size="small" icon={<UserOutlined />} className="avatar-header" />
      {EModeTheme[theme] === "dark" ? (
        <BellOutlined className="IconBellWhite" />
      ) : (
        <BellTwoTone className="IconBellWhite" />
      )}
    </HeaderContainer>
  );
}
