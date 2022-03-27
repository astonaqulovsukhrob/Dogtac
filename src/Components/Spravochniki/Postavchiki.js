import React, { useState } from "react";
import { Modal, Popconfirm, Table } from "antd";
import { useSelector } from "react-redux";
import { postavchikData } from "../Form/formData";
import FormItem from "../Form/index";
import AddModal from "../Modal";



function Postavchiki() {
const columns = [
  {
    title: "#",
    dataIndex: "key",
  },
  {
    title: "Наименование",
    dataIndex: "nomi",
  },
  {
    title: "Телефон номер 1",
    dataIndex: "phone1",
  },
  {
    title: "Телефон номер 2",
    dataIndex: "phone2",
  },
  {
    title: "Электронная почта",
    dataIndex: "email",
  },
  {
    title: "Адрес",
    dataIndex: "aders",
  },
];
  return (
    <>
      <AddModal form={postavchikData} title={"Поставщики"} />
      <div className="mt-3">
        <Table columns={columns}  />
      </div>
    </>
  );
}

export default Postavchiki;
