import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { useSelector } from "react-redux";
import { detalData } from "../Form/formData";
import AddModal from "../Modal/index";

function Detal() {
  const store = useSelector((state) => state?.dataTable);
  const [rowId, setRowId] = useState("");
  const [innerTable] = useState(false);
  const [id, setId] = useState();

  const columns = [
    {
      title: "#",
      dataIndex: "nomi",
      render: (id, text, key) => ++key,
    },
    {
      title: "Название",
      dataIndex: "nomi",
    },
    {
      title: "Штрих код",
      dataIndex: "shtrix_kod",
    },
    {
      title: "Фото",
      dataIndex: "img",
      // render: (img) => <img className="teble-img" src={img} alt="" />,
    },
  ];

  const onClickRow = (record) => {
    return {
      onClick: () => {
        if (!innerTable) {
          setRowId(record.id);
        }
        setId(record.id);
      },
    };
  };

  const setRowClassName = (record) => {
    return record.id === rowId ? "blue" : "";
  };
  return (
    <>
      <AddModal title={"Детлъ"} form={detalData} id={id} />
      <div className="mt-3">
        <Table
          onRow={onClickRow}
          rowClassName={setRowClassName}
          columns={columns}
          dataSource={store}
        />
      </div>
    </>
  );
}

export default Detal;
