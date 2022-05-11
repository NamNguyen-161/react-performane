import React, { useEffect, useState } from "react";
import { Row, Col, DatePicker } from "antd";
import BoxAdmin from "./Box";
import LineChart from "./Line";

export interface Option1Props {}

export default function Option1(props: Option1Props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch(
      "https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json"
    )
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log("fetch data failed", error);
      });
  };
  return (
    <div>
      <BoxAdmin />
      <Row gutter={[16, 16]} style={{ background: "white", marginTop: 20 }}>
        <Col span={18}>
          <LineChart data={data} />
        </Col>
        <Col span={6}>
          <DatePicker />
        </Col>
      </Row>
    </div>
  );
}
