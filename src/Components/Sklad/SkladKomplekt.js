import { Form, Input, Table } from "antd";
import React from "react";
import { skladKomplekt } from "../Form/formData";
import { newData } from "../Form/TableData";
import AddModal from "../Modal/index";

function SkladKomplekt() {
  const columns = [
    {
      title: "#",
      dataIndex: "key",
    },
    {
      title: "Dokument",
      dataIndex: "dokument",
    },
    {
      title: "Data",
      dataIndex: "data",
    },
    {
      title: "Postavshik",
      dataIndex: "postavshik",
    },
    {
      title: "Sklad",
      dataIndex: "sklad",
    },
    {
      title: "Kommentarii",
      dataIndex: "sklad",
    },
    {
      title: "Vsego",
      dataIndex: "vsego",
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
        <Form.Item name={"img"}>
          <label for="files" className="inputt">
            Rasim yuklash
          </label>
          <Input
            id="files"
            style={{ visibility: "hidden" }}
            type="file"
          ></Input>
        </Form.Item>
      ),
    },
  ];

  return (
    <>
      <AddModal
        title={"Поступ.комплект"}
        stil={"stil"}
        width={850}
        form={skladKomplekt}
        columnsAll={newData}
        table={newData}
        button={true}
      />
      <div className="mt-2">
        <Table columns={columns} />
      </div>
    </>
  );
}

export default SkladKomplekt;
