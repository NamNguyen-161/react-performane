import styled, { css } from "styled-components";
import { Layout } from "antd";
import { EModeTheme } from "../../styles";

const { Header } = Layout;

export const HeaderContainer = styled(Header)`
  height: 70px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 16px;
  ${(props) =>
    EModeTheme[props.theme] === "light"
      ? css`
          background: white;
        `
      : css`
          background: #001529;
        `}
`;
