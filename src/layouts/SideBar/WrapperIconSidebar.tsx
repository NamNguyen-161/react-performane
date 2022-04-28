import * as React from "react";
import "./style.css";

export interface WrapperIconProps {
  icon: React.ReactNode;
}

export default function WrapperIcon({ icon }: WrapperIconProps) {
  return <div className="wrapper_icon_sidebar">{icon}</div>;
}
