import { Form, Input, Table } from "antd";
import React from "react";
import { bronData } from "../Form/formData";
import AddModal from "../Modal";

function Brony() {
  const columns = [
    {
      title: "#",
      dataIndex: "key",
    },

    {
      title: "Data",
      dataIndex: "data",
    },
    {
      title: "Klient",
      dataIndex: "klient",
    },
    {
      title: "Sklad",
      dataIndex: "sklad",
    },
    {
      title: "Kol-ov komplektov",
      dataIndex: "kol-ov_komplektov",
    },
    {
      title: "Kol-ov madelov",
      dataIndex: "kol-ov_madelov",
    },
    {
      title: "Kommentarii",
      dataIndex: "kommentarii",
    },
  ];

  const newData = [
    {
      title: "№",
      dataIndex: "key",
      render: (key, text, index) => ++index,
    },
    {
      title: "Komplekt",
      dataIndex: "name",
      render: () => (
        <Form.Item>
          <Input type={"text"} />
        </Form.Item>
      ),
    },
    {
      title: "Ostatka",
      dataIndex: "ostatka",
      render: () => (
        <Form.Item>
          <Input type={"text"} />
        </Form.Item>
      ),
    },
    {
      title: "Kol-ov",
      dataIndex: "kolOv",
      render: () => (
        <Form.Item>
          <Input type={"text"} />
        </Form.Item>
      ),
    },
    {
      title: "Foto",
      dataIndex: "foto",
      render: () => (
        <Form.Item>
          <Input type={"file"} />
        </Form.Item>
      ),
    },
  ];

  const newData2 = [
    {
      title: "№",
      dataIndex: "key",
    },
    {
      title: "Model",
      dataIndex: "name",
    },
    {
      title: "Ostatka",
      dataIndex: "ostatka",
    },
    {
      title: "Kol-ov",
      dataIndex: "kol-ov",
    },
    {
      title: "Foto",
      dataIndex: "foto",
    },
  ];

  return (
    <>
      <AddModal
        title={"Бронъ"}
        stil={"stil"}
        width={1400}
        form={bronData}
        columnsAll={newData}
        columnsAll2={newData2}
        button={true}
      />
      <div className="mt-2">
        <Table columns={columns} />
      </div>
    </>
  );
}

export default Brony;
