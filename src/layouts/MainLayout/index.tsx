import * as React from "react";
import SideBar from "../SideBar";

export interface MainLayoutProps {
  children: JSX.Element | JSX.Element[];
}

export default function MainLayout(props: MainLayoutProps) {
  return (
    <div>
      <SideBar />
      {props.children}
    </div>
  );
}
