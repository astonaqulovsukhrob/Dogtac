import { Table } from "antd";
import React from "react";
import { sotrudnikiData } from "../Form/formData";
import AddModal from "../Modal";

function Sotrudniki() {
  const columns = [
    {
      title: "#",
      dataIndex: "key",
    },

    {
      title: "Nezvanie",
      dataIndex: "nezvanie",
    },
    {
      title: "Login",
      dataIndex: "login",
    },
    {
      title: "Parol",
      dataIndex: "parol",
    },
    {
      title: "Sklad",
      dataIndex: "sklad",
    },
    {
      title: "Dostup",
      dataIndex: "dostup",
    },
  ];
  return (
    <>
      <AddModal title={"Сотрудники"} form={sotrudnikiData} button={true}/>
      <div className="mt-2">
        <Table columns={columns} />
      </div>
    </>
  );
}

export default Sotrudniki;
