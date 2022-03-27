import { Spin } from "antd";
import React from "react";

const Loading = () => {
  return (
    <>
      <div className="example">
        <Spin size="large" />
      </div>
    </>
  );
};

export default Loading;
