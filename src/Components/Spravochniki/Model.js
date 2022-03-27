import React, { useState } from "react";
import { Modal, Popconfirm, Table } from "antd";
import { useSelector } from "react-redux";
import { modelData } from "../Form/formData";
import AddModal from "../Modal/index";
import { newData } from "../Form/TableData";

function Model() {
  const columns = [
    {
      title: "#",
      dataIndex: "key",
    },
    {
      title: "Название",
      dataIndex: "nomi",
    },
    {
      title: "Фото",
      dataIndex: "img",
    },
  ];
  return (
    <>
      <AddModal
        title={"Моделъ"}
        titlemodal={"Detali"}
        form={modelData}
        columnsAll={modelData[0].columns}
        table={newData}
        width={800}
      />
      <div className="mt-3">
        <Table columns={columns} />
      </div>
    </>
  );
}

export default Model;
