import React from "react";
import { UserOutlined } from "@ant-design/icons";
import { EModeTheme } from "../../../../styles";
import { AvatarCustom, Logo, TextUserName } from "../../style";

export interface HeaderSidebarProps {
  theme: EModeTheme;
  collapsed: boolean;
}

export default function HeaderSidebar(props: HeaderSidebarProps) {
  console.log("theme", EModeTheme[props.theme] === "dark");
  const { theme, collapsed } = props;
  return (
    <Logo>
      <AvatarCustom size="large" icon={<UserOutlined />} />
      {!collapsed ? (
        <TextUserName theme={theme}>Nam Nguyen</TextUserName>
      ) : (
        <></>
      )}
    </Logo>
  );
}
