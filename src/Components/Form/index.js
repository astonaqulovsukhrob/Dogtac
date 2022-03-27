import React, { useEffect, useState } from "react";
import { Col, Form, Input, Modal, Row, Table, Tabs } from "antd";
import ModalForm from "./ModalForm";
import { useDispatch, useSelector } from "react-redux";
import { tableValues } from "../../Redux/Actions";
import Img from "../Prodazha/Img";
import SwitchTable from "./SwitchTable";

const FormItem = ({
  setIsModal,
  form,
  columnsAll,
  columnsAll2,
  Visible,
  stil,
  table,
  titlemodal,
  button,
}) => {
  const [isModalVisible, setisModalVisible] = useState(false);
  const values = useSelector((state) => state.allData?.tableValues);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(tableValues([]));
  }, []);

  const handleAdd = () => {
    dispatch(tableValues([...values, table]));
    if (Visible) {
      setisModalVisible(true);
    }
  };

  const handleChange = (e) => {};

  const handleSubmit = () => {
    setIsModal(false);
  };

  const handleOk = () => {
    setisModalVisible(false);
  };

  const handleCancel = () => {
    setisModalVisible(false);
  };

  const Upload = (e) => {
    //  const reader = new FileReader();
    //   reader.onload = () => {
    //     if (reader.readyState === 2) {
    //       reader.result
    //     }
    //   };
    //   reader.readAsDataURL(e.target.files[0]);
  };

  const handleNazat = () => {
    setIsModal(false);
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 2 }}
      wrapperCol={{ span: 45 }}
      autoComplete="off"
      className="form-item"
    >
      <div className="form">
        {form?.form.map((item, i) => (
          <Form.Item
            style={{
              gridColumn: item.gridColmun,
              gridRow: item.gridRow,
            }}
          >
            <ModalForm
              type={item.type}
              item={item}
              name={item.name}
              handleChange={handleChange}
              Upload={Upload}
              stil={stil}
            />
          </Form.Item>
        ))}
      </div>

      <div className="mt-3 modaltable">
        <div>
          {columnsAll ? (
            <>
              <h6>{titlemodal}</h6>
              <button className="btn btn-dark" onClick={handleAdd}>
                <i class="bi bi-plus-circle"></i>
              </button>
              <button className="btn btn-danger mx-1">
                <i class="bi bi-trash"></i>
              </button>
            </>
          ) : null}
        </div>
        <div className="d-flex gap-2 mt-2 tableModal">
          {columnsAll ? (
            <Table
              columns={columnsAll}
              pagination={{ pageSize: 20 }}
              dataSource={table ? values : null}
              footer={() => "Vsego"}
            />
          ) : null}
          {columnsAll2 ? (
            <Table
              columns={columnsAll2}
              dataSource={table ? values : null}
              footer={() => "Vsego"}
            />
          ) : null}
        </div>
      </div>

      <div className="mt-4 text-center">
        <button
          htmlType="submit"
          className="btn btn-outline-danger mx-2"
          onClick={handleNazat}
        >
          Назат
        </button>

        <button
          htmlType="submit"
          onClick={handleSubmit}
          className="btn btn-dark mx-2"
        >
          Сохранит
        </button>
        {button ? (
          <button
            htmlType="submit"
            onClick={handleSubmit}
            className="btn btn-primary mx-2"
          >
            Сохранит и закрытъ
          </button>
        ) : null}
      </div>
      <div className="prodaja">
        <Modal
          title="Продажа"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          footer=""
          width={1200}
          style={{ marginTop: -80 }}
        >
          <Img />
        </Modal>
      </div>
    </Form>
  );
};

export default FormItem;
