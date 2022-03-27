import React from "react";
import { Table, From, Input, Form } from "antd";
import { skladDetali } from "../Form/formData";
import { newData } from "../Form/TableData";
import AddModal from "../Modal/index";

function SkladDetali() {
  const columns = [
    {
      title: "#",
      dataIndex: "key",
    },
    {
      title: "Dokument",
      dataIndex: "name",
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
      title: "Name",
      dataIndex: "name",
      render: () => (
        <Form.Item>
          <Input
            onChange={(e) => console.log(e.target.value)}
            name="nomi"
            type={"text"}
          />
        </Form.Item>
      ),
    },
    {
      title: "Shtrix",
      dataIndex: "shtrix",
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
        title={"Поступ.детали"}
        stil={"stil"}
        columnsAll={newData}
        form={skladDetali}
        width={850}
        table={newData}
        button={true}
      />
      <div className="mt-2">
        <Table columns={columns} />
      </div>
    </>
  );
}

export default SkladDetali;
