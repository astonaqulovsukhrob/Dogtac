import React, { useState, useEffect } from "react";
import { Modal, Button, Popconfirm } from "antd";
import { useSelector } from "react-redux";
import FormItem from "../Form/index";
import { useDispatch } from "react-redux";
import data from "../Tabs/DataTabs";

const AddModal = ({
  form,
  title,
  id,
  columnsAll,
  columnsAll2,
  Visible,
  stil,
  tableData,
  width,
  table,
  titlemodal,
  button,
}) => {
  const [isModal, setIsModal] = useState(false);
  const dispatch = useDispatch();

  const showModal = () => {
    setIsModal(true);
  };

  const editModal = () => {
    setIsModal(true);
  };

  const handleOk = () => {
    setIsModal(false);
  };

  const handleCancel = () => {
    setIsModal(false);
  };

  const handleDelete = () => {
    dispatch({ type: "delete-table", payload: id });
  };

  return (
    <>
      <button className="btn btn-dark mt-1" onClick={showModal}>
        <i class="bi bi-plus-lg"></i> Добавитъ
      </button>
      <button className="btn btn-warning mx-2 mt-1" onClick={editModal}>
        <i class="bi bi-pencil mx-2 "></i> Изменить
      </button>
      <button className="btn btn-danger mx-2 mt-1" type="danger">
        <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete()}>
          <i class="bi bi-trash"></i> Удалитъ
        </Popconfirm>
      </button>
      <Modal
        title={title}
        visible={isModal}
        onOk={handleOk}
        onCancel={handleCancel}
        width={width ? width : 1000}
        style={{ marginTop: -40 }}
        footer=""
      >
        <FormItem
          form={form[0]}
          title={title}
          setIsModal={setIsModal}
          columnsAll={columnsAll}
          columnsAll2={columnsAll2}
          tableData={tableData}
          titlemodal={titlemodal}
          table={table}
          Visible={Visible}
          button={button}
          stil={stil}
        />
      </Modal>
    </>
  );
};

export default AddModal;
