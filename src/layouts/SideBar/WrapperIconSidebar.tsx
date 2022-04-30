import React, { useContext } from "react";
import styled, { css } from "styled-components";
import {
  ThemeModeContext,
  ThemeModeContextType,
} from "../../context/ThemeMode.Provider";
import "./style.css";

const WrapperIconSidebar = styled.div`
  min-width: 35px;
  margin-right: 20px;
  padding: 0 10px;
  border-radius: 9px;
  ${(props) =>
    props.theme === "light"
      ? css`
          background: #e0e0e0;
          box-shadow: 5px 5px 10px #bebebe, -5px -5px 10px #ffffff;
        `
      : css`
          background: #441d5d;
          box-shadow: 5px 5px 10px #3a194f, -5px -5px 10px #4e216b;
        `}
`;

export interface WrapperIconProps {
  icon: React.ReactNode;
}

export default function WrapperIcon({ icon }: WrapperIconProps) {
  const { mode: theme } = useContext(ThemeModeContext) as ThemeModeContextType;
  return <WrapperIconSidebar theme={theme}>{icon}</WrapperIconSidebar>;
}
