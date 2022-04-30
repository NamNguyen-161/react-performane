import React from "react";
import { Row, Col } from "antd";
import styled from "styled-components";

const ColItem = styled.div`
  border-radius: 10px;
  width: 100%;
  height: 100%;
  border: 1px solid gray;
  background-color: rgba(24, 144, 255, 0.6);
  margin: 10px 0;
`;

const Column = styled(Col)`
  min-height: 100px;
  padding: 10px 0;
`;

export interface BoxAdminProps {}

export default function BoxAdmin(props: BoxAdminProps) {
  return (
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
      <Column xs={24} lg={6} md={12}>
        <ColItem>1</ColItem>
      </Column>
      <Column xs={24} lg={6} md={12}>
        <ColItem>1</ColItem>
      </Column>
      <Column xs={24} lg={6} md={12}>
        <ColItem>1</ColItem>
      </Column>
      <Column xs={24} lg={6} md={12}>
        <ColItem>1</ColItem>
      </Column>
    </Row>
  );
}
