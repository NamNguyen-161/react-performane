import React, { useEffect, useState } from "react";
import {
  Button,
  Input,
  Table,
  Typography,
  Form,
  InputNumber,
  notification,
  Checkbox,
} from "antd";
import { io } from "socket.io-client";

const socket = io("http://localhost:8080");

type typeNotification = "success" | "error";

const { Text } = Typography;

export interface IFinanceProps {}

export default function Finance(props: IFinanceProps) {
  const [form] = Form.useForm();

  const [symbol, set_symbol] = useState<string>("");
  const [loading, set_loading] = useState<{
    symbol: boolean;
    detail: boolean;
    submit: boolean;
  }>({ symbol: false, detail: false, submit: false });
  const [target, setTarget] = useState<string>("");
  const [dataSymbol, set_dataSymbol] = useState<any[]>([]);
  const [detailSymbol, set_detailSymbol] = useState<any[]>();
  const [service, set_service] = useState();

  //socket
  useEffect(() => {
    socket.on("service", (data) => {
      set_service(data);
    });
  });

  const onSubmitSymbol = async () => {
    form.resetFields();
    if (symbol !== "") {
      set_loading({ ...loading, symbol: true });
      await fetch(`http://localhost:8080/symbol?keywords=${symbol}`)
        .then((response) => response.json())
        .then((data) => set_dataSymbol(data.bestMatches))
        .catch((error) => {
          set_detailSymbol([]);
          set_loading({ ...loading, symbol: false });
          openNotification("error", error.message);
          return;
        });
      set_loading({ ...loading, symbol: false });
    } else {
      set_detailSymbol([]);
      openNotification("error", "Symbol is require");
    }
  };
  const getDetailSymbol = async (value: string) => {
    form.resetFields();
    if (value !== "") {
      setTarget(value);
      set_loading({ ...loading, detail: true });
      await fetch(`http://localhost:8080/symbol/${value}`)
        .then((response) => response.json())
        .then((data) =>
          set_detailSymbol([Object.values(data["Time Series (1min)"])[1]])
        )
        .catch((error) => {
          set_detailSymbol([]);
          set_loading({ ...loading, detail: false });
          openNotification("error", error.message);
          return;
        });
      set_loading({ ...loading, detail: false });
    }
  };

  const onFinish = async (values: any) => {
    if (values.takeProfit <= values.stopLoss) {
      openNotification("error", "Take profit must greater than stop loss");
      return;
    }
    const data = {
      symbol: target,
      tp: values.takeProfit,
      sl: values.stopLoss,
      to: values.email,
    };
    set_loading({ ...loading, submit: true });
    await fetch("http://localhost:8080/finance-reminder-application", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        set_loading({ ...loading, submit: false });

        openNotification("success", "");
        console.log("Success:", data);
      })
      .catch((error) => {
        set_loading({ ...loading, submit: false });
        openNotification("error", error.message);
      });
  };

  const onFinishFailed = (errorInfo: any) => {
    openNotification("error", errorInfo);
  };

  const openNotification = (type: typeNotification, msg: string) => {
    notification[type]({
      message: `${type}`,
      description: msg,
    });
  };

  const columns = [
    {
      title: "Symbol",
      dataIndex: "1. symbol",
      key: "symbol",
    },
    {
      title: "Name",
      dataIndex: "2. name",
      key: "name",
    },
    {
      title: "Region",
      dataIndex: "4. region",
      key: "region",
    },
    {
      title: "Currency",
      dataIndex: "8. currency",
      key: "currency",
    },
  ];

  const columnDetail = [
    {
      title: "Open",
      dataIndex: "1. open",
      key: "open",
    },
    {
      title: "High",
      dataIndex: "2. high",
      key: "high",
    },
    {
      title: "Low",
      dataIndex: "3. low",
      key: "low",
    },
    {
      title: "Close",
      dataIndex: "4. close",
      key: "close",
    },
    {
      title: "Volume",
      dataIndex: "5. volume",
      key: "volume",
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <Text style={{ paddingRight: "20px" }}>Symbol</Text>
      <Input
        style={{ width: "200px", marginRight: "20px" }}
        value={symbol}
        onChange={(e) => set_symbol(e.target.value)}
      />
      <Button onClick={onSubmitSymbol}>Submit</Button>
      <br />
      <br />
      <Table
        dataSource={dataSymbol}
        columns={columns}
        pagination={false}
        onRow={(item) => ({
          onClick: () => getDetailSymbol(item["1. symbol"]),
        })}
        loading={loading.symbol}
      />
      <br />
      <br />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Table
          dataSource={detailSymbol}
          columns={columnDetail}
          pagination={false}
          loading={loading.detail}
          style={{ marginRight: "50px" }}
        />
        {target && (
          <Form
            form={form}
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            autoComplete="off"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label="Take profit"
              name="takeProfit"
              rules={[{ required: true }]}
            >
              <InputNumber style={{ marginLeft: "80px" }} />
            </Form.Item>

            <Form.Item
              label="Stop loss"
              name="stopLoss"
              rules={[{ required: true }]}
            >
              <InputNumber style={{ marginLeft: "80px" }} />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  type: "email",
                  message: "Input is not valid E-mail!",
                },
              ]}
            >
              <Input style={{ marginLeft: "80px" }} />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button loading={loading.submit} type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        )}
      </div>
      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <Checkbox checked={service === "email" ? true : false}>Email</Checkbox>
        <Checkbox checked={service === "telegram" ? true : false}>
          Telegram
        </Checkbox>
      </div>
    </div>
  );
}
