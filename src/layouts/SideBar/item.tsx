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

interface ISubMenu {
  label: React.ReactNode;
  key: React.Key;
  link: string;
  component: JSX.Element;
  icon?: React.ReactNode;
  children?: ISubMenu[];
  exact?: boolean;
}

function getItem(
  label: React.ReactNode,
  key: React.Key,
  link: string,
  component: JSX.Element,
  icon?: React.ReactNode,
  children?: ISubMenu[],
  exact?: boolean
) {
  return {
    key,
    icon,
    children,
    label,
    link,
    exact,
    component,
  };
}

export const ItemsMenuSidebar = [
  getItem(
    "Option 1",
    "1",
    "/",
    <Option1 />,
    <WrapperIcon icon={<PieChartOutlined />} />,
    undefined,
    true
  ),
  getItem(
    "Option 2",
    "2",
    "/2",
    <Option2 />,
    <WrapperIcon icon={<DesktopOutlined />} />
  ),
  getItem(
    "User",
    "sub1",
    "/3",
    <Option1 />,
    <WrapperIcon icon={<UserOutlined />} />,
    [
      getItem("Tom", "3", "/3", <Option1 />),
      getItem("Bill", "4", "/4", <Option2 />),
      getItem("Alex", "5", "/5", <Option1 />),
    ],
    false
  ),
  getItem(
    "Team",
    "sub2",
    "/6",
    <Option2 />,
    <WrapperIcon icon={<TeamOutlined />} />,
    [
      getItem("Team 1", "6", "/6", <Option1 />),
      getItem("Team 2", "7", "/7", <Option2 />),
    ],
    false
  ),
  getItem(
    "Files",
    "8",
    "/8",
    <Option2 />,
    <WrapperIcon icon={<FileOutlined />} />
  ),
];
