import { Table } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { komplektData } from "../Form/formData";
import { newData } from "../Form/TableData";
import AddModal from "../Modal";

function Komplekt() {
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
      title: "Цена",
      dataIndex: "price",
    },
    {
      title: "Фото",
      dataIndex: "img",
      render: (img) => <img className="teble-img" src={img} alt="" />,
    },
  ];
  return (
    <>
      <AddModal
        title={"Комплект"}
        titlemodal={"Modeli"}
        form={komplektData}
        columnsAll={komplektData[0].columns}
        table={newData}
      />
      <div className="mt-3">
        <Table columns={columns} />
      </div>
    </>
  );
}

export default Komplekt;
