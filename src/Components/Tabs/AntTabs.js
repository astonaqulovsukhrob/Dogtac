import React, { useState, useEffect } from "react";
import { Tabs, Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { tabsItem } from "../../Redux/Actions";
import { ClearOutlined } from "@ant-design/icons";
const { TabPane } = Tabs;

const AntTabs = () => {
  const Panes = useSelector((state) => state.allData?.tabs);
  const [panes, setPanes] = useState(Panes);
  const [activeKey, setActiveKey] = useState(panes && panes[0]?.key);
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    setData([...Panes]);
    setPanes(Panes);
  }, [Panes]);

  const onChange = (activeKey) => {
    navigate(Panes[activeKey].path);
    setActiveKey(activeKey);
  };

  const onEdit = (targetKey) => {
    data?.splice(targetKey, 1);
    dispatch(tabsItem(data));
    navigate("/spravochniki");
  };
  return (
    <>
      <Tabs hideAdd accessKey={activeKey} type="editable-card" onEdit={onEdit}>
        {Panes &&
          Panes?.map((item, i) => (
            <TabPane
              className=" mx-3"
              tab={
                <div onClick={() => onChange(i)}>
                  <span>{item?.text}</span>
                </div>
              }
              key={i}
            />
          ))}
      </Tabs>
    </>
  );
};

export default AntTabs;
