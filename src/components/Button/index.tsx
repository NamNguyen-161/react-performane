import styled from "styled-components";
import { Button } from "antd";
export const ButtonStyle = styled(Button)`
  box-shadow: 0 2px 5px rgb(0 0 0 / 16%), 0 2px 10px rgb(0 0 0 / 12%);
  border-radius: 4px;
  border: none;
  min-width: 80px;
  font-size: 14px;
  /**
    background-color: ${(props) =>
    props.type === "primary" ? "#F44336" : "#FFF"};
    color: ${(props) => (props.type === "primary" ? "#FFF" : "#333")};
    &:hover,
    &:focus {
    background-color: ${(props) =>
    props.type === "primary" ? "#F44336" : "#FFF"};
    color: ${(props) => (props.type === "primary" ? "#FFF" : "#333")};
    }
   */
`;
