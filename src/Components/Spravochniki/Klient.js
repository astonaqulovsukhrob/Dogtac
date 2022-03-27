import React, { useState } from "react";
import { Modal, Popconfirm, Table } from "antd";
import { useSelector } from "react-redux";
import { klientData } from "../Form/formData";
import AddModal from "../Modal/index";

function Klient() {
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
      title: "Дата рождения",
      dataIndex: "tug_sana",
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
    {
      title: "Социалъные сети",
      dataIndex: "select",
    },
  ];
  return (
    <div className="spravochniki">
      <AddModal form={klientData} title={"Клиенты"} stil={"select"} />
      <div className="mt-3">
        <Table columns={columns} />
      </div>
    </div>
  );
}

export default Klient;
