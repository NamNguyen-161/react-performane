import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import Option1 from "../../containers/Option1";
import Option2 from "../../containers/Option2";
import WrapperIcon from "./WrapperIconSidebar";

export interface ISubMenu {
  label: React.ReactNode;
  key: React.Key;
  link?: string;
  icon?: React.ReactNode;
  children?: ISubMenu[];
}

interface Router {
  path: string;
  component: JSX.Element;
  exact: boolean;
}

function getItem(
  label: React.ReactNode,
  key: React.Key,
  link?: string,
  icon?: React.ReactNode,
  children?: ISubMenu[]
) {
  return {
    key,
    icon,
    children,
    label,
    link,
  };
}

export const ItemsMenuSidebar = [
  getItem("Option 1", "1", "/", <WrapperIcon icon={<PieChartOutlined />} />),
  getItem("Option 2", "2", "/2", <WrapperIcon icon={<DesktopOutlined />} />),
  getItem("User", "sub1", undefined, <WrapperIcon icon={<UserOutlined />} />, [
    getItem("Tom", "3", "/3"),
    getItem("Bill", "4", "/4"),
    getItem("Alex", "5", "/5"),
  ]),
  getItem("Team", "sub2", undefined, <WrapperIcon icon={<TeamOutlined />} />, [
    getItem("Team 1", "6", "/6"),
    getItem("Team 2", "7", "/7"),
  ]),
  getItem("Files", "8", "/8", <WrapperIcon icon={<FileOutlined />} />),
];

export const Routes: Array<Router> = [
  { path: "/", component: <Option1 />, exact: true },
  { path: "/2", component: <Option2 />, exact: false },
  { path: "/3", component: <Option1 />, exact: false },
  { path: "/4", component: <Option2 />, exact: false },
  { path: "/5", component: <Option1 />, exact: false },
  { path: "/6", component: <Option2 />, exact: false },
  { path: "/7", component: <Option1 />, exact: false },
  { path: "/8", component: <Option2 />, exact: false },
];
