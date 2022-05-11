import { Avatar, Divider, Typography } from "antd";
import styled, { css } from "styled-components";
import { EModeTheme } from "../../styles";

const { Text } = Typography;

export const WrapperIconSidebar = styled.div`
  min-width: 35px;
  margin-right: 20px;
  padding: 0 10px;
  border-radius: 9px;
  ${(props) =>
    EModeTheme[props.theme] === "light"
      ? css`
          background: #e0e0e0;
          box-shadow: 5px 5px 10px #bebebe, -5px -5px 10px #ffffff;
        `
      : css`
          background: #441d5d;
          box-shadow: 5px 5px 10px #3a194f, -5px -5px 10px #4e216b;
        `}
`;

export const Logo = styled.div`
  width: 100%;
  height: 70px;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AvatarCustom = styled(Avatar)`
  cursor: pointer;
`;

export const TextUserName = styled(Text)`
  transition: all 0.2s;
  font-weight: 700;
  font-size: 20px;
  margin-left: 10px;
  ${(props) =>
    EModeTheme[props.theme] === "dark" &&
    css`
      color: white;
    `};
`;

export const DividerCustom = styled(Divider)`
  margin: 0px;
  padding-bottom: 16px;
  ${(props) =>
    EModeTheme[props.theme] === "dark" &&
    css`
      border-top: 1px solid white !important;
    `};
`;
