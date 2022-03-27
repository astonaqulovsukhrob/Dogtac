import React from "react";
import { Table } from "antd";
import { useSelector } from "react-redux";
import { SatsialniData } from "../Form/formData";
import AddModal from "../Modal/index";

function SatsialniSet() {
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
    <>
      <AddModal  form={SatsialniData} title={"Социалъные сети"} width={450} />
      <div className="mt-3">
        <Table columns={columns} />
      </div>
    </>
  );
}

export default SatsialniSet;
