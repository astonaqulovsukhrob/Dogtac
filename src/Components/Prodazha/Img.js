import React from "react";
import { Upload, Modal, Form, Input } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import Img2 from "./Img2";

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

class Img extends React.Component {
  state = {
    previewVisible: false,
    previewImage: "",
    previewTitle: "",
    fileList: [],
  };

  handleCancel = () => this.setState({ previewVisible: false });

  handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    this.setState({
      previewImage: file.url || file.preview,
      previewVisible: true,
      previewTitle:
        file.name || file.url.substring(file.url.lastIndexOf("/") + 1),
    });
  };

  handleChange = ({ fileList }) => this.setState({ fileList });

  render() {
    const { previewVisible, previewImage, fileList, previewTitle } = this.state;
    const uploadButton = (
      <div>
        <PlusOutlined />
        <div style={{ marginTop: 8 }}>Upload</div>
      </div>
    );
    return (
      <div className="prodaja-modal">
        <div>
          <div className="d-flex align-items-center gap-1">
            <h6>Комплект</h6>
            <Input type={"text"} placeholder="поиск" style={{ width: 180 }} />
          </div>
          <Upload
            className="mt-2"
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            listType="picture-card"
            fileList={fileList}
            onPreview={this.handlePreview}
            onChange={this.handleChange}
          >
            {fileList.length >= 8 ? null : uploadButton}
          </Upload>
          <Modal
            visible={previewVisible}
            title={previewTitle}
            footer={null}
            onCancel={this.handleCancel}
            width={400}
          >
            <img alt="example" style={{ width: "100%" }} src={previewImage} />

            <div className="modal-border">
              <div className="modal-border-button">
                <div className="span">
                  <span>+</span>
                  <span>1</span>
                  <span>-</span>
                </div>
              </div>
              <div className="mt-2 text-center p-1">
                <button className="btn nazat">Назат</button>
                <button className="btn btn-dark mx-2">Сохранит</button>
              </div>
            </div>
          </Modal>
        </div>
        <div className="prodaja-hr">
          <hr />
        </div>
        <div className="prodaja-modal_content">
          <Img2 />
        </div>
      </div>
    );
  }
}

export default Img;
