import React from "react";
import { Row } from "antd";
import { ColItem, Column } from "./style";

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
