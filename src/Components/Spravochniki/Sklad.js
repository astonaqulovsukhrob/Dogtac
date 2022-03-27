import React from "react";
import { Table } from "antd";
import { useSelector } from "react-redux";
import { skladData } from "../Form/formData";
import AddModal from "../Modal/index";

function Sklad() {

  const columns = [
    {
      title: "#",
      dataIndex: "key",
    },
    {
      title: "Название",
      dataIndex: "nomi",
    },
  ];
  return (
    <div className="main">
      <AddModal form={skladData} title={"Склад"} width={450}/>
      <div className="mt-3">
        <Table columns={columns} />
      </div>
    </div>
  );
}

export default Sklad;
