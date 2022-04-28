"use strict";
exports.__esModule = true;
exports.ItemsMenuSidebar = void 0;
var icons_1 = require("@ant-design/icons");
var Option1_1 = require("../../containers/Option1");
var Option2_1 = require("../../containers/Option2");
function getItem(label, key, link, component, icon, children, exact) {
    return {
        key: key,
        icon: icon,
        children: children,
        label: label,
        link: link,
        exact: exact,
        component: component
    };
}
exports.ItemsMenuSidebar = [
    getItem("Option 1", "1", "/", React.createElement(Option1_1["default"], null), React.createElement(icons_1.PieChartOutlined, null), undefined, true),
    getItem("Option 2", "2", "/2", React.createElement(Option2_1["default"], null), React.createElement(icons_1.DesktopOutlined, null)),
    getItem("User", "sub1", "/3", React.createElement(Option1_1["default"], null), React.createElement(icons_1.UserOutlined, null), [
        getItem("Tom", "3", "/3", React.createElement(Option1_1["default"], null)),
        getItem("Bill", "4", "/4", React.createElement(Option2_1["default"], null)),
        getItem("Alex", "5", "/5", React.createElement(Option1_1["default"], null)),
    ], false),
    getItem("Team", "sub2", "/6", React.createElement(Option2_1["default"], null), React.createElement(icons_1.TeamOutlined, null), [
        getItem("Team 1", "6", "/6", React.createElement(Option1_1["default"], null)),
        getItem("Team 2", "7", "/7", React.createElement(Option2_1["default"], null)),
    ], false),
    getItem("Files", "8", "/8", React.createElement(Option2_1["default"], null), React.createElement(icons_1.FileOutlined, null)),
];
