"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.ButtonStyle = void 0;
var styled_components_1 = require("styled-components");
var antd_1 = require("antd");
exports.ButtonStyle = styled_components_1["default"](antd_1.Button)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  box-shadow: 0 2px 5px rgb(0 0 0 / 16%), 0 2px 10px rgb(0 0 0 / 12%);\n  border-radius: 4px;\n  border: none;\n  min-width: 80px;\n  font-size: 13px;\n  background-color: ", ";\n  color: ", ";\n  &:hover,\n  &:focus {\n    background-color: ", ";\n    color: ", ";\n  }\n"], ["\n  box-shadow: 0 2px 5px rgb(0 0 0 / 16%), 0 2px 10px rgb(0 0 0 / 12%);\n  border-radius: 4px;\n  border: none;\n  min-width: 80px;\n  font-size: 13px;\n  background-color: ",
    ";\n  color: ", ";\n  &:hover,\n  &:focus {\n    background-color: ",
    ";\n    color: ", ";\n  }\n"])), function (props) {
    return props.type === "primary" ? "#F44336" : "#FFF";
}, function (props) { return (props.type === "primary" ? "#FFF" : "#333"); }, function (props) {
    return props.type === "primary" ? "#F44336" : "#FFF";
}, function (props) { return (props.type === "primary" ? "#FFF" : "#333"); });
var templateObject_1;
