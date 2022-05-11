import React, { useContext } from "react";
import {
  ThemeModeContext,
  ThemeModeContextType,
} from "../../context/ThemeMode.Provider";
import { WrapperIconSidebar } from "./style";
import "./style.scss";

export interface WrapperIconProps {
  icon: React.ReactNode;
}

export default function WrapperIcon({ icon }: WrapperIconProps) {
  const { mode: theme } = useContext(ThemeModeContext) as ThemeModeContextType;
  return <WrapperIconSidebar theme={theme}>{icon}</WrapperIconSidebar>;
}
