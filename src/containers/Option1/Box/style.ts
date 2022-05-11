import { Col } from "antd";
import styled from "styled-components";

export const ColItem = styled.div`
  border-radius: 10px;
  width: 100%;
  height: 100%;
  border: 1px solid gray;
  background-color: rgba(24, 144, 255, 0.6);
  margin: 10px 0;
`;

export const Column = styled(Col)`
  min-height: 100px;
  padding: 10px 0;
`;
