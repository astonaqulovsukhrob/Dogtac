import React from "react";
import { Checkbox, DatePicker, Input, Select } from "antd";
import {
  NUMBER,
  SELECT,
  STRING,
  UPLOAD,
  DATE,
  KOMMENT,
  CHECKBOX,
} from "./CaseData";
import { UploadOutlined } from "@ant-design/icons";
const { Option } = Select;

function ModalForm({ type, item, handleChange, name, UpLoad, stil }) {
  let input = null;
  switch (type) {
    case STRING:
      input = (
        <>
          <span>{item.text}</span>
          <Input name={name} onChange={(e) => handleChange(e)} type={"text"} />
        </>
      );
      break;
    case NUMBER:
      input = (
        <>
          <span>{item.text}</span>
          <Input
            name={name}
            onChange={(e) => handleChange(e)}
            type={"number"}
          />
        </>
      );
      break;
    case SELECT:
      input = (
        <div className={stil} style={{ marginTop: 2 }}>
          <span>{item.text}</span>
          <label>{item.label}</label>
          <Select
            style={{ display: "inline-block" }}
            type={"text"}
            onChange={(e) => handleChange(e)}
            placeholder={item.select}
            allowClear
          >
            {item?.selectVe.map((item) => (
              <Option value={item.value}>{item.text}</Option>
            ))}
          </Select>
        </div>
      );
      break;
    case UPLOAD:
      input = (
        <>
          <span>{item.text}</span>
          <span></span>

          <label for="files" className="inputt">
            Rasim yuklash
          </label>
          <input
            id="files"
            style={{ visibility: "hidden" }}
            type="file"
          ></input>
        </>
      );
      break;
    case DATE:
      input = (
        <div>
          <label>Date:</label>
          <DatePicker />
        </div>
      );
      break;
    case KOMMENT:
      input = (
        <div className="d-flex align-items-center">
          <label>{item.text}</label>
          <Input />
        </div>
      );
      break;
    case CHECKBOX:
      input = (
        <>
          <span className="me-1">{item.text}</span>
          <Checkbox />
        </>
      );
      break;
    default:
      break;
  }
  return input;
}

export default ModalForm;
