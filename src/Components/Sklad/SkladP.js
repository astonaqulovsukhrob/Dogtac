import { Form, Input, Table } from "antd";
import React from "react";
import { peremeshenieData } from "../Form/formData";
import { newData } from "../Form/TableData";
import AddModal from "../Modal";

function SkladP() {
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
      title: "Skladdan",
      dataIndex: "skladdan",
    },
    {
      title: "Skladga",
      dataIndex: "sklad",
    },
    {
      title: "Kol-bo",
      dataIndex: "kol-bo",
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
  const newData2 = [
    {
      title: "№",
      dataIndex: "key",
      render: (key, text, index) => ++index,
    },
    {
      title: "Model",
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
      dataIndex: "kol-ov",
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
        title={"Перемешение"}
        stil={"stil"}
        width={1400}
        form={peremeshenieData}
        columnsAll={newData}
        columnsAll2={newData2}
        table={newData}
        button={true}
      />
      <div className="mt-2">
        <Table columns={columns} />
      </div>
    </>
  );
}

export default SkladP;
